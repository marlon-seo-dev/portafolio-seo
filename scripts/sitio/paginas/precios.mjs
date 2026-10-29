import { B, HOY, ID, entidad, migas, migasHtml, faqLd, faqHtml, foto, precargaFoto, pesos, PLANES, planesHtml, ofertasLd, NOTA_PRECIOS, OG_MARCA, ctaFinal, wa } from '../comun.mjs';

const RUTA = '/precios';
const TITULO = 'Precios de Marketing Digital en Colombia 2026 | Kairos';
const DESC = 'Precios de marketing digital para emprendedores en Colombia: piezas desde $35.000, redes desde $249.000 al mes, páginas web desde $200.000 y SEO desde $120.000.';
const TEXTO_WA = 'Hola Kairos, vi sus precios y quiero cotizar para mi negocio.';

const CATS = [['diseno', 'Diseño'], ['redes', 'Redes sociales'], ['web', 'Páginas web'], ['seo', 'SEO + IA'], ['combo', 'Combo']];

const FAQ = [
  ['¿Cuánto cobra una agencia de marketing digital en Colombia?', 'Depende del servicio y del tamaño de la agencia. Hay agencias que publican planes de marketing digital desde $800.000 al mes y planes de SEO desde $700.000 al mes. En Kairos los precios empiezan en $35.000 por una pieza y $249.000 al mes por el manejo de redes. Lo explicamos en la <a href="/guias/cuanto-cobra-una-agencia-de-marketing-digital">guía de precios</a>.'],
  ['¿Los precios incluyen la pauta en redes o en Google?', 'No. La pauta es el dinero que se le paga directamente a Meta o a Google para mostrar tus anuncios, y la decides tú. Nuestros precios son por el trabajo de diseño, contenido, desarrollo y optimización.'],
  ['¿Hay permanencia en los planes mensuales?', 'No. Los planes mensuales se renuevan mes a mes y puedes pausarlos avisando antes del siguiente ciclo.'],
  ['¿Cómo se paga?', 'Cuando confirmas el plan por WhatsApp te enviamos los medios de pago disponibles y la fecha de entrega.'],
  ['¿Puedo combinar servicios?', 'Sí. Usa la herramienta "Arma tu plan" de esta página para sumar los servicios que necesitas y envíanos tu selección por WhatsApp.'],
  ['¿Por qué sus precios son más bajos que los de otras agencias?', 'Porque trabajamos con una estructura liviana: equipo pequeño, trabajo remoto y procesos propios. No pagas oficinas ni capas de intermediarios; pagas el trabajo.'],
];

export const meta = {
  ruta: RUTA, titulo: TITULO, descripcion: DESC, ...OG_MARCA, textoWa: TEXTO_WA,
  preload: precargaFoto('precios-marketing-digital-presupuesto', '(min-width: 1024px) 560px, calc(100vw - 32px)'),
  graph: [
    ...entidad(),
    { '@type': 'WebPage', '@id': `${B}${RUTA}#webpage`, url: `${B}${RUTA}`, name: TITULO, description: DESC, isPartOf: { '@id': ID.web }, about: { '@id': `${B}${RUTA}#catalogo` }, breadcrumb: { '@id': `${B}${RUTA}#migas` }, primaryImageOfPage: `${B}/assets/images/fotos/precios-marketing-digital-presupuesto-1200.webp`, dateModified: HOY, inLanguage: 'es-CO' },
    migas(RUTA, [['Inicio', '/'], ['Precios', RUTA]]),
    { '@type': 'OfferCatalog', '@id': `${B}${RUTA}#catalogo`, name: 'Planes y precios de marketing digital de Kairos', itemListElement: CATS.map(([c, n]) => ({ '@type': 'OfferCatalog', name: PLANES[c].nombre, itemListElement: ofertasLd(c) })) },
    faqLd(RUTA, FAQ),
  ],
};

const opcionesArmador = CATS.flatMap(([c]) => PLANES[c].planes.map((p) => `<label class="opcion-plan">
            <input type="checkbox" data-precio="${p.precio}" data-periodo="${p.periodo}" data-nombre="${p.nombre}">
            <span><span class="opcion-plan__nombre">${p.nombre}</span><span class="opcion-plan__detalle">${PLANES[c].nombre}</span></span>
            <span class="opcion-plan__precio">${pesos(p.precio)}${p.periodo === 'mes' ? ' / mes' : ''}</span>
          </label>`)).join('\n          ');

