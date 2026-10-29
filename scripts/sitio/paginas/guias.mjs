import { B, HOY, ID, entidad, migas, migasHtml, foto, OG_MARCA, ctaFinal } from '../comun.mjs';

const RUTA = '/guias/';
const TITULO = 'Guías de Marketing Digital para Emprendedores | Kairos';
const DESC = 'Guías gratuitas de marketing digital para emprendedores: cuánto cobra una agencia, plan de marketing con ejemplo, cómo aparecer en Google Maps y en ChatGPT.';

export const GUIAS = [
  ['/guias/cuanto-cobra-una-agencia-de-marketing-digital', 'precios-marketing-digital-presupuesto', 'Precios 2026', '¿Cuánto cobra una agencia de marketing digital en Colombia?', 'Precios de referencia del mercado, por qué cambian tanto y cuánto invertir si eres emprendedor.'],
  ['/guias/plan-de-marketing-digital-para-emprendedores', 'estrategia-marketing-reunion', 'Plan paso a paso', 'Plan de marketing digital para emprendedores, con ejemplo', 'Los 7 pasos, un ejemplo real y un calendario de 90 días para tu negocio.'],
  ['/guias/como-aparecer-en-google-maps', 'google-maps-negocio-celular', 'Google Maps', 'Cómo aparecer en Google Maps con tu negocio, paso a paso', 'Crear y verificar tu ficha, elegir la categoría, subir en el mapa y conseguir reseñas.'],
  ['/guias/como-aparecer-en-chatgpt', 'inteligencia-artificial-marketing', 'ChatGPT e IA', 'Cómo aparecer en ChatGPT y que la IA recomiende tu negocio', 'Cómo comprobar si la IA ya te menciona, de dónde saca sus respuestas y 8 pasos.'],
  ['/guias/cuanto-cobra-un-community-manager-en-colombia', 'creacion-de-contenido-redes', 'Precios 2026', '¿Cuánto cobra un community manager en Colombia?', 'Salario en nómina, tarifas por paquete y qué opción le conviene a un emprendimiento.'],
  ['/guias/cuanto-cuesta-una-pagina-web-en-colombia', 'diseno-pagina-web-emprendedor', 'Precios 2026', '¿Cuánto cuesta una página web en Colombia?', 'Precios de landing page y web corporativa, costos anuales y cómo ahorrar sin perder calidad.'],
];

export const meta = {
  ruta: RUTA, titulo: TITULO, descripcion: DESC, ...OG_MARCA,
  ogTitulo: 'Guías de marketing digital para emprendedores',
  graph: [
    ...entidad(),
    { '@type': 'CollectionPage', '@id': `${B}${RUTA}#webpage`, url: `${B}${RUTA}`, name: TITULO, description: DESC, isPartOf: { '@id': ID.web }, publisher: { '@id': ID.org }, breadcrumb: { '@id': `${B}${RUTA}#migas` }, mainEntity: { '@type': 'ItemList', itemListElement: GUIAS.map(([r, , , t], i) => ({ '@type': 'ListItem', position: i + 1, url: `${B}${r}`, name: t })) }, dateModified: HOY, inLanguage: 'es-CO' },
    migas(RUTA, [['Inicio', '/'], ['Guías', RUTA]]),
  ],
};

export const cuerpo = `${migasHtml([['Inicio', '/'], ['Guías', RUTA]])}

  <section class="hero-interno" id="inicio" aria-labelledby="titulo-principal">
    <div class="contenedor">
      <p class="etiqueta">Guías gratuitas</p>
      <h1 class="titulo-xl hero-interno__titulo-ancho" id="titulo-principal">Guías de marketing digital <em>para emprendedores</em></h1>
      <p class="entradilla">Respuestas claras a lo que más preguntan los emprendedores: cuánto cuesta el marketing digital, cómo hacer un plan, cómo aparecer en Google Maps y en ChatGPT. Con precios reales y pasos concretos.</p>
    </div>
  </section>

  <section class="seccion seccion--borde" id="guias" aria-labelledby="titulo-guias">
    <div class="contenedor">
      <h2 class="solo-lectores" id="titulo-guias">Todas las guías</h2>
      <ul class="guias-grid">
        ${GUIAS.map(([r, img, tipo, t, d], i) => `<li class="guia-tarjeta revelar" data-retraso="${i}">
          <div class="guia-tarjeta__imagen">${foto(img, t, { prioridad: i < 2, sizes: '(min-width: 1100px) 290px, (min-width: 640px) 50vw, calc(100vw - 32px)' })}</div>
          <span class="guia-tarjeta__tipo">${tipo}</span>
          <h3><a href="${r}">${t}</a></h3>
          <p>${d}</p>
        </li>`).join('\n        ')}
      </ul>
    </div>
  </section>
${ctaFinal({ etiqueta: '¿Prefieres que lo hagamos por ti?', titulo: 'Te decimos <em>por dónde empezar</em>', texto: 'El diagnóstico es gratis: cuéntanos qué vendes y te respondemos con una recomendación para tu negocio.', textoWa: 'Hola Kairos, quiero un diagnóstico para mi negocio.', segundo: ['/asesoria-gratuita', 'Pedir diagnóstico gratis'] })}
`;
