// script.js
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.menu-item');

    items.forEach(item => {
        // Handle Mouse Events for scaling
        item.addEventListener('mouseenter', () => {
            // Optional: Shrink neighbors slightly for a truer "fisheye" feel
            items.forEach(i => {
                if (i !== item) i.style.opacity = "0.6";
            });
        });

        item.addEventListener('mouseleave', () => {
            items.forEach(i => {
                i.style.opacity = "1";
            });
        });
    });
});