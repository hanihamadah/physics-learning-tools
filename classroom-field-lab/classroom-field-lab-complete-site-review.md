# Classroom Field Lab - Complete Site Review Document

Generated: 2026-06-01T08:07:21.527Z
Local preview URL: http://127.0.0.1:4173/?v=video-card-2
Site folder: `classroom-field-lab/`

## Review Request

Please review this standalone static portfolio site for content clarity, visual consistency, accessibility, responsive behavior, broken links, duplicated copy, and any issues that would affect deployment to Cloudflare Pages. The binary video asset is not embedded below, but its manifest is included.

## Site Structure

- `README.md`
- `index.html`
- `pages/portfolio.html`
- `pages/field-notes.html`
- `pages/ai-workflow.html`
- `pages/tools.html`
- `pages/about.html`
- `style.css`
- `script.js`
- `assets/physics-simulation-in-action.mov`
- `assets/.gitkeep`

## Asset Manifest

| Asset | Size | SHA-256 | Notes |
| --- | ---: | --- | --- |
| `assets/physics-simulation-in-action.mov` | 27,228,736 bytes | `badc8a33a0d716d86b7b04c64bba4fcd72dd30fb075d6c79d4e8aaee9fbcb2ee` | Hero physics simulation video referenced by `index.html`. Not embedded because it is binary media. |

## Source Files

### `README.md`

```markdown
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

`\u200b``bash
python3 -m http.server 4173
`\u200b``

Then visit:

`\u200b``text
http://localhost:4173
`\u200b``

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

```

