/* =====================================================================
   MARLON HERRERA — JS COMPARTIDO
   Mejora progresiva: todo el contenido funciona sin JavaScript. Aquí solo
   viven las interacciones que lo necesitan: menú móvil, calculadora de
   plan, asesor de estrategias, formulario de asesoría, medición de clics
   a WhatsApp y la carga diferida de HubSpot.
   ===================================================================== */

var WHATSAPP = 'https://wa.me/573213457681';

function escaparHTML(texto) {
  return String(texto).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[c];
  });
}

/* ============================= MENÚ MÓVIL =============================
   Botón real con aria-expanded. Se cierra con Escape, al elegir un enlace
   o al hacer clic fuera, y devuelve el foco al botón al cerrarse con Escape. */
(function () {
  var boton = document.querySelector('.menu-boton');
  var nav = document.getElementById('menu-principal');
  if (!boton || !nav) return;

  function alternar(abrir) {
    nav.classList.toggle('abierta', abrir);
    boton.setAttribute('aria-expanded', abrir ? 'true' : 'false');
    boton.querySelector('.menu-boton__texto').textContent = abrir ? 'Cerrar' : 'Menú';
  }

  boton.addEventListener('click', function () {
    alternar(boton.getAttribute('aria-expanded') !== 'true');
  });

  nav.addEventListener('click', function (evento) {
    if (evento.target.closest('a')) alternar(false);
  });

  document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape' && boton.getAttribute('aria-expanded') === 'true') {
      alternar(false);
      boton.focus();
    }
  });

  document.addEventListener('click', function (evento) {
    if (boton.getAttribute('aria-expanded') === 'true' && !nav.contains(evento.target) && !boton.contains(evento.target)) {
      alternar(false);
    }
  });
})();

/* ============================= HERRAMIENTA EN 2 PASOS (base común) =============================
   Usada por la calculadora de plan (inicio) y el asesor de estrategias
   (servicios). Cada opción es un <button> con aria-pressed; al responder
   el paso 1 se revela el paso 2 y, con ambos, se pinta el resultado. */
function herramientaDosPasos(opciones) {
  var paso1 = document.querySelector(opciones.paso1);
  var paso2 = document.querySelector(opciones.paso2);
  var resultado = document.getElementById(opciones.resultado);
  if (!paso1 || !paso2 || !resultado) return;

  var respuestas = { uno: null, dos: null };

  function enlazar(paso, clave, atributo, alResponder) {
    paso.querySelectorAll('button[' + atributo + ']').forEach(function (btn) {
      btn.addEventListener('click', function () {
        paso.querySelectorAll('button[' + atributo + ']').forEach(function (b) {
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        });
        respuestas[clave] = btn.getAttribute(atributo);
        if (alResponder) alResponder();
        if (respuestas.uno && respuestas.dos) resultado.innerHTML = opciones.pintar(respuestas.uno, respuestas.dos);
      });
    });
  }

  enlazar(paso1, 'uno', opciones.atributo1, function () { paso2.hidden = false; });
  enlazar(paso2, 'dos', opciones.atributo2);
}

/* ============================= CALCULADORA DE PLAN (solo inicio) ============================= */
(function () {
  var detallesPlan = {
    'Inicial': 'Desde $35.000 COP. 1 pieza gráfica, 2 revisiones y entrega estándar. Ideal para una publicación o promoción puntual.',
    'Crecimiento': 'Desde $70.000 COP. 3 piezas gráficas, adaptaciones para Instagram y correcciones incluidas. Ideal para mantener tus redes activas todo el mes.',
    'Restaurante': 'Desde $130.000 COP. Menú, flyer, publicaciones, branding básico y asesoría personalizada. Una estrategia visual completa para tu negocio.'
  };

  herramientaDosPasos({
    paso1: '.calculadora-paso[data-paso="1"]',
    paso2: '.calculadora-paso[data-paso="2"]',
    resultado: 'calculadora-resultado',
    atributo1: 'data-negocio',
    atributo2: 'data-plan',
    pintar: function (negocio, plan) {
      var mensaje = 'Hola Marlon, tengo un(a) ' + negocio +
        ' y según la calculadora de tu sitio me recomendó el Plan ' + plan + '. Quiero cotizar.';
      return '<div><p>Para tu <strong>' + escaparHTML(negocio) + '</strong>, el <strong>Plan ' + escaparHTML(plan) +
        '</strong> es tu mejor opción. ' + detallesPlan[plan] +
        ' <a href="/servicios#planes">Ver detalle de los planes</a>.</p>' +
        '<a href="' + WHATSAPP + '?text=' + encodeURIComponent(mensaje) +
        '" target="_blank" rel="noopener" class="btn btn--primario">Cotizar Plan ' + escaparHTML(plan) + ' por WhatsApp</a></div>';
    }
  });
})();

