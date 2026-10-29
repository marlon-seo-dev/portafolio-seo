import { B, HOY, ID, entidad, faqLd, faqHtml, wa, foto, precargaFoto, PLANES, planHtml, pesos, desde, ofertasLd, OG_MARCA, ctaFinal, carruselMarcas } from '../comun.mjs';

const RUTA = '/';
const TITULO = 'Agencia de Marketing Digital Económica en Bogotá | Kairos';
const DESC = 'Agencia de marketing digital para emprendedores y micronegocios en Bogotá: piezas publicitarias, redes, páginas web y SEO con precios publicados desde $35.000.';
const TEXTO_WA = 'Hola Kairos, quiero cotizar marketing digital para mi emprendimiento.';

const FAQ = [
  ['¿Qué es Kairos?', 'Kairos es una agencia de marketing digital de Bogotá pensada para emprendedores y micronegocios. Hacemos diseño de piezas publicitarias, manejo de redes sociales, páginas web económicas, posicionamiento SEO y optimización para buscadores con inteligencia artificial (AEO y GEO), con precios publicados. La dirige Marlon Herrera.'],
  ['¿Por qué Kairos es más económica que una agencia grande?', 'Porque trabajamos con una estructura liviana: equipo pequeño, trabajo remoto, procesos propios y herramientas eficientes. No pagas oficinas, ejecutivos de cuenta ni capas de intermediarios: pagas el trabajo. Por eso podemos ofrecer calidad profesional a precios que un emprendimiento sí puede pagar.'],
  ['¿Cuánto cuesta el marketing digital para un emprendimiento?', `En Kairos una pieza publicitaria cuesta desde ${pesos(desde('diseno'))}, el manejo de redes sociales desde ${pesos(desde('redes'))} al mes, una página web desde ${pesos(desde('web'))} (pago único) y una auditoría SEO + IA ${pesos(PLANES.seo.planes[0].precio)}. Todos los planes están en la página de <a href="/precios">precios</a>.`],
  ['¿Qué diferencia hay entre SEO, AEO y GEO?', 'El SEO busca que tu negocio aparezca en Google y Google Maps. El AEO (optimización para motores de respuesta) prepara tu información para que asistentes como ChatGPT o los resúmenes con IA de Google puedan usarla en sus respuestas. El GEO aplica lo mismo a la IA generativa en general. Los tres se apoyan en una página bien construida y datos claros.'],
  ['¿Con qué tipo de negocios trabaja Kairos?', 'Con emprendedores y negocios pequeños de cualquier sector: tiendas y comercios, belleza y estética, salud y consultorios, cafeterías y comida, servicios profesionales, educación y cursos, y marcas personales. Adaptamos cada estrategia a cómo vende tu tipo de negocio.'],
  ['¿Trabajan con negocios fuera de Bogotá?', 'Sí. Estamos en Bogotá, pero atendemos emprendedores de toda Colombia de forma remota, por WhatsApp, correo y videollamada.'],
  ['¿Los planes mensuales tienen permanencia mínima?', 'No. Los planes mensuales (redes sociales y seguimiento SEO) se renuevan mes a mes. Puedes pausarlos cuando lo necesites avisando antes del siguiente ciclo.'],
  ['¿Cómo empiezo a trabajar con Kairos?', 'Escríbenos por WhatsApp contando qué vende tu negocio y qué necesitas, o pide el <a href="/asesoria-gratuita">diagnóstico gratuito</a>. Te respondemos con una recomendación y un precio cerrado antes de empezar.'],
];

export const meta = {
  ruta: RUTA, titulo: TITULO, descripcion: DESC, ...OG_MARCA,
  ogTitulo: 'Kairos — Agencia de marketing digital accesible para emprendedores',
  ogDescripcion: 'Diseño publicitario, redes sociales, páginas web y SEO con precios publicados desde $35.000.',
  textoWa: TEXTO_WA,
  preload: precargaFoto('emprendedora-marketing-digital', '100vw', true),
  graph: [
    ...entidad(),
    { '@type': 'WebPage', '@id': `${B}/#webpage`, url: `${B}/`, name: TITULO, description: DESC, isPartOf: { '@id': ID.web }, about: { '@id': ID.org }, primaryImageOfPage: `${B}/assets/images/fotos/emprendedora-marketing-digital-1600.webp`, author: { '@id': ID.org }, datePublished: '2026-07-16', dateModified: HOY, inLanguage: 'es-CO' },
    { '@type': 'OfferCatalog', '@id': `${B}/#catalogo`, name: 'Servicios de marketing digital de Kairos', itemListElement: ['diseno', 'redes', 'web', 'seo', 'combo'].flatMap((c) => ofertasLd(c)) },
    faqLd('/', FAQ),
  ],
};

