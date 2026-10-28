'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname,'..');
// Edit this list once, then rebuild the static headers. No runtime framework needed.
const links = [
 ['index.html','Home'],
 ['video-editor/index.html','Video editing'],
 ['developer-portfolio.html','Development'],
 ['copywriter/index.html','Copywriting']
];
function renderHeader(file,html) {
 const relative = target => path.relative(path.dirname(file),path.join(root,target)).split(path.sep).join('/');
 const items=links.map(([target,label]) => `<li><a href="${relative(target)}"${file===path.join(root,target)?' aria-current="page"':''}>${label}</a></li>`).join('');
 const contact=/id=["']contact["']/.test(html)?'#contact':`${relative('index.html')}#contact`;
 return `<header class="site-header"><div class="site-header-inner"><a class="site-brand" href="${relative('index.html')}"><span class="site-brand-mark" aria-hidden="true">NO.</span>Noble Osinachi</a><button class="site-menu-toggle" type="button" aria-controls="site-links" aria-expanded="false">Menu</button><nav aria-label="Main navigation"><ul class="site-links" id="site-links">${items}<li><a class="site-nav-cta" href="${contact}">Let’s talk ↗</a></li></ul></nav></div></header>`;
}
function walk(folder) {
 return fs.readdirSync(folder,{withFileTypes:true}).flatMap(entry=>{
  if(['.git','node_modules'].includes(entry.name))return [];
  const file=path.join(folder,entry.name);
  return entry.isDirectory()?walk(file):/\.html?$/i.test(file)?[file]:[];
 });
}
if(require.main===module){
 let count=0;
 for(const file of walk(root)){
  const html=fs.readFileSync(file,'utf8');
  if(!html.includes('<header class="site-header">'))continue;
  fs.writeFileSync(file,html.replace(/<header class="site-header">[\s\S]*?<\/header>/,renderHeader(file,html)));count++;
 }
 console.log(`Built ${count} shared static headers.`);
}
module.exports={renderHeader};