/* ============================= ASESOR DE ESTRATEGIAS (solo servicios) =============================
   Lógica local e instantánea: combina consejos según tipo de negocio y
   objetivo. Sin llamadas a APIs externas. */
(function () {
  var consejosTipo = {
    'Hamburguesería': [
      'Destaca los combos (hamburguesa + papas + bebida) como pieza central: es lo que más convierte en comida rápida.',
      'Las fotos de cortes jugosos y queso derretido en primer plano suelen generar más clics que fotos generales del local.'
    ],
    'Perros calientes o salchipapas': [
      'Prioriza publicidad directa: precio, tamaño de la porción y combos deben verse claros en cada pieza.',
      'Las promociones por horarios (tarde-noche) suelen rendir mejor que la publicidad genérica en este tipo de negocio.'
    ],
    'Pollo asado o broaster': [
      'Muestra el tamaño de las porciones y el número de personas que alcanza cada combo familiar: es el argumento de venta más fuerte.',
      'Los domingos y días de pago suelen ser el mejor momento para programar promociones de este tipo de negocio.'
    ],
    'Pizza al paso': [
      'Destaca la velocidad de entrega y el precio por porción o combo: son los dos factores que más pesan en la decisión.',
      'Las piezas con ingredientes visibles (queso derretido, pepperoni) generan más antojo que las fotos del local.'
    ]
  };

  var consejosObjetivo = {
    'Conseguir más seguidores': [
      'Publica con una frecuencia constante (mínimo 3 veces por semana) y mantén siempre el mismo estilo visual.',
      'Los videos cortos mostrando el proceso o el ambiente suelen generar más alcance que solo fotos de platos.'
    ],
    'Vender más en el punto de venta': [
      'Un menú digital claro y bien jerarquizado ayuda a que el cliente decida más rápido y gaste un poco más.',
      'Los combos y recomendaciones destacadas en el menú aumentan el valor promedio de cada pedido.'
    ],
    'Fidelizar clientes actuales': [
      'Las publicaciones "detrás de cámaras" generan cercanía y hacen que el cliente vuelva.',
      'Un programa simple de puntos o descuentos recurrentes, bien comunicado, ayuda mucho a la fidelización.'
    ],
    'Lanzar una promoción o apertura': [
      'Anuncia la promoción con al menos una semana de anticipación en redes y con un flyer físico si tienes local.',
      'Una cuenta regresiva en redes sociales genera expectativa antes del lanzamiento.'
    ]
  };

  herramientaDosPasos({
    paso1: '.asesor-paso[data-paso="1"]',
    paso2: '.asesor-paso[data-paso="2"]',
    resultado: 'asesor-resultado',
    atributo1: 'data-tipo',
    atributo2: 'data-objetivo',
    pintar: function (tipo, objetivo) {
      var tips = consejosTipo[tipo].concat(consejosObjetivo[objetivo]);
      var mensaje = 'Hola Marlon, tengo un(a) ' + tipo + ' y mi objetivo principal es ' +
        objetivo.toLowerCase() + '. Usé el asesor de tu sitio y quiero cotizar una estrategia.';
      return '<div><h3>Tu diagnóstico: ' + escaparHTML(tipo) + ' + ' + escaparHTML(objetivo) + '</h3>' +
        '<ul>' + tips.map(function (t) { return '<li>' + escaparHTML(t) + '</li>'; }).join('') + '</ul>' +
        '<a href="' + WHATSAPP + '?text=' + encodeURIComponent(mensaje) +
        '" target="_blank" rel="noopener" class="btn btn--primario">Cotizar esta estrategia por WhatsApp</a></div>';
    }
  });
})();

/* ============================= FORMULARIO DE ASESORÍA GRATUITA (solo asesoria-gratuita) =============================
   Envía los datos a la Cloudflare Pages Function /api/enviar-asesoria
   (Resend). Si falla o no está configurada, abre el cliente de correo con
   el mensaje redactado como respaldo, para no dejar al usuario sin salida. */
