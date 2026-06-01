# Changed

- Added `classroom-field-lab/` as a standalone static portfolio site that does not modify the existing Vite/React app at the repo root.
- Added `classroom-field-lab/index.html` with the Home page, contact links, hero, featured work, pipeline, field notes preview, and contact band.
- Added `classroom-field-lab/style.css` with the responsive visual system, scroll-reveal styling, mobile navigation styling, and the two-card hero lab layout.
- Added `classroom-field-lab/script.js` for mobile nav, reveal-on-scroll, pointer parallax, and the email reveal behavior.
- Added `classroom-field-lab/pages/portfolio.html`, `field-notes.html`, `ai-workflow.html`, `tools.html`, and `about.html` for the six-page information architecture requested by the user.
- Added `classroom-field-lab/README.md` with Cloudflare Pages deployment instructions and the site structure.
- Added `classroom-field-lab/assets/.gitkeep` as the asset folder placeholder.
- Set site name to `Classroom Field Lab` and recommended Cloudflare Pages project name to `classroom-field-lab`.
- Set LinkedIn to `https://linkedin.com/in/hanihamadah`, GitHub to `https://github.com/hanihamadah`, and email to `hani.hamadeh@gmail.com`.
- Set both hero buttons, plus the contact “Physics tools page” links, to `https://hanihamadah.github.io/physics-learning-tools/`.
- Changed the email contact item to show `Email` initially, then reveal `hani.hamadeh@gmail.com` on first click while preserving the `mailto:` link for subsequent use.
- Replaced the original normal-force hero card with a video card titled `Physics simulation in action`, using `classroom-field-lab/assets/physics-simulation-in-action.mov`.
- Added cache-busting query strings to CSS/JS references, currently `?v=video-card-2`, because the in-app browser kept serving stale styles during iteration.
- Simplified the hero lab illustration to exactly two cards: the physics simulation video card and a compact classroom build-loop card. Removed the previous prompt, classroom note, mini workflow, velocity-time graph, and normal-force cards.
- Polished the hero video card by using `object-fit: contain` so the simulation UI is not cropped.
- Polished the narrow/mobile hero lab layout so the video card and classroom build-loop card flow with an `18px` gap instead of desktop absolute positioning.

# Failed attempts

- `python3 -m http.server 4173` failed in the sandbox with `PermissionError: [Errno 1] Operation not permitted`; rerunning the same command with approved escalation succeeded and started the local preview at `http://localhost:4173`.
- `git diff -- classroom-field-lab/...` showed no useful output because the whole `classroom-field-lab/` folder is untracked; inspect files directly or use `git status --short`.
- Early normal-force card versions were removed because the user did not like that card; avoid restoring them.
- `ps -p 84195 -o pid=,command=` was blocked by sandboxing with `operation not permitted`; do not rely on `ps` to confirm the preview process in this sandbox.

# Next step

Review the live page at `http://localhost:4173/?v=video-card-2`, especially the physics simulation video card on desktop and mobile. It was verified in the in-app browser and with local Chromium screenshots at desktop and mobile sizes. If it looks good, stage only `classroom-field-lab/` and `handoff.md`; leave unrelated untracked folders such as `Prompting-Is-Thinking-Clearly/`, `generated-assessments/`, `handoffs/`, and `tools/` alone unless the user explicitly asks for them.
