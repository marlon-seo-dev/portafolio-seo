import { B, HOY, ID, WA, entidad, migas, migasHtml, faqLd, faqHtml, foto, precargaFoto, OG_MARCA } from '../comun.mjs';

const RUTA = '/asesoria-gratuita';
const TITULO = 'Diagnóstico Gratis de Marketing Digital | Kairos';
const DESC = 'Pide un diagnóstico gratis de marketing digital para tu emprendimiento: te decimos por dónde empezar, en qué canales y con qué presupuesto.';

const FAQ = [
  ['¿El diagnóstico gratuito tiene algún costo oculto?', 'No. Es una recomendación inicial sin costo. Solo pagas si decides contratar alguno de nuestros planes después de recibirla.'],
  ['¿En cuánto tiempo recibo la respuesta?', 'Normalmente respondemos en menos de 24 horas hábiles, por correo, con una recomendación pensada para tu tipo de negocio.'],
  ['¿Tengo que contratar algo después?', 'No. La recomendación es tuya, la uses o no. Muchos emprendedores la usan solo para saber por dónde empezar.'],
  ['¿Qué debo escribir en "qué necesita tu negocio"?', 'Entre más específico, mejor: por ejemplo "no tengo página web", "casi no publico en redes" o "quiero aparecer en Google Maps". Con eso podemos orientarte bien.'],
  ['¿Sirve si mi negocio todavía no ha abierto?', 'Sí. Es un buen momento para planear tu presencia digital desde el inicio y no tener que corregir después.'],
];

const TIPOS = ['Tienda o comercio', 'Servicios profesionales', 'Belleza y estética', 'Salud y bienestar', 'Comida y bebidas', 'Moda y accesorios', 'Educación y cursos', 'Marca personal', 'Emprendimiento por redes sociales', 'Otro'];

export const meta = {
  ruta: RUTA, titulo: TITULO, descripcion: DESC, ...OG_MARCA,
  textoWa: 'Hola Kairos, quiero un diagnóstico de marketing para mi negocio.',
  preload: precargaFoto('emprendedor-celular-ventas', '(min-width: 1024px) 560px, calc(100vw - 32px)'),
  graph: [
    ...entidad(),
    { '@type': 'WebPage', '@id': `${B}${RUTA}#webpage`, url: `${B}${RUTA}`, name: TITULO, description: DESC, isPartOf: { '@id': ID.web }, about: { '@id': ID.org }, breadcrumb: { '@id': `${B}${RUTA}#migas` }, dateModified: HOY, inLanguage: 'es-CO' },
    migas(RUTA, [['Inicio', '/'], ['Diagnóstico gratis', RUTA]]),
    faqLd(RUTA, FAQ),
  ],
};

