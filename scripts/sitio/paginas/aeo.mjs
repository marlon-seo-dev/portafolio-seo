import { paginaServicio } from '../plantilla-servicio.mjs';
import { pesos, PLANES } from '../comun.mjs';

const P = PLANES.seo.planes;

const extra = `
  <section class="seccion" id="seo-aeo-geo" aria-labelledby="titulo-comparativa">
    <div class="contenedor">
      <div class="encabezado-seccion revelar">
        <p class="etiqueta">Sin confusiones</p>
        <h2 class="titulo-l" id="titulo-comparativa">SEO, AEO y GEO: en qué se diferencian</h2>
        <p class="entradilla">Son tres formas de que te encuentren. No compiten entre sí: se construyen sobre la misma base.</p>
      </div>
      <div class="tabla-envoltura revelar">
        <table class="tabla">
          <thead><tr><th scope="col"></th><th scope="col">SEO</th><th scope="col">AEO</th><th scope="col">GEO</th></tr></thead>
          <tbody>
            <tr><th scope="row">Dónde apareces</th><td>Resultados de Google y Google Maps</td><td>Dentro de las respuestas de asistentes y de los resúmenes con IA de Google</td><td>En herramientas de IA generativa como ChatGPT, Gemini o Perplexity</td></tr>
            <tr><th scope="row">Qué hace tu cliente</th><td>Busca "diseño de uñas en Suba"</td><td>Pregunta "¿dónde me hago las uñas en Suba?"</td><td>Conversa con la IA para comparar opciones</td></tr>
            <tr><th scope="row">Qué se trabaja</th><td>Página, ficha de Google, enlaces</td><td>Respuestas directas, preguntas frecuentes, datos estructurados</td><td>Entidad de marca coherente y menciones en otros sitios</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
`;