### `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="A practical portfolio and field notebook from a Grade 12 physics teacher in Dubai using AI assistants to build classroom tools, worksheets, simulations, and workflows."
    />
    <title>Classroom Field Lab | Physics Teaching, AI Tools, and Classroom Systems</title>
    <link rel="stylesheet" href="style.css?v=video-card-2" />
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <nav class="nav-shell" aria-label="Primary navigation">
        <a class="brand" href="index.html" aria-label="Classroom Field Lab home">
          <span class="brand-mark">CFL</span>
          <span>Classroom Field Lab</span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-menu">
          <span></span>
          <span></span>
          <span></span>
          <span class="sr-only">Menu</span>
        </button>
        <div class="nav-links" id="site-menu">
          <a href="pages/portfolio.html">Portfolio</a>
          <a href="pages/field-notes.html">Field Notes</a>
          <a href="pages/ai-workflow.html">AI Workflow</a>
          <a href="pages/tools.html">Tools</a>
          <a href="pages/about.html">About</a>
        </div>
      </nav>
    </header>

    <main id="main">
      <section class="hero section-band">
        <div class="hero-copy reveal">
          <p class="eyebrow">From classroom friction to practical AI-supported tools</p>
          <h1>Physics Teaching, AI Tools, and Classroom Systems</h1>
          <p class="hero-subtitle">
            Practical ideas from a Grade 12 physics classroom. Built from real friction, tested
            through real teaching, and improved with AI assistants.
          </p>
          <div class="button-row">
            <a class="button primary" href="https://hanihamadah.github.io/physics-learning-tools/">Explore the Work</a>
            <a class="button secondary" href="https://hanihamadah.github.io/physics-learning-tools/">See Classroom Tools</a>
          </div>
        </div>

        <div class="hero-lab" aria-label="Classroom physics simulation and build loop scene">
          <div class="grid-plane"></div>
          <div class="lab-card simulation-card parallax" data-depth="0.03">
            <span>Physics simulation in action</span>
            <div class="simulation-media">
              <video autoplay muted loop playsinline preload="metadata" aria-label="Atwood system table and pulley simulation">
                <source src="assets/physics-simulation-in-action.mov" />
              </video>
            </div>
          </div>
          <div class="lab-card loop-card parallax" data-depth="0.045">
            <span>Classroom build loop</span>
            <ul>
              <li>
                <strong>Notice</strong>
                <p>Find the repeated misconception or workflow friction.</p>
              </li>
              <li>
                <strong>Build</strong>
                <p>Turn it into a focused tool, worksheet, or prompt.</p>
              </li>
              <li>
                <strong>Test</strong>
                <p>Use it with students and revise from evidence.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section-band two-column">
        <div class="sticky-label">
          <p class="eyebrow">What this site is</p>
          <h2>A portfolio that behaves like a field notebook.</h2>
        </div>
        <div class="content-stack reveal">
          <p class="lead">
            This is a personal portfolio and practical teaching lab for physics learning, classroom
            systems, and AI-assisted build work. The focus is not on perfect theory. It is on what
            actually helps students think more clearly, helps teachers move faster, and makes a
            busy classroom system easier to run.
          </p>
          <p>
            Each project starts with a real classroom pressure point: a misconception that keeps
            returning, a worksheet that takes too long to prepare, a feedback loop that arrives too
            late, or a simulation that students need to manipulate before the idea clicks.
          </p>
        </div>
      </section>

      <section class="section-band">
        <div class="section-heading reveal">
          <p class="eyebrow">Featured work</p>
          <h2>Teacher-built systems, prompts, and physics tools.</h2>
        </div>
        <div class="card-grid feature-grid">
          <article class="work-card reveal">
            <span class="card-index">01</span>
            <h3>Physics learning tools</h3>
            <p>Small simulations and interactives that let students test forces, motion, energy, and graph ideas directly.</p>
          </article>
          <article class="work-card reveal">
            <span class="card-index">02</span>
            <h3>AI-assisted worksheets</h3>
            <p>Drafting and improving practice sets, hints, model answers, and extension tasks without losing teacher judgment.</p>
          </article>
          <article class="work-card reveal">
            <span class="card-index">03</span>
            <h3>Prompting for better thinking</h3>
            <p>Prompt patterns that push students to compare, explain, diagnose, and revise instead of simply asking for answers.</p>
          </article>
          <article class="work-card reveal">
            <span class="card-index">04</span>
            <h3>Assessment workflows</h3>
            <p>Rubric drafts, misconception banks, feedback templates, and re-teaching plans built around evidence from student work.</p>
          </article>
          <article class="work-card reveal">
            <span class="card-index">05</span>
            <h3>Classroom simulations</h3>
            <p>Browser-based activities for graph interpretation, forces, pulleys, displacement, and exam preparation.</p>
          </article>
          <article class="work-card reveal">
            <span class="card-index">06</span>
            <h3>Teacher automation systems</h3>
            <p>Practical workflows that reduce repeated admin effort so planning time can return to teaching decisions.</p>
          </article>
        </div>
      </section>

      <section class="section-band pipeline-section">
        <div class="section-heading reveal">
          <p class="eyebrow">Classroom friction to tool</p>
          <h2>The build process starts with a teaching problem.</h2>
        </div>
        <div class="pipeline" aria-label="Classroom problem to reflection pipeline">
          <div class="pipeline-step reveal">
            <span>1</span>
            <h3>Classroom problem</h3>
            <p>Students stall on a graph, force diagram, or exam habit.</p>
          </div>
          <div class="pipeline-step reveal">
            <span>2</span>
            <h3>Teacher insight</h3>
            <p>I identify the hidden decision students are missing.</p>
          </div>
          <div class="pipeline-step reveal">
            <span>3</span>
            <h3>AI-assisted build</h3>
            <p>ChatGPT or Claude helps turn the idea into material quickly.</p>
          </div>
          <div class="pipeline-step reveal">
            <span>4</span>
            <h3>Classroom use</h3>
            <p>The tool meets real students, real time limits, and real confusion.</p>
          </div>
          <div class="pipeline-step reveal">
            <span>5</span>
            <h3>Reflection</h3>
            <p>I revise the prompt, worksheet, simulation, or workflow.</p>
          </div>
        </div>
      </section>

      <section class="section-band">
        <div class="section-heading reveal">
          <p class="eyebrow">Latest field notes</p>
          <h2>Short reflections from classroom problems.</h2>
        </div>
        <div class="note-grid">
          <article class="note-card reveal">
            <p class="note-meta">Attention</p>
            <h3>When students copy the method but miss the decision</h3>
            <p>The worksheet was not too hard. The decision point was invisible. The fix was to make students name the choice before calculating.</p>
          </article>
          <article class="note-card reveal">
            <p class="note-meta">Misconceptions</p>
            <h3>The same force error kept returning</h3>
            <p>A quick prompt turned five common wrong answers into a diagnostic warm-up and a better re-teach sequence.</p>
          </article>
          <article class="note-card reveal">
            <p class="note-meta">Workflow</p>
            <h3>Feedback that arrives while it can still change behavior</h3>
            <p>I used AI to draft response banks, then filtered them through the exact mistakes students made that week.</p>
          </article>
        </div>
        <div class="center-action reveal">
          <a class="text-link" href="pages/field-notes.html">Read the field notes</a>
        </div>
      </section>

      <section class="contact-band reveal">
        <div>
          <p class="eyebrow">Contact and links</p>
          <h2>For physics tools, classroom systems, and practical AI teaching work.</h2>
        </div>
        <div class="link-list" aria-label="Contact links">
          <a href="https://linkedin.com/in/hanihamadah" aria-label="LinkedIn profile">LinkedIn</a>
          <a href="https://github.com/hanihamadah" aria-label="GitHub profile">GitHub</a>
          <a href="https://hanihamadah.github.io/physics-learning-tools/">Physics tools page</a>
          <a href="mailto:hani.hamadeh@gmail.com" data-email-reveal="hani.hamadeh@gmail.com">Email</a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <p>Classroom Field Lab. Practical physics teaching, AI-supported tools, and reflective classroom systems.</p>
    </footer>

    <script src="script.js?v=video-card-2"></script>
  </body>
</html>

