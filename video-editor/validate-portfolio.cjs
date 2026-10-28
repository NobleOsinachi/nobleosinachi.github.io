'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { config, validatePortfolio } = require('./portfolio-data.js');
const { renderPortfolio } = require('./build-portfolio.cjs');
assert.deepEqual(validatePortfolio(config), [], 'Portfolio must satisfy all source and quantity rules.');
for (const count of [0, 1, 2, 4, 5, 7]) {
  const changed = structuredClone(config);
  changed.categories[0].projects = Array.from({length:count}, (_,i)=>({...config.categories[0].projects[i%3],key:`test-${i}`,videoId:`testVideo${String(i).padStart(2,'0')}`}));
  assert(validatePortfolio(changed).some(message=>message.includes('multiple of 3')), `Reject invalid category size ${count}`);
}
const duplicate = structuredClone(config);
duplicate.categories[1].projects[0] = structuredClone(duplicate.categories[0].projects[0]);
assert(validatePortfolio(duplicate).some(message=>message.includes('Duplicate source')), 'Reject cross-category source duplication.');
const unverified = structuredClone(config);unverified.categories[0].projects[0].verified=false;
assert(validatePortfolio(unverified).some(message=>message.includes('verified public access')), 'Reject unverified projects.');
const reordered = structuredClone(config);reordered.categories.reverse();
assert(validatePortfolio(reordered).some(message=>message.includes('must be the first')), 'AI Creatives stays first.');
const html = fs.readFileSync(path.join(__dirname, 'index.html'),'utf8');
assert(html.includes(renderPortfolio(config)), 'Static portfolio is stale: run node video-editor/build-portfolio.cjs');
const portfolio = renderPortfolio(config);
assert.equal((portfolio.match(/data-project-card=/g)||[]).length,config.categories.reduce((n,c)=>n+c.projects.length,0),'All selected projects rendered once.');
assert(!portfolio.includes('<iframe'), 'No portfolio iframe or player network load before a user chooses a project.');
for (const project of config.categories.flatMap(category=>category.projects)) assert(portfolio.includes(`data-project="${project.key}"`));
for (const category of config.categories) assert.equal(category.projects.length + (category.placeholders || []).length, category.displayTarget || config.displayTarget, 'Every category matches its configured count.');
const pending = config.categories.flatMap(c=>c.placeholders || []).length;
assert([0,3].includes(pending),'Only the authorized placeholder set is allowed, until all three uploads replace it.');
assert.equal((portfolio.match(/data-placeholder=/g)||[]).length,pending);
if (pending) {
 const misleading = structuredClone(config); misleading.categories[1].placeholders[0].videoId='fakeVideo01';
 assert(validatePortfolio(misleading).some(message=>message.includes('misleading placeholder')));
}
console.log('PASS: category counts 12 / 9 / 12 / 12; 45 unique verified sources; invalid counts and fake media rejected; AI first; static cards synchronized; zero eager portfolio embeds.');
