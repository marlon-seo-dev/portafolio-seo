import { paginaServicio } from '../plantilla-servicio.mjs';
import { pesos, desde, PLANES } from '../comun.mjs';

const P = PLANES.seo.planes;

const extra = `
  <section class="seccion" id="como-decide-google" aria-labelledby="titulo-decide">
    <div class="contenedor">
      <div class="encabezado-seccion revelar">
        <p class="etiqueta">SEO local</p>
        <h2 class="titulo-l" id="titulo-decide">Cómo decide Google qué negocios mostrar en el mapa</h2>
        <p class="entradilla">Google explica que sus resultados locales dependen de tres factores. Así los trabajamos en el Plan Visibilidad:</p>
      </div>
      <div class="tabla-envoltura revelar">
        <table class="tabla">
          <thead><tr><th scope="col">Factor</th><th scope="col">Qué significa</th><th scope="col">Qué hacemos</th></tr></thead>
          <tbody>
            <tr><th scope="row">Relevancia</th><td>Qué tan bien coincide tu ficha con lo que la persona busca.</td><td>Categoría exacta, servicios, descripción y página con las palabras que usan tus clientes.</td></tr>
            <tr><th scope="row">Distancia</th><td>Qué tan cerca estás de quien busca.</td><td>Dirección o zona de servicio bien definidas en tu ficha.</td></tr>
            <tr><th scope="row">Prominencia</th><td>Qué tan conocido es tu negocio: reseñas, calificación y menciones en la web.</td><td>Estrategia de reseñas, datos coherentes en directorios y enlaces desde tu página.</td></tr>
          </tbody>
        </table>
      </div>
      <p class="fuente mt-s">Fuente: Ayuda de Perfil de Negocio de Google, <a href="https://support.google.com/business/answer/7091?hl=es-419" target="_blank" rel="noopener">"Sugerencias para mejorar tu ranking local en Google"</a>.</p>
    </div>
  </section>
`;

