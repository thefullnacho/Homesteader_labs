# Homesteader Labs: Visual & Styling Principles

## 1. Core Philosophy: "The Weathered Node"
The aesthetic goal is **"Field Manual found in a Workshop."**
The interface should not feel like a pristine digital screen, but rather a salvaged terminal or a physical manual that has been handled with greasy hands, left in the sun, and exposed to the elements. It balances "Brutalist Utility" with "Organic Decay."

---

## 2. Color Palette & Theme
We use a restricted, earthy palette defined in `src/index.css`.

| Variable | Hex / Value | Semantic Role |
| :--- | :--- | :--- |
| `--bg-primary` | `#2d3336` (Dark Stone) | Main background, resembling slate or dark concrete. |
| `--bg-secondary` | `#373e42` (Lighter Stone) | UI panels, cards, and modal backgrounds. |
| `--text-primary` | `#E8D3BE` (Bone/Parchment) | Primary reading text. Legible but not stark white. |
| `--accent` | `#d35400` (Rust/Orange) | Highlights, borders, active states, warnings. The "Safety Orange" of industrial gear. |
| `--text-secondary` | `#7a8c7d` (Moss Green) | Subtitles, technical metadata, status indicators. |

**Dark Mode:** Shifts deeper to `#1c1917` (Warm Black) and `#292524` (Charcoal) for a "night ops" feel.

---

## 3. Texture & Atmosphere (The "Grit" Stack)
The "weathered" feel is achieved through a multi-layered CSS approach applied to the `body`.

### A. The Noise Layer (`body::before`)
*   **Technique:** SVG `feTurbulence` filter.
*   **Effect:** Creates a dynamic, grainy film grain across the entire viewport.
*   **Opacity:** `0.05` (Subtle).

### B. The Wear Layer (`body::after`)
*   **Technique:** Fixed background image (`subtle-concrete-mildew.jpg`) with `mix-blend-mode: multiply`.
*   **Effect:** Adds static "dirty" texture, making the background look like stained paper or concrete.
*   **Opacity:** `0.04` - `0.08`.

### C. Text Rendering
*   **Property:** `image-rendering: crisp-edges`.
*   **Effect:** Forces sharper, non-smoothed edges on pixels, mimicking older displays.
*   **Shadow:** `text-shadow: 0.5px 0.5px 1px rgba(0,0,0,0.4)`. Simulates "ink bleed" on paper.

---

## 4. Typography
*   **Primary Font:** `Courier New`, `Courier`, `Monospace`.
    *   **Usage:** All UI text, data, buttons. Enforces the "Terminal" / "Typewriter" vibe.
*   **Marginalia Font:** `Caveat` (Cursive).
    *   **Usage:** Handwritten notes, stamps, and corrections.
    *   **Styling:** Often rotated (`-2deg`) and absolute positioned (`z-index: 50`) to look like someone wrote on top of the screen.

---

## 5. UI Component Patterns

### The "Brutalist Block"
*   **Class:** `.brutalist-block`
*   **Style:** Thick borders (`2px solid var(--accent)`), hard edges (no border-radius), and a hard offset shadow (`box-shadow: 4px 4px 0px 0px`).
*   **Feel:** Heavy, industrial, bolted down.

### The "Field Station Box"
*   **Class:** `.field-station-box`
*   **Style:** Transparent background with a heavy border.
*   **Detail:** Includes a pseudo-element label (`REF_07G`) in the bottom-right corner, mimicking technical schematics.

### Tactile Labels
*   **Class:** `.dymo-label`
*   **Style:** Dark background, light text, embossed shadow, uppercase.
*   **Feel:** Looks like a physical Dymo tape label stuck onto the interface. Includes a press-down animation on click.

---

## 6. Animation Physics
Animations should feel mechanical, electrical, or fluid—never smooth and "digital."

*   **Condensation Glitch:** A "threatening" twitch effect (`@keyframes condensation-glitch`) that distorts position, blur, and contrast. Used on the Terminal container.
*   **Drip Effect:** A linear gradient animation (`@keyframes drip`) that slides down the screen, simulating water condensation on glass.
*   **Scan Flash:** A horizontal line (`@keyframes scan-flash`) mimicking a CRT refresh or short circuit.

---

## 7. Interaction Design
*   **Terminal:** Toggled via `Alt + T`. It is the "brain" of the site.
*   **Navigation:** Mechanical clicks.
*   **Boot Sequence:** A fake DOS-style boot screen (`<BootSequence />`) establishes the narrative context immediately.