const SERVICIOS = [
  ['diseno-piezas-publicitarias', 'Diseño de piezas publicitarias', 'Publicaciones, historias, flyers y banners con diseño profesional que hacen que tu marca se vea seria.', '/diseno-de-piezas-publicitarias', `Desde ${pesos(desde('diseno'))}`],
  ['manejo-redes-sociales-celular', 'Manejo de redes sociales', 'Diseñamos, escribimos y programamos tu contenido de Instagram y Facebook todos los meses.', '/manejo-de-redes-sociales', `Desde ${pesos(desde('redes'))} / mes`],
  ['pagina-web-economica-laptop', 'Páginas web económicas', 'Tu página propia, rápida y a la medida, con botón de WhatsApp y sin mensualidad de hosting.', '/paginas-web-economicas', `Desde ${pesos(desde('web'))}`],
  ['analitica-seo-posicionamiento', 'Posicionamiento SEO', 'Auditoría y arquitectura SEO para que Google y Google Maps entiendan qué vendes y dónde.', '/posicionamiento-seo', `Desde ${pesos(desde('seo'))}`, true],
  ['aeo-geo-chat-inteligencia-artificial', 'AEO y GEO: visibilidad en IA', 'Preparamos tu marca para los buscadores con inteligencia artificial como ChatGPT, Gemini y Google.', '/aeo-geo', 'Incluido en los planes SEO + IA'],
  ['emprendedor-trabajando-laptop', 'Kit Emprendedor Digital', 'Landing page, 4 piezas y Google Maps configurado: lo esencial para que un negocio nuevo exista en internet.', '/precios#combo', pesos(PLANES.combo.planes[0].precio)],
];

const PERFILES = [
  ['microempresario-tienda', 'Tiendas y comercios de barrio', 'Que te encuentren en Google Maps y te escriban por WhatsApp.'],
  ['emprendedora-negocio-local', 'Emprendedoras y marcas personales', 'Una imagen profesional que transmita confianza desde el primer post.'],
  ['pareja-emprendedores-negocio', 'Negocios familiares', 'Marketing claro, sin tecnicismos y a un precio justo.'],
  ['emprendedor-celular-ventas', 'Quienes venden por redes y WhatsApp', 'Piezas y una página propia para vender más y depender menos del algoritmo.'],
];

const GUIAS = [
  ['precios-marketing-digital-presupuesto', 'Precios 2026', '¿Cuánto cobra una agencia de marketing digital en Colombia?', '/guias/cuanto-cobra-una-agencia-de-marketing-digital'],
  ['estrategia-marketing-reunion', 'Plan paso a paso', 'Plan de marketing digital para emprendedores (con ejemplo)', '/guias/plan-de-marketing-digital-para-emprendedores'],
  ['google-maps-negocio-celular', 'Google Maps', 'Cómo aparecer en Google Maps con tu negocio, gratis', '/guias/como-aparecer-en-google-maps'],
  ['inteligencia-artificial-marketing', 'ChatGPT e IA', 'Cómo aparecer en ChatGPT y que la IA recomiende tu negocio', '/guias/como-aparecer-en-chatgpt'],
];

const CANALES = [
  ['apps-redes-sociales', 'Redes sociales', 'Instagram y Facebook con publicaciones que se ven profesionales, comunican claro y llevan al cliente a escribirte.', '/manejo-de-redes-sociales', 'Celular con las aplicaciones de redes sociales donde los clientes descubren negocios'],
  ['google-maps-negocio-celular', 'Google y Google Maps', 'Que te encuentren cuando alguien busca lo que vendes cerca: ficha de Google optimizada, reseñas y una página que Google entiende.', '/posicionamiento-seo', 'Persona buscando un negocio cercano en Google Maps desde el celular'],
  ['aeo-geo-chat-inteligencia-artificial', 'Buscadores con inteligencia artificial', 'Tu marca preparada para ChatGPT, Gemini y los resúmenes con IA de Google, con información clara y verificable.', '/aeo-geo', 'Conversación con un asistente de inteligencia artificial que recomienda negocios'],
];

