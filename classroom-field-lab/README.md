# Classroom Field Lab

Suggested site name: **Classroom Field Lab**

Suggested Cloudflare Pages project name: **classroom-field-lab**

This is a static personal portfolio and classroom field notebook for a Grade 12 physics teacher in Dubai who uses AI assistants to build practical classroom tools, worksheets, simulations, prompts, assessment workflows, and reflection-based teaching ideas.

## Structure

- `index.html` - Home page and scrollytelling overview
- `style.css` - Shared responsive visual system
- `script.js` - Mobile navigation, scroll reveals, and subtle mouse parallax
- `pages/portfolio.html` - Project portfolio
- `pages/field-notes.html` - Practical classroom reflection posts
- `pages/ai-workflow.html` - How AI assistants fit into the teaching workflow
- `pages/tools.html` - Gallery of tools and experiments
- `pages/about.html` - Human teacher profile
- `assets/` - Reserved for future images, PDFs, icons, or downloadable samples

## Information Architecture

1. Home
   - Hero: Physics Teaching, AI Tools, and Classroom Systems
   - What this site is
   - Featured work
   - Classroom friction to tool
   - Latest field notes
   - Contact and links

2. Portfolio
   - Physics simulations
   - AI-assisted worksheets
   - Student feedback automation
   - Assessment design
   - Moodle / LMS resources
   - Prompt libraries
   - Teacher productivity systems

3. Classroom Field Notes
   - What happened in class
   - What I noticed
   - What I tried
   - What worked
   - What I would change next time
   - AI prompt or tool idea connected to it

4. AI in My Workflow
   - ChatGPT for ideas, drafting, restructuring, tools, prompts, and simulations
   - Claude for long-form writing, planning, and code-heavy tasks
   - AI as a thinking partner
   - AI as an implementation layer
   - Teacher judgment as the final filter

5. Tools / Experiments
   - Tool name
   - Student problem it addresses
   - What students do
   - Link
   - Status

6. About
   - Grade 12 physics teacher
   - Based in Dubai
   - Physics learning, AI, automation, simulations, and educational technology
   - Practical classroom improvement

## Local Preview

Because this is a static site, you can open `index.html` directly in a browser.

For a local server from this folder:

```bash
python3 -m http.server 4173
```

Then visit:

```text
http://localhost:4173
```

## Deploy to Cloudflare Pages

### Option A: Direct Upload

1. Go to Cloudflare Dashboard.
2. Open Workers & Pages.
3. Create a Pages project.
4. Choose Direct Upload.
5. Upload the contents of this `classroom-field-lab` folder.
6. Use `classroom-field-lab` as the project name.

### Option B: Git Connected Deploy

1. Push this folder to a GitHub repository.
2. In Cloudflare Pages, choose Connect to Git.
3. Select the repository.
4. Set build settings:
   - Framework preset: None
   - Build command: leave blank
   - Build output directory: `classroom-field-lab`
5. Deploy.

## Editing Notes

- Replace placeholder links in `index.html` and `pages/about.html`.
- Add real project links in `pages/portfolio.html`.
- Add more tool cards in `pages/tools.html`.
- Add future field notes by copying a `field-post` block in `pages/field-notes.html`.
- The site respects `prefers-reduced-motion` and stays readable without animation.
