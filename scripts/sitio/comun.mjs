// =====================================================================
// KAIROS — PIEZAS COMPARTIDAS DEL SITIO
// Identidad (JSON-LD), <head>, cabecera, pie, precios (fuente única),
// fotos responsivas y plantillas de guías. Lo usa scripts/sitio/generar.mjs.
// =====================================================================
export const B = 'https://portafolio-seo.pages.dev';
export const HOY = '2026-10-28';
export const WA = 'https://wa.me/573213457681';
export const wa = (texto) => `${WA}?text=${encodeURIComponent(texto)}`;
export const pesos = (n) => '$' + new Intl.NumberFormat('es-CO').format(n);

export const ID = { org: `${B}/#kairos`, persona: `${B}/#persona`, web: `${B}/#website` };

const DIRECCION = { '@type': 'PostalAddress', addressLocality: 'Bogotá', addressRegion: 'Bogotá D.C.', addressCountry: 'CO' };
const AREA = [{ '@type': 'City', name: 'Bogotá' }, { '@type': 'Country', name: 'Colombia' }];

// ============================= IDENTIDAD (igual en todas las páginas) =============================
export function entidad() {
  return [
    {
      '@type': 'ProfessionalService',
      '@id': ID.org,
      name: 'Kairos',
      alternateName: ['Kairos Publicistas', 'Kairos Agencia de Marketing Digital'],
      description: 'Kairos es una agencia de marketing digital de Bogotá para emprendedores y micronegocios, con precios accesibles y publicados: diseño de piezas publicitarias, manejo de redes sociales, páginas web económicas, posicionamiento SEO y optimización para buscadores de inteligencia artificial (AEO y GEO). La dirige Marlon Herrera.',
      slogan: 'Marketing digital profesional al alcance de tu emprendimiento.',
      url: `${B}/`,
      logo: { '@type': 'ImageObject', url: `${B}/assets/images/kairos-logo-cuadrado.png`, width: 600, height: 600, caption: 'Logo de Kairos, agencia de marketing digital estratégico' },
      image: `${B}/assets/images/kairos-og.jpg`,
      email: 'marlonsherrera7002@gmail.com',
      telephone: '+573213457681',
      priceRange: 'COP 35.000 – 450.000',
      currenciesAccepted: 'COP',
      address: DIRECCION,
      areaServed: AREA,
      knowsLanguage: 'es',
      founder: { '@id': ID.persona },
      employee: { '@id': ID.persona },
      knowsAbout: ['Marketing digital para emprendedores', 'Diseño de piezas publicitarias', 'Manejo de redes sociales', 'Diseño de páginas web', 'Posicionamiento SEO', 'SEO local', 'Perfil de Empresa en Google', 'AEO (optimización para motores de respuesta)', 'GEO (optimización para IA generativa)', 'Datos estructurados Schema.org'],
      contactPoint: { '@type': 'ContactPoint', contactType: 'customer service', telephone: '+573213457681', email: 'marlonsherrera7002@gmail.com', url: WA, areaServed: 'CO', availableLanguage: 'Spanish' },
      sameAs: ['https://www.instagram.com/kairos_publicistas'],
    },
    {
      '@type': 'Person',
      '@id': ID.persona,
      name: 'Marlon Herrera',
      givenName: 'Marlon',
      familyName: 'Herrera',
      jobTitle: 'Director de Kairos · Estratega de marketing digital, SEO y AEO',
      description: 'Marlon Herrera dirige Kairos, agencia de marketing digital para emprendedores y micronegocios en Bogotá. Diseña piezas publicitarias, programa páginas web y ejecuta SEO on-page, SEO técnico y AEO en proyectos reales, empezando por el sitio de Kairos.',
      url: `${B}/nosotros`,
      image: `${B}/assets/images/marlon-herrera-crecimiento-digital-1600.webp`,
      address: DIRECCION,
      knowsLanguage: 'es',
      worksFor: { '@id': ID.org },
      knowsAbout: ['SEO on-page', 'SEO técnico', 'SEO local', 'AEO', 'GEO', 'Datos estructurados Schema.org', 'Diseño publicitario', 'Páginas web con HTML, CSS y JavaScript'],
      sameAs: ['https://www.fiverr.com/s/m580G09'],
    },
    {
      '@type': 'WebSite',
      '@id': ID.web,
      url: `${B}/`,
      name: 'Kairos',
      alternateName: ['Kairos Publicistas', 'Kairos Agencia de Marketing Digital'],
      description: 'Sitio oficial de Kairos, agencia de marketing digital económica para emprendedores y micronegocios en Bogotá.',
      inLanguage: 'es-CO',
      publisher: { '@id': ID.org },
    },
  ];
}

