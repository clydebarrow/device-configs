document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('device-container');
    const buttons = document.querySelectorAll('.toggle-button');
    const STORAGE_KEY = 'deviceViewPreference';

    if (!container || !buttons.length) return;

    // Load saved preference
    const savedView = localStorage.getItem(STORAGE_KEY) || 'grid';
    setView(savedView);

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const view = button.dataset.view;
            setView(view);
            // Save preference
            localStorage.setItem(STORAGE_KEY, view);
        });
    });

    function setView(view) {
        container.className = `device-${view}`;
        buttons.forEach(b => {
            b.classList.toggle('active', b.dataset.view === view);
        });

        // Update image sources based on view
        const images = container.querySelectorAll('.device-image');
        images.forEach(img => {
            const src = img.dataset[`${view}Src`];
            if (src && img.src !== src) {
                img.src = src;
            }
        });
    }
});
