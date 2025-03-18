document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('device-container');
    const buttons = document.querySelectorAll('.toggle-button');
    const STORAGE_KEY = 'viewMode';

    if (!container || !buttons.length) return;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const view = button.dataset.view;
            setView(view);
            // Save preference
            localStorage.setItem(STORAGE_KEY, view);
        });
    });

    function setView(view) {
        if (view === 'list') {
            document.documentElement.classList.add('list-view');
        } else {
            document.documentElement.classList.remove('list-view');
        }
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
