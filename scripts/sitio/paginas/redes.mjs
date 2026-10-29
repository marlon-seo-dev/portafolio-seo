import { paginaServicio } from '../plantilla-servicio.mjs';
import { pesos, desde, PLANES } from '../comun.mjs';

const P = PLANES.redes.planes;

export const { meta, cuerpo } = paginaServicio({
  ruta: '/manejo-de-redes-sociales',
  titulo: 'Manejo de Redes Sociales: Precios 2026 | Kairos',
  descripcion: 'Manejo de redes sociales para emprendedores desde $249.000 al mes: diseño, textos, calendario y programación en Instagram y Facebook, sin permanencia mínima.',
  miga: 'Manejo de redes sociales',
  cat: 'redes',
  nombreServicio: 'Manejo de redes sociales para emprendedores',
  tipoServicio: 'Gestión de redes sociales',
  descripcionServicio: 'Planeación, diseño, redacción y programación mensual de contenido para Instagram y Facebook de emprendedores y micronegocios.',
  textoWa: 'Hola Kairos, quiero cotizar el manejo de redes sociales de mi negocio.',
  etiqueta: 'Instagram · Facebook',
  h1: 'Manejo de redes sociales <em>para emprendedores</em>',
  entradilla: 'Nos encargamos de tu contenido cada mes: calendario, diseño, textos y programación. Tú te enfocas en vender; tus redes se mantienen activas y con buena imagen.',
  foto: ['manejo-redes-sociales-celular', 'Celular con las aplicaciones de redes sociales de un emprendimiento'],
  sello: [`Desde ${pesos(desde('redes'))}`, 'al mes, sin permanencia'],
  insignias: ['Calendario mensual', 'Diseño y textos', 'Sin permanencia mínima'],
  respuestaTitulo: '¿Qué incluye el manejo de redes sociales?',
  respuesta: `<p><strong>Es el servicio en el que nos encargamos de tu contenido de Instagram y Facebook cada mes:</strong> planeamos el calendario, diseñamos las publicaciones, escribimos los textos y las dejamos programadas.</p>
        <p>En Kairos cuesta desde ${pesos(P[0].precio)} al mes y se renueva mes a mes, sin permanencia mínima.</p>`,
  incluyeTitulo: 'Tus redes activas todo el mes, sin que tengas que pensar en qué publicar',
  incluyeTexto: 'Publicar con constancia y con buena imagen es lo que más influye en que te recuerden. Nos encargamos de eso de principio a fin.',
  incluye: ['Calendario de contenido mensual pensado para tu negocio', 'Diseño de publicaciones (y de historias en Redes Plus)', 'Textos (copys) y hashtags para cada publicación', 'Programación en Instagram y Facebook', 'Optimización de tu perfil (en Redes Plus)', 'Reporte mensual con lo que funcionó'],
  fotoIncluye: ['creacion-de-contenido-redes', 'Emprendedora grabando contenido para sus redes sociales'],
  beneficiosTitulo: 'Lo que cambia cuando tus redes se manejan bien',
  beneficios: [
    ['Constancia', 'Publicaciones todas las semanas, aunque estés ocupado atendiendo tu negocio.'],
    ['Imagen profesional', 'Un perfil ordenado y coherente transmite confianza al cliente nuevo.'],
    ['Mensajes que venden', 'Textos claros que explican qué ofreces y cómo comprar.'],
  ],
  planesTitulo: 'Precios de manejo de redes sociales',
  planesTexto: 'Dos planes mensuales para Instagram y Facebook. Puedes cambiar de plan o pausar al siguiente mes.',
  pasos: [
    ['Diagnóstico de tu perfil', 'Revisamos tus redes actuales y lo que vende tu negocio.'],
    ['Calendario del mes', 'Te proponemos los temas y fechas de las publicaciones.'],
    ['Diseño y textos', 'Creamos el contenido y tú lo apruebas antes de publicarse.'],
    ['Programación y reporte', 'Programamos todo y al cierre del mes te enviamos el reporte.'],
  ],
  faqTitulo: 'Preguntas frecuentes sobre manejo de redes sociales',
  faq: [
    ['¿Cuánto cuesta el manejo de redes sociales en Colombia?', `Depende de la cantidad de contenido. En Kairos el plan Redes Básico cuesta ${pesos(P[0].precio)} al mes (8 publicaciones) y el plan Redes Plus ${pesos(P[1].precio)} al mes (12 publicaciones y 8 historias). Más detalle en la <a href="/guias/cuanto-cobra-una-agencia-de-marketing-digital">guía de precios de marketing digital</a>.`],
    ['¿Responden los mensajes y comentarios de mis clientes?', 'La atención de mensajes no está incluida: la haces tú, que conoces tu negocio y tus precios del día. Si necesitas apoyo con eso, lo cotizamos aparte.'],
    ['¿El plan incluye pauta o anuncios pagados?', 'No. La pauta es el dinero que se le paga a Meta para mostrar tus publicaciones a más gente, y la decides tú. Sí te recomendamos qué publicaciones pautar y con qué presupuesto empezar.'],
    ['¿En qué redes sociales trabajan?', 'Instagram y Facebook. Si tu negocio necesita TikTok u otra red, escríbenos y lo revisamos.'],
    ['¿Tengo que darles mi contraseña?', 'No. Te pedimos acceso como colaborador desde Meta Business Suite, así nunca compartes tu contraseña y puedes quitarnos el acceso cuando quieras.'],
    ['¿Hay permanencia mínima?', 'No. Los planes se renuevan mes a mes y puedes pausarlos avisando antes del siguiente ciclo.'],
  ],
  cta: { titulo: '¿Dejamos tus redes <em>en buenas manos</em>?', texto: 'Escríbenos con el enlace de tu Instagram y te decimos qué plan le conviene a tu negocio.' },
});
