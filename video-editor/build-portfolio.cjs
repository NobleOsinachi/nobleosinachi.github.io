/* Run: node video-editor/build-portfolio.cjs. No packages or build pipeline required. */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const { config, validatePortfolio } = require('./portfolio-data.js');
const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' })[char]);

function renderPortfolio(config) {
  const problems = validatePortfolio(config);
  if (problems.length) throw new Error(problems.join('\n'));
  const total = config.categories.reduce((sum, category) => sum + category.projects.length, 0);
  const play = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4v16l13-8z"/></svg>';
  const nav = config.categories.map(category => `<li><a href="#${escape(category.id)}">${escape(category.title)}</a></li>`).join('\n');
  const categories = config.categories.map(category => `
          <section id="${escape(category.id)}" class="pf-category${category.featured ? ' pf-category--featured' : ''}" aria-labelledby="${escape(category.id)}-title" tabindex="-1">
            <header class="pf-category-heading">
              <div><p class="pf-eyebrow">${escape(category.eyebrow)}</p>
                <h3 id="${escape(category.id)}-title">${escape(category.title)}</h3>
                <p class="pf-category-description">${escape(category.description)}</p></div>
              <span class="pf-category-count">${String(category.projects.length).padStart(2,'0')} selected projects</span>
            </header>
            <div class="pf-grid">
              ${category.projects.map(project => `<article class="pf-card" data-project-card="${escape(project.key)}">
                <a class="pf-preview${project.aspectRatio === '16:9' ? ' pf-preview--landscape' : ''}" href="${escape(project.sourceUrl)}" target="_blank" rel="noopener noreferrer" data-project="${escape(project.key)}" aria-label="Watch ${escape(project.title)}">
                  <img src="${escape(project.thumbnail)}" alt="Preview of ${escape(project.title)}" loading="lazy" decoding="async" width="${project.aspectRatio === '16:9' ? '640' : '360'}" height="${project.aspectRatio === '16:9' ? '360' : '640'}" referrerpolicy="no-referrer" />
                  <span class="pf-image-fallback" aria-hidden="true">${escape(project.title)}</span>
                  <span class="pf-host">${project.host === 'drive' ? 'GOOGLE DRIVE' : 'YOUTUBE'}</span>
                  <span class="pf-play">${play} Watch project</span>
                </a>
                <div class="pf-card-body">
                  <ul class="pf-tags" aria-label="Project format">${project.tags.map(tag=>`<li>${escape(tag)}</li>`).join('')}</ul>
                  <h4>${escape(project.title)}</h4>
                  <p class="pf-card-description">${escape(project.description)}</p>
                  <div class="pf-card-footer"><a class="pf-source-link" href="${escape(project.sourceUrl)}" target="_blank" rel="noopener noreferrer" aria-label="View ${escape(project.title)} on ${project.host === 'drive' ? 'Google Drive' : 'YouTube'} (opens in a new tab)">${project.host === 'drive' ? 'View on Drive' : 'View on YouTube'} <span aria-hidden="true">↗</span></a><span class="pf-duration">${escape(project.duration || (project.aspectRatio === '9:16' ? 'Vertical video' : 'Landscape video'))}</span></div>
                </div>
              </article>`).join('\n')}
            </div>
          </section>`).join('\n');
  return `    <!-- Portfolio Section -->
    <!-- Generated from portfolio-data.js by build-portfolio.cjs. Edit the data, then rebuild. -->
    <section id="portfolio" class="bg-gray-900" aria-labelledby="portfolio-title">
      <div class="pf-shell">
        <header class="pf-intro">
          <div><p class="pf-kicker">The work / Noble Osinachi</p>
            <h2 id="portfolio-title">Selected work.<br><span>Made to be watched.</span></h2></div>
          <div class="pf-intro-copy"><p>AI creatives, documentary edits and brand stories. Different formats. One focus: a story that holds your attention.</p><span class="pf-summary">${total} selected projects &nbsp; / &nbsp; ${config.categories.length} creative categories</span></div>
        </header>
        <nav aria-label="Browse portfolio categories"><ul class="pf-nav">${nav}</ul></nav>
        ${categories}
        <div class="pf-outro"><p>Have a story in mind?</p><div class="pf-outro-links">
          <a href="https://www.youtube.com/@NobleOsinachi/shorts" target="_blank" rel="noopener noreferrer">More on YouTube ↗</a>
          <a href="https://drive.google.com/drive/folders/1AwG1RAiTuax64fodzXXC81IOSDjpXc_6" target="_blank" rel="noopener noreferrer">Faceless video archive ↗</a>
          <a href="/ecom-videos/">More video creatives ↗</a>
          <a class="pf-contact" href="#contact">Let’s create together ↗</a>
        </div></div>
      </div>
    </section>
    <dialog id="portfolio-player" class="pf-player" aria-labelledby="portfolio-player-title" aria-describedby="portfolio-player-help">
      <div class="pf-player-header"><h2 id="portfolio-player-title">Project video</h2><button type="button" class="pf-player-close" aria-label="Close video player">×</button></div>
      <div class="pf-player-stage"></div>
      <div class="pf-player-footer"><p id="portfolio-player-help">Use the player controls to start watching.</p><a data-player-source href="https://www.youtube.com/@NobleOsinachi/shorts" target="_blank" rel="noopener noreferrer">Open original ↗</a></div>
    </dialog>

`.replace(/^[ \t]+$/gm, '');
}

function build() {
  const target = path.join(__dirname, 'index.html');
  let html = fs.readFileSync(target, 'utf8');
  const start = html.indexOf('    <!-- Portfolio Section -->');
  const end = html.indexOf('    <!-- Testimonials Section -->', start);
  if (start < 0 || end < start) throw new Error('Portfolio boundaries not found; refusing to change the page.');
  html = html.slice(0, start) + renderPortfolio(config) + html.slice(end);
  if (!html.includes('href="./portfolio.css"')) html = html.replace('    <!-- Fonts -->','    <link rel="stylesheet" href="./portfolio.css" />\n    <script defer src="./portfolio-data.js"></script>\n    <script defer src="./portfolio.js"></script>\n\n    <!-- Fonts -->');
  fs.writeFileSync(target, html);
  console.log(`Portfolio built: ${config.categories.map(c=>`${c.title}: ${c.projects.length}`).join(' / ')}`);
}
if (require.main === module) build();
module.exports = { renderPortfolio, build };
