import { B, HOY, ID, WA, entidad, migas, migasHtml, faqLd, faqHtml, OG_MARCA, ctaFinal, wa } from '../comun.mjs';

const RUTA = '/nosotros';
const TITULO = 'Sobre Kairos: Agencia de Marketing Digital en Bogotá';
const DESC = 'Kairos es una agencia de marketing digital de Bogotá para emprendedores y micronegocios, dirigida por Marlon Herrera. Quiénes somos y por qué cobramos menos.';
const TEXTO_WA = 'Hola Kairos, quiero conocer cómo trabajan.';

const FAQ = [
  ['¿Quién está detrás de Kairos?', 'Kairos la dirige Marlon Herrera, diseñador publicitario y estratega de marketing digital, que ejecuta personalmente el trabajo de diseño, desarrollo web, SEO y AEO de la agencia. Cuando trabajas con Kairos hablas directamente con él.'],
  ['¿Qué significa Kairos?', 'En griego, kairós significa "el momento oportuno". Para un negocio, ese momento es el instante en que el cliente decide a quién comprarle: cuando ve una publicación, cuando busca en Google o cuando le pregunta a la IA. Kairos existe para que tu negocio esté ahí en ese momento.'],
  ['¿Kairos es una agencia o un freelance?', 'Kairos es una agencia en crecimiento con un equipo pequeño. Ese tamaño es justamente lo que nos permite ofrecer precios accesibles y trato directo, sin intermediarios.'],
  ['¿Dónde está ubicada Kairos?', 'En Bogotá, Colombia. Atendemos emprendedores de Bogotá y de cualquier ciudad del país de forma remota, por WhatsApp, correo y videollamada.'],
  ['¿Qué experiencia tiene Kairos en SEO y AEO?', 'Su director ha ejecutado SEO on-page, SEO técnico y AEO en proyectos reales, empezando por este sitio: datos estructurados de Schema.org, sitemap, URLs canónicas, optimización de imágenes y velocidad, indexación con Google Search Console, Bing Webmaster Tools e IndexNow, preguntas frecuentes marcadas y un archivo llms.txt para herramientas de IA.'],
];

export const meta = {
  ruta: RUTA, titulo: TITULO, descripcion: DESC, ...OG_MARCA, textoWa: TEXTO_WA,
  ogTitulo: 'Sobre Kairos y su director, Marlon Herrera',
  graph: [
    ...entidad(),
    { '@type': 'AboutPage', '@id': `${B}${RUTA}#webpage`, url: `${B}${RUTA}`, name: TITULO, description: DESC, isPartOf: { '@id': ID.web }, about: { '@id': ID.org }, mainEntity: { '@id': ID.org }, breadcrumb: { '@id': `${B}${RUTA}#migas` }, primaryImageOfPage: `${B}/assets/images/marlon-herrera-crecimiento-digital-1600.webp`, datePublished: '2026-10-18', dateModified: HOY, inLanguage: 'es-CO' },
    migas(RUTA, [['Inicio', '/'], ['Nosotros', RUTA]]),
    faqLd(RUTA, FAQ),
  ],
};

