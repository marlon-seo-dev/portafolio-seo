import { guiaMeta, guiaCuerpo } from '../comun.mjs';

const g = {
  ruta: '/guias/como-aparecer-en-google-maps',
  miga: 'Aparecer en Google Maps',
  titulo: 'Cómo Aparecer en Google Maps con tu Negocio, Gratis',
  descripcion: 'Cómo hacer que tu negocio aparezca en Google Maps, paso a paso y gratis: crea y verifica tu Perfil de Empresa, elige la categoría y consigue reseñas.',
  h1: 'Cómo aparecer en Google Maps con tu negocio, <em>paso a paso</em>',
  tipo: 'Google Maps',
  entradilla: 'Desde crear tu Perfil de Empresa en Google hasta subir en el mapa cuando alguien busca lo que vendes cerca. Todo gratis y explicado para emprendedores y negocios locales.',
  publicada: '2026-10-18',
  lectura: 8,
  imagen: 'google-maps-negocio-celular',
  imagenAlt: 'Celular con Google Maps abierto buscando un negocio local',
  temas: ['Google Maps', 'Perfil de Empresa en Google', 'SEO local'],
  ctaTitulo: '¿Lo dejamos <em>bien hecho</em> por ti?',
  ctaTexto: 'El Plan Visibilidad incluye la optimización completa de tu Perfil de Empresa en Google. Si prefieres, empieza con el diagnóstico gratis.',
  ctaWa: 'Hola Kairos, leí la guía de Google Maps y quiero que revisen la ficha de mi negocio.',
  respuesta: `<p><strong>Para aparecer en Google Maps necesitas un Perfil de Empresa en Google verificado y completo.</strong> Se crea gratis en google.com/business: escribes el nombre real de tu negocio, eliges la categoría más específica, indicas tu dirección o tu zona de servicio, verificas que el negocio es tuyo y completas horario, servicios y fotos.</p>
            <p>Para salir entre los primeros, Google tiene en cuenta tres factores: relevancia, distancia y prominencia. La información completa y las reseñas son lo que más puedes mejorar.</p>`,
  toc: [
    ['antes', 'Lo que necesitas antes'],
    ['paso-a-paso', 'Crear y verificar tu ficha'],
    ['categorias', 'Qué categoría elegir'],
    ['subir', 'Cómo subir en el mapa'],
    ['resenas', 'Cómo conseguir reseñas'],
    ['errores', 'Errores que te esconden'],
    ['preguntas', 'Preguntas frecuentes'],
  ],
  secciones: `
          <h2 id="antes">Lo que necesitas antes de empezar</h2>
          <ul>
            <li>Una cuenta de Google del dueño del negocio (no la de un empleado que se puede ir).</li>
            <li>El nombre real del negocio, tal como aparece en tu aviso, tus redes y tus facturas.</li>
            <li>Dirección del local o, si atiendes a domicilio, los barrios o la zona que cubres.</li>
            <li>Teléfono o WhatsApp, horario y enlace a tu página o a tus redes.</li>
            <li>Fotos reales: fachada, interior, productos o servicios y tu equipo.</li>
          </ul>

          <h2 id="paso-a-paso">Paso a paso para crear y verificar tu Perfil de Empresa</h2>
          <ol>
            <li><div><strong>Entra a google.com/business</strong> con la cuenta del dueño y elige agregar tu empresa. Si Google te muestra un negocio con tu nombre, revisa si ya existe una ficha y reclámala en lugar de crear otra.</div></li>
            <li><div><strong>Escribe el nombre real, sin palabras extra.</strong> "Estudio Luna", no "Estudio Luna Uñas Baratas Bogotá". Agregar palabras clave al nombre va contra las normas de Google.</div></li>
            <li><div><strong>Elige la categoría principal más específica</strong> (más abajo te ayudamos).</div></li>
            <li><div><strong>Indica tu ubicación.</strong> Si atiendes clientes en un local, pon la dirección exacta. Si vas a donde el cliente o vendes a domicilio, configura tu negocio como empresa de área de servicio y oculta la dirección.</div></li>
            <li><div><strong>Agrega teléfono y sitio web.</strong> Si no tienes página, puedes empezar con tu enlace de WhatsApp.</div></li>
            <li><div><strong>Verifica tu negocio.</strong> Google te ofrecerá uno o varios métodos (por ejemplo, un video del lugar, una llamada, un mensaje o un correo). El método y el tiempo varían según el negocio.</div></li>
            <li><div><strong>Completa todo lo demás:</strong> horario (incluidos festivos), servicios o productos con precio, fotos, atributos y una descripción que diga qué haces y en qué zona.</div></li>
          </ol>

          <h2 id="categorias">Qué categoría elegir según tu tipo de negocio</h2>
          <p>La categoría principal es una de las señales de relevancia más importantes. Escoge la que describa lo que más vendes; las demás van como secundarias. Al escribir, Google te muestra los nombres exactos disponibles.</p>
          <div class="tabla-envoltura">
            <table class="tabla">
              <thead><tr><th scope="col">Si tu negocio es…</th><th scope="col">Busca una categoría principal como…</th><th scope="col">Secundarias que pueden servir</th></tr></thead>
              <tbody>
                <tr><th scope="row">Tienda de ropa o accesorios</th><td>Tienda de ropa / Tienda de accesorios</td><td>Boutique, tienda de regalos</td></tr>
                <tr><th scope="row">Salón de belleza o uñas</th><td>Salón de belleza / Salón de manicura y pedicura</td><td>Peluquería, servicio de depilación</td></tr>
                <tr><th scope="row">Servicio profesional</th><td>La profesión exacta (contador, abogado, psicólogo…)</td><td>Consultor, servicio de asesoría</td></tr>
                <tr><th scope="row">Negocio de comida</th><td>El tipo de comida más específico</td><td>Comida para llevar, servicio a domicilio</td></tr>
                <tr><th scope="row">Servicio a domicilio sin local</th><td>El servicio que prestas (plomero, cerrajero…)</td><td>Configúralo como empresa de área de servicio</td></tr>
              </tbody>
            </table>
          </div>
          <p class="fuente">Los nombres exactos de las categorías dependen del idioma y del país de tu cuenta; elige siempre la que Google sugiere al escribir.</p>

          <h2 id="subir">Cómo subir en Google Maps: los 3 factores</h2>
          <p>Google explica en su <a href="https://support.google.com/business/answer/7091?hl=es-419" target="_blank" rel="noopener">ayuda oficial</a> que los resultados locales dependen de tres factores:</p>
          <ul>
            <li><strong>Relevancia:</strong> qué tan bien coincide tu ficha con la búsqueda. Mejórala con la categoría correcta, tus servicios cargados y una descripción con lo que vendes.</li>
            <li><strong>Distancia:</strong> qué tan cerca estás de quien busca. No se cambia, pero sí debes tener bien definida tu dirección o tu zona de servicio.</li>
            <li><strong>Prominencia:</strong> qué tan conocido es tu negocio. Google tiene en cuenta aquí la cantidad de reseñas y la calificación, además de lo que se dice de ti en la web.</li>
          </ul>
          <p>En la práctica, lo que más mueve a un negocio pequeño es: ficha 100 % completa, fotos nuevas cada mes, reseñas constantes con respuesta y una <a href="/paginas-web-economicas">página propia</a> enlazada desde la ficha.</p>

          <h2 id="resenas">Cómo conseguir más reseñas sin romper las reglas</h2>
          <ul>
            <li>Pon un código QR con el enlace directo a tus reseñas en tu local, tu empaque o tu factura.</li>
            <li>Después de cada venta por WhatsApp, envía un mensaje corto de agradecimiento con el enlace.</li>
            <li>Pide que mencionen qué compraron o qué servicio recibieron: esas reseñas ayudan a Google y a la IA a entender qué haces.</li>
            <li>Responde todas las reseñas, también las negativas, con calma y sin discutir.</li>
          </ul>
          <p><strong>Lo que no debes hacer:</strong> ofrecer descuentos, productos gratis o dinero a cambio de reseñas, ni comprarlas. Las normas de Google lo prohíben y te arriesgas a que eliminen reseñas o restrinjan tu ficha.</p>

          <h2 id="errores">Errores que te esconden del mapa</h2>
          <ul>
            <li>Palabras clave en el nombre del negocio.</li>
            <li>Fichas duplicadas del mismo negocio.</li>
            <li>Direcciones falsas u oficinas virtuales para "aparecer en más barrios".</li>
            <li>Horario desactualizado, sobre todo en festivos.</li>
            <li>Teléfono que nadie contesta o WhatsApp distinto al que usas.</li>
            <li>Ficha creada con la cuenta de alguien que ya no trabaja contigo.</li>
          </ul>
          <p>Si quieres que lo hagamos por ti, la optimización de tu ficha está incluida en el <a href="/posicionamiento-seo">Plan Visibilidad SEO + IA</a>.</p>
`,
  faq: [
    ['¿Es gratis aparecer en Google Maps?', 'Sí. Crear y mantener un Perfil de Empresa en Google es gratis. Lo que se paga, si quieres, son los anuncios dentro de Google o el trabajo de una agencia para optimizar tu ficha.'],
    ['¿Puedo aparecer en Google Maps si no tengo local?', 'Sí. Configura tu negocio como empresa de área de servicio: indicas los barrios o la zona que cubres y ocultas la dirección.'],
    ['¿Cuánto tarda la verificación de Google?', 'Depende del método que te ofrezca Google. Algunos se resuelven en minutos y otros, como la revisión de un video, pueden tardar varios días hábiles.'],
    ['Ya tengo ficha en Google, ¿por qué no aparezco?', 'Las causas más comunes son una categoría poco específica, información incompleta, pocas reseñas o que quien busca está lejos de tu negocio. Revisa también que la ficha esté verificada y que no haya fichas duplicadas.'],
    ['¿Puedo poner palabras clave en el nombre de mi ficha?', 'Solo si son parte del nombre real de tu negocio. Agregar palabras clave al nombre va contra las normas de Google y puede hacer que suspendan tu ficha.'],
    ['¿Las publicaciones del Perfil de Empresa sirven?', 'Sí: muestran que el negocio está activo y le permiten al cliente ver tus novedades y promociones sin salir de Google. Publicar una vez por semana es una buena costumbre.'],
  ],
};

export const meta = guiaMeta(g);
export const cuerpo = guiaCuerpo(g);