export const migas = (pagina, items) => ({
  '@type': 'BreadcrumbList',
  '@id': `${B}${pagina}#migas`,
  itemListElement: items.map(([name, ruta], i) => ({ '@type': 'ListItem', position: i + 1, name, item: `${B}${ruta}` })),
});
export const migasHtml = (items) => `
  <nav class="migas contenedor" aria-label="Ruta de navegación">
    <ol>
${items.map(([n, r], i) => i < items.length - 1 ? `      <li><a href="${r}">${n}</a></li>` : `      <li aria-current="page">${n}</li>`).join('\n')}
    </ol>
  </nav>`;

// FAQ: una sola fuente para el HTML visible y el FAQPage del JSON-LD.
const sinEtiquetas = (s) => s.replace(/<[^>]+>/g, '');
export const faqLd = (pagina, preguntas) => ({
  '@type': 'FAQPage',
  '@id': `${B}${pagina}#faq`,
  mainEntity: preguntas.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: sinEtiquetas(a) } })),
});
export const faqHtml = (grupo, preguntas) =>
  preguntas.map(([q, a]) => `        <details name="${grupo}"><summary>${q}</summary><p>${a}</p></details>`).join('\n');

// ============================= FOTOS RESPONSIVAS (WebP 800/1200, y 1600 en el hero) =============================
export function foto(nombre, alt, { sizes = '(min-width: 1024px) 560px, calc(100vw - 32px)', prioridad = false, grande = false } = {}) {
  const base = `/assets/images/fotos/${nombre}`;
  const srcset = `${base}-800.webp 800w, ${base}-1200.webp 1200w${grande ? `, ${base}-1600.webp 1600w` : ''}`;
  const carga = prioridad ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"';
  return `<img src="${base}-800.webp" srcset="${srcset}" sizes="${sizes}" width="1200" height="800" ${carga} alt="${alt}">`;
}
export const precargaFoto = (nombre, sizes, grande = false) => {
  const base = `/assets/images/fotos/${nombre}`;
  return `<link rel="preload" as="image" type="image/webp" fetchpriority="high" imagesrcset="${base}-800.webp 800w, ${base}-1200.webp 1200w${grande ? `, ${base}-1600.webp 1600w` : ''}" imagesizes="${sizes}">`;
};

