// =====================================================================
// RECETAS A MANO DE LOS LOGOS DE CLIENTES PUBLICADOS (29-10-2026)
// Uso (desde la raíz):  node scripts/herramientas/logos/recetas-clientes.mjs
// Vuelve a crear los 4 logos de la barra de marcas a partir de los originales que
// están en marketing/logos-clientes/. Escribe en scripts/herramientas/logos/vistas/
// (no en la página): si cambias una receta, copia el resultado a assets/images/marcas/
// con un nombre NUEVO y actualiza MARCAS en scripts/sitio/comun.mjs.
// London Urus y Arepa Mía necesitan pasos propios (emblema circular, letras sobre fondo
// oscuro); For Life y Club Taller solo necesitan quitar el fondo claro.
// =====================================================================
import sharp from 'sharp';
import { join } from 'node:path';
import { cargar, suave, lim, guardar, colorFondo, quitarFondo, ORIGINALES, VISTAS } from './utiles.mjs';

const opciones = { carpeta: VISTAS };
const informar = (r) => console.log(`${r.archivo}  ${r.ancho}×${r.alto} px  ${r.kb} KB`);

// ---------- London Urus: emblema circular con los ojos y el nombre ----------
async function londonUrus() {
  const { d, w, h } = await cargar(join(ORIGINALES, 'london-urus.webp'));
  const cx = w / 2, cy = h / 2;
  const R_CONT = w * 0.392; // contenido dentro del marco original
  const R_DISCO = w * 0.437;
  const out = Buffer.alloc(w * h * 4);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const i = y * w + x, r = d[i * 3], g = d[i * 3 + 1], b = d[i * 3 + 2];
    const mx = Math.max(r, g, b), sat = mx - Math.min(r, g, b);
    const dist = Math.hypot(x - cx, y - cy);
    // Quita la forma gris de arriba y el humo gris tenue; conserva fuego, hielo y letras.
    let k = sat < 40 ? suave(70, 125, mx) : 1;
    if (sat < 70 && y < h * 0.215 && x > w * 0.29 && x < w * 0.71) k = 0;
    k *= 1 - suave(R_CONT - 30, R_CONT, dist);
    const a = 1 - suave(R_DISCO - 1.5, R_DISCO + 1.5, dist);
    out[i * 4] = lim(r * k); out[i * 4 + 1] = lim(g * k); out[i * 4 + 2] = lim(b * k); out[i * 4 + 3] = lim(a * 255);
  }
  const anillo = Buffer.from(`<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="o" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E9D39B"/><stop offset=".5" stop-color="#B8925A"/><stop offset="1" stop-color="#E3C98D"/></linearGradient></defs>
    <circle cx="${cx}" cy="${cy}" r="${R_DISCO - w * 0.022}" fill="none" stroke="url(#o)" stroke-width="${w * 0.0055}"/>
    <circle cx="${cx}" cy="${cy}" r="${R_DISCO - w * 0.034}" fill="none" stroke="#B8925A" stroke-opacity=".55" stroke-width="${w * 0.0018}"/>
  </svg>`);
  const { data } = await sharp(out, { raw: { width: w, height: h, channels: 4 } })
    .composite([{ input: anillo, blend: 'atop' }]).raw().toBuffer({ resolveWithObject: true });
  informar(await guardar(data, w, h, 'london-urus', opciones));
}