```

### `pages/portfolio.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Portfolio projects from Classroom Field Lab." />
    <title>Portfolio | Classroom Field Lab</title>
    <link rel="stylesheet" href="../style.css?v=video-card-2" />
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <nav class="nav-shell" aria-label="Primary navigation">
        <a class="brand" href="../index.html"><span class="brand-mark">CFL</span><span>Classroom Field Lab</span></a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-menu"><span></span><span></span><span></span><span class="sr-only">Menu</span></button>
        <div class="nav-links" id="site-menu">
          <a href="portfolio.html" aria-current="page">Portfolio</a>
          <a href="field-notes.html">Field Notes</a>
          <a href="ai-workflow.html">AI Workflow</a>
          <a href="tools.html">Tools</a>
          <a href="about.html">About</a>
        </div>
      </nav>
    </header>
    <main id="main">
      <section class="page-hero section-band reveal">
        <p class="eyebrow">Portfolio</p>
        <h1>Projects built from classroom pressure points.</h1>
        <p class="lead">These are practical examples of tools, prompts, worksheets, simulations, and workflows designed around Grade 12 physics teaching. Each project begins with a problem students or teachers actually face.</p>
      </section>
      <section class="section-band project-grid">
        <article class="project-card reveal">
          <div class="project-top"><span>Physics simulations</span><strong>Classroom-tested</strong></div>
          <h2>Forces and motion mini-labs</h2>
          <dl>
            <dt>Problem</dt><dd>Students can recite Newton's laws but struggle to connect vectors, graphs, and motion.</dd>
            <dt>What I built</dt><dd>Browser activities with draggable forces, changing graphs, and quick prediction prompts.</dd>
            <dt>Tools used</dt><dd>HTML, CSS, JavaScript, ChatGPT, Claude.</dd>
            <dt>Classroom value</dt><dd>Students test predictions before the worked example appears.</dd>
            <dt>Link</dt><dd><a href="../index.html">Add simulation link</a></dd>
          </dl>
        </article>
        <article class="project-card reveal">
          <div class="project-top"><span>AI-assisted worksheets</span><strong>In progress</strong></div>
          <h2>Misconception-first worksheet builder</h2>
          <dl>
            <dt>Problem</dt><dd>Practice sheets often check calculation steps but miss the misconception behind the error.</dd>
            <dt>What I built</dt><dd>A prompt workflow that starts with common wrong ideas, then drafts questions, distractors, hints, and model answers.</dd>
            <dt>Tools used</dt><dd>ChatGPT Plus, Claude Pro, teacher-edited rubrics.</dd>
            <dt>Classroom value</dt><dd>Students meet the exact thinking trap before it becomes a test habit.</dd>
            <dt>Link</dt><dd><a href="#">Add worksheet sample</a></dd>
          </dl>
        </article>
        <article class="project-card reveal">
          <div class="project-top"><span>Student feedback automation</span><strong>Prototype</strong></div>
          <h2>Feedback bank for physics reasoning</h2>
          <dl>
            <dt>Problem</dt><dd>Good feedback takes time, and delayed feedback loses force.</dd>
            <dt>What I built</dt><dd>A reusable bank of comments tied to evidence, reasoning, graph use, units, and explanation quality.</dd>
            <dt>Tools used</dt><dd>AI drafting, spreadsheet organization, teacher final review.</dd>
            <dt>Classroom value</dt><dd>Feedback becomes faster without becoming generic.</dd>
            <dt>Link</dt><dd><a href="#">Add workflow link</a></dd>
          </dl>
        </article>
        <article class="project-card reveal">
          <div class="project-top"><span>Assessment design</span><strong>Classroom-tested</strong></div>
          <h2>Exam prep question ladder</h2>
          <dl>
            <dt>Problem</dt><dd>Students jump into exam questions before they understand the smaller decisions inside them.</dd>
            <dt>What I built</dt><dd>A ladder from concept check to representation choice to exam-style response.</dd>
            <dt>Tools used</dt><dd>Claude for structure, ChatGPT for variants, teacher moderation.</dd>
            <dt>Classroom value</dt><dd>Students see exam preparation as a sequence of decisions, not a pile of questions.</dd>
            <dt>Link</dt><dd><a href="#">Add prep resource</a></dd>
          </dl>
        </article>
        <article class="project-card reveal">
          <div class="project-top"><span>Moodle / LMS resources</span><strong>In progress</strong></div>
          <h2>Topic pages with quick checks</h2>
          <dl>
            <dt>Problem</dt><dd>LMS pages can become storage shelves instead of learning paths.</dd>
            <dt>What I built</dt><dd>Topic pages organized around short explanation, worked choice, practice, and reflection.</dd>
            <dt>Tools used</dt><dd>Moodle, AI-assisted copy drafting, teacher sequencing.</dd>
            <dt>Classroom value</dt><dd>Students know what to do next without hunting through files.</dd>
            <dt>Link</dt><dd><a href="#">Add LMS sample</a></dd>
          </dl>
        </article>
        <article class="project-card reveal">
          <div class="project-top"><span>Prompt libraries</span><strong>Prototype</strong></div>
          <h2>Physics teacher prompt library</h2>
          <dl>
            <dt>Problem</dt><dd>Useful prompts get lost in chat history and are hard to reuse under time pressure.</dd>
            <dt>What I built</dt><dd>A categorized prompt set for lesson planning, misconceptions, worksheet repair, simulations, and reflection.</dd>
            <dt>Tools used</dt><dd>ChatGPT, Claude, markdown notes.</dd>
            <dt>Classroom value</dt><dd>AI support becomes repeatable and easier to improve.</dd>
            <dt>Link</dt><dd><a href="#">Add prompt library</a></dd>
          </dl>
        </article>
      </section>
    </main>
    <footer class="site-footer"><p>Classroom Field Lab. Built for practical physics teaching.</p></footer>
    <script src="../script.js?v=video-card-2"></script>
  </body>
</html>

