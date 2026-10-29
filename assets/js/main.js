/* =====================================================================
   KAIROS — JS COMPARTIDO
   Mejora progresiva: todo el contenido funciona sin JavaScript. Aquí solo
   viven las interacciones: menú móvil, sombra de cabecera, aparición al
   hacer scroll, palabra rotativa, contadores, barra de marcas, pestañas de precios,
   "Arma tu plan", formulario de asesoría, medición de clics a WhatsApp y
   la carga diferida de HubSpot. Sin librerías externas.
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

var SIN_MOVIMIENTO = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============================= CABECERA CON SOMBRA AL HACER SCROLL ============================= */
(function () {
  var cabecera = document.querySelector('.cabecera');
  if (!cabecera) return;
  var actualizar = function () { cabecera.classList.toggle('desplazada', window.scrollY > 8); };
  window.addEventListener('scroll', actualizar, { passive: true });
  actualizar();
})();

/* ============================= APARICIÓN AL HACER SCROLL =============================
   Los elementos .revelar entran suavemente al verse. Sin IntersectionObserver
   (o con movimiento reducido) se muestran de inmediato. */
(function () {
  var elementos = document.querySelectorAll('.revelar');
  if (!elementos.length) return;
  if (SIN_MOVIMIENTO || !('IntersectionObserver' in window)) {
    elementos.forEach(function (e) { e.classList.add('visible'); });
    return;
  }
  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) { entrada.target.classList.add('visible'); observador.unobserve(entrada.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  elementos.forEach(function (e) { observador.observe(e); });
})();

/* ============================= PALABRA ROTATIVA (hero) ============================= */
(function () {
  document.querySelectorAll('.rotador').forEach(function (rotador) {
    var palabras = rotador.querySelectorAll('span');
    if (!palabras.length) return;
    var i = 0;
    palabras[0].classList.add('activa');
    if (SIN_MOVIMIENTO || palabras.length < 2) return;
    setInterval(function () {
      palabras[i].classList.remove('activa');
      i = (i + 1) % palabras.length;
      palabras[i].classList.add('activa');
    }, 2400);
  });
})();

/* ============================= CONTADORES =============================
   <span data-contar="35000" data-prefijo="$">$35.000</span>: el texto final
   ya está en el HTML (lo ven Google y quien no tiene JS); aquí solo se anima. */
(function () {
  var cifras = document.querySelectorAll('[data-contar]');
  if (!cifras.length || SIN_MOVIMIENTO || !('IntersectionObserver' in window)) return;
  var formato = new Intl.NumberFormat('es-CO');
  var animar = function (el) {
    var meta = +el.getAttribute('data-contar'), prefijo = el.getAttribute('data-prefijo') || '', sufijo = el.getAttribute('data-sufijo') || '';
    var inicio = null, duracion = 1100;
    var paso = function (t) {
      if (!inicio) inicio = t;
      var avance = Math.min(1, (t - inicio) / duracion), suave = 1 - Math.pow(1 - avance, 3);
      el.textContent = prefijo + formato.format(Math.round(meta * suave)) + sufijo;
      if (avance < 1) requestAnimationFrame(paso);
    };
    requestAnimationFrame(paso);
  };
  var obs = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) { if (e.isIntersecting) { animar(e.target); obs.unobserve(e.target); } });
  }, { threshold: 0.6 });
  cifras.forEach(function (c) { obs.observe(c); });
})();

/* ============================= BARRA DE MARCAS =============================
   El HTML trae cada logo una sola vez, con su texto alternativo. Aquí se copia
   la serie hasta sumar al menos 12 logos por mitad y se duplica: la animación
   avanza el 50 % del ancho, justo una serie, así el bucle no tiene saltos. Las
   copias conservan el texto alternativo y van con aria-hidden para que los
   lectores de pantalla no lean cada marca varias veces. */
