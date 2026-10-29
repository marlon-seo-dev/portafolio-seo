// Plantilla de página de servicio: misma estructura y calidad en todos los servicios.
import { grafoServicio, migasHtml, foto, precargaFoto, planesHtml, NOTA_PRECIOS, faqHtml, ctaFinal, pesos, desde, PLANES, OG_MARCA, wa } from './comun.mjs';

/* s = {
  ruta, titulo, descripcion, miga, cat, nombreServicio, tipoServicio, descripcionServicio,
  etiqueta, h1, entradilla, foto: [nombre, alt], sello: [valor, texto], insignias: [..],
  respuestaTitulo, respuesta (html),
  incluyeTitulo, incluyeTexto, incluye: [..], fotoIncluye: [nombre, alt],
  beneficiosTitulo, beneficios: [[titulo, texto], ...],
  planesTitulo, planesTexto,
  pasos: [[titulo, texto] x4], extra (html opcional), faq, faqTitulo, cta: {titulo, texto}, textoWa
} */
export function paginaServicio(s) {
  const meta = {
    ruta: s.ruta, titulo: s.titulo, descripcion: s.descripcion, ...OG_MARCA,
    ogImagen: `/assets/images/fotos/${s.foto[0]}-1200.webp`, ogAlt: s.foto[1], ogAncho: 1200, ogAlto: 800,
    textoWa: s.textoWa,
    preload: precargaFoto(s.foto[0], '(min-width: 1024px) 560px, calc(100vw - 32px)'),
    graph: grafoServicio({ ruta: s.ruta, titulo: s.titulo, descripcion: s.descripcion, nombreServicio: s.nombreServicio, tipoServicio: s.tipoServicio, descripcionServicio: s.descripcionServicio, imagen: s.foto[0], cat: s.cat, faq: s.faq, miga: s.miga, publicada: s.publicada }),
  };

  const cuerpo = `${migasHtml([['Inicio', '/'], ['Servicios', '/servicios'], [s.miga, s.ruta]])}

  <section class="hero-split" id="inicio" aria-labelledby="titulo-principal">
    <div class="contenedor hero-split__grid">
      <div>
        <p class="etiqueta">${s.etiqueta}</p>
        <h1 id="titulo-principal">${s.h1}</h1>
        <p class="entradilla">${s.entradilla}</p>
        <div class="botones">
          <a href="${wa(s.textoWa)}" target="_blank" rel="noopener" class="btn btn--primario">Cotizar por WhatsApp</a>
          <a href="#planes" class="btn btn--contorno">Ver precios</a>
        </div>
        <ul class="insignias">${s.insignias.map((i) => `<li class="insignia">${i}</li>`).join('')}</ul>
      </div>
      <figure class="hero-split__foto">
        ${foto(s.foto[0], s.foto[1], { prioridad: true, sizes: '(min-width: 1024px) 560px, calc(100vw - 32px)' })}
        <figcaption class="hero-split__sello"><strong>${s.sello[0]}</strong>${s.sello[1]}</figcaption>
      </figure>
    </div>
  </section>

  <section class="seccion seccion--compacta seccion--borde" id="que-es" aria-labelledby="titulo-que-es">
    <div class="contenedor dos-columnas">
      <div class="revelar">
        <p class="etiqueta"><span class="etiqueta__num">01</span> En palabras simples</p>
        <h2 class="titulo-l" id="titulo-que-es">${s.respuestaTitulo}</h2>
      </div>
      <div class="respuesta revelar" data-retraso="1">
        <p class="respuesta__titulo">Respuesta corta</p>
        ${s.respuesta}
      </div>
    </div>
  </section>

  <section class="seccion seccion--alterna" id="que-incluye" aria-labelledby="titulo-incluye">
    <div class="contenedor bloque-imagen bloque-imagen--invertido">
      <figure class="bloque-imagen__foto revelar">${foto(s.fotoIncluye[0], s.fotoIncluye[1])}</figure>
      <div class="bloque-imagen__texto revelar" data-retraso="1">
        <p class="etiqueta"><span class="etiqueta__num">02</span> Qué incluye</p>
        <h2 class="titulo-l" id="titulo-incluye">${s.incluyeTitulo}</h2>
        <p>${s.incluyeTexto}</p>
        <ul class="lista-check">${s.incluye.map((i) => `<li>${i}</li>`).join('')}</ul>
      </div>
    </div>
  </section>

  <section class="seccion" id="beneficios" aria-labelledby="titulo-beneficios">
    <div class="contenedor">
      <div class="encabezado-seccion revelar">
        <p class="etiqueta"><span class="etiqueta__num">03</span> Lo que gana tu negocio</p>
        <h2 class="titulo-l" id="titulo-beneficios">${s.beneficiosTitulo}</h2>
      </div>
      <div class="rejilla rejilla--${s.beneficios.length === 4 ? 4 : 3}">
        ${s.beneficios.map(([t, d], i) => `<article class="tarjeta revelar" data-retraso="${i}"><span class="tarjeta__num" aria-hidden="true">0${i + 1}</span><h3 class="titulo-m">${t}</h3><p>${d}</p></article>`).join('\n        ')}
      </div>
    </div>
  </section>

  <section class="seccion seccion--alterna" id="planes" aria-labelledby="titulo-planes">
    <div class="contenedor">
      <div class="encabezado-seccion encabezado-seccion--fila revelar">
        <div>
          <p class="etiqueta"><span class="etiqueta__num">04</span> Precios</p>
          <h2 class="titulo-l" id="titulo-planes">${s.planesTitulo}</h2>
        </div>
        <p class="entradilla">${s.planesTexto}</p>
      </div>
      <div class="revelar">
      ${planesHtml(s.cat)}
      </div>
      <p class="nota-precios">${NOTA_PRECIOS} <a href="/precios">Ver todos los planes de Kairos</a>.</p>
    </div>
  </section>
${s.extra || ''}
  <section class="seccion" id="proceso" aria-labelledby="titulo-proceso">
    <div class="contenedor">
      <div class="encabezado-seccion revelar">
        <p class="etiqueta"><span class="etiqueta__num">05</span> Cómo trabajamos</p>
        <h2 class="titulo-l" id="titulo-proceso">${s.pasosTitulo || 'Así trabajamos, paso a paso'}</h2>
      </div>
      <ol class="pasos revelar">
        ${s.pasos.map(([t, d]) => `<li class="paso"><h3 class="titulo-m">${t}</h3><p>${d}</p></li>`).join('\n        ')}
      </ol>
    </div>
  </section>

  <section class="seccion seccion--borde" id="preguntas" aria-labelledby="titulo-preguntas">
    <div class="contenedor dos-columnas dos-columnas--fija">
      <div>
        <p class="etiqueta"><span class="etiqueta__num">06</span> Preguntas frecuentes</p>
        <h2 class="titulo-l" id="titulo-preguntas">${s.faqTitulo}</h2>
        <div class="enlaces-seccion enlaces-seccion--columna">
          ${(s.enlacesFaq || [['/precios', 'Ver todos los planes y precios'], ['/asesoria-gratuita', 'Pedir diagnóstico gratis']]).map(([r, t]) => `<a class="enlace-flecha" href="${r}">${t}</a>`).join('\n          ')}
        </div>
      </div>
      <div class="faq">
${faqHtml('faq-servicio', s.faq)}
      </div>
    </div>
  </section>
${ctaFinal({ etiqueta: 'Kairos · Marketing digital accesible', titulo: s.cta.titulo, texto: s.cta.texto, textoWa: s.textoWa })}
`;
  return { meta, cuerpo };
}