// Sectores: un consejo concreto por tipo de negocio (contenido propio, útil para buscadores e IA).
const SECTORES = [
  ['sector-belleza-estetica', 'Belleza y estética', 'Estilista atendiendo a una clienta en un salón de belleza', 'Fotos de antes y después en redes, citas por WhatsApp y reseñas en Google Maps con fotos del resultado.'],
  ['sector-salud-consultorio', 'Salud y consultorios', 'Profesional de la salud conversando con un paciente en su consultorio', 'Ficha de Google completa con horarios y servicios, y una página con preguntas frecuentes que genere confianza antes de la cita.'],
  ['sector-tienda-moda', 'Tiendas de ropa y accesorios', 'Dueña de una tienda de ropa sonriendo entre sus productos', 'Publicaciones de producto con precio visible, catálogo en WhatsApp Business y una página para recibir pedidos.'],
  ['sector-cafeteria-comida', 'Cafeterías y comida', 'Barista atendiendo a un cliente en una cafetería', 'Fotos reales del producto, horario siempre actualizado en Google y una promoción fija por día de la semana.'],
  ['sector-servicios-profesionales', 'Servicios profesionales', 'Profesional independiente trabajando en su computador', 'Una página que explique tus servicios y precios, contenidos que respondan las dudas de tus clientes y un perfil de LinkedIn coherente.'],
  ['sector-educacion-cursos', 'Educación y cursos', 'Profesor dando una clase en línea desde su computador', 'Una landing por curso con inscripción por WhatsApp y contenido educativo corto que demuestre lo que enseñas.'],
];

// Ecosistema: cómo se conecta el marketing de un negocio pequeño, del descubrimiento a la venta.
const ICONOS_ECO = {
  redes: '<rect x="7" y="2.5" width="10" height="19" rx="2.2"/><path d="M11 18.5h2"/>',
  web: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
  mapa: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  ia: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
  chat: '<path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5z"/>',
};
const ECOSISTEMA = [
  ['redes', 'Te descubren', 'En Instagram y Facebook, con piezas que se ven profesionales.'],
  ['web', 'Te conocen', 'En tu página propia, con todo lo que necesitan para decidir.'],
  ['mapa', 'Te encuentran', 'En Google y Google Maps, cuando buscan lo que vendes cerca.'],
  ['ia', 'Te recomiendan', 'En ChatGPT, Gemini y los resúmenes con IA de Google.'],
  ['chat', 'Te compran', 'Por WhatsApp, con un clic desde cualquiera de esos lugares.'],
];

// Cifras de Colombia verificadas en la fuente (DataReportal, Digital 2026: Colombia, datos de octubre de 2025).
const CIFRAS_CO = [
  ['41,7 millones', 'de usuarios de internet en Colombia'],
  ['37,7 millones', 'de perfiles activos en redes sociales, el 70,4 % de la población'],
  ['83 millones', 'de conexiones móviles activas, el 155 % de la población'],
];

const MARQUESINA = ['Diseño de piezas publicitarias', 'Manejo de redes sociales', 'Páginas web económicas', 'Posicionamiento SEO', 'AEO y GEO', 'Google Maps', 'Contenido para Instagram', 'Branding para emprendedores'];
const destacados = [PLANES.diseno.planes[1], PLANES.seo.planes[1], PLANES.redes.planes[0]];

