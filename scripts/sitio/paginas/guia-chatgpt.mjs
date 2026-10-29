import { guiaMeta, guiaCuerpo } from '../comun.mjs';

const g = {
  ruta: '/guias/como-aparecer-en-chatgpt',
  miga: 'Aparecer en ChatGPT',
  titulo: 'Cómo Aparecer en ChatGPT y que la IA Recomiende tu Negocio',
  descripcion: 'Guía para que tu negocio aparezca en ChatGPT, Gemini y los resúmenes con IA de Google: cómo comprobarlo, de dónde saca la IA sus respuestas y 8 pasos concretos.',
  h1: 'Cómo aparecer en ChatGPT y que la IA <em>recomiende tu negocio</em>',
  tipo: 'ChatGPT e IA',
  entradilla: 'Cada vez más personas le preguntan a la inteligencia artificial qué comprar y a quién contratar. Esta guía explica cómo comprobar si ya te menciona, de dónde saca sus respuestas y qué hacer, paso a paso, para que tu negocio sea parte de ellas.',
  publicada: '2026-10-18',
  lectura: 8,
  imagen: 'inteligencia-artificial-marketing',
  imagenAlt: 'Mano humana y mano robótica que representan la inteligencia artificial',
  temas: ['AEO', 'GEO', 'ChatGPT', 'Búsqueda con inteligencia artificial'],
  ctaTitulo: '¿Te mostramos qué responde <em>hoy</em> la IA?',
  ctaTexto: 'En la Auditoría SEO + IA preguntamos a ChatGPT, Gemini y Perplexity lo que preguntaría tu cliente y te mostramos qué fuentes usan.',
  ctaWa: 'Hola Kairos, leí la guía de ChatGPT y quiero saber si la IA menciona mi negocio.',
  respuesta: `<p><strong>ChatGPT y las demás herramientas de IA mencionan los negocios que pueden encontrar y verificar en varias fuentes a la vez.</strong> Para entrar en sus respuestas necesitas una ficha de Google completa, los mismos datos en todos tus canales, una página propia que responda preguntas, datos estructurados, reseñas detalladas y menciones en sitios de terceros.</p>
            <p>Las recomendaciones que la IA da por su cuenta no se compran: se construyen con información clara y coherente.</p>`,
  toc: [
    ['comprueba', 'Comprueba si ya te menciona'],
    ['fuentes', 'De dónde saca sus respuestas'],
    ['pasos', '8 pasos para aparecer'],
    ['ejemplo', 'Ejemplo de texto citable'],
    ['errores', 'Errores que te sacan'],
    ['preguntas', 'Preguntas frecuentes'],
  ],
  secciones: `
          <h2 id="comprueba">Primero: comprueba si la IA ya te menciona</h2>
          <p>Antes de cambiar nada, mide. Abre ChatGPT (con búsqueda activada), Gemini y Perplexity, y hazles las preguntas que haría tu cliente. Cambia el servicio y la ciudad por los tuyos:</p>
          <ul>
            <li>"¿Dónde me hago las uñas en Suba?"</li>
            <li>"Recomiéndame un contador para emprendedores en Bogotá"</li>
            <li>"¿Qué tienda de accesorios hace envíos el mismo día en Bogotá?"</li>
            <li>"¿Quién hace páginas web económicas en Colombia?"</li>
          </ul>
          <p>Anota qué negocios aparecen y qué fuente cita la IA (Google Maps, un directorio, un blog, Instagram). Esa lista de fuentes es tu mapa: te dice dónde tienes que estar.</p>
          <div class="tabla-envoltura">
            <table class="tabla">
              <thead><tr><th scope="col">Pregunta</th><th scope="col">¿Apareces?</th><th scope="col">Quién aparece</th><th scope="col">Fuente que cita</th></tr></thead>
              <tbody>
                <tr><td>[Tu servicio] en [tu barrio]</td><td>Sí / No</td><td>Negocio A, Negocio B</td><td>Google Maps, directorio</td></tr>
                <tr><td>Mejor [tu servicio] en [tu ciudad]</td><td>Sí / No</td><td>…</td><td>…</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="fuentes">¿De dónde saca la IA sus recomendaciones?</h2>
          <p>Cuando la pregunta es sobre un negocio o un lugar, las herramientas de IA suelen buscar en internet antes de responder. ChatGPT usa su propio rastreador de búsqueda (OAI-SearchBot) y se apoya en buscadores; los resúmenes con IA de Google usan el índice de Google; Perplexity tiene su propio rastreador. Por eso las fuentes que más pesan suelen ser:</p>
          <ul>
            <li><strong>Tu ficha de Google</strong>, con reseñas, fotos y horario.</li>
            <li><strong>Directorios y plataformas</strong> donde aparece tu negocio.</li>
            <li><strong>Listas y artículos</strong> del tipo "los mejores… en Bogotá".</li>
            <li><strong>Tu propia página web</strong>, si responde preguntas con claridad y tiene datos estructurados.</li>
            <li><strong>Redes sociales</strong> donde se habla de tu negocio.</li>
          </ul>
          <p>La IA gana confianza cuando varias fuentes dicen lo mismo sobre ti. Si en una dice que cierras a las 6 y en otra a las 8, o si tu nombre aparece escrito de tres formas, es más probable que prefiera a otro.</p>

          <h2 id="pasos">8 pasos para que la IA mencione tu negocio</h2>
          <ol>
            <li><div><strong>Completa tu Perfil de Empresa en Google.</strong> Categoría exacta, horario, servicios, fotos reales y teléfono. <a href="/guias/como-aparecer-en-google-maps">Guía paso a paso</a>.</div></li>
            <li><div><strong>Usa los mismos datos en todas partes.</strong> Nombre, dirección, teléfono y horario idénticos en Google, redes, WhatsApp y tu página.</div></li>
            <li><div><strong>Ten una página propia que responda.</strong> Qué haces, precios, zona, horario y cómo comprar, en frases completas que una IA pueda citar tal cual.</div></li>
            <li><div><strong>Escribe preguntas frecuentes reales.</strong> "¿Hacen envíos a Chía?", "¿Cuánto cuesta una consulta?", "¿Atienden los sábados?". Respuestas cortas y directas.</div></li>
            <li><div><strong>Agrega datos estructurados.</strong> Código de Schema.org con tu negocio, servicios y preguntas frecuentes, para que las máquinas lean tu información sin adivinar.</div></li>
            <li><div><strong>Deja entrar a los rastreadores.</strong> Revisa que tu robots.txt no bloquee a OAI-SearchBot ni a Bingbot, y registra tu sitio en Google Search Console y Bing Webmaster Tools.</div></li>
            <li><div><strong>Pide reseñas con detalle.</strong> "Me arreglaron el computador en un día y me explicaron todo" dice mucho más que "muy bueno".</div></li>
            <li><div><strong>Consigue menciones en otros sitios.</strong> Directorios locales, aliados, blogs y medios de tu ciudad.</div></li>
          </ol>

          <h2 id="ejemplo">Ejemplo: texto difícil de citar vs. texto citable</h2>
          <p><strong>Difícil de citar:</strong> "¡Somos los mejores! Ven y conócenos, no te vas a arrepentir 🔥".</p>
          <p><strong>Fácil de citar:</strong> "Estudio Luna es un salón de uñas en Suba, Bogotá. Hace manicura semipermanente desde $35.000, de lunes a sábado de 9:00 a. m. a 7:00 p. m., con cita por WhatsApp."</p>
          <p>El segundo texto responde quién, qué, dónde, cuánto y cuándo en dos frases. Es exactamente lo que una IA necesita para mencionarte con seguridad.</p>

          <h2 id="errores">Errores que te sacan de las respuestas de la IA</h2>
          <ul>
            <li>Tener la información solo en imágenes (precios o servicios en una foto, sin texto).</li>
            <li>Nombre del negocio escrito distinto en cada red.</li>
            <li>Horarios desactualizados en Google.</li>
            <li>Una página web que solo tiene un logo y un botón de WhatsApp.</li>
            <li>Bloquear a los rastreadores en robots.txt sin saberlo, algo común en algunas plantillas y servicios de hosting.</li>
            <li>Comprar reseñas: está prohibido por Google y resta confianza.</li>
          </ul>
          <p>Si prefieres que lo hagamos por ti, es lo que incluye nuestro servicio de <a href="/aeo-geo">AEO y GEO</a>.</p>
`,
  faq: [
    ['¿Se puede pagar para que ChatGPT recomiende mi negocio?', 'Las recomendaciones que la IA da por su cuenta no se compran. Algunas plataformas de IA empiezan a probar anuncios, pero eso es publicidad pagada y aparece marcada como tal.'],
    ['¿Lo mismo sirve para Gemini y para los resúmenes con IA de Google?', 'Sí, la base es la misma. En el caso de Google pesa todavía más tu Perfil de Empresa y tu posicionamiento en Google, porque sus respuestas con IA se apoyan en su propio índice.'],
    ['¿Necesito una página web para aparecer en ChatGPT?', 'No es obligatorio, pero ayuda mucho: tu página es la única fuente donde tú controlas qué se dice de tu negocio. En Kairos una <a href="/paginas-web-economicas">página web</a> cuesta desde $200.000 con pago único.'],
    ['¿Sirve el archivo llms.txt?', 'Es un complemento fácil de implementar: un archivo con los datos clave de tu negocio para herramientas de IA. Suma, pero no reemplaza la ficha de Google, la página y las reseñas.'],
    ['¿Cada cuánto debo revisar si la IA me menciona?', 'Una vez al mes es suficiente. Usa siempre las mismas preguntas para poder comparar y anota qué fuentes cita la IA.'],
  ],
};

export const meta = guiaMeta(g);
export const cuerpo = guiaCuerpo(g);