```

### `pages/field-notes.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Short practical classroom field notes." />
    <title>Classroom Field Notes | Classroom Field Lab</title>
    <link rel="stylesheet" href="../style.css?v=video-card-2" />
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <nav class="nav-shell" aria-label="Primary navigation">
        <a class="brand" href="../index.html"><span class="brand-mark">CFL</span><span>Classroom Field Lab</span></a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-menu"><span></span><span></span><span></span><span class="sr-only">Menu</span></button>
        <div class="nav-links" id="site-menu">
          <a href="portfolio.html">Portfolio</a>
          <a href="field-notes.html" aria-current="page">Field Notes</a>
          <a href="ai-workflow.html">AI Workflow</a>
          <a href="tools.html">Tools</a>
          <a href="about.html">About</a>
        </div>
      </nav>
    </header>
    <main id="main">
      <section class="page-hero section-band reveal">
        <p class="eyebrow">Classroom Field Notes</p>
        <h1>Short reflections from real teaching problems.</h1>
        <p class="lead">Each note is deliberately practical: what happened, what I noticed, what I tried, what worked, what I would change, and the AI prompt or tool idea connected to it.</p>
      </section>
      <section class="section-band notes-list">
        <article class="field-post reveal">
          <p class="note-meta">Graph interpretation</p>
          <h2>Students read the line, but not the story</h2>
          <div class="post-columns">
            <p><strong>What happened in class:</strong> Several students could calculate gradient but could not explain what the changing gradient meant physically.</p>
            <p><strong>What I noticed:</strong> They treated the graph as a math object first and a motion story second.</p>
            <p><strong>What I tried:</strong> I added a prediction step before calculation: describe the motion in one sentence, then estimate the sign and size of the gradient.</p>
            <p><strong>What worked:</strong> Students began arguing about meaning before reaching for formulas.</p>
            <p><strong>What I would change next time:</strong> Use two wrong motion stories and ask students to reject one with evidence from the graph.</p>
            <p><strong>AI prompt or tool idea:</strong> Generate three graph stories with one subtle misconception in each, then create a quick diagnostic question.</p>
          </div>
        </article>
        <article class="field-post reveal">
          <p class="note-meta">Forces</p>
          <h2>The force diagram looked correct until the explanation began</h2>
          <div class="post-columns">
            <p><strong>What happened in class:</strong> Students drew the right arrows but still explained motion as if a forward force must be larger whenever an object moves forward.</p>
            <p><strong>What I noticed:</strong> The diagram had become a drawing routine, not a reasoning tool.</p>
            <p><strong>What I tried:</strong> I asked students to write one sentence for each arrow: source, direction, and what would change if it disappeared.</p>
            <p><strong>What worked:</strong> The source question exposed invented forces quickly.</p>
            <p><strong>What I would change next time:</strong> Add peer checking with a simple rule: no source, no force.</p>
            <p><strong>AI prompt or tool idea:</strong> Create a set of force diagrams with one hidden error and ask students to diagnose the source problem.</p>
          </div>
        </article>
        <article class="field-post reveal">
          <p class="note-meta">Assessment</p>
          <h2>Feedback needs to arrive before the next mistake hardens</h2>
          <div class="post-columns">
            <p><strong>What happened in class:</strong> Marking showed repeated errors, but the full feedback cycle was too slow to affect the next lesson.</p>
            <p><strong>What I noticed:</strong> I needed faster categorization, not faster typing.</p>
            <p><strong>What I tried:</strong> I grouped responses into misconception bands and used AI to draft concise feedback stems for each band.</p>
            <p><strong>What worked:</strong> Feedback stayed specific because the categories came from actual student work.</p>
            <p><strong>What I would change next time:</strong> Build a reusable feedback table by topic.</p>
            <p><strong>AI prompt or tool idea:</strong> Turn anonymized student errors into feedback bands, re-teaching prompts, and one follow-up question per band.</p>
          </div>
        </article>
      </section>
    </main>
    <footer class="site-footer"><p>Classroom Field Lab. Reflection that leads to better tools.</p></footer>
    <script src="../script.js?v=video-card-2"></script>
  </body>
</html>

