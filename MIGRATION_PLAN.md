# Archive Migration Plan: Homesteader Labs -> Ghost Instance

**Objective:** Replace the internal markdown-based Archive with a link to the external self-hosted Ghost instance at `https://archive.homesteaderlabs.com`. Remove all obsolete internal archive components and logic.

## 1. Navigation Update (`src/components/Navigation.jsx`)
*   **Current:** Iterates through `['SHOP', 'ARCHIVE', 'FABRICATION', 'WEATHER']` and renders `<button onClick={() => setView(item)}>` for each.
*   **Action:**
    *   Separate "ARCHIVE" from the view-switching list.
    *   Create a specific `<a>` tag or button for "ARCHIVE" that points to `https://archive.homesteaderlabs.com` with `target="_blank"`.
    *   Maintain the `.dymo-label` styling for consistency.

## 2. App Logic Cleanup (`src/App.jsx`)
*   **Remove Imports:**
    *   `import ArchiveView from './views/ArchiveView';`
    *   `import archiveData from '../public/data/archive.json';`
*   **Remove State:**
    *   `const [archive, setArchive] = useState(...)`
    *   `useEffect` hooks related to persisting `hl_archive`.
*   **Remove View Rendering:**
    *   `{view === 'ARCHIVE' && <ArchiveView posts={archive} />}`
*   **Update Props:**
    *   Stop passing `archive` prop to `<TerminalOverlay />`.

## 3. Terminal Overlay Cleanup (`src/components/TerminalOverlay.jsx`)
*   **Remove Props:** Remove `archive` from destructured props.
*   **Remove Commands:**
    *   `ls /archive`: Remove logic.
    *   `cat [id]`: Remove logic for finding posts in `archive`.
    *   `write`: Remove or update the "Save Log" functionality since there is no local archive to write to (or keep it as a "local" simulator). *Recommendation: Keep `write` as a fun local feature but remove the "Upload to /content/logs" prompt.*
*   **Update Help Text:** Remove `/archive` from directory listings.

## 4. File Removal
Delete the following obsolete files and directories:
*   `src/views/ArchiveView.jsx`
*   `src/lib/archive.js` (Archive utility)
*   `src/scripts/build-archive.js` (Build script)
*   `content/logs/` (Markdown content)
*   `public/data/archive.json` (Generated data)

## 5. Build Configuration (`package.json`)
*   **Update Scripts:**
    *   Remove `node scripts/build-archive.js` from `dev` and `build` scripts.
    *   Remove `build-archive` script entry.

## 6. Flavor Text Updates
*   **`src/components/BootSequence.jsx`:** Change "DECRYPTING ARCHIVE LOGS..." to "ESTABLISHING UPLINK TO ARCHIVE NODE...".