// ---------- Arepa Mía: versión para fondo claro (letras oscuras, dorado, aro fino) ----------
async function arepaMia() {
  const { d, w, h } = await cargar(join(ORIGINALES, 'arepa-mia.png'));
  const brillo = (x, y) => { const i = y * w + x; return Math.max(d[i * 3], d[i * 3 + 1], d[i * 3 + 2]); };
  // Aro: extremos arriba y abajo en la columna central.
  const colX = Math.round(w / 2);
  let yA = Math.round(h * 0.12); while (brillo(colX, yA) < 120) yA++;
  let yB = Math.round(h * 0.9); while (brillo(colX, yB) < 120) yB--;
  const cy = (yA + yB) / 2, R = (yB - yA) / 2;
  // Franja del texto: desde el centro del aro, filas seguidas con píxeles claros
  // entre los dos lados del aro (ahí el aro queda por fuera del rango medido).
  const tinta = (y) => { let n = 0; for (let x = Math.round(colX - R * 0.8); x < colX + R * 0.8; x++) if (brillo(x, y) > 140) n++; return n; };
  let t0 = Math.round(cy), t1 = Math.round(cy);
  while (tinta(t0 - 1) > 2) t0--;
  while (tinta(t1 + 1) > 2) t1++;
  t0 -= 6; t1 += 6;
  // Centro horizontal del aro, medido en una fila por encima del texto.
  const yMedida = Math.round(cy - R * 0.5);
  let xI = 0; while (brillo(xI, yMedida) < 120) xI++;
  let xD = w - 1; while (brillo(xD, yMedida) < 120) xD--;
  const cx = (xI + xD) / 2;
  const out = Buffer.alloc(w * h * 4);
  // Las letras (incluida la tilde de MÍA, que queda por encima) sin los trazos plateados
  // del aro original; la A dorada que se sale del aro se conserva.
  for (let y = t0 - 70; y <= t1; y++) for (let x = 0; x < w; x++) {
    const i = y * w + x, r = d[i * 3], g = d[i * 3 + 1], b = d[i * 3 + 2];
    const dorado = r - b > 45;
    if (!dorado && Math.abs(Math.hypot(x - cx, y - cy) - R) < 9) continue;
    if (y < t0 && Math.hypot(x - cx, y - cy) > R) continue;
    const mx = Math.max(r, g, b);
    const a = suave(30, 200, mx);
    if (!a) continue;
    const n = 255 / Math.max(mx, 1);
    const col = dorado ? [r * n * 0.7, g * n * 0.7, b * n * 0.7] : [22, 22, 24];
    out[i * 4] = lim(col[0]); out[i * 4 + 1] = lim(col[1]); out[i * 4 + 2] = lim(col[2]); out[i * 4 + 3] = lim(a * 255);
  }
  // Aro fino completo por detrás de las letras, como en el logo original.
  const aro = Buffer.from(`<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#161618" stroke-width="${w * 0.0075}"/>
  </svg>`);
  const { data } = await sharp(aro).ensureAlpha()
    .composite([{ input: out, raw: { width: w, height: h, channels: 4 } }]).raw().toBuffer({ resolveWithObject: true });
  informar(await guardar(data, w, h, 'arepa-mia', opciones));
}

// ---------- For Life: quitar el fondo claro ----------
async function forLife() {
  const { d, w, h } = await cargar(join(ORIGINALES, 'for-life.webp'));
  const out = quitarFondo(d, w, h, colorFondo(d, w, h).fondo);
  informar(await guardar(out, w, h, 'for-life', { ...opciones, umbral: 40 }));
}

// ---------- Club Taller Homeschool: quitar el fondo blanco y cortar el lema ----------
async function clubTaller() {
  const { d, w, h } = await cargar(join(ORIGINALES, 'club-taller-homeschool.webp'));
  // Corta debajo de "HOMESCHOOL" (el lema pequeño no se lee al tamaño de un logo).
  const tinta = (y) => { let n = 0; for (let x = 0; x < w; x++) { const i = y * w + x; if (Math.min(d[i * 3], d[i * 3 + 1], d[i * 3 + 2]) < 200) n++; } return n; };
  let corte = Math.round(h * 0.7);
  while (tinta(corte) > 3 && corte < h * 0.8) corte++;
  const out = quitarFondo(d, w, h, [255, 255, 255], { hasta: corte });
  informar(await guardar(out, w, h, 'club-taller-homeschool', { ...opciones, umbral: 30 }));
}

await londonUrus();
await arepaMia();
await forLife();
await clubTaller();
console.log('\nResultados en scripts/herramientas/logos/vistas/ (los publicados no se tocaron).');