// ============================= PRECIOS (fuente única para todas las páginas y el JSON-LD) =============================
export const NOTA_PRECIOS = 'Precios en pesos colombianos (COP). No incluyen pauta publicitaria (lo que se le paga a Meta o a Google) ni impresión.';
export const PLANES = {
  diseno: {
    nombre: 'Diseño de piezas publicitarias', ruta: '/diseno-de-piezas-publicitarias',
    intro: 'Publicaciones, historias, flyers y banners con diseño profesional para que tu marca se vea seria desde el primer vistazo.',
    planes: [
      { id: 'pieza-express', nombre: 'Pieza Express', precio: 35000, periodo: 'unico', resumen: 'Para una promoción o publicación puntual.', incluye: ['1 pieza: publicación, historia, flyer o banner', '2 rondas de ajustes', 'Entrega en 48 horas hábiles', 'Archivo listo para publicar o imprimir'] },
      { id: 'pack-emprende', nombre: 'Pack Emprende', precio: 89000, periodo: 'unico', destacado: 'Más elegido', resumen: 'Para mantener tus redes activas con buena imagen.', incluye: ['4 piezas para redes sociales', 'Formatos de publicación e historia', '2 rondas de ajustes por pieza', 'Entrega en 3 a 5 días hábiles'] },
      { id: 'pack-marca-activa', nombre: 'Pack Marca Activa', precio: 159000, periodo: 'unico', resumen: 'Para lanzar o renovar la imagen de tu marca.', incluye: ['8 piezas para redes sociales', 'Portada para Facebook o banner web', 'Línea gráfica coherente con tu marca', 'Entrega en 5 a 7 días hábiles'] },
    ],
  },
  redes: {
    nombre: 'Manejo de redes sociales', ruta: '/manejo-de-redes-sociales',
    intro: 'Nos encargamos de diseñar, escribir y programar tus publicaciones en Instagram y Facebook cada mes.',
    planes: [
      { id: 'redes-basico', nombre: 'Redes Básico', precio: 249000, periodo: 'mes', resumen: 'Presencia constante sin que tengas que pensar en qué publicar.', incluye: ['8 publicaciones diseñadas al mes', 'Textos (copys) y hashtags', 'Calendario de contenido mensual', 'Programación en Instagram y Facebook', 'Reporte mensual sencillo'] },
      { id: 'redes-plus', nombre: 'Redes Plus', precio: 399000, periodo: 'mes', destacado: 'Recomendado', resumen: 'Más contenido, historias y un perfil optimizado.', incluye: ['12 publicaciones y 8 historias al mes', 'Optimización de tu perfil (biografía y destacadas)', 'Calendario y programación', 'Reporte mensual con recomendaciones', 'Ideas de video para grabar tú mismo'] },
    ],
  },
  web: {
    nombre: 'Páginas web', ruta: '/paginas-web-economicas',
    intro: 'Tu página propia, programada a la medida, rápida y lista para que te encuentren en Google y en la IA. Sin mensualidad de hosting.',
    planes: [
      { id: 'landing-page', nombre: 'Landing Page', precio: 200000, periodo: 'unico', resumen: 'Una página de una sola hoja para vender por WhatsApp.', incluye: ['Diseño a la medida de tu marca', 'Botón directo a WhatsApp y redes', 'Adaptada a celular', 'Hosting gratuito, sin mensualidad', 'SEO básico y datos estructurados'] },
      { id: 'web-emprendedor', nombre: 'Web Emprendedor', precio: 450000, periodo: 'unico', destacado: 'Más completa', resumen: 'Un sitio con varias secciones para mostrar todo tu negocio.', incluye: ['Hasta 5 secciones o páginas', 'Formulario de contacto', 'SEO on-page y datos estructurados', 'Alta en Google Search Console y Bing', 'Hosting gratuito, sin mensualidad'] },
    ],
  },
  seo: {
    nombre: 'SEO y visibilidad en IA', ruta: '/posicionamiento-seo',
    intro: 'La base técnica para que Google, Google Maps y los buscadores con inteligencia artificial entiendan tu negocio y lo puedan mostrar.',
    planes: [
      { id: 'auditoria-seo-ia', nombre: 'Auditoría SEO + IA', precio: 120000, periodo: 'unico', resumen: 'Saber exactamente qué le falta a tu sitio.', incluye: ['Revisión técnica, on-page y local de tu sitio', 'Prueba de menciones en ChatGPT, Gemini y Perplexity', 'Informe con plan de acción por prioridad', 'Explicación por videollamada o WhatsApp'] },
      { id: 'plan-visibilidad', nombre: 'Plan Visibilidad SEO + IA', precio: 390000, periodo: 'unico', destacado: 'Plan estrella', resumen: 'Auditoría e implementación completa, lista para crecer.', incluye: ['Todo lo de la auditoría', 'Arquitectura técnica y on-page optimizada', 'Datos estructurados (Schema.org) para Google y la IA', 'Perfil de Empresa en Google optimizado', 'Preguntas frecuentes y entidad de marca para AEO y GEO', 'Indexación en Google y Bing (IndexNow) y archivo llms.txt', 'Informe de entrega'] },
      { id: 'seguimiento-seo-ia', nombre: 'Seguimiento SEO + IA', precio: 180000, periodo: 'mes', resumen: 'Medir, ajustar y seguir sumando contenido.', incluye: ['Medición mensual en Search Console', '2 contenidos optimizados al mes', 'Ajustes técnicos y de contenido', 'Prueba mensual de menciones en IA'] },
    ],
  },
  combo: {
    nombre: 'Combo para empezar', ruta: '/precios',
    intro: 'Lo esencial para que un negocio nuevo exista en internet desde el primer mes.',
    planes: [
      { id: 'kit-emprendedor', nombre: 'Kit Emprendedor Digital', precio: 349000, periodo: 'unico', destacado: 'Para negocios nuevos', resumen: 'Página, piezas y Google Maps en un solo paquete.', incluye: ['Landing page con hosting gratuito', '4 piezas para redes sociales', 'Perfil de Empresa en Google configurado', 'Datos de tu negocio iguales en todos tus canales'] },
    ],
  },
};
export const desde = (cat) => Math.min(...PLANES[cat].planes.map((p) => p.precio));
const periodoTexto = (p) => (p.periodo === 'mes' ? '/ mes' : 'pago único');

