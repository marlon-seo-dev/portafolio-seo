// Piezas compartidas de la herramienta de logos (nuevo-logo.mjs y recetas-clientes.mjs).
import sharp from 'sharp';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const AQUI = dirname(fileURLToPath(import.meta.url));
export const RAIZ = join(AQUI, '..', '..', '..');
export const MARCAS = join(RAIZ, 'assets', 'images', 'marcas'); // logos que publica la página
export const VISTAS = join(AQUI, 'vistas'); // vistas previas en PNG (no se suben a GitHub)
export const ORIGINALES = join(RAIZ, 'marketing', 'logos-clientes'); // imágenes que mandó cada cliente (solo en tu PC)

// Imagen como píxeles RGB sin transparencia: { d, w, h }.
export const cargar = async (archivo) => {
  const { data, info } = await sharp(archivo).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  return { d: data, w: info.width, h: info.height };
};
export const suave = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
export const lim = (x) => Math.min(255, Math.max(0, Math.round(x)));

// Rectángulo que encierra los píxeles visibles (opacidad mayor que el umbral).
export function caja(buf, w, h, umbral = 12) {
  let x0 = w, y0 = h, x1 = -1, y1 = -1;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    if (buf[(y * w + x) * 4 + 3] > umbral) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  }
  return { left: x0, top: y0, width: x1 - x0 + 1, height: y1 - y0 + 1 };
}

// Recorta, reduce y guarda el logo en WebP con transparencia, más una vista previa en fondo blanco.
// Se reduce a `ancho` px de ancho, o a `alto` px de alto si se indica. El archivo se llama
// <nombre>-<ancho real>.webp. Devuelve { archivo, ancho, alto, kb }.
export async function guardar(buf, w, h, nombre, { umbral, recorte, ancho = 200, alto, carpeta = MARCAS } = {}) {
  const c = recorte || caja(buf, w, h, umbral);
  const base = sharp(buf, { raw: { width: w, height: h, channels: 4 } }).extract(c)
    .resize(alto ? { height: alto, kernel: 'lanczos3' } : { width: ancho, kernel: 'lanczos3' });
  const { data, info } = await base.clone().webp({ quality: 90, alphaQuality: 95, effort: 6, smartSubsample: true }).toBuffer({ resolveWithObject: true });
  const archivo = `${nombre}-${info.width}.webp`;
  mkdirSync(carpeta, { recursive: true });
  mkdirSync(VISTAS, { recursive: true });
  writeFileSync(join(carpeta, archivo), data);
  await base.clone().flatten({ background: '#ffffff' }).png().toFile(join(VISTAS, `${nombre}.png`));
  return { archivo, ancho: info.width, alto: info.height, kb: (data.length / 1024).toFixed(1) };
}

// Color promedio de las 4 esquinas y cuánto se aleja la esquina más distinta (para saber si el fondo es parejo).
export function colorFondo(d, w, h) {
  // Muestras de 30×30 px a 8 px del borde izquierdo/superior y a 10 px del derecho/inferior.
  const lado = Math.max(4, Math.min(30, Math.floor(Math.min(w, h) / 10)));
  const a = Math.min(8, Math.floor(Math.min(w, h) / 20)), b = Math.min(10, Math.floor(Math.min(w, h) / 16));
  const esquinas = [[a, a], [w - b - lado, a], [a, h - b - lado], [w - b - lado, h - b - lado]].map(([x0, y0]) => {
    const m = [0, 0, 0];
    for (let y = y0; y < y0 + lado; y++) for (let x = x0; x < x0 + lado; x++) {
      const i = y * w + x; m[0] += d[i * 3]; m[1] += d[i * 3 + 1]; m[2] += d[i * 3 + 2];
    }
    return m.map((v) => v / (lado * lado));
  });
  const fondo = [0, 1, 2].map((c) => esquinas.reduce((s, e) => s + e[c], 0) / 4);
  const diferencia = Math.max(...esquinas.map((e) => Math.max(...e.map((v, c) => Math.abs(v - fondo[c])))));
  return { fondo, diferencia };
}

// Quita un fondo de color parejo y recupera los bordes suaves (antialiasing) sin dejar halo.
// Fondo claro: queda lo que es más oscuro que el fondo. Fondo oscuro: lo que es más claro.
export function quitarFondo(d, w, h, fondo, { desde = 0, hasta = h } = {}) {
  const claro = (fondo[0] + fondo[1] + fondo[2]) / 3 > 128;
  const out = Buffer.alloc(w * h * 4);
  for (let y = desde; y < hasta; y++) for (let x = 0; x < w; x++) {
    const i = y * w + x, s = [d[i * 3], d[i * 3 + 1], d[i * 3 + 2]];
    let a = 0;
    for (let c = 0; c < 3; c++) a = Math.max(a, claro ? (fondo[c] - s[c]) / fondo[c] : (s[c] - fondo[c]) / Math.max(255 - fondo[c], 1));
    a = Math.min(1, Math.max(0, (a - 0.035) / 0.965));
    if (!a) continue;
    for (let c = 0; c < 3; c++) out[i * 4 + c] = lim(fondo[c] - (fondo[c] - s[c]) / a);
    out[i * 4 + 3] = lim(a * 255);
  }
  return out;
}