export const cuerpo = `
  <!-- ============================= HERO ============================= -->
  <section class="hero-foto" id="inicio" aria-labelledby="titulo-principal">
    <picture class="hero-foto__fondo">
      ${foto('emprendedora-marketing-digital', 'Emprendedora revisando el marketing digital de su negocio en el celular y el computador', { prioridad: true, grande: true, sizes: '100vw' })}
    </picture>
    <div class="contenedor hero-foto__contenido">
      <p class="etiqueta">Kairos · Agencia de marketing digital · Bogotá</p>
      <p class="hero-foto__antetitulo">Hacemos crecer tu <span class="rotador" aria-hidden="true"><span>emprendimiento</span><span>tienda</span><span>marca personal</span><span>negocio local</span><span>consultorio</span></span></p>
      <h1 id="titulo-principal">Agencia de marketing digital <em>para emprendedores</em> y pequeños negocios</h1>
      <p class="entradilla">Diseño publicitario, redes sociales, páginas web y SEO con precios que sí caben en tu presupuesto. Calidad de agencia, sin tarifas de agencia gigante.</p>
      <div class="botones">
        <a href="/precios" class="btn btn--primario">Ver planes y precios</a>
        <a href="/asesoria-gratuita" class="btn btn--contorno">Pedir diagnóstico gratis</a>
      </div>
      <ul class="insignias">
        <li class="insignia">Desde ${pesos(desde('diseno'))}</li>
        <li class="insignia">Precios publicados</li>
        <li class="insignia">Sin permanencia mínima</li>
      </ul>
    </div>
  </section>

  <!-- ============================= MARQUESINA ============================= -->
  <div class="marquesina" aria-label="Servicios de Kairos">
    <ul class="marquesina__pista">
      ${MARQUESINA.map((t) => `<li>${t}</li>`).join('')}
      ${MARQUESINA.map((t) => `<li aria-hidden="true">${t}</li>`).join('')}
    </ul>
  </div>

  <!-- ============================= QUÉ ES KAIROS ============================= -->
  <section class="seccion seccion--compacta" id="que-es-kairos" aria-labelledby="titulo-que-es">
    <div class="contenedor dos-columnas">
      <div class="revelar">
        <p class="etiqueta"><span class="etiqueta__num">01</span> En pocas palabras</p>
        <h2 class="titulo-l" id="titulo-que-es">¿Qué es Kairos?</h2>
      </div>
      <div class="respuesta revelar" data-retraso="1">
        <p class="respuesta__titulo">Respuesta corta</p>
        <p><strong>Kairos es una agencia de marketing digital de Bogotá para emprendedores y micronegocios, con precios accesibles y publicados.</strong> Diseñamos tus piezas publicitarias, manejamos tus redes sociales, programamos tu página web y preparamos tu negocio para aparecer en Google, en Google Maps y en los buscadores con inteligencia artificial.</p>
        <p>La agencia la dirige <a href="/nosotros">Marlon Herrera</a>, que ejecuta personalmente el trabajo de diseño, desarrollo web, SEO y AEO.</p>
      </div>
    </div>
    <div class="contenedor mt-l">
      <ul class="cifras revelar">
        <li class="cifra"><span class="cifra__valor" data-contar="${desde('diseno')}" data-prefijo="$">${pesos(desde('diseno'))}</span><span class="cifra__texto">precio de una pieza publicitaria</span></li>
        <li class="cifra"><span class="cifra__valor" data-contar="48" data-sufijo=" h">48 h</span><span class="cifra__texto">entrega de una pieza express</span></li>
        <li class="cifra"><span class="cifra__valor" data-contar="${desde('web')}" data-prefijo="$">${pesos(desde('web'))}</span><span class="cifra__texto">tu página web, pago único</span></li>
        <li class="cifra"><span class="cifra__valor">$0</span><span class="cifra__texto">diagnóstico inicial de tu negocio</span></li>
      </ul>
    </div>
  </section>
${carruselMarcas()}
  <!-- ============================= SERVICIOS ============================= -->
  <section class="seccion seccion--alterna" id="servicios" aria-labelledby="titulo-servicios">
    <div class="contenedor">
      <div class="encabezado-seccion encabezado-seccion--fila revelar">
        <div>
          <p class="etiqueta"><span class="etiqueta__num">02</span> Servicios</p>
          <h2 class="titulo-l" id="titulo-servicios">Todo el marketing digital que tu negocio necesita, <em>en un solo lugar</em></h2>
        </div>
        <p class="entradilla">Empieza por lo que más te urge y suma servicios cuando tu negocio crezca. Cada servicio tiene precio publicado.</p>
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

  <!-- ============================= DÓNDE TE ENCUENTRAN (canales) ============================= -->
  <section class="seccion seccion--oscura" id="canales" aria-labelledby="titulo-canales">
    <div class="contenedor">
      <div class="encabezado-seccion revelar">
        <p class="etiqueta"><span class="etiqueta__num">03</span> Dónde te van a encontrar</p>
        <h2 class="titulo-l" id="titulo-canales">Un ecosistema que lleva al cliente <em>de verte a comprarte</em></h2>
        <p class="entradilla">Tus clientes te descubren en redes, te buscan en Google y cada vez más le preguntan a la inteligencia artificial. Por eso no vendemos piezas sueltas sin sentido: conectamos redes, página web, Google y la IA para que cada canal lleve al siguiente y todos terminen en tu WhatsApp.</p>
      </div>
      <ol class="ecosistema revelar" aria-label="Cómo se conecta el marketing de tu negocio">
        ${ECOSISTEMA.map(([icono, t, d]) => `<li class="ecosistema__paso">
          <span class="ecosistema__icono" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONOS_ECO[icono]}</svg></span>
          <h3>${t}</h3>
          <p>${d}</p>
        </li>`).join('\n        ')}
      </ol>
      <ul class="servicios-grid mt-l">
        ${CANALES.map(([img, t, d, r, alt], i) => `<li class="tarjeta-servicio revelar" data-retraso="${i}">
          <div class="tarjeta-servicio__imagen">${foto(img, alt, { sizes: '(min-width: 1024px) 400px, (min-width: 640px) 50vw, calc(100vw - 32px)' })}</div>
          <div class="tarjeta-servicio__cuerpo">
            <h3><a href="${r}">${t}</a></h3>
            <p>${d}</p>
            <span class="tarjeta-servicio__mas" aria-hidden="true">Ver cómo lo hacemos</span>
          </div>
        </li>`).join('\n        ')}
      </ul>
    </div>
  </section>

  <!-- ============================= PARA QUIÉN ============================= -->
  <section class="seccion" id="para-quien" aria-labelledby="titulo-para-quien">
    <div class="contenedor">
      <div class="encabezado-seccion revelar">
        <p class="etiqueta"><span class="etiqueta__num">04</span> Para quién es Kairos</p>
        <h2 class="titulo-l" id="titulo-para-quien">Marketing digital para negocios que están empezando o creciendo</h2>
        <p class="entradilla">Si una agencia tradicional se sale de tu presupuesto pero necesitas verte profesional y conseguir clientes por internet, estás en el lugar correcto.</p>
      </div>
      <ul class="perfiles">
        ${PERFILES.map(([img, t, d], i) => `<li class="perfil revelar" data-retraso="${i}">
          ${foto(img, t, { sizes: '(min-width: 1024px) 300px, (min-width: 640px) 50vw, calc(100vw - 32px)' })}
          <div class="perfil__texto"><h3>${t}</h3><p>${d}</p></div>
        </li>`).join('\n        ')}
      </ul>
    </div>
  </section>

  <!-- ============================= SECTORES ============================= -->
  <section class="seccion seccion--alterna" id="sectores" aria-labelledby="titulo-sectores">
    <div class="contenedor">
      <div class="encabezado-seccion encabezado-seccion--fila revelar">
        <div>
          <p class="etiqueta"><span class="etiqueta__num">05</span> Sectores</p>
          <h2 class="titulo-l" id="titulo-sectores">Marketing digital para cada tipo de negocio</h2>
        </div>
        <p class="entradilla">No todos los negocios venden igual. Esto es lo que mejor le funciona a cada sector, y es lo que aplicamos cuando trabajamos con el tuyo.</p>
      </div>
      <ul class="servicios-grid">
        ${SECTORES.map(([img, t, alt, consejo], i) => `<li class="tarjeta-servicio revelar" data-retraso="${i % 3}">
          <div class="tarjeta-servicio__imagen">${foto(img, alt, { sizes: '(min-width: 1024px) 400px, (min-width: 640px) 50vw, calc(100vw - 32px)' })}</div>
          <div class="tarjeta-servicio__cuerpo">
            <h3>${t}</h3>
            <p><strong>Lo que mejor funciona:</strong> ${consejo}</p>
          </div>
        </li>`).join('\n        ')}
      </ul>
      <div class="enlaces-seccion"><a class="enlace-flecha" href="/asesoria-gratuita">¿Tu sector no está aquí? Pide el diagnóstico gratis</a></div>
    </div>
  </section>

  <!-- ============================= CIFRAS DE COLOMBIA ============================= -->
  <section class="seccion" id="cifras-colombia" aria-labelledby="titulo-cifras">
    <div class="contenedor">
      <div class="encabezado-seccion revelar">
        <p class="etiqueta"><span class="etiqueta__num">06</span> Datos 2026</p>
        <h2 class="titulo-l" id="titulo-cifras">Marketing digital en Colombia: cifras clave</h2>
        <p class="entradilla">Tus clientes ya están en internet. La pregunta no es si tu negocio debe estar ahí, sino si te encuentran a ti o a tu competencia.</p>
      </div>
      <ul class="cifras cifras--3 revelar">
        ${CIFRAS_CO.map(([v, t]) => `<li class="cifra"><span class="cifra__valor">${v}</span><span class="cifra__texto">${t}</span></li>`).join('\n        ')}
      </ul>
      <p class="fuente mt-s">Fuente: <a href="https://datareportal.com/reports/digital-2026-colombia" target="_blank" rel="noopener">DataReportal, "Digital 2026: Colombia"</a>, con datos de octubre de 2025. Los perfiles en redes sociales son identidades de usuario y pueden no corresponder a personas únicas.</p>
    </div>
  </section>

  <!-- ============================= DIFERENCIAL ============================= -->
  <section class="seccion seccion--alterna" id="por-que-kairos" aria-labelledby="titulo-por-que">
    <div class="contenedor bloque-imagen">
      <figure class="bloque-imagen__foto revelar">${foto('estrategia-marketing-reunion', 'Reunión de estrategia de marketing digital para un pequeño negocio')}</figure>
      <div class="bloque-imagen__texto revelar" data-retraso="1">
        <p class="etiqueta"><span class="etiqueta__num">07</span> Por qué Kairos</p>
        <h2 class="titulo-l" id="titulo-por-que">Calidad de agencia, <em>precio de emprendedor</em></h2>
        <p>Hay agencias en Colombia que publican planes desde $700.000 u $800.000 al mes, y muchas ni siquiera muestran sus precios. Kairos nació para los negocios que también merecen verse profesionales, pero que no pueden pagar eso.</p>
        <ul class="lista-check">
          <li>Precios publicados: sabes cuánto pagas antes de escribirnos</li>
          <li>Planes desde ${pesos(desde('diseno'))} y páginas web con pago único</li>
          <li>Planes mensuales sin permanencia mínima</li>
          <li>Hablas directamente con quien hace el trabajo</li>
          <li>Diagnóstico gratis antes de contratar</li>
        </ul>
        <div class="botones"><a href="/precios" class="btn btn--primario">Ver todos los precios</a></div>
      </div>
    </div>
  </section>

  <!-- ============================= PROCESO ============================= -->
  <section class="seccion" id="proceso" aria-labelledby="titulo-proceso">
    <div class="contenedor">
      <div class="encabezado-seccion revelar">
        <p class="etiqueta"><span class="etiqueta__num">08</span> Cómo trabajamos</p>
        <h2 class="titulo-l" id="titulo-proceso">De tu primer mensaje a resultados, en cuatro pasos</h2>
      </div>
      <ol class="pasos revelar">
        <li class="paso"><h3 class="titulo-m">Diagnóstico gratis</h3><p>Nos cuentas qué vendes y revisamos cómo se ve hoy tu negocio en redes, en Google y en la IA.</p></li>
        <li class="paso"><h3 class="titulo-m">Plan con precio cerrado</h3><p>Te proponemos por dónde empezar según tu presupuesto, con precio y fecha de entrega.</p></li>
        <li class="paso"><h3 class="titulo-m">Ejecución</h3><p>Diseñamos, programamos u optimizamos, y te mostramos avances para que los revises.</p></li>
        <li class="paso"><h3 class="titulo-m">Entrega y medición</h3><p>Recibes tus archivos o tu página lista, y en SEO medimos cada mes qué cambió.</p></li>
      </ol>
    </div>
  </section>

  <!-- ============================= PLANES DESTACADOS ============================= -->
  <section class="seccion seccion--alterna" id="planes" aria-labelledby="titulo-planes">
    <div class="contenedor">
      <div class="encabezado-seccion encabezado-seccion--fila revelar">
        <div>
          <p class="etiqueta"><span class="etiqueta__num">09</span> Planes</p>
          <h2 class="titulo-l" id="titulo-planes">Planes de marketing digital <em>con precio a la vista</em></h2>
        </div>
        <p class="entradilla">Los tres planes que más eligen los emprendedores. Hay más opciones en la página de precios.</p>
      </div>
      <div class="planes-grid planes-grid--3 revelar">
        ${destacados.map((p) => planHtml(p, null, { soloEstrella: true })).join('\n        ')}
      </div>
      <div class="enlaces-seccion"><a class="enlace-flecha" href="/precios">Ver todos los planes y arma el tuyo</a></div>
    </div>
  </section>

  <!-- ============================= DIRECTOR (E-E-A-T) ============================= -->
  <section class="seccion" id="director" aria-labelledby="titulo-director">
    <div class="contenedor director">
      <figure class="director__foto revelar">
        <picture>
          <source type="image/avif" srcset="/assets/images/marlon-herrera-crecimiento-digital-800.avif 800w, /assets/images/marlon-herrera-crecimiento-digital-1200.avif 1200w" sizes="(min-width: 900px) 520px, calc(100vw - 32px)">
          <img src="/assets/images/marlon-herrera-crecimiento-digital-800.webp" srcset="/assets/images/marlon-herrera-crecimiento-digital-800.webp 800w, /assets/images/marlon-herrera-crecimiento-digital-1200.webp 1200w" sizes="(min-width: 900px) 520px, calc(100vw - 32px)" width="1600" height="893" loading="lazy" decoding="async" alt="Marlon Herrera, director de Kairos, junto al mensaje: Somos tu agencia de crecimiento digital">
        </picture>
      </figure>
      <div class="director__texto revelar" data-retraso="1">
        <p class="etiqueta"><span class="etiqueta__num">10</span> Quién dirige Kairos</p>
        <h2 class="titulo-l" id="titulo-director">Marlon Herrera, <em>director</em></h2>
        <p class="entradilla">Diseñador publicitario y estratega de marketing digital. Dirige Kairos y ejecuta personalmente el trabajo de diseño, desarrollo web, SEO y AEO.</p>
        <p>Estas son prácticas que aplica en proyectos reales, empezando por este mismo sitio:</p>
        <ul class="lista-check">
          <li>SEO on-page: títulos, textos y enlazado interno por intención de búsqueda</li>
          <li>SEO técnico: datos estructurados, sitemap, URLs canónicas y velocidad de carga</li>
          <li>AEO y GEO: respuestas directas, preguntas frecuentes y entidad de marca coherente</li>
          <li>Indexación en Google Search Console y en Bing con IndexNow</li>
        </ul>
        <div class="botones"><a href="/nosotros" class="btn btn--contorno">Conocer a Kairos</a></div>
      </div>
    </div>
  </section>

  <!-- ============================= GUÍAS ============================= -->
  <section class="seccion seccion--alterna" id="guias" aria-labelledby="titulo-guias">
    <div class="contenedor">
      <div class="encabezado-seccion encabezado-seccion--fila revelar">
        <div>
          <p class="etiqueta"><span class="etiqueta__num">11</span> Guías gratuitas</p>
          <h2 class="titulo-l" id="titulo-guias">Aprende a hacer crecer tu negocio en internet</h2>
        </div>
        <p class="entradilla">Precios reales, pasos concretos y cero tecnicismos.</p>
      </div>
      <ul class="guias-grid">
        ${GUIAS.map(([img, tipo, t, r], i) => `<li class="guia-tarjeta revelar" data-retraso="${i}">
          <div class="guia-tarjeta__imagen">${foto(img, t, { sizes: '(min-width: 1100px) 290px, (min-width: 640px) 50vw, calc(100vw - 32px)' })}</div>
          <span class="guia-tarjeta__tipo">${tipo}</span>
          <h3><a href="${r}">${t}</a></h3>
        </li>`).join('\n        ')}
      </ul>
    </div>
  </section>

  <!-- ============================= FAQ ============================= -->
  <section class="seccion seccion--borde" id="preguntas" aria-labelledby="titulo-preguntas">
    <div class="contenedor dos-columnas dos-columnas--fija">
      <div>
        <p class="etiqueta"><span class="etiqueta__num">12</span> Preguntas frecuentes</p>
        <h2 class="titulo-l" id="titulo-preguntas">Lo que preguntan antes de escribirnos</h2>
        <div class="enlaces-seccion enlaces-seccion--columna">
          <a class="enlace-flecha" href="/precios">Ver planes y precios</a>
          <a class="enlace-flecha" href="/asesoria-gratuita">Pedir diagnóstico gratis</a>
        </div>
      </div>
      <div class="faq">
${faqHtml('faq-inicio', FAQ)}
      </div>
    </div>
  </section>
${ctaFinal({ etiqueta: 'Hablemos de tu negocio', titulo: '¿Listo para que tu negocio <em>se vea profesional</em>?', texto: 'Escríbenos por WhatsApp, cuéntanos qué vendes y te respondemos con una propuesta clara, con precio y fecha de entrega.', textoWa: TEXTO_WA })}
`;
