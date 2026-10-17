// Avisa a Bing (y a los demás buscadores de IndexNow: Yandex, Seznam, Naver...) que hay URLs nuevas o cambiadas.
// ChatGPT, Copilot y DuckDuckGo usan el índice de Bing, así que esto acelera que la IA vea los cambios.
// Google NO usa IndexNow: allí se pide indexación desde Search Console (Inspección de URLs).
//
// Uso, DESPUÉS de que el despliegue esté en vivo:
//   node scripts/indexnow.mjs                 → envía todas las URLs del sitemap.xml
//   node scripts/indexnow.mjs /servicios /    → envía solo esas rutas
//   node scripts/indexnow.mjs --prueba        → muestra qué enviaría, sin enviar
//
// Respuestas: 200/202 = aceptado; 403 = la clave no coincide con el archivo publicado; 422 = URL de otro host.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const HOST = 'portafolio-seo.pages.dev';
const CLAVE = 'a8d4ce5375174b71a99434caa311a934';
const URL_CLAVE = `https://${HOST}/${CLAVE}.txt`;

const args = process.argv.slice(2);
const prueba = args.includes('--prueba');
const rutas = args.filter((a) => !a.startsWith('--'));

let urls;
if (rutas.length) {
  urls = rutas.map((r) => new URL(r, `https://${HOST}`).href);
} else {
  const sitemap = readFileSync(fileURLToPath(new URL('../sitemap.xml', import.meta.url)), 'utf8');
  urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

console.log(`URLs a enviar (${urls.length}):\n  ${urls.join('\n  ')}`);
if (prueba) process.exit(0);

// La clave tiene que estar publicada en el sitio; si no, IndexNow rechaza el envío.
const verificacion = await fetch(URL_CLAVE);
const textoClave = (await verificacion.text()).trim();
if (!verificacion.ok || textoClave !== CLAVE) {
  console.error(`La clave no está publicada correctamente en ${URL_CLAVE} (HTTP ${verificacion.status}).`);
  process.exit(1);
}

const respuesta = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: CLAVE, keyLocation: URL_CLAVE, urlList: urls }),
});
console.log(`IndexNow respondió HTTP ${respuesta.status} ${respuesta.statusText}`);
if (!respuesta.ok) {
  console.error(await respuesta.text());
  process.exit(1);
}
