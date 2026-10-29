// =====================================================================
// VALIDADOR SEO DEL SITIO KAIROS
// Uso (desde la raíz):  node scripts/sitio/validar.mjs
// Revisa en cada página: un solo H1, largo de título (≤60) y descripción
// (110–160), JSON-LD válido y sin referencias rotas, FAQ visible igual al
// JSON-LD, enlaces internos, imágenes existentes con alt y tamaño, y restos
// de textos que ya no deben aparecer.
// =====================================================================
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const leer = (f) => readFileSync(join(RAIZ, f), 'utf8');
const existe = (r) => existsSync(join(RAIZ, r));
const PROHIBIDO = /restaurante|comida r[aá]pida|hamburgues|salchipapa|pollo asado|broaster|pizza al paso|perros calientes/i;

const archivos = readdirSync(RAIZ).filter((f) => f.endsWith('.html')).concat(readdirSync(join(RAIZ, 'guias')).map((f) => 'guias/' + f));
const rutas = new Set(['/']);
for (const f of archivos) if (f !== '404.html') rutas.add(f === 'index.html' ? '/' : f === 'guias/index.html' ? '/guias/' : '/' + f.replace(/\.html$/, ''));

let total = 0;
for (const f of archivos) {
  const s = leer(f), out = [];
  const t = (s.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const d = (s.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  const h1 = (s.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) out.push('H1=' + h1);
  if ([...t].length > 60) out.push('título largo ' + [...t].length);
  if (f !== '404.html' && ([...d].length > 160 || [...d].length < 110)) out.push('descripción ' + [...d].length);
  if (PROHIBIDO.test(s.replace(/<script[\s\S]*?<\/script>/g, ''))) out.push('texto de restaurantes');
  for (const m of s.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let j; try { j = JSON.parse(m[1]); } catch { out.push('JSON-LD inválido'); continue; }
    const g = j['@graph'], ids = new Set(g.map((n) => n['@id']).filter(Boolean));
    const rotas = [...m[1].matchAll(/"@id": "([^"]+)"\s*\}/g)].map((x) => x[1]).filter((r) => !ids.has(r));
    if (rotas.length) out.push('refs rotas ' + [...new Set(rotas)]);
    const faq = g.find((n) => n['@type'] === 'FAQPage'), vis = (s.match(/<details name="faq/g) || []).length;
    if (faq && faq.mainEntity.length !== vis) out.push(`FAQ ${faq.mainEntity.length} vs ${vis}`);
    if (faq) for (const q of faq.mainEntity) if (!s.includes('<summary>' + q.name + '</summary>')) out.push('FAQ sin visible: ' + q.name.slice(0, 30));
  }
  for (const m of s.matchAll(/href="(\/[^"#?]*)(#[^"]*)?"/g)) {
    const r = m[1];
    if (/^\/assets\/|^\/favicon\.ico$|^\/manifest\.json$/.test(r)) { if (!existe(r)) out.push('falta ' + r); continue; }
    if (!rutas.has(r)) out.push('enlace roto ' + r);
  }
  for (const m of s.matchAll(/(?:src|srcset|imagesrcset)="([^"]+)"/g)) for (const p of m[1].split(',')) { const u = p.trim().split(/\s+/)[0]; if (u.startsWith('/assets/') && !existe(u)) out.push('img falta ' + u); }
  const imgs = [...s.matchAll(/<img [^>]*>/g)].map((x) => x[0]);
  const sinAlt = imgs.filter((i) => !/alt="[^"]+"/.test(i)).length, sinDim = imgs.filter((i) => !/width=/.test(i) || !/height=/.test(i)).length;
  if (sinAlt) out.push('img sin alt ' + sinAlt);
  if (sinDim) out.push('img sin width/height ' + sinDim);
  console.log(`${f.padEnd(58)} título:${[...t].length} desc:${[...d].length} imgs:${imgs.length}${out.length ? '  ⚠ ' + out.join(' | ') : '  ✓'}`);
  total += out.length;
}
for (const f of ['llms.txt', 'sitemap.xml', 'manifest.json']) if (PROHIBIDO.test(leer(f))) { console.log(`⚠ ${f}: texto de restaurantes`); total++; }
console.log(`\n${total ? '⚠ PROBLEMAS: ' + total : '✓ Sin problemas'} · ${rutas.size} rutas públicas`);
process.exitCode = total ? 1 : 0;