(function () {
  if (SIN_MOVIMIENTO) return;
  document.querySelectorAll('.marcas__ventana').forEach(function (ventana) {
    var pista = ventana.querySelector('.marcas__pista');
    var serie = pista ? Array.prototype.slice.call(pista.children) : [];
    if (!serie.length) return;
    var veces = Math.ceil(12 / serie.length);
    for (var i = 1; i < veces * 2; i++) {
      serie.forEach(function (li) {
        var copia = li.cloneNode(true);
        copia.setAttribute('aria-hidden', 'true');
        pista.appendChild(copia);
      });
    }
    pista.style.setProperty('--duracion', (serie.length * veces * 3.5) + 's');
    ventana.classList.add('en-movimiento');
  });
})();

/* ============================= PESTAÑAS DE PRECIOS =============================
   Sin JS se ven todos los planes uno debajo del otro. Con JS, pestañas
   accesibles (role="tab", flechas del teclado). Un #ancla abre su pestaña. */
(function () {
  var lista = document.querySelector('.pestanas[role="tablist"]');
  if (!lista) return;
  var pestanas = Array.prototype.slice.call(lista.querySelectorAll('[role="tab"]'));
  var activar = function (pestana, enfocar) {
    pestanas.forEach(function (p) {
      var activa = p === pestana;
      p.setAttribute('aria-selected', activa ? 'true' : 'false');
      p.tabIndex = activa ? 0 : -1;
      document.getElementById(p.getAttribute('aria-controls')).hidden = !activa;
    });
    if (enfocar) pestana.focus();
  };
  pestanas.forEach(function (p, i) {
    p.addEventListener('click', function () { activar(p); });
    p.addEventListener('keydown', function (e) {
      var j = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
      if (j === null) return;
      e.preventDefault();
      activar(pestanas[(j + pestanas.length) % pestanas.length], true);
    });
  });
  var desdeAncla = pestanas.filter(function (p) { return '#' + p.getAttribute('aria-controls') === window.location.hash; })[0];
  activar(desdeAncla || pestanas[0]);
})();

/* ============================= ARMA TU PLAN =============================
   Suma lo que el visitante marca y arma el mensaje de WhatsApp. */
(function () {
  var armador = document.getElementById('armador');
  if (!armador) return;
  var casillas = armador.querySelectorAll('input[type="checkbox"]');
  var cifra = document.getElementById('armador-total');
  var detalle = document.getElementById('armador-detalle');
  var boton = document.getElementById('armador-whatsapp');
  var formato = new Intl.NumberFormat('es-CO');
  var actualizar = function () {
    var unico = 0, mensual = 0, elegidos = [];
    casillas.forEach(function (c) {
      if (!c.checked) return;
      var precio = +c.getAttribute('data-precio');
      if (c.getAttribute('data-periodo') === 'mes') mensual += precio; else unico += precio;
      elegidos.push(c.getAttribute('data-nombre'));
    });
    cifra.textContent = '$' + formato.format(unico + mensual);
    detalle.textContent = elegidos.length
      ? (unico ? '$' + formato.format(unico) + ' pago único' : '') + (unico && mensual ? ' + ' : '') + (mensual ? '$' + formato.format(mensual) + ' al mes' : '')
      : 'Marca los servicios que te interesan.';
    var mensaje = elegidos.length
      ? 'Hola Kairos, armé mi plan en su sitio: ' + elegidos.join(', ') + '. Total aproximado: $' + formato.format(unico + mensual) + '. Quiero empezar.'
      : 'Hola Kairos, quiero armar un plan de marketing para mi negocio.';
    boton.href = WHATSAPP + '?text=' + encodeURIComponent(mensaje);
  };
  casillas.forEach(function (c) { c.addEventListener('change', actualizar); });
  actualizar();
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
    var asunto = 'Solicitud de diagnóstico gratuito - ' + datos.negocio;
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
      'mensaje ya redactado para ' + CORREO_DESTINO + '. Solo debes confirmar el envío, o escríbenos por WhatsApp.',
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
            'te responderemos en menos de 24 horas hábiles.',
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