export const cuerpo = `${migasHtml([['Inicio', '/'], ['Nosotros', RUTA]])}

  <section class="hero-split" id="inicio" aria-labelledby="titulo-principal">
    <div class="contenedor hero-split__grid">
      <div>
        <p class="etiqueta">Sobre Kairos</p>
        <h1 id="titulo-principal">Marketing digital profesional <em>al alcance de los emprendedores</em></h1>
        <p class="entradilla">Kairos es una agencia de marketing digital de Bogotá creada para los negocios que también merecen verse profesionales y crecer en internet, aunque no tengan el presupuesto de una agencia grande. La dirige Marlon Herrera.</p>
        <div class="botones">
          <a href="${wa(TEXTO_WA)}" target="_blank" rel="noopener" class="btn btn--primario">Hablar con Kairos</a>
          <a href="#director" class="btn btn--contorno">Conocer al director</a>
        </div>
      </div>
      <figure class="hero-split__foto">
        <picture>
          <source type="image/avif" srcset="/assets/images/marlon-herrera-crecimiento-digital-800.avif 800w, /assets/images/marlon-herrera-crecimiento-digital-1200.avif 1200w" sizes="(min-width: 1024px) 560px, calc(100vw - 32px)">
          <img src="/assets/images/marlon-herrera-crecimiento-digital-800.webp" srcset="/assets/images/marlon-herrera-crecimiento-digital-800.webp 800w, /assets/images/marlon-herrera-crecimiento-digital-1200.webp 1200w" sizes="(min-width: 1024px) 560px, calc(100vw - 32px)" width="1600" height="893" fetchpriority="high" alt="Marlon Herrera, director de Kairos, junto al mensaje: Somos tu agencia de crecimiento digital">
        </picture>
        <figcaption class="hero-split__sello"><strong>Marlon Herrera</strong>Director de Kairos</figcaption>
      </figure>
    </div>
  </section>

  <section class="seccion seccion--compacta seccion--borde" id="quienes-somos" aria-labelledby="titulo-quienes">
    <div class="contenedor dos-columnas">
      <div class="revelar">
        <p class="etiqueta"><span class="etiqueta__num">01</span> Quiénes somos</p>
        <h2 class="titulo-l" id="titulo-quienes">Kairos, en pocas palabras</h2>
      </div>
      <div class="respuesta revelar" data-retraso="1">
        <p class="respuesta__titulo">Respuesta corta</p>
        <p><strong>Kairos es una agencia de marketing digital con sede en Bogotá, Colombia, para emprendedores y micronegocios, dirigida por Marlon Herrera.</strong> Hace diseño de piezas publicitarias, manejo de redes sociales, páginas web económicas, posicionamiento SEO y optimización para buscadores con IA (AEO y GEO), con precios publicados.</p>
        <p>En griego, <em>kairós</em> es "el momento oportuno": el instante en que tu cliente decide a quién comprarle. Nuestro trabajo es que tu negocio esté ahí en ese momento.</p>
      </div>
    </div>
  </section>

  <section class="seccion seccion--alterna" id="historia" aria-labelledby="titulo-historia">
    <div class="contenedor bloque-imagen">
      <figure class="bloque-imagen__foto revelar">
        <img src="/assets/images/marlon-herrera-posicionamiento-digital-800.webp" srcset="/assets/images/marlon-herrera-posicionamiento-digital-800.webp 800w, /assets/images/marlon-herrera-posicionamiento-digital-1200.webp 1200w" sizes="(min-width: 900px) 560px, calc(100vw - 32px)" width="1687" height="767" loading="lazy" decoding="async" alt="Marlon Herrera presentando el mensaje: Somos tu agencia de posicionamiento digital">
      </figure>
      <div class="bloque-imagen__texto revelar" data-retraso="1">
        <p class="etiqueta"><span class="etiqueta__num">02</span> De dónde venimos</p>
        <h2 class="titulo-l" id="titulo-historia">De diseñar piezas a hacer crecer negocios</h2>
        <p>Kairos empezó con un trabajo concreto: diseñar publicidad para pequeños negocios en Bogotá. Con cada cliente apareció la misma pregunta: <strong>"¿y cómo hago para que me encuentren?"</strong>.</p>
        <p>Una pieza bonita no basta si el negocio no aparece en Google, no tiene una página propia o no existe para la inteligencia artificial a la que hoy muchos le preguntan qué comprar. Por eso Kairos sumó redes sociales, desarrollo web, SEO y AEO al diseño.</p>
        <p>Hoy es una agencia que crece paso a paso sin perder lo que la hace distinta: precios que un emprendedor sí puede pagar y trato directo con quien hace el trabajo.</p>
      </div>
    </div>
  </section>

  <section class="seccion" id="director" aria-labelledby="titulo-director">
    <div class="contenedor">
      <div class="encabezado-seccion revelar">
        <p class="etiqueta"><span class="etiqueta__num">03</span> Director</p>
        <h2 class="titulo-l" id="titulo-director">Marlon Herrera, <em>director de Kairos</em></h2>
        <p class="entradilla">Diseñador publicitario y estratega de marketing digital. Dirige Kairos y ejecuta personalmente su trabajo técnico, aplicando cada técnica primero en sus propios proyectos.</p>
      </div>
      <div class="rejilla rejilla--2">
        <article class="tarjeta revelar"><span class="tarjeta__num" aria-hidden="true">SEO</span><h3 class="titulo-m">SEO on-page</h3><p>Títulos y descripciones por intención de búsqueda, un solo H1 por página, enlazado interno entre servicios y guías, y URLs limpias.</p></article>
        <article class="tarjeta revelar" data-retraso="1"><span class="tarjeta__num" aria-hidden="true">Téc.</span><h3 class="titulo-m">SEO técnico</h3><p>URLs canónicas y redirecciones 301, sitemap con imágenes, robots.txt, imágenes WebP adaptables, fuentes propias precargadas, caché y seguridad.</p></article>
        <article class="tarjeta revelar"><span class="tarjeta__num" aria-hidden="true">IA</span><h3 class="titulo-m">AEO y GEO</h3><p>Grafo de entidad con Schema.org (organización, persona, servicios, ofertas, artículos y preguntas frecuentes), respuestas cortas citables y archivo llms.txt.</p></article>
        <article class="tarjeta revelar" data-retraso="1"><span class="tarjeta__num" aria-hidden="true">Web</span><h3 class="titulo-m">Diseño y desarrollo</h3><p>Piezas publicitarias y páginas web programadas con HTML, CSS y JavaScript, publicadas en Cloudflare Pages con Search Console, Bing e IndexNow.</p></article>
      </div>
      <p class="nota-precios mt-l">Todo lo anterior está aplicado en el sitio que estás leyendo y se puede verificar en su código.</p>
      <div class="enlaces-seccion">
        <a class="enlace-flecha" href="https://www.fiverr.com/s/m580G09" target="_blank" rel="noopener">Perfil de Marlon Herrera en Fiverr</a>
        <a class="enlace-flecha" href="https://www.instagram.com/kairos_publicistas" target="_blank" rel="noopener">Trabajos de Kairos en Instagram</a>
      </div>
    </div>
  </section>

  <section class="seccion seccion--oscura" id="principios" aria-labelledby="titulo-principios">
    <div class="contenedor">
      <div class="encabezado-seccion revelar">
        <p class="etiqueta"><span class="etiqueta__num">04</span> Cómo pensamos</p>
        <h2 class="titulo-l" id="titulo-principios">Cuatro principios que no negociamos</h2>
      </div>
      <div class="rejilla rejilla--4">
        <article class="tarjeta revelar"><span class="tarjeta__num" aria-hidden="true">01</span><h3 class="titulo-m">Accesible de verdad</h3><p>Precios pensados para emprendedores, no para grandes empresas.</p></article>
        <article class="tarjeta revelar" data-retraso="1"><span class="tarjeta__num" aria-hidden="true">02</span><h3 class="titulo-m">Precios a la vista</h3><p>Publicamos lo que cuesta cada servicio antes de que nos escribas.</p></article>
        <article class="tarjeta revelar" data-retraso="2"><span class="tarjeta__num" aria-hidden="true">03</span><h3 class="titulo-m">Entregables claros</h3><p>Sabes qué vas a recibir, cuándo y cómo lo vamos a medir.</p></article>
        <article class="tarjeta revelar" data-retraso="3"><span class="tarjeta__num" aria-hidden="true">04</span><h3 class="titulo-m">Primero en casa</h3><p>Cada técnica que ofrecemos la probamos antes en nuestro propio sitio.</p></article>
      </div>
    </div>
  </section>

  <section class="seccion" id="datos" aria-labelledby="titulo-datos">
    <div class="contenedor dos-columnas">
      <div>
        <p class="etiqueta"><span class="etiqueta__num">05</span> Datos de contacto</p>
        <h2 class="titulo-l" id="titulo-datos">Kairos, ficha rápida</h2>
        <p class="entradilla mt-s">Los mismos datos que encontrarás en todos nuestros canales.</p>
      </div>
      <div class="tabla-envoltura">
        <table class="tabla">
          <tbody>
            <tr><th scope="row">Nombre</th><td>Kairos (Kairos Publicistas)</td></tr>
            <tr><th scope="row">Qué hace</th><td>Agencia de marketing digital para emprendedores y micronegocios</td></tr>
            <tr><th scope="row">Director</th><td>Marlon Herrera</td></tr>
            <tr><th scope="row">Ubicación</th><td>Bogotá, Colombia · atención remota en todo el país</td></tr>
            <tr><th scope="row">WhatsApp</th><td><a href="${WA}" target="_blank" rel="noopener">+57 321 345 7681</a></td></tr>
            <tr><th scope="row">Correo</th><td><a href="mailto:marlonsherrera7002@gmail.com">marlonsherrera7002@gmail.com</a></td></tr>
            <tr><th scope="row">Instagram</th><td><a href="https://www.instagram.com/kairos_publicistas" target="_blank" rel="noopener">@kairos_publicistas</a></td></tr>
            <tr><th scope="row">Sitio web</th><td>${B.replace('https://', '')}</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="seccion seccion--borde" id="preguntas" aria-labelledby="titulo-preguntas">
    <div class="contenedor dos-columnas dos-columnas--fija">
      <div>
        <p class="etiqueta"><span class="etiqueta__num">06</span> Preguntas frecuentes</p>
        <h2 class="titulo-l" id="titulo-preguntas">Sobre Kairos</h2>
      </div>
      <div class="faq">
${faqHtml('faq-nosotros', FAQ)}
      </div>
    </div>
  </section>
${ctaFinal({ etiqueta: 'Hablas directo con quien hace el trabajo', titulo: '¿Trabajamos <em>juntos</em>?', texto: 'Cuéntanos qué vendes y qué necesitas. Te respondemos con una propuesta clara, con precio y fecha de entrega.', textoWa: 'Hola Kairos, quiero trabajar con ustedes.', segundo: ['/servicios', 'Ver servicios'] })}
`;
