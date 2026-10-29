import { B, HOY, ID, entidad, migas, migasHtml, faqLd, faqHtml, foto, precargaFoto, pesos, desde, PLANES, OG_MARCA, ctaFinal, wa } from '../comun.mjs';

const RUTA = '/servicios';
const TITULO = 'Servicios de Marketing Digital para Emprendedores | Kairos';
const DESC = 'Servicios de marketing digital para emprendedores y micronegocios: diseño de piezas, redes sociales, páginas web, SEO y AEO/GEO, con precios publicados.';
const TEXTO_WA = 'Hola Kairos, quiero saber qué servicio de marketing le conviene a mi negocio.';

const SERVICIOS = [
  ['diseno-piezas-publicitarias', 'Diseño de piezas publicitarias', 'Posts, historias, flyers y banners con tu identidad.', '/diseno-de-piezas-publicitarias', `Desde ${pesos(desde('diseno'))}`],
  ['manejo-redes-sociales-celular', 'Manejo de redes sociales', 'Calendario, diseño, textos y programación cada mes.', '/manejo-de-redes-sociales', `Desde ${pesos(desde('redes'))} / mes`],
  ['pagina-web-economica-laptop', 'Páginas web económicas', 'Tu página propia con pago único y hosting gratis.', '/paginas-web-economicas', `Desde ${pesos(desde('web'))}`],
  ['analitica-seo-posicionamiento', 'Posicionamiento SEO', 'Auditoría y arquitectura para Google y Google Maps.', '/posicionamiento-seo', `Desde ${pesos(desde('seo'))}`, true],
  ['aeo-geo-chat-inteligencia-artificial', 'AEO y GEO', 'Tu marca preparada para la búsqueda con inteligencia artificial.', '/aeo-geo', 'Incluido en SEO + IA'],
  ['emprendedor-trabajando-laptop', 'Kit Emprendedor Digital', 'Página, 4 piezas y Google Maps para negocios nuevos.', '/precios#combo', pesos(PLANES.combo.planes[0].precio)],
];

const FAQ = [
  ['¿Qué servicios de marketing digital ofrece Kairos?', 'Diseño de piezas publicitarias, manejo de redes sociales, páginas web económicas, posicionamiento SEO y optimización para buscadores con inteligencia artificial (AEO y GEO). También el Kit Emprendedor Digital para negocios que están empezando.'],
  ['¿Por dónde debería empezar si tengo poco presupuesto?', `Si estás empezando, el Kit Emprendedor Digital (${pesos(PLANES.combo.planes[0].precio)}) te da página, piezas y Google Maps en un solo pago. Si ya tienes presencia pero se ve poco profesional, empieza por el Pack Emprende (${pesos(PLANES.diseno.planes[1].precio)}).`],
  ['¿Puedo contratar un solo servicio?', 'Sí. Todos los servicios se contratan por separado y puedes sumar otros cuando tu negocio lo necesite.'],
  ['¿Atienden negocios de cualquier sector?', 'Sí: tiendas, servicios profesionales, belleza, salud, comida, moda, educación y marcas personales, entre otros. Lo que tienen en común nuestros clientes es que son emprendedores o negocios pequeños.'],
];

export const meta = {
  ruta: RUTA, titulo: TITULO, descripcion: DESC, ...OG_MARCA, textoWa: TEXTO_WA,
  preload: precargaFoto('estrategia-marketing-reunion', '(min-width: 1024px) 560px, calc(100vw - 32px)'),
  graph: [
    ...entidad(),
    { '@type': 'CollectionPage', '@id': `${B}${RUTA}#webpage`, url: `${B}${RUTA}`, name: TITULO, description: DESC, isPartOf: { '@id': ID.web }, about: { '@id': ID.org }, breadcrumb: { '@id': `${B}${RUTA}#migas` }, mainEntity: { '@type': 'ItemList', itemListElement: SERVICIOS.map(([, t, , r], i) => ({ '@type': 'ListItem', position: i + 1, name: t, url: `${B}${r}` })) }, dateModified: HOY, inLanguage: 'es-CO' },
    migas(RUTA, [['Inicio', '/'], ['Servicios', RUTA]]),
    faqLd(RUTA, FAQ),
  ],
};

