// test.js — Interactivity for the fisheye menu
// - Adds focus+context behavior: when one item is hovered, neighbors dim to emphasize focus.

document.addEventListener('DOMContentLoaded', () => {
    // Select all menu items once the DOM is ready
    const items = document.querySelectorAll('.menu-item');

    items.forEach(item => {
        // When cursor enters an item, reduce opacity of other items
        item.addEventListener('mouseenter', () => {
            items.forEach(i => {
                if (i !== item) i.style.opacity = '0.6'; // dim non-focused items
            });
        });

        // When cursor leaves, restore all items to full opacity
        item.addEventListener('mouseleave', () => {
            items.forEach(i => { i.style.opacity = '1'; });
        });
    });
});