// Define custom YAML types
const includeType = new jsyaml.Type('!include', {
  kind: 'scalar',
  construct: function(data) {
    return data;
  }
});

const secretType = new jsyaml.Type('!secret', {
  kind: 'scalar',
  construct: function(data) {
    return data;
  }
});

// Create schema with custom types
const CUSTOM_SCHEMA = jsyaml.DEFAULT_SCHEMA.extend([includeType, secretType]);

/**
 * Validates a YAML string for specific conditions
 * @param {string} yamlString - The YAML string to validate
 * @returns {Object} Object containing validation flags
 */
export function validateYaml(yamlString) {
  let errors = [];

  try {
    // Parse YAML with custom schema
    const doc = jsyaml.load(yamlString, { schema: CUSTOM_SCHEMA });

    // Check for !include usage by searching the raw string
    if (yamlString.includes('!include'))
      errors.push('!include tags are not allowed');
    if (!doc)
      return errors;
    if (!('esphome' in doc))
      errors.push('ESPHome configuration block is required');
    if('external_components' in doc)
      errors.push('external_components are not allowed');

    // Validate wifi configuration if present
    if ('wifi' in doc) {
      const wifi = doc.wifi;

      // Check if wifi contains only ssid and password
      const wifiKeys = Object.keys(wifi || {});
      const hasValidKeys = wifiKeys.length === 2 &&
          wifiKeys.includes('ssid') &&
          wifiKeys.includes('password');

      // Check if both ssid and password use !secret
      const rawWifiSection = yamlString
          .substring(yamlString.indexOf('wifi:'))
          .split('\n')
          .filter(line => line.includes('wifi:') ||
              line.includes('ssid:') ||
              line.includes('password:'))
          .join('\n');

      const hasSecretTags = rawWifiSection.includes('!secret') &&
          (rawWifiSection.match(/!secret/g) || []).length === 2;

      if (!hasValidKeys || !hasSecretTags)
        errors.push('wifi configuration must only contain ssid and password with !secret values');
    }


  } catch (error) {
    errors.push('YAML parse error: ' + error.message);
  }

  return errors;
}