```

### `pages/ai-workflow.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="How AI assistants support practical physics teaching workflows." />
    <title>AI in My Workflow | Classroom Field Lab</title>
    <link rel="stylesheet" href="../style.css?v=video-card-2" />
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <nav class="nav-shell" aria-label="Primary navigation">
        <a class="brand" href="../index.html"><span class="brand-mark">CFL</span><span>Classroom Field Lab</span></a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-menu"><span></span><span></span><span></span><span class="sr-only">Menu</span></button>
        <div class="nav-links" id="site-menu">
          <a href="portfolio.html">Portfolio</a>
          <a href="field-notes.html">Field Notes</a>
          <a href="ai-workflow.html" aria-current="page">AI Workflow</a>
          <a href="tools.html">Tools</a>
          <a href="about.html">About</a>
        </div>
      </nav>
    </header>
    <main id="main">
      <section class="page-hero section-band reveal">
        <p class="eyebrow">AI in my workflow</p>
        <h1>AI helps turn classroom judgment into usable materials faster.</h1>
        <p class="lead">AI does not replace the teacher. It helps move from a teaching observation to a draft, prototype, worksheet, prompt, simulation, or workflow while the teacher remains the final filter.</p>
      </section>
      <section class="section-band workflow-grid">
        <article class="workflow-card reveal">
          <h2>ChatGPT</h2>
          <p>I use ChatGPT for idea generation, quick drafting, restructuring, lesson tools, image prompts, alternative explanations, and simulation sketches. It is useful when I need momentum and several options quickly.</p>
        </article>
        <article class="workflow-card reveal">
          <h2>Claude</h2>
          <p>I use Claude for long-form writing, structured planning, code-heavy tasks, careful editing, and turning messy classroom notes into clearer sequences. It is useful when the shape of the work matters.</p>
        </article>
        <article class="workflow-card reveal">
          <h2>AI as thinking partner</h2>
          <p>I ask AI to challenge a worksheet, identify missing prerequisite knowledge, generate misconception checks, and suggest alternative routes through the same concept.</p>
        </article>
        <article class="workflow-card reveal">
          <h2>AI as implementation layer</h2>
          <p>Once the teaching idea is clear, AI helps build the first version: HTML tools, worksheet variants, feedback tables, LMS text, prompt banks, or reflection templates.</p>
        </article>
        <article class="workflow-card wide reveal">
          <h2>Teacher judgment is the final filter</h2>
          <p>The final decision stays with the teacher: what is appropriate for these students, this exam board, this lesson timing, and this classroom culture. AI can draft, accelerate, and provoke useful thinking, but it cannot know the class the way the teacher does.</p>
        </article>
      </section>
    </main>
    <footer class="site-footer"><p>Classroom Field Lab. AI support with teacher judgment in front.</p></footer>
    <script src="../script.js?v=video-card-2"></script>
  </body>
</html>

```

### `pages/tools.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Physics learning tools and classroom experiments." />
    <title>Tools and Experiments | Classroom Field Lab</title>
    <link rel="stylesheet" href="../style.css?v=video-card-2" />
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <nav class="nav-shell" aria-label="Primary navigation">
        <a class="brand" href="../index.html"><span class="brand-mark">CFL</span><span>Classroom Field Lab</span></a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-menu"><span></span><span></span><span></span><span class="sr-only">Menu</span></button>
        <div class="nav-links" id="site-menu">
          <a href="portfolio.html">Portfolio</a>
          <a href="field-notes.html">Field Notes</a>
          <a href="ai-workflow.html">AI Workflow</a>
          <a href="tools.html" aria-current="page">Tools</a>
          <a href="about.html">About</a>
        </div>
      </nav>
    </header>
    <main id="main">
      <section class="page-hero section-band reveal">
        <p class="eyebrow">Tools / Experiments</p>
        <h1>A gallery of small tools for physics learning and teacher workflow.</h1>
        <p class="lead">These experiments are intentionally small. A useful classroom tool should solve one student problem clearly before it grows.</p>
      </section>
      <section class="section-band tool-gallery">
        <article class="tool-card reveal">
          <strong>Classroom-tested</strong>
          <h2>Distance and displacement visualizer</h2>
          <p><span>Student problem:</span> Confusing total distance with displacement.</p>
          <p><span>What students do:</span> Drag a path, compare the traveled route with the straight-line change in position, then write a one-sentence distinction.</p>
          <a href="#">Add tool link</a>
        </article>
        <article class="tool-card reveal">
          <strong>Prototype</strong>
          <h2>Pulley system force explorer</h2>
          <p><span>Student problem:</span> Treating pulleys as magic rather than force redirection and tension constraints.</p>
          <p><span>What students do:</span> Change masses and compare expected acceleration with the system behavior.</p>
          <a href="#">Add tool link</a>
        </article>
        <article class="tool-card reveal">
          <strong>In progress</strong>
          <h2>Graph story sorter</h2>
          <p><span>Student problem:</span> Reading graphs as shapes instead of physical situations.</p>
          <p><span>What students do:</span> Match motion stories to position-time and velocity-time graphs, then justify the match.</p>
          <a href="#">Add link</a>
        </article>
        <article class="tool-card reveal">
          <strong>Prototype</strong>
          <h2>Misconception diagnostic prompt pack</h2>
          <p><span>Student problem:</span> Repeating the same wrong reasoning across different question contexts.</p>
          <p><span>What students do:</span> Answer quick checks designed around common wrong ideas, then revise their explanation.</p>
          <a href="#">Add link</a>
        </article>
        <article class="tool-card reveal">
          <strong>In progress</strong>
          <h2>Feedback band generator</h2>
          <p><span>Student problem:</span> Receiving feedback too late or too generally to act on it.</p>
          <p><span>What students do:</span> Use targeted next-step prompts matched to the error pattern in their work.</p>
          <a href="#">Add link</a>
        </article>
        <article class="tool-card reveal">
          <strong>Classroom-tested</strong>
          <h2>Physics final exam prep hub</h2>
          <p><span>Student problem:</span> Treating revision as passive reading rather than active decision practice.</p>
          <p><span>What students do:</span> Move through focused practice, worked choices, and reflection prompts.</p>
          <a href="#">Add tool link</a>
        </article>
      </section>
    </main>
    <footer class="site-footer"><p>Classroom Field Lab. Small tools, tested against real confusion.</p></footer>
    <script src="../script.js?v=video-card-2"></script>
  </body>
</html>