export const cuerpo = `${migasHtml([['Inicio', '/'], ['Servicios', RUTA]])}

  <section class="hero-split" id="inicio" aria-labelledby="titulo-principal">
    <div class="contenedor hero-split__grid">
      <div>
        <p class="etiqueta">Servicios · Precios publicados</p>
        <h1 id="titulo-principal">Servicios de marketing digital <em>para emprendedores</em></h1>
        <p class="entradilla">Todo lo que tu negocio necesita para verse profesional y conseguir clientes por internet, con precios pensados para emprendedores y micronegocios.</p>
        <div class="botones">
          <a href="/precios" class="btn btn--primario">Ver planes y precios</a>
          <a href="${wa(TEXTO_WA)}" target="_blank" rel="noopener" class="btn btn--contorno">Asesoría por WhatsApp</a>
        </div>
      </div>
      <figure class="hero-split__foto">
        ${foto('estrategia-marketing-reunion', 'Reunión de estrategia para elegir los servicios de marketing digital de un negocio', { prioridad: true, sizes: '(min-width: 1024px) 560px, calc(100vw - 32px)' })}
        <figcaption class="hero-split__sello"><strong>6 servicios</strong>con precio publicado</figcaption>
      </figure>
    </div>
  </section>

  <section class="seccion seccion--alterna" id="servicios" aria-labelledby="titulo-servicios">
    <div class="contenedor">
      <div class="encabezado-seccion revelar">
        <p class="etiqueta"><span class="etiqueta__num">01</span> Catálogo</p>
        <h2 class="titulo-l" id="titulo-servicios">Elige el servicio que tu negocio necesita hoy</h2>
      </div>
      <ul class="servicios-grid">
        ${SERVICIOS.map(([img, t, d, r, p, estrella], i) => `<li class="tarjeta-servicio revelar${estrella ? ' tarjeta-servicio--estrella' : ''}" data-retraso="${i % 3}">
          <div class="tarjeta-servicio__imagen">${foto(img, t, { sizes: '(min-width: 1024px) 400px, (min-width: 640px) 50vw, calc(100vw - 32px)' })}</div>
          <div class="tarjeta-servicio__cuerpo">
            <span class="tarjeta-servicio__precio">${p}</span>
            <h3><a href="${r}">${t}</a></h3>
            <p>${d}</p>
            <span class="tarjeta-servicio__mas" aria-hidden="true">Ver servicio</span>
          </div>
        </li>`).join('\n        ')}
      </ul>
    </div>
  </section>

  <section class="seccion" id="como-elegir" aria-labelledby="titulo-elegir">
    <div class="contenedor">
      <div class="encabezado-seccion revelar">
        <p class="etiqueta"><span class="etiqueta__num">02</span> Guía rápida</p>
        <h2 class="titulo-l" id="titulo-elegir">¿No sabes por dónde empezar? Según tu etapa</h2>
      </div>
      <div class="tabla-envoltura revelar">
        <table class="tabla">
          <thead><tr><th scope="col">Si tu situación es…</th><th scope="col">Te recomendamos</th><th scope="col">Inversión</th></tr></thead>
          <tbody>
            <tr><th scope="row">Mi negocio es nuevo y no existe en internet</th><td><a href="/precios#combo">Kit Emprendedor Digital</a></td><td>${pesos(PLANES.combo.planes[0].precio)} pago único</td></tr>
            <tr><th scope="row">Tengo redes, pero se ven poco profesionales</th><td><a href="/diseno-de-piezas-publicitarias">Pack Emprende</a></td><td>${pesos(PLANES.diseno.planes[1].precio)}</td></tr>
            <tr><th scope="row">No tengo tiempo para publicar</th><td><a href="/manejo-de-redes-sociales">Redes Básico</a></td><td>${pesos(PLANES.redes.planes[0].precio)} al mes</td></tr>
            <tr><th scope="row">Vendo solo por redes y quiero algo propio</th><td><a href="/paginas-web-economicas">Landing Page</a></td><td>${pesos(PLANES.web.planes[0].precio)} pago único</td></tr>
            <tr><th scope="row">Quiero aparecer en Google y en la IA</th><td><a href="/posicionamiento-seo">Auditoría SEO + IA</a></td><td>${pesos(PLANES.seo.planes[0].precio)}</td></tr>
          </tbody>
        </table>
      </div>
      <div class="enlaces-seccion"><a class="enlace-flecha" href="/asesoria-gratuita">¿Sigues con dudas? Pide el diagnóstico gratis</a></div>
    </div>
  </section>

  <section class="seccion seccion--borde" id="preguntas" aria-labelledby="titulo-preguntas">
    <div class="contenedor dos-columnas dos-columnas--fija">
      <div>
        <p class="etiqueta"><span class="etiqueta__num">03</span> Preguntas frecuentes</p>
        <h2 class="titulo-l" id="titulo-preguntas">Sobre nuestros servicios</h2>
      </div>
      <div class="faq">
${faqHtml('faq-servicios', FAQ)}
      </div>
    </div>
  </section>
${ctaFinal({ etiqueta: 'Te ayudamos a elegir', titulo: '¿Qué necesita <em>tu negocio</em>?', texto: 'Escríbenos qué vendes y qué te urge resolver. Te recomendamos el servicio justo para tu presupuesto.', textoWa: TEXTO_WA })}
`;
