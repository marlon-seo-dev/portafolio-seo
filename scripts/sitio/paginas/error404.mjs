import { WA } from '../comun.mjs';

// La 404 no se indexa ni tiene canonical; Cloudflare Pages la sirve en cualquier URL inexistente.
export const meta = {
  ruta: '/404',
  titulo: 'Página no encontrada (404) | Kairos',
  descripcion: '',
  robots: 'noindex, follow',
  ogImagen: '/assets/images/kairos-og.jpg',
  ogAlt: '',
};

export const cuerpo = `
  <section class="error-404" aria-labelledby="titulo-principal">
    <div class="contenedor">
      <p class="error-404__codigo" aria-hidden="true">404</p>
      <h1 class="titulo-l" id="titulo-principal">Esta página no existe o cambió de lugar</h1>
      <p class="entradilla">Kairos ahora es una agencia de marketing digital para emprendedores y micronegocios. Aquí tienes lo más visitado:</p>
      <div class="botones">
        <a href="/" class="btn btn--primario">Volver al inicio</a>
        <a href="${WA}" target="_blank" rel="noopener" class="btn btn--contorno">Escribir por WhatsApp</a>
      </div>
      <ul class="error-404__sugerencias">
        <li><a class="enlace-flecha" href="/servicios">Servicios de marketing digital</a></li>
        <li><a class="enlace-flecha" href="/precios">Planes y precios</a></li>
        <li><a class="enlace-flecha" href="/paginas-web-economicas">Páginas web económicas</a></li>
        <li><a class="enlace-flecha" href="/posicionamiento-seo">Posicionamiento SEO</a></li>
        <li><a class="enlace-flecha" href="/guias/">Guías gratuitas</a></li>
      </ul>
    </div>
  </section>
`;
