import { guiaMeta, guiaCuerpo, pesos, PLANES } from '../comun.mjs';

const W = PLANES.web.planes;

const g = {
  ruta: '/guias/cuanto-cuesta-una-pagina-web-en-colombia',
  miga: 'Cuánto cuesta una página web',
  titulo: 'Cuánto Cuesta una Página Web en Colombia (2026)',
  descripcion: 'Cuánto cuesta una página web en Colombia en 2026: precios de landing page y web corporativa, costos de dominio y hosting, y cómo ahorrar sin perder calidad.',
  h1: '¿Cuánto cuesta una página web <em>en Colombia</em>?',
  tipo: 'Precios 2026',
  entradilla: 'Rangos de precios del mercado, costos que se pagan cada año, qué hace subir el precio y cómo un emprendimiento puede tener una página profesional sin gastar millones.',
  publicada: '2026-10-28',
  lectura: 7,
  imagen: 'diseno-pagina-web-emprendedor',
  imagenAlt: 'Computador portátil con la página web de un emprendimiento abierta',
  temas: ['Precio de páginas web', 'Diseño web en Colombia', 'Páginas web para emprendedores'],
  ctaTitulo: `¿Tu página por <em>${pesos(W[0].precio)}</em>?`,
  ctaTexto: 'Landing page programada a la medida, con hosting gratuito y sin mensualidad. Escríbenos y te contamos en cuánto tiempo la tienes.',
  ctaWa: 'Hola Kairos, leí la guía de precios de páginas web y quiero cotizar la mía.',
  respuesta: `<p><strong>Según rangos de referencia del mercado colombiano, una landing page cuesta entre $1.500.000 y $3.500.000 y una web corporativa de 5 a 10 páginas entre $4.000.000 y $9.000.000.</strong> A eso se suman cada año el dominio (de $40.000 a $150.000) y, si aplica, el hosting (de $120.000 a $600.000).</p>
            <p>En Kairos una landing page cuesta ${pesos(W[0].precio)} y una web de hasta 5 secciones ${pesos(W[1].precio)}, con pago único y hosting gratuito.</p>`,
  toc: [
    ['precios', 'Precios por tipo de página'],
    ['costos-anuales', 'Costos que se pagan cada año'],
    ['que-cambia', 'Qué hace subir el precio'],
    ['debe-incluir', 'Qué debe incluir tu página'],
    ['ahorrar', 'Cómo ahorrar sin perder calidad'],
    ['preguntas', 'Preguntas frecuentes'],
  ],
  secciones: `
          <h2 id="precios">Precios de páginas web en Colombia por tipo</h2>
          <div class="tabla-envoltura">
            <table class="tabla">
              <caption>Cuánto cuesta una página web en Colombia (2026)</caption>
              <thead><tr><th scope="col">Tipo de página</th><th scope="col">Rango de mercado <sup>1</sup></th><th scope="col">En Kairos</th></tr></thead>
              <tbody>
                <tr><th scope="row">Landing page (una sola página)</th><td>$1.500.000 – $3.500.000</td><td>${pesos(W[0].precio)}, pago único</td></tr>
                <tr><th scope="row">Web corporativa (5 a 10 páginas)</th><td>$4.000.000 – $9.000.000</td><td>${pesos(W[1].precio)} (hasta 5 secciones)</td></tr>
                <tr><th scope="row">Tienda online con pagos</th><td>Se cotiza según productos, pasarela de pagos e integraciones</td><td>Escríbenos para revisar tu caso</td></tr>
              </tbody>
            </table>
          </div>
          <p class="fuente">Fuente: <sup>1</sup> <a href="https://cangrejodigital.com/diseno-web/cuanto-cuesta-pagina-web-colombia/" target="_blank" rel="noopener">Cangrejo Digital</a>, rangos de referencia del mercado de servicios digitales en Colombia. Consultada en octubre de 2026.</p>

          <h2 id="costos-anuales">Costos que se pagan cada año</h2>
          <ul>
            <li><strong>Dominio</strong> (tunegocio.com o .com.co): de $40.000 a $150.000 al año.</li>
            <li><strong>Hosting con certificado de seguridad</strong>: de $120.000 a $600.000 al año en proveedores comerciales.</li>
            <li><strong>Mantenimiento</strong>: depende de la tecnología y de cuántos cambios necesites.</li>
          </ul>
          <p class="fuente">Fuente de los rangos de dominio y hosting: <a href="https://www.tiendanube.com/blog/cuanto-cuesta-crear-una-pagina-web" target="_blank" rel="noopener">Tiendanube</a>, consultada en octubre de 2026.</p>
          <p>En Kairos publicamos tu página en un hosting gratuito de alto rendimiento, así que no pagas mensualidad ni anualidad de hosting. El dominio propio es opcional: tu página puede funcionar desde el primer día con una dirección gratuita.</p>

          <h2 id="que-cambia">¿Qué hace subir el precio de una página web?</h2>
          <ul>
            <li><strong>Cantidad de páginas o secciones</strong> y de textos que hay que escribir.</li>
            <li><strong>Funciones especiales</strong>: tienda con carrito, pasarela de pagos, reservas, áreas de usuario.</li>
            <li><strong>Diseño a la medida</strong> frente a una plantilla ajustada.</li>
            <li><strong>Contenido</strong>: fotos profesionales, videos o textos que el proveedor debe crear.</li>
            <li><strong>SEO y medición</strong>: si incluye datos estructurados, alta en Google Search Console y analítica.</li>
          </ul>

          <h2 id="debe-incluir">Qué debe incluir cualquier página web en 2026</h2>
          <ol>
            <li><div><strong>Diseño adaptado al celular</strong>: es donde la mayoría de tus clientes la va a abrir.</div></li>
            <li><div><strong>Carga rápida</strong>: imágenes livianas y código limpio.</div></li>
            <li><div><strong>Botón directo a WhatsApp</strong> y tus datos de contacto visibles.</div></li>
            <li><div><strong>Seguridad (HTTPS)</strong>: el candado en la barra del navegador.</div></li>
            <li><div><strong>SEO básico</strong>: títulos, descripciones y datos estructurados para que Google y la IA entiendan tu negocio.</div></li>
            <li><div><strong>Alta en Google Search Console</strong> para saber cómo te encuentran.</div></li>
          </ol>

          <h2 id="ahorrar">Cómo ahorrar sin perder calidad</h2>
          <p>Empieza con una landing page que explique bien qué vendes, cuánto cuesta y cómo comprar. Es suficiente para la mayoría de emprendimientos y la puedes ampliar después. Prepara tus textos, logo y fotos antes de empezar: el proveedor trabajará más rápido y pagarás menos ajustes.</p>
          <p>Si quieres ver la diferencia entre una página programada y una hecha con plantillas, la explicamos en <a href="/paginas-web-economicas">páginas web económicas</a>.</p>
`,
  faq: [
    ['¿Cuánto cuesta una landing page en Colombia?', `Los rangos de referencia del mercado van de $1.500.000 a $3.500.000. En Kairos una landing page cuesta ${pesos(W[0].precio)}, pago único, con hosting gratuito.`],
    ['¿Cuánto cuesta el dominio de una página web en Colombia?', 'Un dominio .com o .com.co cuesta aproximadamente entre $40.000 y $150.000 al año, según el proveedor y la extensión.'],
    ['¿Cuánto cuesta mantener una página web al año?', 'Lo mínimo es el dominio. Si tu proveedor usa un hosting comercial, súmale entre $120.000 y $600.000 al año. Con hosting gratuito, como el que usamos en Kairos, solo pagas el dominio si decides tener uno propio.'],
    ['¿Es mejor una página a la medida o una plantilla?', 'Una plantilla sirve para empezar rápido, pero suele tener mensualidad y límites de diseño y velocidad. Una página programada a la medida carga más rápido, no depende de una plataforma y se adapta por completo a tu marca.'],
    ['¿En cuánto tiempo está lista una página web?', 'Una landing page suele estar lista en pocos días hábiles desde que el proveedor recibe tu información; una web de varias páginas toma semanas. En Kairos te damos la fecha exacta antes de empezar.'],
  ],
};

export const meta = guiaMeta(g);
export const cuerpo = guiaCuerpo(g);
