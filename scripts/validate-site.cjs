'use strict';
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname,'..');
const {renderHeader} = require('./build-site-header.cjs');
function walk(folder) {
  return fs.readdirSync(folder,{withFileTypes:true}).flatMap(item => {
    if(['.git','node_modules'].includes(item.name)) return [];
    const name=path.join(folder,item.name);
    return item.isDirectory()?walk(name):/\.html?$/i.test(name)?[name]:[];
  });
}
const pages=walk(root);let themed=0,headers=0;
for(const page of pages){
 const text=fs.readFileSync(page,'utf8');
 if(!/<head\b|<body\b|id="pricing"/i.test(text)) continue; // provider verification/redirect payload
 assert(text.includes('site-system.css'),`${page}: missing shared stylesheet`);themed++;
 const href=text.match(/href="([^"]*site-system\.css)"/)[1];
 assert(fs.existsSync(path.resolve(path.dirname(page),href)),`${page}: shared stylesheet path broken`);
 if(text.includes('class="site-header"')){
  headers++;
  assert(text.includes(renderHeader(page,text)),`${page}: shared header is stale; rebuild it`);
  assert.equal((text.match(/id="site-links"/g)||[]).length,1,`${page}: duplicate shared navigation`);
  assert(text.includes('aria-expanded="false"')&&text.includes('aria-controls="site-links"'),`${page}: menu semantics missing`);
  const nav=text.match(/<header class="site-header">[\s\S]*?<\/header>/)[0];
  for(const match of nav.matchAll(/href="([^"]+)"/g)){
   const pathname=match[1].split('#')[0];if(!pathname)continue;
   assert(fs.existsSync(path.resolve(path.dirname(page),pathname)),`${page}: navigation target ${pathname} missing`);
  }
 }
}
const video=fs.readFileSync(path.join(root,'video-editor/index.html'),'utf8');
assert(video.includes('Good stories.<br><span>Better edits.</span>'));
const {config} = require('../video-editor/portfolio-data.js');
const real = config.categories.reduce((n,c)=>n+c.projects.length,0);
const pending = config.categories.reduce((n,c)=>n+(c.placeholders || []).length,0);
assert.equal((video.match(/data-project-card=/g)||[]).length,real);
assert.equal((video.match(/data-placeholder=/g)||[]).length,pending);
assert(!/youtube\.com\/embed\/(NobleOsinachi|VIDEO_ID|YOUR_VIDEO_ID)/.test(fs.readFileSync(path.join(root,'index.html'),'utf8')));
console.log(`PASS: ${pages.length} HTML files audited; ${themed} visual pages/partials use shared styles; ${headers} shared headers have valid links and menu semantics; ${real} real projects and ${pending} labelled placeholders.`);