(function () {
  var formulario = document.getElementById('formulario-asesoria');
  var resultado = document.getElementById('formulario-resultado');
  if (!formulario || !resultado) return;

  var CORREO_DESTINO = 'marlonsherrera7002@gmail.com';
  var botonEnviar = formulario.querySelector('button[type="submit"]');
  var textoBotonOriginal = botonEnviar ? botonEnviar.textContent : '';
  var obligatorios = ['nombre', 'negocio', 'tipo', 'correo', 'necesidad'];

  function mostrarMensaje(texto, esError) {
    resultado.textContent = texto;
    resultado.classList.add('visible');
    resultado.classList.toggle('error', !!esError);
  }

  function activarCargando(activo) {
    if (!botonEnviar) return;
    botonEnviar.disabled = activo;
    botonEnviar.textContent = activo ? 'Enviando...' : textoBotonOriginal;
  }

  function enviarPorCorreoRespaldo(datos) {
    var asunto = 'Solicitud de asesoría publicitaria gratuita - ' + datos.negocio;
    var cuerpo =
      'Nombre: ' + datos.nombre + '\n' +
      'Negocio: ' + datos.negocio + '\n' +
      'Tipo de negocio: ' + datos.tipo + '\n' +
      'Correo de contacto: ' + datos.correo + '\n' +
      'WhatsApp: ' + (datos.whatsapp || 'No indicado') + '\n\n' +
      'Necesidad principal:\n' + datos.necesidad;

    window.location.href = 'mailto:' + CORREO_DESTINO +
      '?subject=' + encodeURIComponent(asunto) + '&body=' + encodeURIComponent(cuerpo);

    mostrarMensaje(
      'No pudimos enviar el formulario automáticamente, así que abrimos tu aplicación de correo con el ' +
      'mensaje ya redactado para ' + CORREO_DESTINO + '. Solo debes confirmar el envío, o escríbeme por WhatsApp.',
      true
    );
  }

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    var datos = {
      nombre: formulario.nombre.value.trim(),
      negocio: formulario.negocio.value.trim(),
      tipo: formulario.tipo.value.trim(),
      correo: formulario.correo.value.trim(),
      whatsapp: formulario.whatsapp.value.trim(),
      necesidad: formulario.necesidad.value.trim(),
      // Campo trampa anti-spam (honeypot): invisible para personas.
      sitio_web: formulario.sitio_web ? formulario.sitio_web.value.trim() : ''
    };

    var primerInvalido = null;
    obligatorios.forEach(function (nombre) {
      var campo = formulario[nombre];
      var invalido = !datos[nombre] || (nombre === 'correo' && !campo.checkValidity());
      campo.setAttribute('aria-invalid', invalido ? 'true' : 'false');
      if (invalido && !primerInvalido) primerInvalido = campo;
    });

    if (primerInvalido) {
      mostrarMensaje('Por favor completa todos los campos obligatorios (*) con datos válidos antes de enviar.', true);
      primerInvalido.focus();
      return;
    }

    activarCargando(true);

    fetch('/api/enviar-asesoria', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    })
      .then(function (respuesta) {
        return respuesta.json().then(function (cuerpo) {
          return { ok: respuesta.ok, cuerpo: cuerpo };
        });
      })
      .then(function (r) {
        activarCargando(false);
        if (r.ok && r.cuerpo && r.cuerpo.ok) {
          formulario.reset();
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: 'formulario_asesoria_enviado', pagina: window.location.pathname });
          mostrarMensaje(
            '¡Listo! Tu solicitud fue enviada correctamente. Te llegará una confirmación a tu correo y ' +
            'te responderé en menos de 24 horas hábiles.',
            false
          );
        } else {
          enviarPorCorreoRespaldo(datos);
        }
      })
      .catch(function () {
        activarCargando(false);
        enviarPorCorreoRespaldo(datos);
      });
  });
})();

/* ============================= SEGUIMIENTO DE CONVERSIONES (GTM) =============================
   Listener delegado: cualquier clic a un enlace de WhatsApp en cualquier
   página empuja el evento "contacto_whatsapp" a dataLayer para GTM/GA4. */
document.addEventListener('click', function (evento) {
  var enlace = evento.target.closest('a[href*="wa.me/"]');
  if (!enlace) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'contacto_whatsapp',
    pagina: window.location.pathname,
    texto_boton: (enlace.getAttribute('aria-label') || enlace.textContent || '').trim().slice(0, 100)
  });
});

/* ============================= HUBSPOT DIFERIDO =============================
   El script de HubSpot (51816950) pesa ~100 KB y bloquea el hilo principal
   más de 1 s en móviles. Se carga con la primera interacción real (scroll,
   toque, clic o tecla) o, si no la hay, 6 s después del evento load. Así no
   compite con el LCP ni con la primera interacción (INP), y sigue registrando
   a cualquier visitante que se quede o interactúe con la página. */
(function () {
  var eventos = ['scroll', 'pointerdown', 'keydown', 'touchstart'];
  var temporizador;

  function cargarHubSpot() {
    eventos.forEach(function (e) { window.removeEventListener(e, cargarHubSpot); });
    clearTimeout(temporizador);
    if (document.getElementById('hs-script-loader')) return;
    var s = document.createElement('script');
    s.id = 'hs-script-loader';
    s.async = true;
    s.defer = true;
    s.src = 'https://js.hs-scripts.com/51816950.js';
    document.body.appendChild(s);
  }

  eventos.forEach(function (e) { window.addEventListener(e, cargarHubSpot, { once: true, passive: true }); });

  function programarRespaldo() { temporizador = setTimeout(cargarHubSpot, 6000); }
  if (document.readyState === 'complete') programarRespaldo();
  else window.addEventListener('load', programarRespaldo);
})();