export const cuerpo = `${migasHtml([['Inicio', '/'], ['Diagnóstico gratis', RUTA]])}

  <section class="hero-split" id="inicio" aria-labelledby="titulo-principal">
    <div class="contenedor hero-split__grid">
      <div>
        <p class="etiqueta">Gratis · Sin compromiso</p>
        <h1 id="titulo-principal">Diagnóstico gratis de <em>marketing digital</em> para tu negocio</h1>
        <p class="entradilla">Antes de invertir, entérate qué necesita realmente tu emprendimiento. Cuéntanos de tu negocio y te enviamos por correo una recomendación clara: por dónde empezar, en qué canales y con qué presupuesto.</p>
        <div class="botones">
          <a href="#formulario" class="btn btn--primario">Ir al formulario</a>
          <a href="${WA}" target="_blank" rel="noopener" class="btn btn--contorno">Prefiero WhatsApp</a>
        </div>
      </div>
      <figure class="hero-split__foto">
        ${foto('emprendedor-celular-ventas', 'Emprendedor revisando en el celular cómo mejorar el marketing de su negocio', { prioridad: true, sizes: '(min-width: 1024px) 560px, calc(100vw - 32px)' })}
        <figcaption class="hero-split__sello"><strong>$0</strong>respuesta en menos de 24 h hábiles</figcaption>
      </figure>
    </div>
  </section>

  <section class="seccion seccion--alterna" id="que-incluye" aria-labelledby="titulo-incluye">
    <div class="contenedor">
      <div class="encabezado-seccion revelar">
        <p class="etiqueta"><span class="etiqueta__num">01</span> Qué incluye</p>
        <h2 class="titulo-l" id="titulo-incluye">Qué recibes en tu diagnóstico gratuito</h2>
        <p class="entradilla">No es una respuesta automática: leemos lo que escribes y te respondemos pensando en tu negocio.</p>
      </div>
      <div class="rejilla rejilla--4">
        <article class="tarjeta revelar"><span class="tarjeta__num" aria-hidden="true">01</span><h3 class="titulo-m">Tu situación actual</h3><p>Qué le falta hoy a tu presencia digital: redes, página, Google o imagen de marca.</p></article>
        <article class="tarjeta revelar" data-retraso="1"><span class="tarjeta__num" aria-hidden="true">02</span><h3 class="titulo-m">Por dónde empezar</h3><p>La prioridad para tu negocio, para que no gastes en lo que todavía no necesitas.</p></article>
        <article class="tarjeta revelar" data-retraso="2"><span class="tarjeta__num" aria-hidden="true">03</span><h3 class="titulo-m">Canales recomendados</h3><p>Dónde están tus clientes: redes, Google Maps, página web o buscadores con IA.</p></article>
        <article class="tarjeta revelar" data-retraso="3"><span class="tarjeta__num" aria-hidden="true">04</span><h3 class="titulo-m">Presupuesto orientativo</h3><p>Con qué plan podrías empezar, con <a href="/precios">precios publicados</a> y sin presión de compra.</p></article>
      </div>
    </div>
  </section>

  <section class="seccion" id="formulario" aria-labelledby="titulo-formulario">
    <div class="contenedor dos-columnas">
      <div>
        <p class="etiqueta"><span class="etiqueta__num">02</span> Formulario</p>
        <h2 class="titulo-l" id="titulo-formulario">Cuéntanos de tu negocio</h2>
        <p class="aviso mt-l">
          Tu solicitud nos llega directo al correo y recibirás una confirmación automática. Si el envío
          automático fallara, se abrirá tu aplicación de correo con el mensaje ya redactado para
          <strong>marlonsherrera7002@gmail.com</strong>. También puedes escribirnos por
          <a href="${WA}" target="_blank" rel="noopener">WhatsApp</a>.
        </p>
      </div>
      <form class="formulario" id="formulario-asesoria" action="mailto:marlonsherrera7002@gmail.com" method="post" enctype="text/plain">
        <div class="campo">
          <label for="campo-nombre">Nombre completo <span class="obligatorio" aria-hidden="true">*</span></label>
          <input type="text" id="campo-nombre" name="nombre" autocomplete="name" required>
        </div>
        <div class="campo">
          <label for="campo-negocio">Nombre del negocio <span class="obligatorio" aria-hidden="true">*</span></label>
          <input type="text" id="campo-negocio" name="negocio" autocomplete="organization" required>
        </div>
        <div class="campo">
          <label for="campo-tipo">Tipo de negocio <span class="obligatorio" aria-hidden="true">*</span></label>
          <select id="campo-tipo" name="tipo" required>
            <option value="">Selecciona una opción</option>
${TIPOS.map((t) => `            <option value="${t}">${t}</option>`).join('\n')}
          </select>
        </div>
        <div class="campo">
          <label for="campo-correo">Correo electrónico <span class="obligatorio" aria-hidden="true">*</span></label>
          <input type="email" id="campo-correo" name="correo" autocomplete="email" required>
        </div>
        <div class="campo campo--ancho">
          <label for="campo-whatsapp">WhatsApp (opcional)</label>
          <input type="tel" id="campo-whatsapp" name="whatsapp" autocomplete="tel" inputmode="tel" placeholder="Ej: 3213457681">
        </div>
        <div class="campo campo--ancho">
          <label for="campo-necesidad">¿Qué necesita tu negocio ahora mismo? <span class="obligatorio" aria-hidden="true">*</span></label>
          <textarea id="campo-necesidad" name="necesidad" required placeholder="Ej: no tengo página web y quiero que me encuentren en Google."></textarea>
        </div>

        <!-- Honeypot anti-spam: oculto para personas; si llega con contenido, la función lo descarta. -->
        <div class="campo-trampa" aria-hidden="true">
          <label for="campo-sitio-web">No completar este campo</label>
          <input type="text" id="campo-sitio-web" name="sitio_web" tabindex="-1" autocomplete="off">
        </div>

        <div class="formulario__pie">
          <p class="formulario__nota">Los campos marcados con <span class="obligatorio">*</span> son obligatorios. Tu información solo se usa para responder tu diagnóstico y nunca se comparte con terceros.</p>
          <div class="botones mt-s">
            <button type="submit" class="btn btn--primario">Enviar y recibir mi diagnóstico</button>
            <a href="${WA}" target="_blank" rel="noopener" class="btn btn--contorno">Prefiero WhatsApp</a>
          </div>
          <div class="formulario__resultado" id="formulario-resultado" role="status" aria-live="polite"></div>
        </div>
      </form>
    </div>
  </section>

  <section class="seccion seccion--borde" id="preguntas" aria-labelledby="titulo-preguntas">
    <div class="contenedor dos-columnas dos-columnas--fija">
      <div>
        <p class="etiqueta"><span class="etiqueta__num">03</span> Preguntas frecuentes</p>
        <h2 class="titulo-l" id="titulo-preguntas">Sobre el diagnóstico gratuito</h2>
        <div class="enlaces-seccion enlaces-seccion--columna">
          <a class="enlace-flecha" href="/precios">Ver planes y precios</a>
        </div>
      </div>
      <div class="faq">
${faqHtml('faq-asesoria', FAQ)}
      </div>
    </div>
  </section>
`;