// opciones.soloEstrella: en mezclas de categorías (inicio) solo el plan estrella va en oscuro.
export function planHtml(p, cat, opciones = {}) {
  const oscuro = opciones.soloEstrella ? p.id === 'plan-visibilidad' : !!p.destacado;
  const msg = `Hola Kairos, me interesa el ${p.nombre} (${pesos(p.precio)} ${p.periodo === 'mes' ? 'al mes' : 'pago único'}).`;
  return `<article class="plan${oscuro ? ' plan--destacado' : ''}" id="${p.id}">
          ${p.destacado ? `<span class="plan__sello">${p.destacado}</span>` : ''}
          <h3 class="plan__nombre">${p.nombre}</h3>
          <p class="plan__precio">${pesos(p.precio)}<span class="plan__periodo">${periodoTexto(p)}</span></p>
          <p class="plan__desc">${p.resumen}</p>
          <ul class="plan__lista">${p.incluye.map((i) => `<li>${i}</li>`).join('')}</ul>
          <a href="${wa(msg)}" target="_blank" rel="noopener" class="btn ${oscuro ? 'btn--primario' : 'btn--contorno'}">Quiero este plan</a>
        </article>`;
}
export const planesHtml = (cat) => `<div class="planes-grid${PLANES[cat].planes.length >= 3 ? ' planes-grid--3' : ''}">
        ${PLANES[cat].planes.map((p) => planHtml(p, cat)).join('\n        ')}
      </div>`;