export const { meta, cuerpo } = paginaServicio({
  ruta: '/posicionamiento-seo',
  titulo: 'Posicionamiento SEO Económico para Emprendedores | Kairos',
  descripcion: 'Posicionamiento SEO para emprendedores en Bogotá y Colombia: auditoría desde $120.000 y arquitectura técnica, on-page y local para Google y Google Maps.',
  miga: 'Posicionamiento SEO',
  cat: 'seo',
  nombreServicio: 'Posicionamiento SEO para emprendedores',
  tipoServicio: 'Posicionamiento en buscadores (SEO)',
  descripcionServicio: 'Auditoría SEO, arquitectura técnica y on-page, SEO local con Perfil de Empresa en Google, datos estructurados e indexación en Google y Bing para emprendedores y micronegocios.',
  textoWa: 'Hola Kairos, quiero que mi negocio aparezca en Google. Quiero cotizar SEO.',
  etiqueta: 'SEO técnico · On-page · Local',
  h1: 'Posicionamiento SEO <em>para emprendedores</em> y pequeños negocios',
  entradilla: 'Construimos la arquitectura que Google necesita para entender tu negocio: auditoría, SEO técnico, contenidos optimizados y tu ficha de Google Maps. A un precio pensado para emprendedores.',
  foto: ['auditoria-seo-laptop', 'Computador con un panel de analítica para la auditoría SEO de un negocio'],
  sello: [`Desde ${pesos(desde('seo'))}`, 'auditoría SEO + IA'],
  insignias: ['Auditoría completa', 'Google y Google Maps', 'Informe en lenguaje claro'],
  respuestaTitulo: '¿Qué es el posicionamiento SEO?',
  respuesta: `<p><strong>El posicionamiento SEO es el trabajo de optimizar tu página y tu Perfil de Empresa en Google para que aparezcas cuando alguien busca lo que vendes.</strong></p>
        <p>En Kairos empezamos con una auditoría (${pesos(P[0].precio)}) y construimos la arquitectura técnica, on-page y local que Google necesita para entender tu negocio. El Plan Visibilidad (${pesos(P[1].precio)}) incluye la implementación completa.</p>`,
  incluyeTitulo: 'Una arquitectura SEO completa, explicada sin tecnicismos',
  incluyeTexto: 'Revisamos y optimizamos las tres capas que Google evalúa: la técnica, el contenido y tu presencia local.',
  incluye: ['Auditoría técnica: velocidad, indexación, sitemap, robots y URLs', 'SEO on-page: títulos, descripciones, encabezados y enlaces internos', 'Datos estructurados (Schema.org) para tu negocio y tus servicios', 'Perfil de Empresa en Google optimizado para Google Maps', 'Alta en Google Search Console y Bing, con IndexNow', 'Informe con lo que se hizo y lo que sigue'],
  fotoIncluye: ['analitica-seo-posicionamiento', 'Panel de analítica web con métricas de posicionamiento SEO'],
  beneficiosTitulo: 'Por qué el SEO vale la pena para un negocio pequeño',
  beneficios: [
    ['Clientes que ya te buscan', 'Apareces ante personas que están buscando justo lo que vendes.'],
    ['Visitas que no pagas por clic', 'A diferencia de la pauta, el tráfico de Google no se cobra por cada visita.'],
    ['Base para la IA', 'La misma arquitectura prepara tu negocio para los buscadores con IA.'],
    ['Medición clara', 'Vemos en Search Console qué búsquedas te encuentran y cómo cambian.'],
  ],
  planesTitulo: 'Precios de posicionamiento SEO + IA',
  planesTexto: 'Empieza con la auditoría o ve directo al Plan Visibilidad. El seguimiento mensual es opcional.',
  extra,
  pasos: [
    ['Auditoría', 'Revisamos tu sitio, tu ficha de Google y cómo apareces hoy.'],
    ['Plan priorizado', 'Te mostramos qué corregir primero y por qué.'],
    ['Implementación', 'Optimizamos la arquitectura técnica, el contenido y tu ficha.'],
    ['Medición', 'Revisamos en Search Console qué cambió y ajustamos.'],
  ],
  faqTitulo: 'Preguntas frecuentes sobre posicionamiento SEO',
  faq: [
    ['¿Cuánto cuesta el posicionamiento SEO en Colombia?', `Hay agencias en Bogotá que publican planes de SEO desde unos $700.000 al mes. En Kairos la auditoría SEO + IA cuesta ${pesos(P[0].precio)}, el Plan Visibilidad con implementación completa ${pesos(P[1].precio)} (pago único) y el seguimiento mensual ${pesos(P[2].precio)}.`],
    ['¿Qué es una auditoría SEO?', 'Es una revisión completa de tu sitio y tu presencia en Google: aspectos técnicos (velocidad, indexación, estructura), contenido (títulos, textos, enlaces) y presencia local. Termina con un plan de acción ordenado por prioridad.'],
    ['¿En cuánto tiempo se ven los cambios?', 'Los ajustes en tu ficha de Google suelen notarse en semanas; el posicionamiento de una página web toma más tiempo porque Google debe rastrearla y compararla con tu competencia. Por eso medimos cada mes en Search Console y ajustamos según los datos.'],
    ['¿Necesito tener página web para hacer SEO?', 'Puedes empezar con tu Perfil de Empresa en Google, pero una página propia multiplica lo que se puede trabajar. Si no tienes, mira nuestras <a href="/paginas-web-economicas">páginas web económicas</a>.'],
    ['¿Hacen SEO local para Google Maps?', 'Sí. El Plan Visibilidad incluye la optimización de tu Perfil de Empresa en Google: categorías, servicios, descripción, fotos y estrategia de reseñas. También tenemos una <a href="/guias/como-aparecer-en-google-maps">guía gratuita de Google Maps</a>.'],
    ['¿El SEO incluye la optimización para ChatGPT y la IA?', 'Sí. Nuestros planes son SEO + IA: además de Google, preparamos tu negocio para los buscadores con inteligencia artificial. Lo explicamos en <a href="/aeo-geo">AEO y GEO</a>.'],
  ],
  cta: { titulo: '¿Revisamos <em>tu SEO</em>?', texto: 'Envíanos el enlace de tu página o el nombre de tu negocio y te contamos qué le falta para que Google lo entienda.' },
});