```

### `pages/about.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="About the Grade 12 physics teacher behind Classroom Field Lab." />
    <title>About | Classroom Field Lab</title>
    <link rel="stylesheet" href="../style.css?v=video-card-2" />
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <nav class="nav-shell" aria-label="Primary navigation">
        <a class="brand" href="../index.html"><span class="brand-mark">CFL</span><span>Classroom Field Lab</span></a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-menu"><span></span><span></span><span></span><span class="sr-only">Menu</span></button>
        <div class="nav-links" id="site-menu">
          <a href="portfolio.html">Portfolio</a>
          <a href="field-notes.html">Field Notes</a>
          <a href="ai-workflow.html">AI Workflow</a>
          <a href="tools.html">Tools</a>
          <a href="about.html" aria-current="page">About</a>
        </div>
      </nav>
    </header>
    <main id="main">
      <section class="page-hero section-band about-hero reveal">
        <p class="eyebrow">About</p>
        <h1>A physics teacher building practical classroom systems.</h1>
        <p class="lead">I am a Grade 12 physics teacher based in Dubai. I am interested in physics learning, AI, automation, simulations, educational technology, and the small systems that make teaching more workable.</p>
      </section>
      <section class="section-band two-column">
        <div class="sticky-label">
          <p class="eyebrow">Teaching profile</p>
          <h2>Practical improvement over performance polish.</h2>
        </div>
        <div class="content-stack reveal">
          <p>I use AI assistants such as ChatGPT Plus and Claude Pro to build classroom materials faster, but the starting point is always teaching judgment: what students misunderstood, what took too long, what explanation failed, what kind of practice is missing, and what a teacher needs in the middle of a busy week.</p>
          <p>My work sits between physics teaching and tool building. Sometimes the output is a worksheet. Sometimes it is a prompt library, a simulation, a Moodle resource, a feedback workflow, or a reflection note that helps me make the next lesson sharper.</p>
          <p>The aim is simple: reduce teacher workload where possible, improve student understanding where it matters, and keep the human part of teaching at the center.</p>
        </div>
      </section>
      <section class="contact-band reveal">
        <div>
          <p class="eyebrow">Connect</p>
          <h2>Placeholder links ready for your real profiles.</h2>
        </div>
        <div class="link-list">
          <a href="https://linkedin.com/in/hanihamadah">LinkedIn</a>
          <a href="https://github.com/hanihamadah">GitHub</a>
          <a href="https://hanihamadah.github.io/physics-learning-tools/">Physics tools page</a>
          <a href="mailto:hani.hamadeh@gmail.com" data-email-reveal="hani.hamadeh@gmail.com">Email</a>
        </div>
      </section>
    </main>
    <footer class="site-footer"><p>Classroom Field Lab. Human teaching, practical tools.</p></footer>
    <script src="../script.js?v=video-card-2"></script>
  </body>
</html>

```

### `style.css`

```css
:root {
  --ink: #111318;
  --muted: #5a6472;
  --paper: #ffffff;
  --soft: #f4f6f8;
  --soft-blue: #eaf1fb;
  --line: #dbe2ea;
  --blue: #123f73;
  --blue-2: #0a2540;
  --crimson: #9f1d35;
  --crimson-soft: #fae8ec;
  --shadow: 0 20px 60px rgba(18, 63, 115, 0.12);
  --radius: 8px;
  --max: 1180px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: var(--ink);
  background:
    linear-gradient(rgba(18, 63, 115, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(18, 63, 115, 0.035) 1px, transparent 1px),
    var(--paper);
  background-size: 42px 42px;
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.6;
  letter-spacing: 0;
}

body.nav-open {
  overflow: hidden;
}

a {
  color: inherit;
}

.skip-link,
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.skip-link:focus {
  z-index: 30;
  width: auto;
  height: auto;
  margin: 0;
  clip: auto;
  top: 14px;
  left: 14px;
  padding: 10px 14px;
  background: var(--blue-2);
  color: white;
  border-radius: var(--radius);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid rgba(219, 226, 234, 0.86);
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(18px);
}

.nav-shell {
  max-width: var(--max);
  margin: 0 auto;
  min-height: 74px;
  padding: 0 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--blue-2);
  font-weight: 800;
  text-decoration: none;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border: 1px solid var(--blue);
  color: var(--paper);
  background: var(--blue);
  border-radius: 50%;
  font-size: 0.74rem;
  letter-spacing: 0.08em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav-links a {
  padding: 9px 12px;
  border-radius: var(--radius);
  color: var(--muted);
  font-size: 0.94rem;
  font-weight: 650;
  text-decoration: none;
}

.nav-links a:hover,
.nav-links a[aria-current="page"] {
  color: var(--blue);
  background: var(--soft-blue);
}

.nav-toggle {
  display: none;
  width: 42px;
  height: 42px;
  padding: 10px;
  border: 1px solid var(--line);
  background: var(--paper);
  border-radius: var(--radius);
}

.nav-toggle span:not(.sr-only) {
  display: block;
  height: 2px;
  margin: 5px 0;
  background: var(--blue-2);
}

.section-band {
  max-width: var(--max);
  margin: 0 auto;
  padding: 94px 22px;
}

.hero {
  min-height: calc(100vh - 74px);
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(360px, 0.86fr);
  align-items: center;
  gap: 48px;
  padding-top: 58px;
}

.eyebrow {
  margin: 0 0 14px;
  color: var(--crimson);
  font-size: 0.78rem;
  font-weight: 850;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1,
h2,
h3,
p {
  overflow-wrap: break-word;
}

h1,
h2,
h3 {
  color: var(--blue-2);
  line-height: 1.08;
  letter-spacing: 0;
}

h1 {
  margin: 0;
  max-width: 860px;
  font-size: clamp(3rem, 7vw, 6.7rem);
}

h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.5rem);
}

