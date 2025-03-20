import {validateYaml} from './yaml-validator.js';

class DeviceEditor {
    constructor() {
        // Initialize form elements
        this.form = document.getElementById('deviceForm');
        this.chipTypeSelect = document.getElementById('chipType');
        this.difficultyRatingSelect = document.getElementById('difficultyRating');

        // Initialize electrical standards system
        this.selectedElectricalStandards = new Set();
        this.selectedElectricalStandardsContainer = document.getElementById('selectedElectricalStandards');
        this.electricalStandardsHidden = document.getElementById('electricalStandardsHidden');
        this.electricalStandardAdd = document.getElementById('electricalStandardAdd');
        this.tagAdd = document.getElementById('tagAdd');
        this.tagsRequired = document.getElementById('tagsRequired');
        this.yamlCode = document.getElementById('yamlCode');
        this.uploadYamlFile = document.getElementById('uploadYamlFile');

        this.availableElectricalStandards = [
            {code: 'AU', name: 'Australia (AU)'},
            {code: 'BR', name: 'Brazil (BR)'},
            {code: 'EU', name: 'European Union (EU)'},
            {code: 'Global', name: 'Global'},
            {code: 'US', name: 'United States (US)'},
            {code: 'UK', name: 'United Kingdom (UK)'},
            {code: 'IN', name: 'India (IN)'}
        ];

        this.availableTags = [
            'plug',
            'socket',
            'display',
            'wifi',
            'ethernet',
            'battery',
            'sensor',
            'light',
            'switch',
            'relay',
            'climate',
            'cover',
            'fan',
            'camera',
            'audio',
            'security',
            'automation',
            'development',
            'touchscreen'
        ];
        const infoButtons = [
            'boardName', 'slug', 'description', 'chipType',
            'difficultyRating', 'productLink', 'madeForESPHome',
            'yamlCode', 'images', 'gpioPins', 'electricalStandard',
            'electricalInput', 'tags',
        ];

        this.addToggler = (button, popup) => {
            // Toggle popup on icon click
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                // Close all other popups first
                infoButtons.forEach(otherId => {
                    const oid = `${otherId}InfoPopup`;
                    if (oid !== popup.id) {
                        const otherPopup = document.getElementById(oid);
                        if (otherPopup) otherPopup.style.display = 'none';
                    }
                });
                // Toggle this popup
                popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
            });

