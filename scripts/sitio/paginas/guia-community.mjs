import { guiaMeta, guiaCuerpo, pesos, PLANES } from '../comun.mjs';

const R = PLANES.redes.planes;

const g = {
  ruta: '/guias/cuanto-cobra-un-community-manager-en-colombia',
  miga: 'Cuánto cobra un community manager',
  titulo: 'Cuánto Cobra un Community Manager en Colombia (2026)',
  descripcion: 'Cuánto cobra un community manager en Colombia en 2026: salario en nómina, tarifas por paquete, qué incluye el servicio y qué opción le conviene a tu negocio.',
  h1: '¿Cuánto cobra un community manager <em>en Colombia</em>?',
  tipo: 'Precios 2026',
  entradilla: 'Salario en nómina, tarifas de freelance y de agencia, qué hace realmente un community manager y cómo decidir qué opción le conviene a un emprendimiento sin pagar de más.',
  publicada: '2026-10-28',
  lectura: 7,
  imagen: 'creacion-de-contenido-redes',
  imagenAlt: 'Community manager grabando contenido para las redes sociales de una marca',
  temas: ['Community manager', 'Manejo de redes sociales', 'Precios de marketing en Colombia'],
  ctaTitulo: '¿Quieres tus redes <em>activas sin un sueldo fijo</em>?',
  ctaTexto: `El manejo de redes de Kairos cuesta desde ${pesos(R[0].precio)} al mes, sin permanencia. Cuéntanos de tu negocio y te decimos qué plan te conviene.`,
  ctaWa: 'Hola Kairos, leí la guía del community manager y quiero cotizar el manejo de mis redes.',
  respuesta: `<p><strong>En Colombia, un community manager en nómina gana en promedio $3.640.000 al mes, según Magneto, a lo que se suman las prestaciones de ley.</strong> Si en cambio contratas el servicio por paquete a un freelance o una agencia, pagas por entregables (publicaciones, historias, reportes).</p>
            <p>En Kairos el manejo de redes sociales cuesta ${pesos(R[0].precio)} al mes por 8 publicaciones y ${pesos(R[1].precio)} al mes por 12 publicaciones y 8 historias, sin permanencia.</p>`,
  toc: [
    ['modalidades', 'Nómina, freelance o agencia'],
    ['que-hace', 'Qué hace un community manager'],
    ['que-incluye', 'Qué debe incluir el servicio'],
    ['cuanto-necesitas', 'Cuánto contenido necesitas'],
    ['antes-de-contratar', 'Qué preguntar antes de contratar'],
    ['preguntas', 'Preguntas frecuentes'],
  ],
  secciones: `
          <h2 id="modalidades">Cuánto cuesta según la modalidad</h2>
          <p>Hay tres formas de tener a alguien manejando tus redes, y cada una tiene un costo y un compromiso distinto:</p>
          <div class="tabla-envoltura">
            <table class="tabla">
              <caption>Costo de un community manager en Colombia según la modalidad</caption>
              <thead><tr><th scope="col">Modalidad</th><th scope="col">Costo de referencia</th><th scope="col">Ideal para</th></tr></thead>
              <tbody>
                <tr><th scope="row">En nómina (empleado)</th><td>Salario promedio de $3.640.000 al mes <sup>1</sup>, más prestaciones</td><td>Empresas con mucho volumen de contenido y atención diaria</td></tr>
                <tr><th scope="row">Freelance</th><td>Varía según experiencia, cantidad de redes y contenido; pide siempre la tarifa por entregables</td><td>Negocios que quieren a una sola persona de confianza</td></tr>
                <tr><th scope="row">Agencia por paquete</th><td>Planes básicos desde $953.000 al mes en agencias publicadas <sup>2</sup>; en Kairos desde ${pesos(R[0].precio)} al mes</td><td>Emprendimientos que quieren constancia sin contratar personal</td></tr>
              </tbody>
            </table>
          </div>
          <p class="fuente">Fuentes, consultadas en octubre de 2026: <sup>1</sup> <a href="https://www.magneto365.com/co/preguntas-frecuentes/community-manager/cual-es-salario-de-un-community-manager-en-colombia" target="_blank" rel="noopener">Magneto</a>, salario promedio de un community manager en Colombia. <sup>2</sup> <a href="https://findme.digital/planes-precios-marketing-digital/" target="_blank" rel="noopener">FindMe Digital</a>, plan básico mensual.</p>

          <h2 id="que-hace">¿Qué hace un community manager (y qué no)?</h2>
          <p>Un community manager planea, crea y publica el contenido de las redes de una marca, y cuida la relación con la comunidad. En un negocio pequeño, su trabajo suele incluir:</p>
          <ul>
            <li>Planear un calendario de contenido alineado con lo que vende el negocio.</li>
            <li>Diseñar las publicaciones o coordinar a quien las diseña.</li>
            <li>Escribir los textos (copys) y elegir los hashtags.</li>
            <li>Programar y publicar en las fechas acordadas.</li>
            <li>Medir qué funcionó y proponer ajustes cada mes.</li>
          </ul>
          <p>Lo que <strong>no</strong> suele estar incluido, salvo que se acuerde aparte: la pauta (el dinero que se le paga a Meta), la producción de video profesional y la atención de ventas por mensaje, que normalmente hace el dueño porque conoce los precios y la disponibilidad del día.</p>

          <h2 id="que-incluye">Qué debe incluir un buen servicio de manejo de redes</h2>
          <ol>
            <li><div><strong>Cantidad exacta de publicaciones</strong> e historias al mes, por escrito.</div></li>
            <li><div><strong>Calendario aprobado por ti</strong> antes de publicar, para que nada salga sin tu visto bueno.</div></li>
            <li><div><strong>Diseño coherente con tu marca</strong>: mismos colores, tipografías y estilo en todo.</div></li>
            <li><div><strong>Reporte mensual</strong> con lo que funcionó y lo que se va a ajustar.</div></li>
            <li><div><strong>Acceso como colaborador</strong> desde Meta Business Suite, nunca tu contraseña.</div></li>
          </ol>

          <h2 id="cuanto-necesitas">¿Cuánto contenido necesita un emprendimiento?</h2>
          <p>Más importante que la cantidad es la constancia. Una referencia razonable para un negocio pequeño es publicar dos a tres veces por semana en su red principal y acompañar con historias los días de más movimiento. Eso equivale a unas 8 a 12 publicaciones al mes, que es justo lo que cubren los planes <a href="/manejo-de-redes-sociales">Redes Básico y Redes Plus</a> de Kairos.</p>
          <p>Si tu negocio apenas está empezando y todavía no quieres un plan mensual, puedes arrancar con un <a href="/diseno-de-piezas-publicitarias">paquete de piezas</a> y publicarlas tú mismo.</p>

          <h2 id="antes-de-contratar">Qué preguntar antes de contratar a un community manager</h2>
          <ul>
            <li>¿Cuántas publicaciones e historias recibo al mes y en qué redes?</li>
            <li>¿Quién diseña y quién escribe los textos?</li>
            <li>¿El precio incluye pauta? ¿Cuánto me recomiendas invertir aparte?</li>
            <li>¿Hay permanencia mínima? ¿Qué pasa si quiero pausar?</li>
            <li>¿Cómo vamos a medir si está funcionando?</li>
          </ul>
          <p>Si quieres comparar con otros servicios de marketing, revisa también la guía de <a href="/guias/cuanto-cobra-una-agencia-de-marketing-digital">cuánto cobra una agencia de marketing digital en Colombia</a>.</p>
`,
  faq: [
    ['¿Cuánto gana un community manager en Colombia?', 'Según Magneto, el salario promedio de un community manager en Colombia ronda los $3.640.000 al mes, y varía según la experiencia, la ciudad y el tipo de empresa.'],
    ['¿Cuánto cobra un community manager freelance en Colombia?', 'Depende de la cantidad de redes y de contenido que maneje. Pide siempre una tarifa por entregables (cuántas publicaciones, historias y reportes) para poder comparar con otras opciones.'],
    ['¿Es mejor contratar un community manager o una agencia?', 'Si tu negocio necesita atención diaria y mucho contenido, un community manager en nómina puede tener sentido. Si eres un emprendimiento que necesita constancia y buena imagen, un plan por paquete suele salir mucho más económico.'],
    ['¿El manejo de redes incluye responder mensajes?', 'Depende del servicio. En Kairos no está incluido: la atención de mensajes la hace el dueño, que conoce precios y disponibilidad. Si lo necesitas, se cotiza aparte.'],
    ['¿Cuánto cuesta el manejo de redes sociales en Kairos?', `El plan Redes Básico cuesta ${pesos(R[0].precio)} al mes (8 publicaciones) y el plan Redes Plus ${pesos(R[1].precio)} al mes (12 publicaciones y 8 historias). No tienen permanencia mínima.`],
  ],
};

export const meta = guiaMeta(g);
export const cuerpo = guiaCuerpo(g);