export const ofertasLd = (cat) => PLANES[cat].planes.map((p) => ({
  '@type': 'Offer',
  name: p.nombre,
  description: p.incluye.join('. ') + '.',
  url: `${B}${PLANES[cat].ruta}#${p.id}`,
  price: p.precio,
  priceCurrency: 'COP',
  ...(p.periodo === 'mes' ? { priceSpecification: { '@type': 'UnitPriceSpecification', price: p.precio, priceCurrency: 'COP', unitText: 'MES', referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' } } } : {}),
  seller: { '@id': ID.org },
}));

// ============================= MARCAS CON LAS QUE HEMOS TRABAJADO =============================
// Para mostrar el carrusel en el inicio, agrega cada logo aquí y su archivo en assets/images/marcas/.
// Formato: { nombre: 'Nombre de la marca', archivo: 'nombre-marca.webp', ancho: 300, alto: 120 }
// (ancho y alto = tamaño real del archivo). Mientras la lista esté vacía, el carrusel no aparece.
export const MARCAS = [];

export function carruselMarcas() {
  if (!MARCAS.length) return '';
  const logo = (m, oculto) => `<li${oculto ? ' aria-hidden="true"' : ''}><img src="/assets/images/marcas/${m.archivo}" width="${m.ancho}" height="${m.alto}" loading="lazy" decoding="async" alt="${oculto ? '' : m.nombre}"></li>`;
  // Serie base (se repite si hay pocos logos, para llenar la pantalla) y una copia exacta oculta:
  // la animación avanza el 50 % del ancho, justo una serie, así el bucle no tiene saltos.
  const veces = Math.max(1, Math.ceil(6 / MARCAS.length));
  const serie = (todaOculta) => Array.from({ length: veces }, (_, i) => MARCAS.map((m) => logo(m, todaOculta || i > 0)).join('')).join('');
  return `
  <section class="marcas" aria-labelledby="titulo-marcas">
    <div class="contenedor"><h2 class="marcas__titulo" id="titulo-marcas">Marcas con las que hemos trabajado</h2></div>
    <div class="marcas__ventana">
      <ul class="marcas__pista">${serie(false)}${serie(true)}</ul>
    </div>
  </section>`;
}

// ============================= NAVEGACIÓN, CABECERA Y PIE =============================
const NAV = [
  ['/servicios', 'Servicios'],
  ['/precios', 'Precios'],
  ['/posicionamiento-seo', 'SEO'],
  ['/aeo-geo', 'IA: AEO y GEO'],
  ['/guias/', 'Guías'],
  ['/nosotros', 'Nosotros'],
];
const SERVICIOS_RUTAS = ['/diseno-de-piezas-publicitarias', '/manejo-de-redes-sociales', '/paginas-web-economicas'];

export const ICONOS = `<link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48">
<link rel="icon" type="image/png" sizes="48x48" href="/assets/images/kairos-favicon-48.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/images/kairos-favicon-32.png">
<link rel="icon" type="image/png" sizes="192x192" href="/assets/images/kairos-icon-192.png">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/images/kairos-apple-touch-icon.png">
<link rel="manifest" href="/manifest.json">`;
const LOGO_CABECERA = `<img src="/assets/images/kairos-logo-80.webp" srcset="/assets/images/kairos-logo-80.webp 179w, /assets/images/kairos-logo-120.webp 269w" sizes="94px" width="94" height="42" alt="Kairos">`;
const LOGO_PIE = `<img src="/assets/images/kairos-logo-lema-400.webp" srcset="/assets/images/kairos-logo-lema-400.webp 400w, /assets/images/kairos-logo-lema-600.webp 600w" sizes="200px" width="200" height="89" loading="lazy" decoding="async" alt="Kairos, agencia de marketing digital estratégico">`;

export function cabecera(activa, textoWa = 'Hola Kairos, quiero cotizar marketing digital para mi negocio.') {
  const items = NAV.map(([ruta, nombre]) => {
    const actual = activa === ruta || (ruta === '/guias/' && activa.startsWith('/guias/')) || (ruta === '/servicios' && SERVICIOS_RUTAS.includes(activa));
    return `        <li><a href="${ruta}"${actual ? ' aria-current="page"' : ''}>${nombre}</a></li>`;
  }).join('\n');
  return `<header class="cabecera">
  <div class="contenedor cabecera__barra">
    <a href="/" class="marca">${LOGO_CABECERA}</a>
    <button type="button" class="menu-boton" aria-expanded="false" aria-controls="menu-principal">
      <span class="menu-boton__icono" aria-hidden="true"></span>
      <span class="menu-boton__texto">Menú</span>
    </button>
    <nav id="menu-principal" class="navegacion" aria-label="Menú principal">
      <ul>
${items}
        <li class="navegacion__cta"><a href="${wa(textoWa)}" target="_blank" rel="noopener" class="btn btn--primario">Cotizar por WhatsApp</a></li>
      </ul>
    </nav>
  </div>
</header>`;
}

export function pie(activa = '') {
  const enlace = (ruta, texto) => `<li><a href="${ruta}"${activa === ruta ? ' aria-current="page"' : ''}>${texto}</a></li>`;
  return `<footer class="pie">
  <div class="contenedor">
    <div class="pie__grid">
      <div>
        <a href="/" class="marca">${LOGO_PIE}</a>
        <p class="pie__desc">Agencia de marketing digital para emprendedores y micronegocios en Bogotá y toda Colombia. Precios accesibles y publicados. Dirigida por <a href="/nosotros">Marlon Herrera</a>.</p>
      </div>
      <nav aria-label="Servicios">
        <p class="pie__titulo">Servicios</p>
        <ul>
          ${enlace('/diseno-de-piezas-publicitarias', 'Diseño de piezas publicitarias')}
          ${enlace('/manejo-de-redes-sociales', 'Manejo de redes sociales')}
          ${enlace('/paginas-web-economicas', 'Páginas web económicas')}
          ${enlace('/posicionamiento-seo', 'Posicionamiento SEO')}
          ${enlace('/aeo-geo', 'AEO y GEO: visibilidad en IA')}
          ${enlace('/precios', 'Planes y precios')}
        </ul>
      </nav>
      <nav aria-label="Guías y empresa">
        <p class="pie__titulo">Aprende</p>
        <ul>
          ${enlace('/guias/', 'Todas las guías')}
          ${enlace('/guias/cuanto-cobra-una-agencia-de-marketing-digital', 'Cuánto cobra una agencia')}
          ${enlace('/guias/plan-de-marketing-digital-para-emprendedores', 'Plan de marketing para emprendedores')}
          ${enlace('/guias/como-aparecer-en-google-maps', 'Aparecer en Google Maps')}
          ${enlace('/guias/como-aparecer-en-chatgpt', 'Aparecer en ChatGPT')}
          ${enlace('/guias/cuanto-cuesta-una-pagina-web-en-colombia', 'Cuánto cuesta una página web')}
          ${enlace('/nosotros', 'Sobre Kairos')}
        </ul>
      </nav>
      <div>
        <p class="pie__titulo">Contacto</p>
        <address>
          <ul>
            <li><a href="${WA}" target="_blank" rel="noopener">WhatsApp +57 321 345 7681</a></li>
            <li><a href="mailto:marlonsherrera7002@gmail.com">marlonsherrera7002@gmail.com</a></li>
            <li><a href="https://www.instagram.com/kairos_publicistas" target="_blank" rel="noopener">Instagram @kairos_publicistas</a></li>
            ${enlace('/asesoria-gratuita', 'Diagnóstico gratis')}
            <li><span class="texto-suave">Bogotá, Colombia · Atención remota en todo el país</span></li>
          </ul>
        </address>
      </div>
    </div>
    <div class="pie__legal">
      <p>&copy; 2026 Kairos. Dirigida por Marlon Herrera. Todos los derechos reservados.</p>
      <p>Bogotá, Colombia</p>
    </div>
  </div>
</footer>`;
}

export const waFlotante = `<a href="${WA}" target="_blank" rel="noopener" class="wa-flotante" aria-label="Escribir por WhatsApp a Kairos">
  <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16.02 3C9.4 3 4.02 8.38 4.02 15c0 2.22.6 4.3 1.65 6.09L3 29l8.1-2.6a11.9 11.9 0 0 0 4.92 1.06h.01c6.62 0 12-5.38 12-12S22.65 3 16.02 3Zm0 21.8h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-4.8 1.54 1.57-4.68-.24-.38A9.8 9.8 0 0 1 5.62 15c0-5.46 4.45-9.9 10.4-9.9 5.46 0 9.9 4.44 9.9 9.9s-4.44 9.8-9.9 9.8Zm5.42-7.34c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.08 3.18 5.05 4.46.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.12.56-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/></svg>
</a>`;

// ============================= <head> Y PÁGINA COMPLETA =============================
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
export const OG_MARCA = { ogImagen: '/assets/images/kairos-og.jpg', ogAlt: 'Logo de Kairos, agencia de marketing digital estratégico', ogAncho: 1200, ogAlto: 630 };

// m = { ruta, titulo, descripcion, ogTitulo?, ogDescripcion?, ogImagen, ogAlt, ogAncho?, ogAlto?, ogTipo?, publicada?, modificada?, autor?, preload?, graph, robots? }
export function cabeza(m) {
  const url = `${B}${m.ruta}`;
  const ogImg = m.ogImagen.startsWith('http') ? m.ogImagen : `${B}${m.ogImagen}`;
  const ogT = m.ogTitulo || m.titulo;
  const ogD = m.ogDescripcion || m.descripcion;
  const jsonld = m.graph ? `\n<script type="application/ld+json">\n${JSON.stringify({ '@context': 'https://schema.org', '@graph': m.graph }, null, 2)}\n</script>\n` : '';
  return `<head>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-52CJFW7H');</script>
<!-- End Google Tag Manager -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">${m.ruta === '/' ? '\n<meta name="google-site-verification" content="uVeBFu-TzPvpvEMI0L24GYkgT4k2jyJ9noarRB7Lu84" />' : ''}
<!-- GA4 se mide ÚNICAMENTE desde GTM (GTM-52CJFW7H; hoy envía a G-KY4672KN6Y). No agregar gtag.js directo: duplicaría visitas.
     GTM además verifica la propiedad de Search Console: no quitarlo. -->
<title>${esc(m.titulo)}</title>${m.descripcion ? `\n<meta name="description" content="${esc(m.descripcion)}">` : ''}
<meta name="author" content="${m.autor || 'Kairos'}">
<meta name="robots" content="${m.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}">
<meta name="theme-color" content="#FFFFFF">${m.robots ? '' : `\n<link rel="canonical" href="${url}">`}

${ICONOS}
${m.robots ? '' : `
<meta property="og:type" content="${m.ogTipo || 'website'}">
<meta property="og:title" content="${esc(ogT)}">
<meta property="og:description" content="${esc(ogD)}">
<meta property="og:url" content="${url}">
<meta property="og:locale" content="es_CO">
<meta property="og:site_name" content="Kairos">
<meta property="og:image" content="${ogImg}">
<meta property="og:image:alt" content="${esc(m.ogAlt)}">${m.ogAncho ? `\n<meta property="og:image:width" content="${m.ogAncho}">\n<meta property="og:image:height" content="${m.ogAlto}">` : ''}${m.ogTipo === 'article' ? `
<meta property="article:published_time" content="${m.publicada}">
<meta property="article:modified_time" content="${m.modificada || HOY}">
<meta property="article:author" content="${B}/nosotros">` : ''}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(ogT)}">
<meta name="twitter:description" content="${esc(ogD)}">
<meta name="twitter:image" content="${ogImg}">
<meta name="twitter:image:alt" content="${esc(m.ogAlt)}">`}
${jsonld}
<script>document.documentElement.classList.add('js');</script>
<link rel="preload" href="/assets/fonts/instrument-serif-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/schibsted-grotesk-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>${m.preload ? '\n' + m.preload : ''}
<link rel="stylesheet" href="/assets/css/style.css">
<script type="text/javascript">
  (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "yz9dh5ilsc");
</script>
</head>`;
}

// Tablas legibles en celular: cada celda recibe la etiqueta de su columna
// (data-etiqueta) para mostrar las filas como tarjetas apiladas, y roles ARIA
// para que los lectores de pantalla no pierdan la estructura al cambiar el display.
// La columna cuyo encabezado menciona a Kairos se resalta.
function tablasApiladas(html) {
  const texto = (s) => s.replace(/<sup>[\s\S]*?<\/sup>/g, '').replace(/<[^>]+>/g, '').trim();
  return html.replace(/<table class="tabla">([\s\S]*?)<\/table>/g, (_, interior) => {
    const cabeza = interior.match(/<thead>([\s\S]*?)<\/thead>/);
    const columnas = cabeza ? [...cabeza[1].matchAll(/<th[^>]*>([\s\S]*?)<\/th>/g)].map((c) => texto(c[1])) : [];
    const cuerpo = interior
      .replace(/<(thead|tbody)>/g, '<$1 role="rowgroup">')
      .replace(/<tr>/g, '<tr role="row">')
      .replace(/<th scope="col">/g, '<th scope="col" role="columnheader">')
      .replace(/<tbody role="rowgroup">([\s\S]*?)<\/tbody>/, (__, filas) => `<tbody role="rowgroup">${filas.replace(/<tr role="row">([\s\S]*?)<\/tr>/g, (___, celdas) => {
        let i = -1;
        return `<tr role="row">${celdas.replace(/<(th|td)(\s[^>]*)?>/g, (etiqueta, tipo, attrs = '') => {
          i += 1;
          if (tipo === 'th') return `<th${attrs} role="rowheader">`;
          const col = columnas[i] || '';
          const extra = (col ? ` data-etiqueta="${col}"` : '') + (/Kairos/.test(col) ? ' class="tabla__kairos"' : '');
          return `<td${attrs}${extra} role="cell">`;
        })}</tr>`;
      })}</tbody>`);
    return `<table class="tabla" role="table">${cuerpo}</table>`;
  });
}

export function pagina(m, cuerpo) {
  return `<!DOCTYPE html>
<html lang="es-CO">
${cabeza(m)}
<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-52CJFW7H"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<a class="skip-link" href="#contenido">Saltar al contenido principal</a>

${cabecera(m.ruta, m.textoWa)}

<main id="contenido" tabindex="-1">
${tablasApiladas(cuerpo)}
</main>

${pie(m.ruta)}
${m.sinWhatsapp ? '' : `\n${waFlotante}\n`}
<script src="/assets/js/main.js" defer></script>
</body>
</html>
`;
}

// Página web genérica de servicio: WebPage + migas + Service con ofertas + FAQ.
export function grafoServicio({ ruta, titulo, descripcion, nombreServicio, tipoServicio, descripcionServicio, imagen, cat, faq, miga, publicada = HOY }) {
  return [
    ...entidad(),
    { '@type': 'WebPage', '@id': `${B}${ruta}#webpage`, url: `${B}${ruta}`, name: titulo, description: descripcion, isPartOf: { '@id': ID.web }, about: { '@id': `${B}${ruta}#servicio` }, breadcrumb: { '@id': `${B}${ruta}#migas` }, primaryImageOfPage: `${B}/assets/images/fotos/${imagen}-1200.webp`, author: { '@id': ID.persona }, publisher: { '@id': ID.org }, datePublished: publicada, dateModified: HOY, inLanguage: 'es-CO' },
    migas(ruta, [['Inicio', '/'], ['Servicios', '/servicios'], [miga, ruta]]),
    {
      '@type': 'Service', '@id': `${B}${ruta}#servicio`, name: nombreServicio, serviceType: tipoServicio, description: descripcionServicio,
      provider: { '@id': ID.org }, areaServed: AREA, audience: { '@type': 'BusinessAudience', audienceType: 'Emprendedores y micronegocios' },
      image: `${B}/assets/images/fotos/${imagen}-1200.webp`,
      hasOfferCatalog: { '@type': 'OfferCatalog', name: PLANES[cat].nombre, itemListElement: ofertasLd(cat) },
    },
    faqLd(ruta, faq),
  ];
}

// ============================= GUÍAS =============================
export const cajaAutor = `<aside class="autor" aria-label="Sobre el autor">
          <div class="autor__foto"><img src="/assets/images/marlon-herrera-crecimiento-digital-800.webp" width="96" height="96" loading="lazy" decoding="async" alt="Marlon Herrera, director de Kairos"></div>
          <div>
            <p class="autor__nombre">Marlon Herrera</p>
            <p class="autor__rol">Director de Kairos · Marketing digital, SEO y AEO</p>
            <p>Diseña publicidad, programa páginas web y ejecuta SEO on-page, SEO técnico y AEO para emprendedores y micronegocios. Lo que explica en estas guías lo aplica primero en el sitio de Kairos.</p>
            <a class="enlace-flecha" href="/nosotros">Conoce a Kairos y a su director</a>
          </div>
        </aside>`;

const fechaLarga = (iso) => new Date(iso + 'T12:00:00Z').toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export function guiaMeta(g) {
  return {
    ruta: g.ruta, titulo: g.titulo, descripcion: g.descripcion, ogTitulo: g.h1.replace(/<[^>]+>/g, ''),
    ogImagen: `/assets/images/fotos/${g.imagen}-1200.webp`, ogAlt: g.imagenAlt, ogAncho: 1200, ogAlto: 800,
    ogTipo: 'article', publicada: g.publicada, autor: 'Marlon Herrera', textoWa: g.ctaWa,
    preload: precargaFoto(g.imagen, '(min-width: 1024px) 760px, calc(100vw - 32px)'),
    graph: [
      ...entidad(),
      { '@type': 'WebPage', '@id': `${B}${g.ruta}#webpage`, url: `${B}${g.ruta}`, name: g.titulo, description: g.descripcion, isPartOf: { '@id': ID.web }, breadcrumb: { '@id': `${B}${g.ruta}#migas` }, mainEntity: { '@id': `${B}${g.ruta}#articulo` }, primaryImageOfPage: `${B}/assets/images/fotos/${g.imagen}-1200.webp`, inLanguage: 'es-CO' },
      { '@type': 'Article', '@id': `${B}${g.ruta}#articulo`, headline: g.h1.replace(/<[^>]+>/g, ''), description: g.descripcion, image: `${B}/assets/images/fotos/${g.imagen}-1200.webp`, author: { '@id': ID.persona }, publisher: { '@id': ID.org }, datePublished: g.publicada, dateModified: g.modificada || HOY, mainEntityOfPage: { '@id': `${B}${g.ruta}#webpage` }, articleSection: 'Guías de marketing digital para emprendedores', about: g.temas.map((t) => ({ '@type': 'Thing', name: t })), inLanguage: 'es-CO' },
      migas(g.ruta, [['Inicio', '/'], ['Guías', '/guias/'], [g.miga, g.ruta]]),
      faqLd(g.ruta, g.faq),
    ],
  };
}

export function guiaCuerpo(g) {
  const toc = g.toc.map(([id, texto]) => `            <li><a href="#${id}">${texto}</a></li>`).join('\n');
  return `${migasHtml([['Inicio', '/'], ['Guías', '/guias/'], [g.miga, g.ruta]])}

  <article class="articulo" aria-labelledby="titulo-principal">
    <div class="contenedor">
      <header class="articulo__cabeza">
        <p class="etiqueta">Guía · ${g.tipo}</p>
        <h1 class="titulo-xl" id="titulo-principal">${g.h1}</h1>
        <p class="entradilla">${g.entradilla}</p>
        <p class="articulo__meta">
          <span>Por <a href="/nosotros">Marlon Herrera</a>, director de Kairos</span>
          <span>Publicado: <time datetime="${g.publicada}">${fechaLarga(g.publicada)}</time></span>
          <span>Actualizado: <time datetime="${g.modificada || HOY}">${fechaLarga(g.modificada || HOY)}</time></span>
          <span>${g.lectura} min de lectura</span>
        </p>
      </header>

      <div class="articulo__cuerpo">
        <nav class="articulo__lateral" aria-label="Contenido de la guía">
          <div class="indice-articulo">
            <p>En esta guía</p>
            <ol>
${toc}
            </ol>
          </div>
        </nav>

        <div class="prosa">
          <figure class="articulo__foto">${foto(g.imagen, g.imagenAlt, { prioridad: true, sizes: '(min-width: 1024px) 760px, calc(100vw - 32px)' })}</figure>
          <div class="respuesta">
            <p class="respuesta__titulo">Respuesta corta</p>
            ${g.respuesta}
          </div>
${g.secciones}
          <h2 id="preguntas">Preguntas frecuentes</h2>
          <div class="faq">
${faqHtml('faq-guia', g.faq)}
          </div>

          ${cajaAutor}
        </div>
      </div>
    </div>
  </article>

  <section class="cta-final" id="contacto" aria-labelledby="titulo-contacto">
    <div class="contenedor">
      <p class="etiqueta">Kairos · Marketing digital accesible</p>
      <h2 class="titulo-l" id="titulo-contacto">${g.ctaTitulo}</h2>
      <p>${g.ctaTexto}</p>
      <div class="botones">
        <a href="${wa(g.ctaWa)}" target="_blank" rel="noopener" class="btn btn--claro">Escribir por WhatsApp</a>
        <a href="/precios" class="btn btn--contorno-claro">Ver planes y precios</a>
      </div>
    </div>
  </section>
`;
}

// Bloque CTA final reutilizable.
export const ctaFinal = ({ etiqueta, titulo, texto, textoWa, segundo = ['/precios', 'Ver planes y precios'] }) => `
  <section class="cta-final" id="contacto" aria-labelledby="titulo-contacto">
    <div class="contenedor">
      <p class="etiqueta">${etiqueta}</p>
      <h2 class="titulo-l" id="titulo-contacto">${titulo}</h2>
      <p>${texto}</p>
      <div class="botones">
        <a href="${wa(textoWa)}" target="_blank" rel="noopener" class="btn btn--claro">Escribir por WhatsApp</a>
        <a href="${segundo[0]}" class="btn btn--contorno-claro">${segundo[1]}</a>
      </div>
    </div>
  </section>`;
