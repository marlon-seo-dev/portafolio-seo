// =====================================================================
// LOGO NUEVO PARA "MARCAS QUE CONFÍAN EN KAIROS"
// Uso (desde la raíz del proyecto):
//   node scripts/herramientas/logos/nuevo-logo.mjs <imagen-del-cliente> "<Nombre de la marca>"
// Ejemplo:
//   node scripts/herramientas/logos/nuevo-logo.mjs marketing/logos-clientes/cafe-luna.jpg "Café Luna"
//
// Quita el fondo si es de un solo color (blanco, crema, negro...), recorta los bordes
// vacíos y guarda assets/images/marcas/<nombre>-<ancho>.webp (200 px de alto, transparente).
// Al final imprime la línea que hay que agregar a MARCAS en scripts/sitio/comun.mjs.
// Revisa siempre la vista previa en scripts/herramientas/logos/vistas/.
// Para logos con fondo de foto, degradado o letras blancas, hace falta una receta a mano
// (como las de recetas-clientes.mjs).
// =====================================================================
import sharp from 'sharp';
import { existsSync, copyFileSync, mkdirSync } from 'node:fs';
import { join, extname, relative, resolve } from 'node:path';
import { cargar, caja, guardar, colorFondo, quitarFondo, MARCAS, VISTAS, ORIGINALES, RAIZ } from './utiles.mjs';

const ALTO = 200; // unas 2,6 veces la altura visible en la página (76 px)

const [, , ENTRADA, NOMBRE] = process.argv;
if (!ENTRADA || !NOMBRE) {
  console.log('Uso: node scripts/herramientas/logos/nuevo-logo.mjs <imagen-del-cliente> "<Nombre de la marca>"');
  process.exit(1);
}
if (!existsSync(ENTRADA)) { console.error(`No encuentro la imagen: ${ENTRADA}`); process.exit(1); }

const slug = NOMBRE.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const avisos = [];

// 1. ¿La imagen ya viene sin fondo (PNG o WebP transparente)?
const { data: rgba, info } = await sharp(ENTRADA).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: w, height: h } = info;
const alfa = (x, y) => rgba[(y * w + x) * 4 + 3];
const yaTransparente = [[0, 0], [w - 1, 0], [0, h - 1], [w - 1, h - 1]].every(([x, y]) => alfa(x, y) < 16);

let buf;
if (yaTransparente) {
  buf = rgba;
  console.log('La imagen ya viene sin fondo: solo se recorta y se reduce.');
} else {
  // 2. Quitar el fondo de color parejo.
  const { d } = await cargar(ENTRADA);
  const { fondo, diferencia } = colorFondo(d, w, h);
  if (diferencia > 25) avisos.push('Las esquinas no son del mismo color: el fondo puede ser una foto o un degradado y quizá no se quitó bien.');
  if ((fondo[0] + fondo[1] + fondo[2]) / 3 < 128) avisos.push('El logo venía en fondo oscuro: lo blanco o claro se pierde en el fondo blanco de la página. Seguramente necesita una receta a mano, como la de London Urus.');
  buf = quitarFondo(d, w, h, fondo);
  console.log(`Fondo quitado (color rgb(${fondo.map(Math.round).join(', ')})).`);
}

// 3. Revisiones antes de guardar.
const c = caja(buf, w, h, 30);
if (c.width <= 0) { console.error('No quedó nada visible: el logo es del mismo color que el fondo.'); process.exit(1); }
let luz = 0, peso = 0;
for (let i = 0; i < w * h; i++) {
  const a = buf[i * 4 + 3] / 255;
  luz += a * (0.2126 * buf[i * 4] + 0.7152 * buf[i * 4 + 1] + 0.0722 * buf[i * 4 + 2]); peso += a;
}
if (peso && luz / peso > 205) avisos.push('El logo es muy claro (letras blancas o pastel): en el fondo blanco de la página casi no se verá. Hace falta una versión oscura.');
if (c.width / c.height > 2.4) avisos.push('El logo es muy ancho: en la barra se verá más grande que los demás. Conviene usar la versión cuadrada o con el símbolo.');

// 4. Guardar (sin pisar un archivo publicado: las imágenes se guardan 30 días en caché).
const ancho = Math.round((c.width * ALTO) / c.height);
const destino = join(MARCAS, `${slug}-${ancho}.webp`);
if (existsSync(destino)) {
  console.error(`Ya existe ${relative(RAIZ, destino)}. Usa otro nombre (por ejemplo "${NOMBRE} 2"): un archivo con el mismo nombre seguiría saliendo viejo hasta 30 días.`);
  process.exit(1);
}
const r = await guardar(buf, w, h, slug, { recorte: c, alto: ALTO });

// Copia del original en marketing/logos-clientes/ (solo en tu PC) por si hay que volver a procesarlo.
const original = join(ORIGINALES, `${slug}${extname(ENTRADA).toLowerCase()}`);
if (resolve(ENTRADA) !== resolve(original) && !existsSync(original)) { mkdirSync(ORIGINALES, { recursive: true }); copyFileSync(ENTRADA, original); }

console.log(`\nListo: assets/images/marcas/${r.archivo} (${r.ancho}×${r.alto} px, ${r.kb} KB)`);
console.log(`Vista previa: ${relative(RAIZ, join(VISTAS, `${slug}.png`))}`);
avisos.forEach((a) => console.log(`⚠ ${a}`));
console.log(`\nAgrega esta línea a MARCAS en scripts/sitio/comun.mjs:\n  { nombre: '${NOMBRE.replace(/'/g, "\\'")}', archivo: '${r.archivo}', ancho: ${r.ancho}, alto: ${r.alto} },`);
console.log('\nDespués: node scripts/sitio/generar.mjs  y  node scripts/sitio/validar.mjs');