            // Close popup when clicking outside
            document.addEventListener('click', (e) => {
                if (!popup.contains(e.target) && e.target !== button) {
                    popup.style.display = 'none';
                }
            });
        }


        // Initialize electrical standards info popup
        const electricalInputInfoPopup = document.getElementById('electricalInputInfoPopup');
        const electricalStandardAdd = document.getElementById('electricalStandardAdd');

        // Create a map to store electrical standard elements
        this.electricalStandardElementsMap = new Map();

        // Populate electrical standards list in popup
        this.availableElectricalStandards.forEach(standard => {
            const standardElement = document.createElement('span');
            standardElement.className = 'info-standard';
            standardElement.textContent = standard.name;

            // Add click handler for standard selection
            standardElement.addEventListener('click', (e) => {
                e.stopPropagation();
                if (this.selectedElectricalStandards.has(standard.code)) {
                    this.removeElectricalStandard(standard.code, standard.name);
                } else {
                    this.addElectricalStandard(standard.code, standard.name);
                }
            });

            this.electricalStandardElementsMap.set(standard.code, standardElement);
            electricalInputInfoPopup.appendChild(standardElement);
        });

        // Toggle popup on icon click
        this.addToggler(electricalStandardAdd, electricalInputInfoPopup);

        this.madeForESPHome = document.getElementById('madeForESPHome');
        this.imageDropZone = document.getElementById('imageDropZone');
        this.imageInput = document.getElementById('images');
        this.imagePreview = document.getElementById('imagePreview');
        this.tagInput = document.getElementById('tagInput');
        this.tagSuggestions = document.getElementById('tagSuggestions');
        this.selectedTags = document.getElementById('selectedTags');
        this.gpioPinList = document.getElementById('gpioPinList');
        this.slugInput = document.getElementById('slugInput');
        this.imageOverlay = this.imageDropZone.querySelector('.drop-zone-overlay');
        this.contextMenu = document.getElementById('contextMenu');
        this.toast = document.getElementById('toast');
        this.formDataStorageKey = 'deviceEditorFormData';

        // Cache form elements
        this.formElements = {
            boardName: document.getElementById('boardName'),
            description: document.getElementById('description'),
            productLink: document.getElementById('productLink'),
            slug: document.getElementById('slugInput'),
            chipType: document.getElementById('chipType'),
        };

        // Set up info button handlers for all fields
        infoButtons.forEach(id => {
            const button = document.getElementById(`${id}InfoIcon`);
            const popup = document.getElementById(`${id}InfoPopup`);
            if (button && popup) {
                this.addToggler(button, popup);
            }
        });


        // Initialize CodeMirror
        this.yamlEditor = CodeMirror.fromTextArea(document.getElementById('yamlCode'), {
            mode: 'yaml',
            theme: 'monokai',
            lineNumbers: true,
            indentUnit: 2,
            smartIndent: true,
            lineWrapping: true,
        });

        // Initialize validation button
        this.yamlValidateButton = document.getElementById('yamlValidateButton');
        this.yamlValidationTimeout = null;

        // Add change handler to save YAML content and show validation button
        this.yamlEditor.on('change', () => {
            this.saveFormState();
            this.yamlValidateButton.classList.remove('hidden');

            // Clear any existing timeout
            if (this.yamlValidationTimeout) {
                clearTimeout(this.yamlValidationTimeout);
            }
            // Set a new timeout to hide the button after 5 seconds of no changes
            this.yamlValidationTimeout = setTimeout(() => {
                this.yamlValidateButton.classList.add('hidden');
            }, 60000);
        });

        // Handle validation button click
        this.yamlValidateButton.addEventListener('click', () => {
            const isValid = this.validateYaml();
            this.yamlValidateButton.classList.add('hidden');

            if (!isValid) {
                // Get the error message element and scroll to it
                const errorElement = this.yamlCode.closest('.form-group').querySelector('.error-message');
                errorElement.scrollIntoView({behavior: 'smooth', block: 'center'});
            }
        });

        // Server configuration
        this.serverConfig = {
            serverBase: 'https://devices.control-j.com',
            submitUrl: '/api/submit',
            authUrl: '/auth/github',
            authCheckUrl: '/auth/check',
            logoutUrl: '/auth/logout',
            checkSlugUrl: '/api/checkSlug',
            maxImageSize: 1024 * 1024  // 5MB max per image
        };

        if (window.location.hostname === 'localhost') {
            this.serverConfig.serverBase = 'http://localhost:8787';
        }

        this.getUrl = (path) => {
            return new URL(path, `${this.serverConfig.serverBase}`);
        };

        // Initialize validation state
        this.validationState = {
            hasTags: false,
            hasGpioPins: false,
            hasImages: false,
            hasYaml: false,
            wasValidated: false
        };

        // Initialize tag system
        this.selectedTagsList = new Set();

        // Initialize tags info popup
        const tagsInputPopup = document.getElementById('tagsInputPopup');
        const tagAdd = document.getElementById('tagAdd');

        // Create a map to store tag elements for easy access
        this.tagElementsMap = new Map();

        // Populate tags list
        this.availableTags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'info-tag';
            tagElement.textContent = tag;
            if (this.selectedTagsList.has(tag)) {
                tagElement.classList.add('selected');
            }

            // Add click handler for tag selection
            tagElement.addEventListener('click', (e) => {
                e.stopPropagation();
                if (this.selectedTagsList.has(tag)) {
                    this.removeTag(tag);
                } else {
                    this.addTag(tag);
                }
            });

            this.tagElementsMap.set(tag, tagElement);
            tagsInputPopup.appendChild(tagElement);
        });
        this.addToggler(tagAdd, tagsInputPopup);

        // Initialize chip pins
        this.chipPins = {
            'ESP32': [
                'GPIO0', 'GPIO1', 'GPIO2', 'GPIO3', 'GPIO4', 'GPIO5',
                'GPIO6', 'GPIO7', 'GPIO8', 'GPIO9', 'GPIO10', 'GPIO11',
                'GPIO12', 'GPIO13', 'GPIO14', 'GPIO15', 'GPIO16', 'GPIO17',
                'GPIO18', 'GPIO19', 'GPIO21', 'GPIO22', 'GPIO23', 'GPIO25',
                'GPIO26', 'GPIO27', 'GPIO32', 'GPIO33', 'GPIO34', 'GPIO35',
                'GPIO36', 'GPIO39'
            ],
            'ESP32-S2': [
                'GPIO0', 'GPIO1', 'GPIO2', 'GPIO3', 'GPIO4', 'GPIO5',
                'GPIO6', 'GPIO7', 'GPIO8', 'GPIO9', 'GPIO10', 'GPIO11',
                'GPIO12', 'GPIO13', 'GPIO14', 'GPIO15', 'GPIO16', 'GPIO17',
                'GPIO18', 'GPIO19', 'GPIO20', 'GPIO21', 'GPIO26', 'GPIO33',
                'GPIO34', 'GPIO35', 'GPIO36', 'GPIO37', 'GPIO38', 'GPIO39',
                'GPIO40', 'GPIO41', 'GPIO42', 'GPIO43', 'GPIO44', 'GPIO45'
            ],
            'ESP32-S3': [
                'GPIO0', 'GPIO1', 'GPIO2', 'GPIO3', 'GPIO4', 'GPIO5',
                'GPIO6', 'GPIO7', 'GPIO8', 'GPIO9', 'GPIO10', 'GPIO11',
                'GPIO12', 'GPIO13', 'GPIO14', 'GPIO15', 'GPIO16', 'GPIO17',
                'GPIO18', 'GPIO19', 'GPIO20', 'GPIO21', 'GPIO35', 'GPIO36',
                'GPIO37', 'GPIO38', 'GPIO39', 'GPIO40', 'GPIO41', 'GPIO42',
                'GPIO43', 'GPIO44', 'GPIO45', 'GPIO46', 'GPIO47', 'GPIO48'
            ],
            'ESP32-C3': [
                'GPIO0', 'GPIO1', 'GPIO2', 'GPIO3', 'GPIO4', 'GPIO5',
                'GPIO6', 'GPIO7', 'GPIO8', 'GPIO9', 'GPIO10', 'GPIO11',
                'GPIO12', 'GPIO13', 'GPIO14', 'GPIO15', 'GPIO16', 'GPIO17',
                'GPIO18', 'GPIO19', 'GPIO20', 'GPIO21'
            ],
            'RP2040': [
                'GPIO0', 'GPIO1', 'GPIO2', 'GPIO3', 'GPIO4', 'GPIO5',
                'GPIO6', 'GPIO7', 'GPIO8', 'GPIO9', 'GPIO10', 'GPIO11',
                'GPIO12', 'GPIO13', 'GPIO14', 'GPIO15', 'GPIO16', 'GPIO17',
                'GPIO18', 'GPIO19', 'GPIO20', 'GPIO21', 'GPIO22', 'GPIO23',
                'GPIO24', 'GPIO25', 'GPIO26', 'GPIO27', 'GPIO28', 'GPIO29'
            ],
            'RTL8710B': [
                'GPIO0', 'GPIO1', 'GPIO2', 'GPIO3', 'GPIO4', 'GPIO5',
                'GPIO6', 'GPIO7', 'GPIO8', 'GPIO9', 'GPIO10', 'GPIO11',
                'GPIO12', 'GPIO13', 'GPIO14', 'GPIO15'
            ],
            'RTL8720C': [
                'GPIO0', 'GPIO1', 'GPIO2', 'GPIO3', 'GPIO4', 'GPIO5',
                'GPIO6', 'GPIO7', 'GPIO8', 'GPIO9', 'GPIO10', 'GPIO11',
                'GPIO12', 'GPIO13', 'GPIO14', 'GPIO15'
            ],
            'BK7231N': [
                'GPIO0', 'GPIO1', 'GPIO2', 'GPIO3', 'GPIO4', 'GPIO5', 'GPIO6', 'GPIO7',
                'GPIO8', 'GPIO9', 'GPIO10', 'GPIO11', 'GPIO12', 'GPIO13', 'GPIO14', 'GPIO15',
                'GPIO16', 'GPIO17', 'GPIO18', 'GPIO19', 'GPIO20', 'GPIO21', 'GPIO22', 'GPIO23',
                'GPIO24', 'GPIO25', 'GPIO26', 'GPIO27', 'GPIO28', 'GPIO29', 'GPIO30', 'GPIO31',
                'GPIO32', 'GPIO33', 'GPIO34', 'GPIO35', 'GPIO36', 'GPIO37', 'GPIO38', 'GPIO39',
            ],
            'BK7231Q': [
                'GPIO0', 'GPIO1', 'GPIO2', 'GPIO3', 'GPIO4', 'GPIO5', 'GPIO6', 'GPIO7',
                'GPIO8', 'GPIO9', 'GPIO10', 'GPIO11', 'GPIO12', 'GPIO13', 'GPIO14', 'GPIO15',
                'GPIO16', 'GPIO17', 'GPIO18', 'GPIO19', 'GPIO20', 'GPIO21', 'GPIO22', 'GPIO23',
                'GPIO24', 'GPIO25', 'GPIO26', 'GPIO27', 'GPIO28', 'GPIO29', 'GPIO30', 'GPIO31',
                'GPIO32', 'GPIO33', 'GPIO34', 'GPIO35', 'GPIO36', 'GPIO37', 'GPIO38', 'GPIO39',
            ],
            'BK7231T': [
                'GPIO0', 'GPIO1', 'GPIO2', 'GPIO3', 'GPIO4', 'GPIO5', 'GPIO6', 'GPIO7',
                'GPIO8', 'GPIO9', 'GPIO10', 'GPIO11', 'GPIO12', 'GPIO13', 'GPIO14', 'GPIO15',
                'GPIO16', 'GPIO17', 'GPIO18', 'GPIO19', 'GPIO20', 'GPIO21', 'GPIO22', 'GPIO23',
                'GPIO24', 'GPIO25', 'GPIO26', 'GPIO27', 'GPIO28', 'GPIO29', 'GPIO30', 'GPIO31',
                'GPIO32', 'GPIO33', 'GPIO34', 'GPIO35', 'GPIO36', 'GPIO37', 'GPIO38', 'GPIO39',
            ]
        };
        const selectElement = document.getElementById('chipType');
        if (selectElement) {

            // Clear existing options
            selectElement.innerHTML = '';

            // Add default option
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = 'Select a chip type...';
            selectElement.appendChild(defaultOption);

            // Add new options from the chipTypes array
            Object.keys(this.chipPins).forEach(chipType => {
                const option = document.createElement('option');
                option.value = chipType;
                option.textContent = chipType;
                selectElement.appendChild(option);
            });
        }


        // Restore form state if available
        this.restoreFormState();

        // Check authentication status
        this.checkAuthStatus();

        this.setupEventListeners();
    }

    async checkAuthStatus() {
        const loginBtn = document.getElementById('githubLogin');
        const userInfo = document.getElementById('userInfo');
        const userAvatar = document.getElementById('userAvatar');
        const userName = document.getElementById('userName');

        try {
            const response = await fetch(this.getUrl(this.serverConfig.authCheckUrl), {
                credentials: 'include'
            });
            const data = await response.json();

            if (!data.authenticated) {
                loginBtn.classList.remove('hidden');
                userInfo.classList.add('hidden');
                document.getElementById('submitBtn').disabled = true;
            } else {
                loginBtn.classList.add('hidden');
                userInfo.classList.remove('hidden');
                userAvatar.src = data.avatar_url || 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
                userName.textContent = data.username;
                document.getElementById('submitBtn').disabled = false;
            }
        } catch (error) {
            console.error('Auth check failed:', error);
            loginBtn.classList.remove('hidden');
            userInfo.classList.add('hidden');
            this.showToast('Failed to check authentication status');
        }
    }

    setupEventListeners() {
        // Handle user dropdown menu
        const userAvatarWrapper = document.querySelector('.user-avatar-wrapper');
        const userDropdown = document.querySelector('.user-dropdown');
        const dropdownArrow = document.querySelector('.dropdown-arrow');

        userAvatarWrapper.addEventListener('click', (e) => {
            e.stopPropagation();
            userDropdown.classList.toggle('show');
            dropdownArrow.classList.toggle('rotated');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!userDropdown.contains(e.target) && !userAvatarWrapper.contains(e.target)) {
                userDropdown.classList.remove('show');
                dropdownArrow.classList.remove('rotated');
            }
        });

        // Add logout handler
        document.getElementById('logoutButton').addEventListener('click', () => {
            fetch(this.getUrl(this.serverConfig.logoutUrl), {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Logout failed');
                    }
                    localStorage.removeItem(this.formDataStorageKey);
                    this.checkAuthStatus();
                    window.location.reload();
                })
                .catch(error => {
                    console.error('Logout failed:', error);
                    this.showToast('Failed to logout');
                });
        });

        // Add validation and save state on input/blur for text inputs
        const handleInput = (element, validateFn) => {
            element.addEventListener('input', () => {
                validateFn.call(this, element);
                this.saveFormState();
            });
            element.addEventListener('blur', () => validateFn.call(this, element));
            element.addEventListener('paste', () => setTimeout(() => {
                validateFn.call(this, element);
                this.saveFormState();
            }, 0));
        };

        handleInput(this.formElements.boardName, this.validateBoardName);
        handleInput(this.formElements.description, this.validateDescription);
        handleInput(this.formElements.productLink, this.validateProductLink);

        // Add validation for YAML drop and paste
        //this.yamlDropZone.addEventListener('drop', () => setTimeout(() => this.validateYaml(), 0));
        this.yamlEditor.on('paste', () => setTimeout(() => this.validateYaml(), 0));

        // Add validation for image drop and paste
        this.imageDropZone.addEventListener('drop', () => setTimeout(() => this.validateImages(), 0));
        this.imageInput.addEventListener('paste', () => setTimeout(() => this.validateImages(), 0));

        // Add validation for GPIO pins when changed
        this.gpioPinList.addEventListener('change', () => this.validateGpioPins());

        // Add clear form button handler
        document.getElementById('clearBtn').addEventListener('click', () => {
            if (confirm('Are you sure you want to clear the form? All unsaved changes will be lost.')) {
                this.resetForm();
            }
        });

        this.form.addEventListener('submit', async (e) => {
            e.preventDefault();
            e.stopPropagation();

            const slugValid = await this.checkSlugAvailability(this.slugInput);
            const isValid = this.validateForm(true);

            if (!isValid || !slugValid) {
                const firstError = this.form.querySelector('.form-group.error');
                if (firstError) {
                    firstError.scrollIntoView({behavior: 'smooth', block: 'center'});
                    this.showToast('Please fill in all required fields');
                }
                return;
            }

            try {
                await this.handleSubmit();
            } catch (error) {
                this.showToast(error.message);
            }
        });

        this.chipTypeSelect.addEventListener('change', (event) => {
            this.handleChipTypeChange(event);
            this.saveFormState();
        });
        this.difficultyRatingSelect.addEventListener('change', (event) => {
            this.saveFormState();
        });
        this.madeForESPHome.addEventListener('change', (event) => {
            this.saveFormState();
        });
        this.setupDropZone(this.imageDropZone, this.handleImageDrop.bind(this));
        this.imageInput.addEventListener('change', this.handleImageSelect.bind(this));
        this.slugInput.addEventListener('input', this.validateSlug.bind(this));

        // Handle click on image drop zone and preview area
        this.imageDropZone.addEventListener('click', (e) => {
            // Only trigger file input if clicking the overlay or empty space
            if (e.target === this.imageDropZone || e.target.classList.contains('drop-zone-overlay') || e.target.classList.contains('image-preview')) {
                this.imageInput.click();
            }
        });

        // Make preview images clickable to open in new tab
        this.imagePreview.addEventListener('click', (e) => {
            if (e.target.tagName === 'IMG') {
                window.open(e.target.src, '_blank');
            }
        });

        // Handle click on YAML drop zone
        this.uploadYamlFile.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.yaml,.yml';
            input.onchange = (e) => this.handleYamlSelect(e);
            input.click();
        });

        // Handle drop zone content state
        this.imageDropZone.addEventListener('drop', () => {
            this.imageDropZone.classList.add('has-content');
        });

        // Board name and slug generation
        const boardNameInput = document.getElementById('boardName');

        boardNameInput.addEventListener('input', () => {
            const boardName = boardNameInput.value;
            if (boardName) {
                this.slugInput.value = this.generateSlug(boardName);
                this.validateSlug();
                this.saveFormState();
            }
        });

        // Also save state when slug is manually edited
        this.slugInput.addEventListener('input', () => {
            this.saveFormState();
        });

        // Context menu for image drop zone
        this.imageDropZone.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.contextMenu.style.display = 'block';
            this.contextMenu.style.left = `${e.pageX}px`;
            this.contextMenu.style.top = `${e.pageY}px`;
        });

        // Hide context menu on click outside
        document.addEventListener('click', (e) => {
            if (!this.contextMenu.contains(e.target) && e.target !== this.imageDropZone) {
                this.contextMenu.style.display = 'none';
            }
        });

        // Handle paste from context menu
        this.contextMenu.querySelector('[data-action="paste"]').addEventListener('click', async () => {
            this.contextMenu.style.display = 'none';
            try {
                const text = await navigator.clipboard.readText();
                if (text) {
                    try {
                        const url = new URL(text);
                        await this.handleImageUrl(url.href);
                    } catch (e) {
                        this.showToast('Please paste a valid image URL');
                    }
                }
            } catch (e) {
                this.showToast('Unable to access clipboard');
            }
        });

        // Add GitHub login button handler
        const githubLoginBtn = document.getElementById('githubLogin');
        const loginText = githubLoginBtn.querySelector('.login-text');

        githubLoginBtn.addEventListener('click', async () => {
            // Add loading state
            githubLoginBtn.classList.add('loading');
            loginText.textContent = 'Logging in...';

            try {
                const returnTo = window.location.toString();
                window.location.href = this.getUrl(`${this.serverConfig.authUrl}?returnTo=${encodeURIComponent(returnTo)}`).toString();
            } catch (error) {
                console.error('Login failed:', error);
                // Remove loading state on error
                githubLoginBtn.classList.remove('loading');
                loginText.textContent = 'Login with GitHub';
            }
        });
    }

    generateSlug(text) {
        return text
            .toLowerCase()
            .replace(/[^a-z0-9\-\s.]/g, '') // Keep only letters, numbers, dots, hyphens, and spaces
            .replace(/\s+/g, '-')            // Replace spaces with hyphens
            .replace(/-+/g, '-')            // Replace multiple hyphens with single hyphen
            .replace(/^-+|-+$/g, '');      // Remove leading/trailing hyphens
    }

    showToast(message, duration = 3000) {
        this.toast.textContent = message;
        this.toast.style.display = 'block';
        setTimeout(() => {
            this.toast.style.display = 'none';
        }, duration);
    }

    hideToast() {
        this.toast.style.display = 'none';
    }

    handleTagInput(event) {
        const input = event.target.value.toLowerCase();
        if (input) {
            // Only show suggestions that exactly start with the input
            const suggestions = this.availableTags
                .filter(tag =>
                    tag.toLowerCase().startsWith(input) &&
                    !this.selectedTagsList.has(tag)
                );

            if (suggestions.length > 0) {
                this.tagSuggestions.innerHTML = suggestions
                    .map(tag => `<div class="tag-suggestion-item" data-tag="${tag}">${tag}</div>`)
                    .join('');
                this.tagSuggestions.style.display = 'block';

                // Add click handlers to suggestions
                this.tagSuggestions.querySelectorAll('.tag-suggestion-item').forEach(item => {
                    item.addEventListener('click', () => this.addTag(item.dataset.tag));
                });
            } else {
                this.tagSuggestions.style.display = 'none';
            }
        } else {
            this.tagSuggestions.style.display = 'none';
        }
    }

    handleTagKeydown(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const suggestions = this.tagSuggestions.querySelectorAll('.tag-suggestion-item');
            if (suggestions.length === 1) {
                const selectedTag = suggestions[0].dataset.tag;
                this.addTag(selectedTag);
                event.target.value = '';
                this.tagSuggestions.innerHTML = '';
                this.tagSuggestions.style.display = 'none';
            }
        }
    }

    setupDropZone(dropZone, dropHandler) {
        const preventDefaults = (e) => {
            e.preventDefault();
            e.stopPropagation();
        };

        const handleDragEnter = (e) => {
            preventDefaults(e);
            dropZone.classList.add('drag-over');
        };

        const handleDragLeave = (e) => {
            preventDefaults(e);
            // Only remove class if we're not entering a child element
            if (!dropZone.contains(e.relatedTarget)) {
                dropZone.classList.remove('drag-over');
            }
        };

        const handleDrop = async (e) => {
            preventDefaults(e);
            dropZone.classList.remove('drag-over');
            await dropHandler(e);
        };

        // Remove old event listeners if they exist
        dropZone.removeEventListener('dragenter', handleDragEnter);
        dropZone.removeEventListener('dragover', preventDefaults);
        dropZone.removeEventListener('dragleave', handleDragLeave);
        dropZone.removeEventListener('drop', handleDrop);

        // Add new event listeners
        dropZone.addEventListener('dragenter', handleDragEnter);
        dropZone.addEventListener('dragover', preventDefaults);
        dropZone.addEventListener('dragleave', handleDragLeave);
        dropZone.addEventListener('drop', handleDrop);
    }

    handleChipTypeChange(event) {
        const chipType = event.target.value;
        this.updateGpioPinList(chipType);
    }

    async handleYamlDrop(e) {
        const file = e.dataTransfer.files[0];
        if (file && (file.name.endsWith('.yaml') || file.name.endsWith('.yml'))) {
            await this.readYamlFile(file);
        } else {
            alert('Please drop a valid YAML file (.yaml or .yml)');
        }
    }

    async handleYamlSelect(e) {
        const file = e.target.files[0];
        if (file) {
            await this.readYamlFile(file);
        }
    }

    handleImageSelect(e) {
        const files = Array.from(e.target.files).filter(file =>
            file.type.startsWith('image/')
        );
        this.handleImageFiles(files);
    }

    updateTags() {
        this.tagsRequired.value = Array.from(this.selectedTags).join(',');
    }

    addTag(tag) {
        if (!this.selectedTagsList.has(tag)) {
            this.selectedTagsList.add(tag);
            const tagElement = document.createElement('div');
            tagElement.classList.add('tag', 'feature');
            tagElement.innerHTML = `
                ${tag}
                <span class="tag-remove" data-tag="${tag}">&times;</span>
            `;

            tagElement.querySelector('.tag-remove').addEventListener('click', () => this.removeTag(tag));
            this.selectedTags.insertBefore(tagElement, this.tagAdd);
            this.updateTags();

            const element = this.tagElementsMap.get(tag);
            if (element) {
                element.classList.add('selected');
            }
            this.validationState.hasTags = this.selectedTagsList.size > 0;
            this.saveFormState();
            this.validateTags();
        }
    }

    removeTag(tag) {
        this.selectedTagsList.delete(tag);
        const tagElement = this.selectedTags.querySelector(`[data-tag="${tag}"]`).parentElement;
        tagElement.remove();

        this.updateTags();

        const element = this.tagElementsMap.get(tag);
        if (element) {
            element.classList.remove('selected');
        }
        this.validationState.hasTags = this.selectedTagsList.size > 0;
        document.getElementById('tagsRequired').value = this.validationState.hasTags ? 'valid' : '';
        this.validateTags();
        this.saveFormState();
    }

    addElectricalStandard(code, name) {
        if (!this.selectedElectricalStandards.has(code)) {
            this.selectedElectricalStandards.add(code);
            const standardElement = document.createElement('div');
            standardElement.classList.add('tag', 'standard');
            standardElement.innerHTML = `
                ${name}
                <span class="tag-remove" data-standard="${code}">&times;</span>
            `;

            standardElement.querySelector('.tag-remove').addEventListener('click', () => this.removeElectricalStandard(code, name));
            this.selectedElectricalStandardsContainer.insertBefore(standardElement, this.electricalStandardAdd);

            // Update the hidden input with all selected standards
            this.updateElectricalStandardsHidden();

            // Update the popup UI
            const standardElement2 = this.electricalStandardElementsMap.get(code);
            if (standardElement2) {
                standardElement2.classList.add('selected');
            }
            this.saveFormState();
        }
    }

    removeElectricalStandard(code, name) {
        this.selectedElectricalStandards.delete(code);
        const standardElement = this.selectedElectricalStandardsContainer.querySelector(`[data-standard="${code}"]`).parentElement;
        standardElement.remove();

        // Update the hidden input with remaining selected standards
        this.updateElectricalStandardsHidden();

        // Update the popup UI
        const popupStandardElement = this.electricalStandardElementsMap.get(code);
        if (popupStandardElement) {
            popupStandardElement.classList.remove('selected');
        }
        this.saveFormState();
    }

    updateElectricalStandardsHidden() {
        this.electricalStandardsHidden.value = Array.from(this.selectedElectricalStandards).join(',');
    }

    updateGpioPinList(chipType) {
        this.gpioPinList.innerHTML = '';

        if (!chipType) {
            this.gpioPinList.innerHTML = '<p class="select-chip-message">Please select a chip type to view available pins</p>';
            return;
        }

        const pins = this.chipPins[chipType] || [];
        pins.forEach(pin => {
            const pinItem = document.createElement('div');
            pinItem.className = 'gpio-pin-item';
            pinItem.innerHTML = `
                <span class="pin-number">${pin}</span>
                <input type="text" class="pin-function" placeholder="Enter pin function" data-pin="${pin}">
            `;

            this.gpioPinList.appendChild(pinItem);
            const input = pinItem.querySelector('input');
            input.addEventListener('input', () => {
                this.validateGpioPins();
            });
        });

        // Add grid layout styles
        this.gpioPinList.style.display = 'grid';
        this.gpioPinList.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
        this.gpioPinList.style.gap = '10px';
    }

    async readYamlFile(file) {
        try {
            const content = await file.text();
            this.yamlEditor.setValue(content);
            this.saveFormState();
            this.validateYaml();
        } catch (error) {
            console.error('Error reading YAML file:', error);
            alert('Error reading YAML file. Please try again.');
        }
    }

    saveFormState() {
        const formData = {
            boardName: this.formElements.boardName.value,
            description: this.formElements.description.value,
            productLink: this.formElements.productLink.value,
            chipType: this.chipTypeSelect.value,
            difficultyRating: this.difficultyRatingSelect.value,
            madeForESPHome: this.madeForESPHome.value,
            slug: this.slugInput.value,
            yamlContent: this.yamlEditor.getValue(),
            tags: Array.from(this.selectedTagsList),
            electricalStandards: Array.from(this.selectedElectricalStandards).map(code => {
                const standard = this.availableElectricalStandards.find(s => s.code === code);
                return standard ? {code: standard.code, name: standard.name} : null;
            }).filter(Boolean),
            gpioPins: {},
            images: [],
            timestamp: new Date().toISOString()
        };

        // Save GPIO pin functions
        this.gpioPinList.querySelectorAll('.pin-function').forEach(input => {
            if (input.value.trim()) {
                formData.gpioPins[input.dataset.pin] = input.value.trim();
            }
        });

        // Save images
        this.imagePreview.querySelectorAll('.preview-image').forEach(img => {
            formData.images.push(img.src);
        });

        localStorage.setItem(this.formDataStorageKey, JSON.stringify(formData));
    }

    restoreFormState() {
        try {
            const savedData = localStorage.getItem(this.formDataStorageKey);
            if (savedData) {
                const formData = JSON.parse(savedData);

                // Restore basic form fields
                if (formData.boardName) this.formElements.boardName.value = formData.boardName;
                if (formData.description) this.formElements.description.value = formData.description;
                if (formData.productLink) this.formElements.productLink.value = formData.productLink;
                if (formData.chipType) {
                    this.chipTypeSelect.value = formData.chipType;
                    this.updateGpioPinList(formData.chipType);
                }
                if (formData.madeForESPHome) {
                    this.madeForESPHome.value = formData.madeForESPHome;
                }
                if (formData.chipTypeSelect) {
                    this.chipTypeSelect.value = formData.chipTypeSelect;
                }
                if (formData.slug) this.slugInput.value = formData.slug;

                // Restore YAML content
                if (formData.yamlContent) {
                    this.yamlEditor.setValue(formData.yamlContent);
                }

                // Restore tags
                if (formData.tags) {
                    formData.tags.forEach(tag => this.addTag(tag));
                }

                // Restore electrical standards
                if (formData.electricalStandards) {
                    formData.electricalStandards.forEach(standard => {
                        this.addElectricalStandard(standard.code, standard.name);
                    });
                }

                // Restore GPIO pins
                if (formData.gpioPins) {
                    Object.entries(formData.gpioPins).forEach(([pin, value]) => {
                        const input = this.gpioPinList.querySelector(`[data-pin="${pin}"]`);
                        if (input) input.value = value;
                    });
                }

                // Restore images
                if (formData.images) {
                    formData.images.forEach(src => {
                        const img = document.createElement('img');
                        img.src = src;
                        img.className = 'preview-image';

                        const container = document.createElement('div');
                        container.className = 'image-container';
                        container.appendChild(img);

                        const removeBtn = document.createElement('button');
                        removeBtn.className = 'remove-image';
                        removeBtn.innerHTML = '×';
                        removeBtn.onclick = () => {
                            container.remove();
                            this.updateImageValidation();
                        };

                        container.appendChild(removeBtn);
                        this.imagePreview.appendChild(container);
                    });
                    this.updateImageValidation();
                }

                // Validate form after restoration
                this.validateForm();
            }
        } catch (error) {
            console.error('Error restoring form state:', error);
            localStorage.removeItem(this.formDataStorageKey);
        }
    }

    async handleSubmit() {
        const submitBtn = document.getElementById('submitBtn');
        const spinner = document.getElementById('spinner');
        try {
            submitBtn.disabled = true;

            const formData = new FormData();

            // Add basic form fields
            formData.append('slug', this.slugInput.value);
            formData.append('boardName', document.getElementById('boardName').value);
            formData.append('description', document.getElementById('description').value);
            formData.append('chipType', this.chipTypeSelect.value);
            formData.append('electricalStandard', Array.from(this.selectedElectricalStandards).join(','));
            formData.append('difficultyRating', this.difficultyRatingSelect.value);
            formData.append('madeForESPHome', this.madeForESPHome.value);

            // Add product link if provided
            const productLink = document.getElementById('productLink').value;
            if (productLink) {
                formData.append('productLink', productLink);
            }

            // Add GPIO pins
            const gpioPins = {};
            this.gpioPinList.querySelectorAll('.pin-function').forEach(input => {
                if (input.value.trim()) {
                    gpioPins[input.dataset.pin] = input.value.trim();
                }
            });
            formData.append('gpioPins', JSON.stringify(gpioPins));

            // Add tags
            const tags = Array.from(this.selectedTagsList).join(',');
            formData.append('tags', tags);

            // Add YAML configuration
            formData.append('yamlConfig', this.yamlEditor.getValue());

            // Add images
            const imageContainers = this.imagePreview.querySelectorAll('.image-container');
            for (let i = 0; i !== imageContainers.length; i++) {
                const img = imageContainers[i].querySelector('img');
                const response = await fetch(img.src);
                const blob = await response.blob();

                // Validate image size
                if (blob.size > this.serverConfig.maxImageSize) {
                    throw new Error(`Image ${i + 1} exceeds maximum size of {this.serverConfig.maxImageSize / 1024}kB`);
                }

                formData.append(`image${i}`, blob, `image${i}.${blob.type.split('/')[1]}`);
            }

            // Show spinner
            spinner.classList.remove('hidden');
            this.showToast('Creating Pull Request...', 10000);
            // Submit the form
            const response = await fetch(this.getUrl(this.serverConfig.submitUrl), {
                method: 'POST',
                body: formData,
                credentials: 'include'
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Submission failed');
            }

            const result = await response.json();
            console.log(result);
            this.hideToast();
            this.showToast('Device configuration submitted successfully!');

            // Open PR in new tab if available
            if (result.pr_url) {
                window.open(result.pr_url, '_blank');
            }

            // Clear form after successful submission
            this.resetForm();
        } catch (error) {
            this.hideToast();
            if (error.message.includes('Authentication required')) {
                // Save current form state before redirecting
                this.saveFormState();

                // Include form state in returnTo URL
                const searchParams = new URLSearchParams(window.location.search);
                searchParams.set('formState', 'saved');
                const returnTo = window.location.pathname + '?' + searchParams.toString() + window.location.hash;

                const state = btoa(JSON.stringify({returnTo}));
                window.location.href = this.getUrl(`${this.serverConfig.authUrl}?state=${encodeURIComponent(state)}`).toString();
                return;
            }
            this.showToast(`Error: ${error.message}`);
            console.error('Submission error:', error);
            if (error.message.includes('Authentication required')) {
                // Save current form state before redirecting
                this.saveFormState();

                // Include form state in returnTo URL
                const searchParams = new URLSearchParams(window.location.search);
                searchParams.set('formState', 'saved');
                const returnTo = window.location.pathname + '?' + searchParams.toString() + window.location.hash;

                const state = btoa(JSON.stringify({returnTo}));
                window.location.href = this.getUrl(`${this.serverConfig.authUrl}?state=${encodeURIComponent(state)}`).toString();
                return;
            }
            this.showToast(`Error: ${error.message}`);
            console.error('Submission error:', error);
        } finally {
            // Hide spinner
            spinner.classList.add('hidden');
            submitBtn.disabled = false;
        }
    }

    async handleImageDrop(e) {
        e.preventDefault();

        // Handle URLs
        const text = e.dataTransfer.getData('text');
        if (text) {
            try {
                const url = new URL(text);
                await this.handleImageUrl(url.href);
                return;
            } catch (e) {
                // Not a valid URL, continue with file handling
            }
        }

        // Handle files
        const files = Array.from(e.dataTransfer.files).filter(file =>
            file.type.startsWith('image/')
        );

        if (files.length > 0) {
            this.handleImageFiles(files);
        } else {
            alert('Please drop valid image files or image URLs');
        }
    }

    async handleImageUrl(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch image');

            const blob = await response.blob();
            if (!blob.type.startsWith('image/')) {
                throw new Error('URL does not point to an image');
            }

            await this.handleImageFiles([blob]);
            this.updateImageValidation();
        } catch (error) {
            alert('Failed to load image from URL: ' + error.message);
        }
    }

    handleImageFiles(files) {
        if (this.imagePreview.children.length >= 3) {
            alert('Maximum number of images is 3.');
            return;
        }
        const MAX_FILE_SIZE = 1024 * 1024; // 1MB in bytes

        // Check file sizes first
        for (const file of files) {
            if (file.size > MAX_FILE_SIZE) {
                alert(`File '${file.name}' exceeds the maximum size of 1MB`);
                return;
            }
        }

        const promises = Array.from(files).map(file => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.className = 'preview-image';

                    const container = document.createElement('div');
                    container.className = 'image-container';
                    container.appendChild(img);

                    const removeBtn = document.createElement('button');
                    removeBtn.className = 'remove-image';
                    removeBtn.innerHTML = '×';
                    removeBtn.onclick = () => {
                        container.remove();
                        this.updateImageValidation();
                    };

                    container.appendChild(removeBtn);
                    this.imagePreview.appendChild(container);
                    resolve();
                };
                reader.readAsDataURL(file);
            });
        });

        Promise.all(promises).then(() => {
            this.updateImageValidation();
        });
    }

    updateImageValidation() {
        const hasImages = this.imagePreview.children.length > 0;
        this.validationState.hasImages = hasImages;

        // Update validation UI
        const formGroup = this.imageDropZone.closest('.form-group');
        if (hasImages) {
            formGroup.classList.remove('error');
            formGroup.querySelector('.error-message').textContent = '';
        }
        this.imageOverlay.style.display = hasImages ? 'none' : 'block';
    }

    validateUrl(input) {
        try {
            new URL(input);
            return true;
        } catch (e) {
            return false;
        }
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    async checkSlugAvailability(input) {
        const slug = input.value.trim();
        if (!slug) return;

        const formGroup = input.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');

        try {
            const response = await fetch(this.getUrl(`${this.serverConfig.checkSlugUrl}?slug=${encodeURIComponent(slug)}`), {
                credentials: 'include'
            });
            const data = await response.json();

            if (!data.available) {
                formGroup.classList.add('error');
                errorElement.textContent = 'This slug is already taken';
                return false;
            }
            formGroup.classList.remove('error');
            errorElement.textContent = '';
            return true;
        } catch (error) {
            console.error('Error checking slug availability:', error);
            return true; // Don't block form submission on API errors
        }
    }

    async validateSlug() {
        const value = this.slugInput.value;
        const sanitized = value.toLowerCase().replace(/[^a-z0-9-.]/, '');
        const formGroup = this.slugInput.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');

        if (value !== sanitized) {
            input.value = sanitized;
        }

        // Clear any existing error state
        formGroup.classList.remove('error');
        errorElement.textContent = '';

        // If we have a value, check its availability
        if (sanitized) {
            if (!this.checkSlugDebounced) {
                this.checkSlugDebounced = this.debounce(this.checkSlugAvailability.bind(this), 500);
            }
            return this.checkSlugDebounced(this.slugInput);
        }
        formGroup.classList.add('error');
        errorElement.textContent = 'Slug is required';
        return false;
    }

    validateBoardName() {
        const formGroup = this.formElements.boardName.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');

        if (!this.formElements.boardName.value.trim()) {
            formGroup.classList.add('error');
            errorElement.textContent = 'Board name is required';
            return false;
        }

        formGroup.classList.remove('error');
        errorElement.textContent = '';
        return true;
    }

    validateChipType() {
        const formGroup = this.formElements.chipType.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');

        if (!this.formElements.chipType.value.trim()) {
            formGroup.classList.add('error');
            errorElement.textContent = 'Chip type is required';
            return false;
        }

        formGroup.classList.remove('error');
        errorElement.textContent = '';
        return true;
    }

    validateDescription() {
        const formGroup = this.formElements.description.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');

        if (!this.formElements.description.value.trim()) {
            formGroup.classList.add('error');
            errorElement.textContent = 'Description is required';
            return false;
        }

        formGroup.classList.remove('error');
        errorElement.textContent = '';
        return true;
    }

    validateDeviceName() {

    }

    validateProductLink() {
        const formGroup = this.formElements.productLink.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');
        const value = this.formElements.productLink.value.trim();

        if (value && !this.validateUrl(value)) {
            formGroup.classList.add('error');
            errorElement.textContent = 'Please enter a valid URL';
            return false;
        }

        formGroup.classList.remove('error');
        errorElement.textContent = '';
        return true;
    }

    validateGpioPins() {
        const formGroup = this.gpioPinList.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');
        const hasGpioPins = Array.from(this.gpioPinList.querySelectorAll('.pin-function'))
            .some(input => input.value.trim() !== '');
        if (hasGpioPins !== this.validationState.hasGpioPins) {
            this.validationState.hasGpioPins = hasGpioPins;
            this.saveFormState();
        }
        document.getElementById('gpioPinsRequired').value = this.validationState.hasGpioPins ? 'valid' : '';

        if (!this.validationState.hasGpioPins) {
            formGroup.classList.add('error');
            errorElement.textContent = 'At least one GPIO pin must have a function';
            return false;
        }

        formGroup.classList.remove('error');
        errorElement.textContent = '';
        return true;
    }

    validateTags() {
        const formGroup = document.querySelector('.tags-container').closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');

        if (!this.validationState.hasTags) {
            formGroup.classList.add('error');
            errorElement.textContent = 'At least one tag is required';
            return false;
        }

        formGroup.classList.remove('error');
        errorElement.textContent = '';
        return true;
    }

    validateImages() {
        const formGroup = this.imageDropZone.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');

        if (!this.validationState.hasImages) {
            formGroup.classList.add('error');
            errorElement.textContent = 'At least one image is required';
            return false;
        }

        formGroup.classList.remove('error');
        errorElement.textContent = '';
        return true;
    }

    validateYaml() {
        const formGroup = this.yamlCode.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');
        const yamlContent = this.yamlEditor.getValue().trim();

        if (!yamlContent) {
            formGroup.classList.add('error');
            errorElement.textContent = 'Sample YAML configuration is required';
            return false;
        }
        const errors = validateYaml(yamlContent);
        if (errors.length > 0) {
            formGroup.classList.add('error');
            errorElement.textContent = errors.join('; ');
            return false;
        }

        formGroup.classList.remove('error');
        errorElement.textContent = '';
        return true;
    }

    resetForm() {
        // Reset all form fields
        this.form.reset();
        this.imagePreview.innerHTML = '';
        this.yamlEditor.setValue('');
        this.selectedTagsList.forEach(tag => {
            this.removeTag(tag)
        });
        this.selectedTagsList.clear();
        localStorage.removeItem(this.formDataStorageKey);

        // Reset validation state
        this.validationState = {
            hasTags: false,
            hasGpioPins: false,
            hasImages: false,
            wasValidated: false,
        };

        // Clear all error states and messages
        this.form.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
            const errorMessage = group.querySelector('.error-message');
            if (errorMessage) {
                errorMessage.textContent = '';
            }
        });

        // Reset CodeMirror's error state if any
        const yamlContainer = this.yamlEditor.getWrapperElement();
        yamlContainer.classList.remove('error');

        // Reset GPIO pin list
        this.gpioPinList.innerHTML = '<p class="select-chip-message">Please select a chip type to view available pins</p>';

        // Reset drop zones
        this.imageDropZone.classList.remove('has-content', 'drag-over');
        this.imageOverlay.style.display = 'block';
    }

    validateForm(always = false) {
        if (this.validationState.wasValidated || always)
            this.validationState.wasValidated = true;
        else
            return;
        // Add validate class to all form groups to show errors
        this.form.querySelectorAll('.form-group').forEach(group => {
            group.classList.add('validate');
        });

        return (
            this.validateBoardName() &
            this.validateChipType() &
            this.validateDescription() &
            this.validateProductLink() &
            this.validateGpioPins() &
            this.validateTags() &
            this.validateImages() &
            this.validateYaml()
        );
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new DeviceEditor();
});
