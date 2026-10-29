import { guiaMeta, guiaCuerpo, pesos, PLANES } from '../comun.mjs';

const g = {
  ruta: '/guias/plan-de-marketing-digital-para-emprendedores',
  miga: 'Plan de marketing para emprendedores',
  titulo: 'Plan de Marketing Digital para Emprendedores (con Ejemplo)',
  descripcion: 'Cómo hacer un plan de marketing digital para tu emprendimiento en 7 pasos, con un ejemplo real de 90 días y presupuesto para un pequeño negocio en Colombia.',
  h1: 'Plan de marketing digital <em>para emprendedores</em>, con ejemplo',
  tipo: 'Plan paso a paso',
  entradilla: 'Un plan de marketing no tiene que ser un documento de 40 páginas. Para un emprendimiento basta con responder siete preguntas y seguir un calendario de 90 días. Aquí te mostramos cómo, con un ejemplo real.',
  publicada: '2026-10-28',
  lectura: 9,
  imagen: 'estrategia-marketing-reunion',
  imagenAlt: 'Equipo planeando la estrategia de marketing digital de un emprendimiento',
  temas: ['Plan de marketing digital', 'Marketing para emprendedores', 'Estrategia para pequeños negocios'],
  ctaTitulo: '¿Armamos <em>tu plan</em> juntos?',
  ctaTexto: 'En el diagnóstico gratuito revisamos tu negocio y te devolvemos los primeros pasos de tu plan, con presupuesto.',
  ctaWa: 'Hola Kairos, leí la guía del plan de marketing y quiero ayuda con el mío.',
  respuesta: `<p><strong>Un plan de marketing digital para emprendedores responde siete preguntas:</strong> qué quieres lograr, a quién le vendes, por qué deberían elegirte, en qué canales estás, qué vas a publicar, cuánto vas a invertir y cómo vas a medir.</p>
            <p>Lo más útil es convertirlo en un calendario de 90 días: un mes para construir la base, uno para publicar con constancia y uno para medir y ajustar.</p>`,
  toc: [
    ['que-es', 'Qué es un plan de marketing digital'],
    ['pasos', 'Los 7 pasos'],
    ['ejemplo', 'Ejemplo real'],
    ['90-dias', 'Plan de 90 días'],
    ['errores', 'Errores comunes'],
    ['preguntas', 'Preguntas frecuentes'],
  ],
  secciones: `
          <h2 id="que-es">¿Qué es un plan de marketing digital?</h2>
          <p>Es la hoja de ruta que dice cómo vas a conseguir clientes por internet: qué vas a hacer, en qué orden, con qué presupuesto y cómo vas a saber si funciona. Para un emprendimiento, su valor está en evitar dos errores muy comunes: publicar sin rumbo y gastar en pauta antes de tener una base.</p>

          <h2 id="pasos">Cómo hacer un plan de marketing digital en 7 pasos</h2>
          <ol>
            <li><div><strong>Define un objetivo medible.</strong> No "vender más", sino "recibir 20 pedidos por WhatsApp al mes" o "conseguir 5 clientes nuevos al mes".</div></li>
            <li><div><strong>Describe a tu cliente ideal.</strong> Quién es, dónde vive, qué problema resuelve contigo y dónde busca información (Instagram, Google, TikTok, la IA).</div></li>
            <li><div><strong>Escribe tu propuesta de valor en una frase.</strong> Por qué elegirte a ti y no al de al lado: precio, rapidez, calidad, atención, ubicación.</div></li>
            <li><div><strong>Elige pocos canales y hazlos bien.</strong> Para la mayoría de emprendimientos: Perfil de Empresa en Google, una red social principal, WhatsApp Business y una página propia.</div></li>
            <li><div><strong>Arma un calendario de contenido.</strong> Tres o cuatro publicaciones por semana, siempre los mismos días, mezclando producto, confianza (reseñas, procesos) y promociones.</div></li>
            <li><div><strong>Fija un presupuesto mensual que puedas sostener.</strong> Mejor un monto pequeño durante seis meses que uno grande durante uno.</div></li>
            <li><div><strong>Decide cómo vas a medir.</strong> Mensajes recibidos, ventas, visitas a tu página, llamadas desde Google Maps. Revisa una vez al mes.</div></li>
          </ol>

          <h2 id="ejemplo">Ejemplo: plan para una tienda de accesorios en Bogotá</h2>
          <div class="tabla-envoltura">
            <table class="tabla">
              <thead><tr><th scope="col">Elemento</th><th scope="col">Decisión</th></tr></thead>
              <tbody>
                <tr><th scope="row">Objetivo</th><td>Pasar de 8 a 20 ventas por WhatsApp al mes en 90 días</td></tr>
                <tr><th scope="row">Cliente ideal</th><td>Mujeres de 20 a 35 años en Bogotá que compran por Instagram</td></tr>
                <tr><th scope="row">Propuesta de valor</th><td>Accesorios de diseño propio con envío el mismo día en Bogotá</td></tr>
                <tr><th scope="row">Canales</th><td>Instagram, WhatsApp Business, Perfil de Empresa en Google y una landing page</td></tr>
                <tr><th scope="row">Contenido</th><td>4 publicaciones y 3 historias por semana: productos, clientes reales y novedades</td></tr>
                <tr><th scope="row">Presupuesto</th><td>$400.000 al mes entre piezas, página (primer mes) y pauta</td></tr>
                <tr><th scope="row">Medición</th><td>Mensajes de WhatsApp, ventas y visitas a la página, revisados cada mes</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="90-dias">Plan de 90 días para un emprendimiento</h2>
          <p><strong>Mes 1 · La base.</strong> Crea o completa tu <a href="/guias/como-aparecer-en-google-maps">Perfil de Empresa en Google</a>, ordena tu perfil de Instagram, publica tu <a href="/paginas-web-economicas">página web</a> y prepara tus primeras piezas con una línea gráfica coherente.</p>
          <p><strong>Mes 2 · La constancia.</strong> Publica según el calendario, pide reseñas a tus clientes y empieza con una pauta pequeña en las publicaciones que mejor funcionen sin pagar.</p>
          <p><strong>Mes 3 · Medir y ajustar.</strong> Revisa qué publicaciones trajeron mensajes, qué búsquedas te encuentran en Google y qué te preguntan los clientes. Repite lo que funcionó y deja lo que no.</p>
          <p>Si quieres delegar alguna parte, en Kairos el <a href="/precios#combo">Kit Emprendedor Digital</a> (${pesos(PLANES.combo.planes[0].precio)}) resuelve el mes 1 completo.</p>

          <h2 id="errores">Errores comunes en el plan de marketing de un emprendimiento</h2>
          <ul>
            <li>Estar en todas las redes a la vez y no hacerlo bien en ninguna.</li>
            <li>Pagar pauta antes de tener un perfil y una página que generen confianza.</li>
            <li>No tener un objetivo con número, así no hay forma de saber si funciona.</li>
            <li>Publicar mucho una semana y nada las siguientes tres.</li>
            <li>No pedir reseñas: son la prueba social más barata que existe.</li>
          </ul>
`,
  faq: [
    ['¿Qué debe tener un plan de marketing digital para un emprendimiento?', 'Un objetivo medible, la descripción de tu cliente ideal, tu propuesta de valor, los canales que vas a usar, un calendario de contenido, un presupuesto mensual y la forma en que vas a medir los resultados.'],
    ['¿Cuánto cuesta hacer un plan de marketing digital?', 'Puedes hacerlo tú con esta guía, sin costo. Si quieres ayuda, en el diagnóstico gratuito de Kairos te devolvemos los primeros pasos de tu plan según tu negocio y tu presupuesto.'],
    ['¿Puedo hacer el plan de marketing yo mismo?', 'Sí. Lo importante es ser concreto y realista con el tiempo y el dinero que tienes. Puedes delegar después las partes que más tiempo te quitan, como el diseño o el manejo de redes.'],
    ['¿Cada cuánto debo actualizar el plan?', 'Revísalo una vez al mes y ajústalo cada tres meses. Los números te dirán qué mantener y qué cambiar.'],
  ],
};

export const meta = guiaMeta(g);
export const cuerpo = guiaCuerpo(g);