h3 {
  margin: 0;
  font-size: 1.2rem;
}

.hero-subtitle,
.lead {
  max-width: 760px;
  color: #303844;
  font-size: clamp(1.08rem, 1.7vw, 1.34rem);
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}

.button,
.text-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 12px 18px;
  border-radius: var(--radius);
  font-weight: 800;
  text-decoration: none;
  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
}

.button:hover,
.text-link:hover,
.work-card:hover,
.project-card:hover,
.tool-card:hover,
.note-card:hover,
.workflow-card:hover {
  transform: translateY(-3px);
}

.primary {
  background: var(--blue);
  color: white;
  box-shadow: var(--shadow);
}

.secondary {
  border: 1px solid var(--line);
  background: white;
  color: var(--blue);
}

.text-link {
  color: var(--blue);
  background: var(--soft-blue);
}

.hero-lab {
  position: relative;
  min-height: 620px;
  border: 1px solid var(--line);
  border-radius: 18px;
  overflow: hidden;
  background:
    radial-gradient(circle at 22% 24%, rgba(159, 29, 53, 0.12), transparent 26%),
    linear-gradient(150deg, #ffffff 0%, #f4f7fb 58%, #eaf1fb 100%);
  box-shadow: var(--shadow);
}

.grid-plane {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(18, 63, 115, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(18, 63, 115, 0.08) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.9), transparent);
}

.lab-card {
  position: absolute;
  border: 1px solid rgba(18, 63, 115, 0.18);
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 18px 48px rgba(10, 37, 64, 0.14);
  backdrop-filter: blur(14px);
  border-radius: 14px;
}

.lab-card span,
.project-top,
.tool-card strong,
.note-meta {
  color: var(--crimson);
  font-size: 0.76rem;
  font-weight: 850;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.simulation-card {
  top: 46px;
  left: 36px;
  width: min(86%, 560px);
  padding: 18px;
}

.simulation-media {
  margin-top: 12px;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  border: 1px solid rgba(18, 63, 115, 0.16);
  border-radius: var(--radius);
  background: #f7f9fc;
}

.simulation-media video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.loop-card {
  right: 32px;
  bottom: 42px;
  width: min(76%, 360px);
  padding: 18px;
  border-radius: 14px;
}

.loop-card ul {
  display: grid;
  gap: 10px;
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
}

.loop-card li {
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  gap: 12px;
  align-items: start;
  padding-top: 10px;
  border-top: 1px solid rgba(18, 63, 115, 0.12);
}

.loop-card strong {
  color: var(--blue);
  font-size: 0.92rem;
}

.loop-card p {
  margin: 0;
  color: var(--blue-2);
  font-size: 0.92rem;
  font-weight: 720;
  line-height: 1.4;
}

.two-column {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 64px;
  align-items: start;
}

.sticky-label {
  position: sticky;
  top: 112px;
}

.content-stack {
  display: grid;
  gap: 18px;
  color: #303844;
  font-size: 1.08rem;
}

.section-heading {
  max-width: 780px;
  margin-bottom: 34px;
}

.card-grid,
.note-grid,
.workflow-grid,
.tool-gallery,
.project-grid {
  display: grid;
  gap: 18px;
}

.feature-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.work-card,
.note-card,
.project-card,
.workflow-card,
.tool-card,
.field-post,
.pipeline-step {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 10px 30px rgba(10, 37, 64, 0.06);
}

.work-card {
  min-height: 245px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.work-card:hover,
.project-card:hover,
.tool-card:hover,
.note-card:hover,
.workflow-card:hover {
  box-shadow: 0 18px 42px rgba(10, 37, 64, 0.11);
}

.card-index {
  color: var(--crimson);
  font-size: 0.9rem;
  font-weight: 900;
}

.work-card p,
.note-card p,
.pipeline-step p,
.project-card dd,
.workflow-card p,
.tool-card p {
  color: var(--muted);
}

.pipeline {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;
}

.pipeline::before {
  content: "";
  position: absolute;
  top: 35px;
  left: 7%;
  right: 7%;
  height: 2px;
  background: linear-gradient(90deg, var(--blue), var(--crimson));
}

.pipeline-step {
  position: relative;
  min-height: 230px;
  padding: 20px;
}

.pipeline-step span {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  margin-bottom: 42px;
  color: white;
  background: var(--blue);
  border-radius: 50%;
  font-weight: 900;
}

.note-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.note-card {
  min-height: 220px;
  padding: 24px;
}

.center-action {
  margin-top: 28px;
  text-align: center;
}

.contact-band {
  max-width: calc(var(--max) - 44px);
  margin: 42px auto 80px;
  padding: 34px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 24px;
  align-items: center;
  color: white;
  background: var(--blue-2);
  border-radius: 14px;
}

.contact-band h2,
.contact-band .eyebrow {
  color: white;
}

.link-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.link-list a {
  padding: 14px 16px;
  border: 1px solid rgba(255, 255, 255, 0.26);
  border-radius: var(--radius);
  color: white;
  text-decoration: none;
  font-weight: 800;
}

.link-list a:hover {
  background: rgba(255, 255, 255, 0.1);
}

.site-footer {
  padding: 28px 22px 48px;
  color: var(--muted);
  text-align: center;
}

.page-hero {
  padding-bottom: 46px;
}

.page-hero h1 {
  font-size: clamp(2.8rem, 5.6vw, 5.4rem);
}

.project-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding-top: 18px;
}

.project-card,
.workflow-card,
.tool-card,
.field-post {
  padding: 26px;
}

.project-top {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 16px;
}

.project-top strong {
  color: var(--blue);
}

.project-card dl {
  display: grid;
  grid-template-columns: 128px minmax(0, 1fr);
  gap: 10px 18px;
  margin: 22px 0 0;
}

.project-card dt {
  color: var(--blue-2);
  font-weight: 900;
}

.project-card dd {
  margin: 0;
}

.project-card a,
.tool-card a {
  color: var(--blue);
  font-weight: 850;
}

.notes-list {
  display: grid;
  gap: 22px;
  padding-top: 18px;
}

.field-post h2 {
  margin-bottom: 18px;
  font-size: clamp(1.6rem, 3vw, 2.5rem);
}

.post-columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px 26px;
}

