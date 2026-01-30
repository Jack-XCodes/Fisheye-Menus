// script.js
document.addEventListener('DOMContentLoaded', () => {//Ensures DOM is fully loaded before script execution
    const items = document.querySelectorAll('.menu-item');

    items.forEach(item => {
        // Handle Mouse Events for scaling
        item.addEventListener('mouseenter', () => {// Triggers when cursor enters menu item
            // Optional: Shrink neighbors slightly for a truer "fisheye" feel
            items.forEach(i => {
                if (i !== item) i.style.opacity = "0.6";
            });
        });

        item.addEventListener('mouseleave', () => {//Triggers when cursor leaves menu item
            items.forEach(i => {
                i.style.opacity = "1";
            });
        });
    });
});