export const { meta, cuerpo } = paginaServicio({
  ruta: '/aeo-geo',
  titulo: 'AEO y GEO: Aparece en ChatGPT y la IA de Google | Kairos',
  descripcion: 'AEO y GEO para emprendedores: preparamos tu marca para los buscadores con inteligencia artificial como ChatGPT, Gemini y los resúmenes con IA de Google.',
  miga: 'AEO y GEO',
  cat: 'seo',
  nombreServicio: 'Optimización AEO y GEO para buscadores con inteligencia artificial',
  tipoServicio: 'AEO (optimización para motores de respuesta) y GEO (optimización para IA generativa)',
  descripcionServicio: 'Auditoría de menciones en ChatGPT, Gemini y Perplexity, entidad de marca coherente, respuestas directas, datos estructurados, acceso para rastreadores de IA, llms.txt y menciones en terceros para emprendedores y micronegocios.',
  textoWa: 'Hola Kairos, quiero preparar mi negocio para aparecer en ChatGPT y la IA.',
  etiqueta: 'AEO · GEO · ChatGPT, Gemini y Google',
  h1: 'AEO y GEO: tu negocio, <em>listo para la búsqueda con IA</em>',
  entradilla: 'Tus clientes ya le preguntan a la inteligencia artificial qué comprar y a quién contratar. Preparamos la información de tu marca para que ChatGPT, Gemini y Google la encuentren, la entiendan y la puedan usar en sus respuestas.',
  foto: ['aeo-geo-chat-inteligencia-artificial', 'Conversación con un asistente de inteligencia artificial en la pantalla'],
  sello: ['Plan Visibilidad', 'SEO + AEO + GEO en un solo plan'],
  insignias: ['ChatGPT', 'Gemini', 'Resúmenes con IA de Google'],
  respuestaTitulo: '¿Qué es el AEO y qué es el GEO?',
  respuesta: `<p><strong>El AEO (optimización para motores de respuesta) es preparar la información de tu negocio para que los asistentes de IA y los resúmenes con IA de Google puedan usarla al responder una pregunta.</strong> El GEO (optimización para IA generativa) aplica la misma idea a herramientas como ChatGPT, Gemini o Perplexity.</p>
        <p>En la práctica se trabajan juntos: información clara y coherente en tu página, tu ficha de Google y otros sitios. Está incluido en nuestros planes SEO + IA, desde ${pesos(P[0].precio)}.</p>`,
  incluyeTitulo: 'Lo que hacemos para que la IA entienda tu marca',
  incluyeTexto: 'Las herramientas de IA arman sus respuestas con lo que encuentran y verifican en internet. Nuestro trabajo es que encuentren datos claros, completos y coherentes sobre tu negocio.',
  incluye: ['Auditoría de preguntas: qué responden hoy ChatGPT, Gemini y Perplexity sobre negocios como el tuyo', 'Entidad de marca coherente: nombre, datos y descripción iguales en todas partes', 'Respuestas directas y preguntas frecuentes en tu página', 'Datos estructurados (Schema.org) de tu negocio y tus servicios', 'Acceso abierto para los rastreadores de IA y de Bing, con IndexNow', 'Archivo llms.txt con los datos clave de tu negocio'],
  fotoIncluye: ['inteligencia-artificial-marketing', 'Mano humana y mano robótica que representan la inteligencia artificial en el marketing'],
  beneficiosTitulo: 'Por qué empezar con AEO y GEO desde ya',
  beneficios: [
    ['Estás donde preguntan', 'Cada vez más personas usan la IA para decidir qué comprar y a quién contratar.'],
    ['Información correcta', 'La IA usa datos verificables; si los tuyos están completos, te describe mejor.'],
    ['Llegas antes', 'Es un frente nuevo: trabajarlo hoy es adelantarte a tu competencia.'],
    ['Suma al SEO', 'La misma base fortalece tu presencia en Google y en Google Maps.'],
  ],
  planesTitulo: 'Planes de AEO y GEO (incluidos en SEO + IA)',
  planesTexto: 'La auditoría muestra qué responde hoy la IA; el Plan Visibilidad implementa todo lo necesario.',
  extra,
  pasosTitulo: 'Cómo preparamos tu negocio para la IA',
  pasos: [
    ['Auditoría de preguntas', 'Preguntamos a la IA lo que preguntaría tu cliente y anotamos qué fuentes usa.'],
    ['Base sólida', 'Unificamos tus datos y dejamos tu página y tu ficha listas para ser leídas.'],
    ['Contenido y datos', 'Respuestas, preguntas frecuentes, datos estructurados y llms.txt.'],
    ['Medición', 'Repetimos las preguntas cada mes en el plan de seguimiento.'],
  ],
  faqTitulo: 'Preguntas frecuentes sobre AEO y GEO',
  enlacesFaq: [['/guias/como-aparecer-en-chatgpt', 'Guía: cómo aparecer en ChatGPT'], ['/posicionamiento-seo', 'Ver posicionamiento SEO']],
  faq: [
    ['¿Qué es el GEO en marketing?', 'GEO significa optimización para IA generativa (Generative Engine Optimization). Es el conjunto de prácticas para que herramientas como ChatGPT, Gemini o Perplexity encuentren, entiendan y puedan citar la información de tu marca.'],
    ['¿Qué es el AEO?', 'AEO significa optimización para motores de respuesta (Answer Engine Optimization). Busca que tu información aparezca dentro de las respuestas que dan los asistentes de voz, los chats con IA y los resúmenes con IA de Google.'],
    ['¿Cómo hago para aparecer en ChatGPT?', 'Necesitas información clara y coherente sobre tu negocio en varias fuentes: tu página web con datos estructurados, tu ficha de Google, directorios y reseñas. Lo explicamos paso a paso en la <a href="/guias/como-aparecer-en-chatgpt">guía para aparecer en ChatGPT</a>.'],
    ['¿Se puede pagar para que ChatGPT recomiende mi negocio?', 'Las recomendaciones que la IA hace por su cuenta no se compran. Algunas plataformas empiezan a probar anuncios, pero eso es publicidad pagada y aparece marcada como tal. El AEO y el GEO trabajan la presencia orgánica.'],
    ['¿Sirve para un negocio pequeño?', 'Sí. Las preguntas a la IA suelen ser muy locales ("cerca de mí", "en tal barrio"), y un negocio pequeño con información completa puede aparecer junto a marcas más grandes.'],
    ['¿Qué es el archivo llms.txt?', 'Es un archivo de texto en tu sitio con los datos clave de tu negocio para herramientas de IA. Es un complemento que suma a la página, la ficha de Google y los datos estructurados.'],
  ],
  cta: { titulo: '¿Preparamos tu negocio <em>para la IA</em>?', texto: 'Escríbenos con el nombre de tu negocio y tu ciudad. En la auditoría te mostramos qué responde hoy la IA cuando buscan lo que vendes.' },
});