.post-columns p {
  margin: 0;
  color: #303844;
}

.workflow-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding-top: 18px;
}

.workflow-card.wide {
  grid-column: 1 / -1;
  background: var(--soft-blue);
}

.tool-gallery {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding-top: 18px;
}

.tool-card {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.tool-card p {
  margin: 0;
}

.tool-card span {
  color: var(--blue-2);
  font-weight: 850;
}

.tool-card a {
  margin-top: auto;
}

.about-hero {
  position: relative;
}

.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 620ms ease, transform 620ms ease;
}

.reveal.in-view {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 980px) {
  .hero,
  .two-column,
  .contact-band {
    grid-template-columns: 1fr;
  }

  .hero {
    min-height: auto;
  }

  .hero-lab {
    min-height: 620px;
  }

  .feature-grid,
  .note-grid,
  .tool-gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .pipeline {
    grid-template-columns: 1fr;
  }

  .pipeline::before {
    top: 26px;
    bottom: 26px;
    left: 37px;
    right: auto;
    width: 2px;
    height: auto;
  }

  .pipeline-step {
    min-height: auto;
    padding-left: 72px;
  }

  .pipeline-step span {
    position: absolute;
    top: 20px;
    left: 20px;
    margin-bottom: 0;
  }

  .sticky-label {
    position: static;
  }
}

@media (max-width: 760px) {
  .nav-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    inset: 74px 12px auto 12px;
    display: none;
    padding: 12px;
    border: 1px solid var(--line);
    background: white;
    border-radius: 14px;
    box-shadow: var(--shadow);
  }

  .nav-links.open {
    display: grid;
  }

  .nav-links a {
    padding: 13px 12px;
  }

  .section-band {
    padding: 70px 18px;
  }

  .hero {
    padding-top: 42px;
    gap: 32px;
  }

  h1 {
    font-size: clamp(2.55rem, 13vw, 4rem);
  }

  .button-row {
    display: grid;
  }

  .hero-lab {
    display: grid;
    gap: 18px;
    min-height: auto;
    padding: 18px;
    border-radius: 14px;
  }

  .grid-plane {
    pointer-events: none;
  }

  .lab-card {
    position: relative;
    inset: auto;
  }

  .simulation-card {
    width: 100%;
  }

  .loop-card {
    width: 100%;
  }

  .loop-card li {
    grid-template-columns: 1fr;
    gap: 2px;
  }

  .feature-grid,
  .note-grid,
  .project-grid,
  .workflow-grid,
  .tool-gallery,
  .post-columns {
    grid-template-columns: 1fr;
  }

  .project-card dl {
    grid-template-columns: 1fr;
    gap: 4px;
  }

  .project-card dd {
    margin-bottom: 12px;
  }

  .link-list {
    grid-template-columns: 1fr;
  }

  .contact-band {
    margin: 20px 18px 60px;
    padding: 24px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }

  .reveal {
    opacity: 1;
    transform: none;
  }
}

```

### `script.js`

```javascript
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }
  });
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal");

if (!reduceMotion && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("in-view"));
}

const parallaxItems = document.querySelectorAll(".parallax");

if (!reduceMotion && parallaxItems.length) {
  window.addEventListener("pointermove", (event) => {
    const x = event.clientX - window.innerWidth / 2;
    const y = event.clientY - window.innerHeight / 2;

    parallaxItems.forEach((item) => {
      const depth = Number(item.getAttribute("data-depth") || 0.03);
      item.style.translate = `${x * depth}px ${y * depth}px`;
    });
  });
}

document.querySelectorAll("[data-email-reveal]").forEach((link) => {
  link.addEventListener("click", (event) => {
    const email = link.getAttribute("data-email-reveal");

    if (email && link.textContent.trim() !== email) {
      event.preventDefault();
      link.textContent = email;
      link.setAttribute("aria-label", `Email ${email}`);
    }
  });
});

```
