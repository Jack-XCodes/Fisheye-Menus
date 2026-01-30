# Fisheye Menu Project: HCI-Focused Implementation & Justification

## 1. Conceptual Background — Why Fisheye Menus?

### What is a Fisheye Menu?
A fisheye menu is a focus+context interaction technique that displays all menu items at once but magnifies the item currently under focus (hover or click) while keeping other items visible but smaller. This creates a visual hierarchy that emphasizes the selected item without hiding the overall structure.

### Focus + Context Principle
- Focus: The selected item is enlarged, revealing more details (label, description, icon).
- Context: All other items remain visible, preserving spatial awareness and navigation affordance.
- Benefit: Reduces cognitive load by avoiding abrupt transitions and supports peripheral awareness.

### Why Use Fisheye Menus for Usability Heuristics?
- Heuristics are hierarchical yet related: fisheye menus allow users to see all 10 heuristics (UH#1–UH#10) while focusing on one at a time.
- Supports recognition over recall: users can visually scan and recognize heuristics without memorizing codes or navigating deep menus.
- Encourages exploration: smooth, animated magnification invites interaction and learning.

### Link to Unit Materials
- WIMP & Direct Manipulation: aligns with direct manipulation principles—visibility, incremental feedback, reversibility (Shneiderman).
- Attention & Perception: magnification draws attention (Gestalt—figure/ground) while maintaining context.
- Interaction Styles: combines menus’ recognition benefits with dynamic feedback from direct manipulation.

---

## 2. Assignment Alignment — Meeting the Brief

### Assignment Requirements
- Design a web-based menu for 10 usability heuristics (UH#1–UH#10).
- Each item is an object menu item with a label (e.g., UH#5).
- On hover/click, the item becomes larger and displays more details (e.g., “Error Prevention”).
- Use appropriate web technologies (HTML, CSS, JavaScript).

### How Our Implementation Satisfies the Brief

| Requirement | Implementation in Code | Justification |
|---|---|---|
| 10 menu items | HTML: 10 `.menu-item` divs with `data-detail` attributes | Clearly structured, semantic grouping |
| Labels (UH#1–UH#10) | HTML: `<span class="label">UH#1</span>` | Concise, scannable identifiers |
| “Larger” on hover | CSS: `transform: scale(1.6) translateY(-15px)` | Fisheye magnification effect |
| Show details on hover | CSS: `.menu-item:hover::after { content: attr(data-detail); }` | Displays heuristic name as a text overlay |
| Object-based menu items | CSS: Circular `.icon` with white background | Visual affordance for clickability |
| Interactive feedback | JavaScript: dims non-focused items (`opacity: 0.6`) | Enhances focus+context illusion |

---

## 3. Implementation Breakdown — Code to Concept

### HTML — Structure & Semantics
Uses a semantic `<nav>` container and self-contained `.menu-item` objects. Each item stores its descriptive text in `data-detail` so the CSS can reveal it via `::after`.

Example snippet:

```html
<nav class="dock-container">
  <div class="menu-item" data-detail="System Status">
    <div class="icon">📘</div>
    <span class="label">U#1</span>
  </div>
  <!-- ... 9 more items -->
</nav>
```

Why: `<nav>` provides navigation semantics; `data-detail` avoids extra DOM elements for the overlay text.

### CSS — Visual Design & Fisheye Logic
Magnification and detail reveal are performed with transforms and pseudo-elements.

```css
.menu-item:hover {
  transform: scale(1.6) translateY(-15px);
}
.menu-item:hover::after {
  content: attr(data-detail);
  opacity: 1;
}
```

Why: `scale()` creates magnification and `translateY()` provides a lift; `::after` reveals details without changing markup.

### JavaScript — Enhanced Interaction
Dimming non-focused items reinforces the focus+context effect.

```javascript
item.addEventListener('mouseenter', () => {
  items.forEach(i => { if (i !== item) i.style.opacity = '0.6'; });
});
item.addEventListener('mouseleave', () => {
  items.forEach(i => i.style.opacity = '1');
});
```

Why: Reducing opacity on neighbors reduces distraction and visually centers attention on the focused item.

---

## 4. Usability Heuristics Integration

| Heuristic | How It’s Supported |
|---|---|
| Visibility of system status | Hovered item is magnified; details appear; non-focused items dimmed |
| Recognition rather than recall | All 10 heuristics visible; labels and details appear on demand |
| Consistency & standards | Uniform circular icons and consistent hover effects |
| Efficiency of use | Quick scanning without clicking; keyboard support extensible |
| Error prevention | Clear visual feedback prevents misselection; interaction is reversible |

---

## Final Justification Summary
- Applies HCI theory (focus+context, direct manipulation, Gestalt).
- Meets assignment requirements with clean, semantic code using HTML, CSS, and JavaScript.
- Enhances usability through visual feedback, recognition over recall, and error prevention.
- Presentation-ready: clear mappings between theory, code, and heuristics.

**Key Takeaway:** Fisheye menus are a usability-focused interaction pattern balancing focus with context—ideal for presenting structured information like usability heuristics.

---

## Project Files
- `Icons.html` — markup for the dock and menu items
- `style.css` — visual styling, layout and animation
- `test.js` — interaction logic
- `PRESENTATION_NOTES.md` — presentation notes (created earlier)

(See the project folder for the full sources.)

---

## Next Steps (suggested)
- Add keyboard navigation and ARIA attributes for accessibility.
- Add touch support for mobile devices.
- Create a small demo page with clickable examples that link to deeper explanations of each heuristic.

---

*README generated from supplied project description and code.*
