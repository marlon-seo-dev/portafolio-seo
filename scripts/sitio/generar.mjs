// =====================================================================
// GENERADOR DEL SITIO KAIROS
// Uso (desde la raíz del proyecto):  node scripts/sitio/generar.mjs
// Construye todas las páginas HTML desde scripts/sitio/paginas/*.mjs y
// regenera sitemap.xml con las mismas rutas. Edita el contenido en los
// módulos, no en los .html: los .html se sobrescriben al generar.
// =====================================================================
import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pagina, B, HOY } from './comun.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..', '..');

// [módulo, archivo de salida, ¿va al sitemap?, imágenes para el sitemap]
const PAGINAS = [
  ['inicio', 'index.html', true, ['fotos/emprendedora-marketing-digital-1600.webp', 'marlon-herrera-crecimiento-digital-1600.webp']],
  ['servicios', 'servicios.html', true, ['fotos/estrategia-marketing-reunion-1200.webp']],
  ['diseno', 'diseno-de-piezas-publicitarias.html', true, ['fotos/disenador-grafico-escritorio-1200.webp', 'fotos/diseno-piezas-publicitarias-1200.webp']],
  ['redes', 'manejo-de-redes-sociales.html', true, ['fotos/manejo-redes-sociales-celular-1200.webp', 'fotos/creacion-de-contenido-redes-1200.webp']],
  ['web', 'paginas-web-economicas.html', true, ['fotos/diseno-pagina-web-emprendedor-1200.webp', 'fotos/pagina-web-economica-laptop-1200.webp']],
  ['seo', 'posicionamiento-seo.html', true, ['fotos/auditoria-seo-laptop-1200.webp', 'fotos/analitica-seo-posicionamiento-1200.webp']],
  ['aeo', 'aeo-geo.html', true, ['fotos/aeo-geo-chat-inteligencia-artificial-1200.webp', 'fotos/inteligencia-artificial-marketing-1200.webp']],
  ['precios', 'precios.html', true, ['fotos/precios-marketing-digital-presupuesto-1200.webp']],
  ['nosotros', 'nosotros.html', true, ['marlon-herrera-crecimiento-digital-1600.webp']],
  ['asesoria', 'asesoria-gratuita.html', true, ['fotos/emprendedor-celular-ventas-1200.webp']],
  ['guias', 'guias/index.html', true, []],
  ['guia-precios', 'guias/cuanto-cobra-una-agencia-de-marketing-digital.html', true, ['fotos/precios-marketing-digital-presupuesto-1200.webp']],
  ['guia-plan', 'guias/plan-de-marketing-digital-para-emprendedores.html', true, ['fotos/estrategia-marketing-reunion-1200.webp']],
  ['guia-maps', 'guias/como-aparecer-en-google-maps.html', true, ['fotos/google-maps-negocio-celular-1200.webp']],
  ['guia-chatgpt', 'guias/como-aparecer-en-chatgpt.html', true, ['fotos/inteligencia-artificial-marketing-1200.webp']],
  ['error404', '404.html', false, []],
];

const urls = [];
for (const [mod, archivo, enSitemap, imagenes] of PAGINAS) {
  const { meta, cuerpo } = await import(`./paginas/${mod}.mjs`);
  const destino = join(RAIZ, archivo);
  mkdirSync(dirname(destino), { recursive: true });
  writeFileSync(destino, pagina(meta, cuerpo));
  console.log('generada', archivo);
  if (enSitemap) urls.push([meta.ruta, imagenes]);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <!-- Generado por scripts/sitio/generar.mjs. URLs canónicas sin .html; el índice de guías es /guias/ (con barra). -->
${urls.map(([ruta, imgs]) => `  <url>
    <loc>${B}${ruta}</loc>
    <lastmod>${HOY}</lastmod>
${imgs.map((i) => `    <image:image><image:loc>${B}/assets/images/${i}</image:loc></image:image>`).join('\n')}${imgs.length ? '\n' : ''}  </url>`).join('\n')}
</urlset>
`;
writeFileSync(join(RAIZ, 'sitemap.xml'), sitemap);
console.log(`sitemap.xml con ${urls.length} URLs`);
