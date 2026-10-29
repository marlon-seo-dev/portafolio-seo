import { guiaMeta, guiaCuerpo, pesos, PLANES } from '../comun.mjs';

const D = PLANES.diseno.planes, R = PLANES.redes.planes, W = PLANES.web.planes, S = PLANES.seo.planes;

const g = {
  ruta: '/guias/cuanto-cobra-una-agencia-de-marketing-digital',
  miga: 'Cuánto cobra una agencia',
  titulo: 'Cuánto Cobra una Agencia de Marketing Digital en Colombia',
  descripcion: 'Cuánto cobra una agencia de marketing digital en Colombia en 2026: precios de referencia, qué incluye cada servicio y cuánto invertir si eres emprendedor.',
  h1: '¿Cuánto cobra una agencia de marketing digital <em>en Colombia</em>?',
  tipo: 'Precios 2026',
  entradilla: 'Precios de referencia del mercado, qué incluye cada servicio, por qué hay tanta diferencia entre agencias y cuánto debería invertir un emprendedor para empezar sin desperdiciar plata.',
  publicada: '2026-10-28',
  lectura: 8,
  imagen: 'precios-marketing-digital-presupuesto',
  imagenAlt: 'Emprendedor calculando cuánto invertir en marketing digital',
  temas: ['Precios de marketing digital', 'Agencias de marketing en Colombia', 'Presupuesto para emprendedores'],
  ctaTitulo: '¿Quieres un plan <em>que quepa en tu presupuesto</em>?',
  ctaTexto: 'Cuéntanos cuánto puedes invertir al mes y te decimos por dónde empezar para que cada peso trabaje.',
  ctaWa: 'Hola Kairos, leí la guía de precios y quiero un plan para mi negocio.',
  respuesta: `<p><strong>En Colombia hay agencias que publican planes de marketing digital desde $800.000 al mes y planes de SEO desde $700.000 al mes;</strong> las agencias grandes suelen cotizar a la medida y no publican precios.</p>
            <p>Para un emprendedor existen opciones más accesibles: en Kairos una pieza publicitaria cuesta ${pesos(D[0].precio)}, el manejo de redes desde ${pesos(R[0].precio)} al mes y una página web desde ${pesos(W[0].precio)} con pago único.</p>`,
  toc: [
    ['tabla', 'Tabla de precios 2026'],
    ['diferencias', 'Por qué cambian tanto los precios'],
    ['cuanto-invertir', 'Cuánto invertir si eres emprendedor'],
    ['preguntas-antes', 'Qué preguntar antes de contratar'],
    ['alertas', 'Señales de alerta'],
    ['preguntas', 'Preguntas frecuentes'],
  ],
  secciones: `
          <h2 id="tabla">Tabla de precios de marketing digital en Colombia (2026)</h2>
          <p>Referencias públicas del mercado y nuestros propios precios publicados. Las fuentes están debajo de la tabla.</p>
          <div class="tabla-envoltura">
            <table class="tabla">
              <caption>Cuánto cuesta cada servicio de marketing digital</caption>
              <thead><tr><th scope="col">Servicio</th><th scope="col">Referencia del mercado</th><th scope="col">En Kairos</th></tr></thead>
              <tbody>
                <tr><th scope="row">Plan mensual de marketing digital con agencia</th><td>Desde $800.000 al mes <sup>1</sup></td><td>Por servicio, desde ${pesos(R[0].precio)} al mes (redes)</td></tr>
                <tr><th scope="row">Posicionamiento SEO</th><td>Desde $700.000 al mes <sup>2</sup></td><td>Auditoría ${pesos(S[0].precio)} · Plan Visibilidad ${pesos(S[1].precio)} (pago único)</td></tr>
                <tr><th scope="row">Diseño de piezas publicitarias</th><td>Varía según diseñador y cantidad</td><td>Desde ${pesos(D[0].precio)} por pieza</td></tr>
                <tr><th scope="row">Página web</th><td>Varía según alcance y plataforma</td><td>Desde ${pesos(W[0].precio)}, pago único</td></tr>
                <tr><th scope="row">Pauta en Google Ads (búsqueda)</th><td>Clic promedio de $500 a $2.000; mínimo sugerido para comercio local $600.000 al mes <sup>3</sup></td><td>No incluida: se le paga directo a Google</td></tr>
              </tbody>
            </table>
          </div>
          <p class="fuente">Fuentes: <sup>1</sup> <a href="https://mystartco.com/google-ads/google-ads-bogota-presupuesto-pesos/" target="_blank" rel="noopener">MyStartco</a>, planes de marketing digital para pequeñas empresas. <sup>2</sup> Plan de SEO publicado por una agencia de Bogotá. <sup>3</sup> <a href="https://www.laboratorioweb.com.co/cuanto-cuesta-google-ads-en-colombia/" target="_blank" rel="noopener">Laboratorio Web</a>, costos de Google Ads en Colombia. Consultadas en octubre de 2026.</p>

          <h2 id="diferencias">¿Por qué los precios cambian tanto entre agencias?</h2>
          <ul>
            <li><strong>Tamaño de la agencia:</strong> una agencia grande paga oficinas, ejecutivos de cuenta y varios niveles de gestión; eso se refleja en el precio.</li>
            <li><strong>Alcance del servicio:</strong> no es lo mismo diseñar piezas que manejar las redes, hacer pauta, SEO y página web al mismo tiempo.</li>
            <li><strong>Pauta incluida o no:</strong> algunas cotizaciones suman el dinero de los anuncios y otras no. Pregunta siempre cuánto va a Meta o a Google y cuánto a la agencia.</li>
            <li><strong>Contratos:</strong> hay agencias que piden permanencia de varios meses; otras, como Kairos, trabajan mes a mes.</li>
          </ul>

          <h2 id="cuanto-invertir">¿Cuánto debería invertir un emprendedor? Ejemplo con $400.000 al mes</h2>
          <p>No existe un número mágico, pero sí un orden lógico: primero lo que es tuyo para siempre (tu página y tu ficha de Google), después el contenido constante y, por último, la pauta para llegar a más gente.</p>
          <div class="tabla-envoltura">
            <table class="tabla">
              <thead><tr><th scope="col"></th><th scope="col">Mes 1</th><th scope="col">Mes 2 en adelante</th></tr></thead>
              <tbody>
                <tr><th scope="row">Página web (Landing Page)</th><td>${pesos(W[0].precio)} (pago único)</td><td>$0</td></tr>
                <tr><th scope="row">Piezas para redes (Pack Emprende)</th><td>${pesos(D[1].precio)}</td><td>${pesos(D[1].precio)}</td></tr>
                <tr><th scope="row">Pauta en redes</th><td>${pesos(400000 - W[0].precio - D[1].precio)}</td><td>${pesos(400000 - D[1].precio)}</td></tr>
                <tr><th scope="row">Total</th><td>$400.000</td><td>$400.000</td></tr>
              </tbody>
            </table>
          </div>
          <p>Es un ejemplo, no una regla. Lo importante es que el primer mes construyes una base que no se pierde, y desde el segundo mes casi todo el dinero va a que más personas vean tu negocio.</p>

          <h2 id="preguntas-antes">Qué preguntarle a una agencia antes de contratar</h2>
          <ol>
            <li><div><strong>¿Qué recibo exactamente cada mes?</strong> Cantidad de piezas, publicaciones, informes o tareas concretas.</div></li>
            <li><div><strong>¿El precio incluye la pauta?</strong> Y si no, cuánto recomiendan invertir aparte.</div></li>
            <li><div><strong>¿Hay permanencia mínima?</strong> Y qué pasa si quieres pausar.</div></li>
            <li><div><strong>¿Con quién voy a hablar?</strong> Saber quién hace el trabajo evita malentendidos.</div></li>
            <li><div><strong>¿Cómo vamos a medir?</strong> Qué indicadores revisarán y cada cuánto.</div></li>
          </ol>

          <h2 id="alertas">Señales de alerta al contratar marketing digital</h2>
          <ul>
            <li>Te garantizan el primer lugar en Google o que la IA te va a recomendar sí o sí.</li>
            <li>No te muestran trabajos anteriores ni te explican qué vas a recibir.</li>
            <li>El contrato es largo, pero los entregables son vagos.</li>
            <li>Usan plantillas genéricas o imágenes sin licencia en tus piezas.</li>
            <li>No te dan acceso a tus propias cuentas (redes, Google, página).</li>
          </ul>
          <p>Si quieres comparar, todos nuestros planes están en la página de <a href="/precios">precios</a>.</p>
`,
  faq: [
    ['¿Cuánto cobra una agencia de marketing digital al mes en Colombia?', 'Depende del alcance y del tamaño de la agencia. Hay agencias que publican planes desde $800.000 al mes para pequeñas empresas, y las agencias grandes suelen cotizar a la medida. En Kairos el manejo de redes cuesta desde $249.000 al mes.'],
    ['¿Qué incluye normalmente un plan de marketing digital?', 'Suele incluir diseño de contenido, publicación en redes, textos, informes y, a veces, gestión de pauta. Pide siempre la lista exacta de entregables antes de contratar.'],
    ['¿Es mejor contratar a un freelance o a una agencia?', 'Un freelance suele ser más económico pero cubre menos frentes; una agencia grande cubre todo pero cuesta más. Una agencia pequeña como Kairos busca el punto medio: varios servicios conectados a precios de emprendedor.'],
    ['¿La pauta en redes está incluida en el precio?', 'Casi nunca. La pauta se le paga directamente a Meta o a Google. En Kairos nuestros precios son por el trabajo y te recomendamos cuánto invertir en pauta según tu objetivo.'],
    ['¿Cuánto debe invertir un emprendedor en marketing digital?', 'Lo suficiente para sostenerlo varios meses. Un buen punto de partida es construir primero tu base (página y ficha de Google) y luego destinar un monto mensual fijo a contenido y pauta.'],
  ],
};

export const meta = guiaMeta(g);
export const cuerpo = guiaCuerpo(g);