export const cuerpo = `${migasHtml([['Inicio', '/'], ['Precios', RUTA]])}

  <section class="hero-split" id="inicio" aria-labelledby="titulo-principal">
    <div class="contenedor hero-split__grid">
      <div>
        <p class="etiqueta">Precios 2026 · Pesos colombianos</p>
        <h1 id="titulo-principal">Precios de marketing digital <em>para emprendedores</em></h1>
        <p class="entradilla">Sin cotizaciones misteriosas: aquí están todos nuestros planes con su precio. Elige uno, combínalos o arma tu propio plan.</p>
        <div class="botones">
          <a href="#planes" class="btn btn--primario">Ver planes</a>
          <a href="#armador" class="btn btn--contorno">Arma tu plan</a>
        </div>
        <ul class="insignias"><li class="insignia">Piezas desde ${pesos(PLANES.diseno.planes[0].precio)}</li><li class="insignia">Páginas web con pago único</li><li class="insignia">Sin permanencia</li></ul>
      </div>
      <figure class="hero-split__foto">
        ${foto('precios-marketing-digital-presupuesto', 'Emprendedor calculando el presupuesto de marketing digital de su negocio', { prioridad: true, sizes: '(min-width: 1024px) 560px, calc(100vw - 32px)' })}
        <figcaption class="hero-split__sello"><strong>Precios publicados</strong>en pesos colombianos</figcaption>
      </figure>
    </div>
  </section>

  <section class="seccion seccion--alterna" id="planes" aria-labelledby="titulo-planes">
    <div class="contenedor">
      <div class="encabezado-seccion revelar">
        <p class="etiqueta"><span class="etiqueta__num">01</span> Planes</p>
        <h2 class="titulo-l" id="titulo-planes">Todos nuestros planes y precios</h2>
      </div>
      <div class="pestanas" role="tablist" aria-label="Categorías de planes">
        ${CATS.map(([c, n], i) => `<button type="button" class="pestana" role="tab" id="pestana-${c}" aria-controls="${c}" aria-selected="${i === 0}">${n}</button>`).join('\n        ')}
      </div>
      ${CATS.map(([c]) => `<div class="panel-precios" id="${c}" role="tabpanel" aria-labelledby="pestana-${c}">
        <h3 class="panel-precios__titulo">${PLANES[c].nombre}</h3>
        <p class="panel-precios__intro">${PLANES[c].intro}${c !== 'combo' ? ` <a href="${PLANES[c].ruta}">Ver el servicio completo</a>.` : ''}</p>
        ${planesHtml(c)}
      </div>`).join('\n      ')}
      <p class="nota-precios"><strong>Importante:</strong> ${NOTA_PRECIOS}</p>
    </div>
  </section>

  <section class="seccion" id="comparacion" aria-labelledby="titulo-comparacion">
    <div class="contenedor">
      <div class="encabezado-seccion revelar">
        <p class="etiqueta"><span class="etiqueta__num">02</span> Kairos vs. el mercado</p>
        <h2 class="titulo-l" id="titulo-comparacion">¿Cuánto cuesta en otras agencias y cuánto en Kairos?</h2>
        <p class="entradilla">Precios publicados por otras empresas del sector en Colombia frente a los nuestros. Los alcances no son idénticos: compara siempre por lo que recibes.</p>
      </div>
      <div class="tabla-envoltura revelar">
        <table class="tabla">
          <thead><tr><th scope="col">Servicio</th><th scope="col">Referencia del mercado</th><th scope="col">En Kairos</th></tr></thead>
          <tbody>
            <tr><th scope="row">Plan mensual de marketing digital</th><td>Plan básico de $953.000 a $1.270.000 al mes <sup>1</sup>; plan integral de $3.500.000 <sup>2</sup></td><td>Redes Básico: ${pesos(PLANES.redes.planes[0].precio)} al mes</td></tr>
            <tr><th scope="row">Community manager en nómina</th><td>Salario promedio de $3.640.000 al mes, más prestaciones <sup>3</sup></td><td>Redes Plus: ${pesos(PLANES.redes.planes[1].precio)} al mes</td></tr>
            <tr><th scope="row">Landing page</th><td>De $1.500.000 a $3.500.000 <sup>4</sup></td><td>${pesos(PLANES.web.planes[0].precio)}, pago único</td></tr>
            <tr><th scope="row">Web de varias páginas</th><td>De $4.000.000 a $9.000.000 (5 a 10 páginas) <sup>4</sup></td><td>${pesos(PLANES.web.planes[1].precio)} (hasta 5 secciones)</td></tr>
            <tr><th scope="row">SEO con agencia</th><td>Planes desde $700.000 al mes <sup>5</sup></td><td>Plan Visibilidad: ${pesos(PLANES.seo.planes[1].precio)}, pago único</td></tr>
          </tbody>
        </table>
      </div>
      <p class="fuente mt-s">Fuentes, consultadas en octubre de 2026: <sup>1</sup> <a href="https://findme.digital/planes-precios-marketing-digital/" target="_blank" rel="noopener">FindMe Digital</a>, plan básico mensual. <sup>2</sup> <a href="https://www.laboratorioweb.com.co/agencia-de-marketing-digital-precios/" target="_blank" rel="noopener">Laboratorio Web</a>, plan integral. <sup>3</sup> <a href="https://www.magneto365.com/co/preguntas-frecuentes/community-manager/cual-es-salario-de-un-community-manager-en-colombia" target="_blank" rel="noopener">Magneto</a>, salario promedio de un community manager en Colombia. <sup>4</sup> <a href="https://cangrejodigital.com/diseno-web/cuanto-cuesta-pagina-web-colombia/" target="_blank" rel="noopener">Cangrejo Digital</a>, rangos de referencia del mercado. <sup>5</sup> Plan de SEO publicado por una agencia de Bogotá.</p>
    </div>
  </section>

  <section class="seccion seccion--alterna" id="armador-seccion" aria-labelledby="titulo-armador">
    <div class="contenedor">
      <div class="encabezado-seccion revelar">
        <p class="etiqueta"><span class="etiqueta__num">03</span> Herramienta</p>
        <h2 class="titulo-l" id="titulo-armador">Arma tu plan y mira el total al instante</h2>
        <p class="entradilla">Marca lo que necesitas. Al final envías tu selección por WhatsApp y te confirmamos precio y fecha de entrega.</p>
      </div>
      <div class="armador" id="armador">
        <div class="armador__opciones">
          ${opcionesArmador}
        </div>
        <div class="armador__total" aria-live="polite">
          <p>Total aproximado</p>
          <span class="armador__cifra" id="armador-total">$0</span>
          <p id="armador-detalle">Marca los servicios que te interesan.</p>
          <a id="armador-whatsapp" href="${wa('Hola Kairos, quiero armar un plan de marketing para mi negocio.')}" target="_blank" rel="noopener" class="btn btn--primario">Enviar mi plan por WhatsApp</a>
        </div>
      </div>
    </div>
  </section>

  <section class="seccion" id="por-que-economicos" aria-labelledby="titulo-por-que">
    <div class="contenedor bloque-imagen">
      <figure class="bloque-imagen__foto revelar">${foto('emprendedora-negocio-local', 'Emprendedora en su negocio local')}</figure>
      <div class="bloque-imagen__texto revelar" data-retraso="1">
        <p class="etiqueta"><span class="etiqueta__num">04</span> Nuestro modelo</p>
        <h2 class="titulo-l" id="titulo-por-que">¿Por qué podemos cobrar menos?</h2>
        <p>No es magia ni trabajo a medias. Es un modelo pensado para emprendedores:</p>
        <ul class="lista-check">
          <li>Equipo pequeño y trabajo remoto: sin costos de oficina que trasladarte</li>
          <li>Procesos propios y herramientas eficientes para cada entrega</li>
          <li>Hablas con quien hace el trabajo, sin intermediarios</li>
          <li>Paquetes cerrados: sabes qué recibes y cuánto pagas</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="seccion seccion--borde" id="preguntas" aria-labelledby="titulo-preguntas">
    <div class="contenedor dos-columnas dos-columnas--fija">
      <div>
        <p class="etiqueta"><span class="etiqueta__num">05</span> Preguntas frecuentes</p>
        <h2 class="titulo-l" id="titulo-preguntas">Sobre precios y pagos</h2>
        <div class="enlaces-seccion enlaces-seccion--columna">
          <a class="enlace-flecha" href="/guias/cuanto-cobra-una-agencia-de-marketing-digital">Guía: cuánto cobra una agencia en Colombia</a>
          <a class="enlace-flecha" href="/asesoria-gratuita">Pedir diagnóstico gratis</a>
        </div>
      </div>
      <div class="faq">
${faqHtml('faq-precios', FAQ)}
      </div>
    </div>
  </section>
${ctaFinal({ etiqueta: 'Precios claros, trabajo profesional', titulo: '¿Elegiste <em>tu plan</em>?', texto: 'Escríbenos por WhatsApp con el plan que te interesa y te confirmamos la fecha de entrega.', textoWa: TEXTO_WA, segundo: ['/asesoria-gratuita', 'Pedir diagnóstico gratis'] })}
`;
