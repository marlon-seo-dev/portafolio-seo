import { paginaServicio } from '../plantilla-servicio.mjs';
import { pesos, desde, PLANES } from '../comun.mjs';

const P = PLANES.web.planes;

const extra = `
  <section class="seccion" id="comparacion" aria-labelledby="titulo-comparacion">
    <div class="contenedor">
      <div class="encabezado-seccion revelar">
        <p class="etiqueta">Programada vs. plantilla</p>
        <h2 class="titulo-l" id="titulo-comparacion">¿Por qué no simplemente usar una plantilla?</h2>
        <p class="entradilla">Los constructores con plantillas sirven para empezar, pero cobran mensualidad y limitan lo que puedes hacer. Esta es la diferencia con una página programada a la medida.</p>
      </div>
      <div class="tabla-envoltura revelar">
        <table class="tabla">
          <thead><tr><th scope="col"></th><th scope="col">Página programada por Kairos</th><th scope="col">Constructor con plantilla</th></tr></thead>
          <tbody>
            <tr><th scope="row">Mensualidad de hosting</th><td>No: hosting gratuito</td><td>Sí, el plan mensual del constructor</td></tr>
            <tr><th scope="row">Diseño</th><td>A la medida de tu marca</td><td>Limitado a la plantilla</td></tr>
            <tr><th scope="row">Velocidad</th><td>Código liviano, carga rápida</td><td>Depende de la plantilla y sus complementos</td></tr>
            <tr><th scope="row">Anuncios o marca de agua</th><td>Nunca</td><td>Suelen aparecer en los planes gratuitos</td></tr>
            <tr><th scope="row">SEO y datos estructurados</th><td>Incluidos desde el inicio</td><td>Básicos o por tu cuenta</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
`;

export const { meta, cuerpo } = paginaServicio({
  ruta: '/paginas-web-economicas',
  titulo: 'Páginas Web Económicas en Bogotá desde $200.000 | Kairos',
  descripcion: 'Diseño de páginas web económicas para emprendedores en Bogotá y Colombia: landing page desde $200.000, pago único, hosting gratis y lista para Google.',
  miga: 'Páginas web económicas',
  cat: 'web',
  nombreServicio: 'Diseño de páginas web económicas para emprendedores',
  tipoServicio: 'Diseño y desarrollo web',
  descripcionServicio: 'Landing pages y sitios de hasta 5 secciones programados a la medida, con botón de WhatsApp, SEO básico, datos estructurados y hosting gratuito sin mensualidad.',
  textoWa: 'Hola Kairos, quiero cotizar una página web para mi negocio.',
  etiqueta: 'Diseño web · Pago único',
  h1: 'Páginas web económicas <em>para emprendedores</em>',
  entradilla: 'Tu página propia, programada a la medida, rápida en el celular y lista para que te encuentren en Google y en la IA. Un solo pago y hosting gratuito: sin mensualidades.',
  foto: ['diseno-pagina-web-emprendedor', 'Computador portátil con la página web de un emprendimiento abierta'],
  sello: [`Desde ${pesos(desde('web'))}`, 'pago único, hosting gratis'],
  insignias: ['Sin mensualidad', 'Botón de WhatsApp', 'Lista para Google'],
  respuestaTitulo: '¿Cuánto cuesta una página web para un emprendimiento?',
  respuesta: `<p><strong>En Kairos una landing page cuesta ${pesos(P[0].precio)} y una web de hasta 5 secciones ${pesos(P[1].precio)}, con pago único y hosting gratuito:</strong> no pagas mensualidad.</p>
        <p>Las programamos a la medida, no con plantillas, para que carguen rápido y Google y la inteligencia artificial entiendan qué vendes.</p>`,
  incluyeTitulo: 'Una página que trabaja para tu negocio las 24 horas',
  incluyeTexto: 'Tus redes sociales no son tuyas: si cambia el algoritmo o pierdes la cuenta, pierdes todo. Tu página sí es tuya.',
  incluye: ['Diseño a la medida con tu logo y tus colores', 'Botón directo a WhatsApp y enlaces a tus redes', 'Adaptada a celular, tableta y computador', 'Hosting gratuito sin mensualidad', 'SEO básico: títulos, descripciones y datos estructurados', 'Alta en Google Search Console y Bing (en Web Emprendedor)'],
  fotoIncluye: ['pagina-web-economica-laptop', 'Persona navegando la página web de un pequeño negocio en el computador'],
  beneficiosTitulo: 'Por qué tu negocio necesita una página propia',
  beneficios: [
    ['Tu vitrina 24/7', 'Un solo enlace con todo: qué vendes, precios, ubicación y cómo pedir.'],
    ['No dependes del algoritmo', 'Tus clientes te encuentran aunque Instagram cambie sus reglas.'],
    ['Te encuentran en Google', 'Una página bien hecha es la base del SEO y de la visibilidad en IA.'],
    ['Más confianza', 'Un negocio con página propia se percibe más serio y establecido.'],
  ],
  planesTitulo: 'Precios de páginas web',
  planesTexto: 'Pago único, sin mensualidad de hosting. El dominio propio (tunegocio.com) es opcional y se paga aparte.',
  extra,
  pasos: [
    ['Nos cuentas tu negocio', 'Nombre, qué vendes, redes, WhatsApp, logo y fotos si las tienes.'],
    ['Diseño y programación', 'Construimos tu página a la medida y te mostramos el avance.'],
    ['Publicación', 'La publicamos en hosting gratuito y la dejamos lista para Google.'],
    ['Entrega', 'Recibes tu enlace funcionando, listo para compartir.'],
  ],
  faqTitulo: 'Preguntas frecuentes sobre páginas web económicas',
  faq: [
    ['¿Cuánto cuesta una página web en Colombia?', `Varía mucho según quién la haga y qué incluya. En Kairos una landing page cuesta ${pesos(P[0].precio)} y una web de hasta 5 secciones ${pesos(P[1].precio)}, con pago único y hosting gratuito. Comparamos los precios del mercado en la guía <a href="/guias/cuanto-cuesta-una-pagina-web-en-colombia">cuánto cuesta una página web en Colombia</a>.`],
    ['¿Tengo que pagar mensualidad?', 'No. Publicamos tu página en un hosting gratuito de alto rendimiento, así que no pagas mensualidad por tenerla en línea.'],
    ['¿El dominio está incluido?', 'Tu página puede funcionar desde el primer día con una dirección gratuita. Si quieres un dominio propio (por ejemplo tunegocio.com), se compra aparte al proveedor de dominios y se renueva cada año; te ayudamos a comprarlo y conectarlo.'],
    ['¿Cuánto se demora?', 'Una landing page suele estar lista en 5 a 7 días hábiles desde que recibimos tu información. Una web de varias secciones toma un poco más; te damos la fecha exacta antes de empezar.'],
    ['¿Puedo hacer cambios después?', 'Sí. Los cambios pequeños los hacemos nosotros dentro de lo acordado en el plan; cambios grandes se cotizan aparte antes de hacerlos.'],
    ['¿Mi página aparecerá en Google?', 'Tu página sale con SEO básico y datos estructurados para que Google la entienda. Para trabajar el posicionamiento a fondo está el <a href="/posicionamiento-seo">servicio de SEO</a>.'],
  ],
  cta: { titulo: '¿Creamos <em>tu página</em>?', texto: 'Escríbenos con el nombre de tu negocio y te contamos cuál opción te conviene y en cuánto tiempo la tienes.' },
});
