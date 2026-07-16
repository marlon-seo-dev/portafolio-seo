/* ============================= MENÚ MÓVIL (index.html y servicios.html) =============================
   Muestra/oculta la navegación en pantallas pequeñas. Accesible: usa
   aria-expanded y cierra el menú al elegir un enlace. */
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('menu-principal');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var abierto = nav.classList.toggle('abierto');
    toggle.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(function (enlace) {
    enlace.addEventListener('click', function () {
      nav.classList.remove('abierto');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', function (evento) {
    if (!nav.contains(evento.target) && !toggle.contains(evento.target)) {
      nav.classList.remove('abierto');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

/* ============================= CALCULADORA DE PLAN EN 2 PASOS (solo existe en index.html) =============================
   Paso 1: tipo de negocio. Paso 2: frecuencia de publicación.
   Al completar ambos pasos arma una recomendación personalizada y un
   mensaje de WhatsApp pre-llenado con las respuestas del usuario. */
(function () {
  var pasoNegocio = document.querySelector('.calculadora-paso[data-paso="1"]');
  var pasoFrecuencia = document.querySelector('.calculadora-paso[data-paso="2"]');
  var resultado = document.getElementById('calculadora-resultado');
  if (!pasoNegocio || !pasoFrecuencia || !resultado) return;

  var puntoDos = document.querySelector('.calculadora-punto[data-punto="2"]');
  var lineaProgreso = document.querySelector('.calculadora-linea');

  var negocioElegido = null;
  var planElegido = null;

  var detallesPlan = {
    'Básico': 'Desde $80.000 COP. 1 publicación, 1 revisión y archivos en WebP, PNG o JPG con entrega rápida.',
    'Emprendedor': 'Desde $180.000 COP. 3 piezas gráficas (menú, flyer y adaptación para Instagram) con 2 revisiones. Ideal para mantener tus redes sociales activas todo el mes.',
    'Restaurante': 'Desde $350.000 COP. Menú profesional, publicaciones, flyers, banner y adaptaciones, con archivos para impresión y para redes, y 3 revisiones.'
  };

  function mostrarResultado() {
    if (!negocioElegido || !planElegido) return;

    var textoPlan = detallesPlan[planElegido];
    var mensajeWhatsApp =
      'Hola Marlon, tengo un(a) ' + negocioElegido +
      ' y según la calculadora de tu sitio me recomendó el Plan ' + planElegido + '. Quiero cotizar.';

    resultado.innerHTML =
      '<p>Para tu <strong>' + negocioElegido + '</strong>, el <strong>Plan ' + planElegido + '</strong> es tu mejor opción: ' + textoPlan +
      ' <a href="servicios.html#servicios" class="calculadora-enlace">Ver detalle del plan →</a></p>' +
      '<a href="https://wa.me/573213457681?text=' + encodeURIComponent(mensajeWhatsApp) + '" target="_blank" rel="noopener" class="btn btn-primario calculadora-btn">Cotizar Plan ' + planElegido + ' por WhatsApp</a>';
  }

  pasoNegocio.querySelectorAll('.calculadora-opcion').forEach(function (btn) {
    btn.addEventListener('click', function () {
      pasoNegocio.querySelectorAll('.calculadora-opcion').forEach(function (b) { b.classList.remove('activo'); });
      btn.classList.add('activo');
      negocioElegido = btn.getAttribute('data-negocio');
      pasoFrecuencia.classList.remove('calculadora-paso-oculto');
      if (puntoDos) puntoDos.classList.add('activo');
      if (lineaProgreso) lineaProgreso.classList.add('activo');
      mostrarResultado();
    });
  });

  pasoFrecuencia.querySelectorAll('.calculadora-opcion').forEach(function (btn) {
    btn.addEventListener('click', function () {
      pasoFrecuencia.querySelectorAll('.calculadora-opcion').forEach(function (b) { b.classList.remove('activo'); });
      btn.classList.add('activo');
      planElegido = btn.getAttribute('data-plan');
      mostrarResultado();
    });
  });
})();

/* ============================= BARRA DE PROGRESO + SOMBRA DEL HEADER (index.html y servicios.html) =============================
   Actualiza el ancho de la barra de progreso según cuánto se ha
   scrolleado la página y agrega sombra al header al alejarse del tope. */
(function () {
  var barra = document.getElementById('progreso-scroll');
  var header = document.querySelector('header');
  if (!barra && !header) return;

  function actualizar() {
    var alto = document.documentElement.scrollHeight - window.innerHeight;
    var progreso = alto > 0 ? (window.scrollY / alto) * 100 : 0;
    if (barra) barra.style.setProperty('--progreso', progreso.toFixed(2));
    if (header) header.classList.toggle('con-scroll', window.scrollY > 8);
  }

  actualizar();
  window.addEventListener('scroll', actualizar, { passive: true });
  window.addEventListener('resize', actualizar);
})();

/* ============================= BOTÓN VOLVER ARRIBA (index.html y servicios.html) =============================
   Aparece después de bajar un poco en la página y sube suavemente al
   inicio al hacer clic. */
(function () {
  var boton = document.getElementById('volver-arriba');
  if (!boton) return;

  function alternarVisibilidad() {
    boton.classList.toggle('visible', window.scrollY > 480);
  }

  alternarVisibilidad();
  window.addEventListener('scroll', alternarVisibilidad, { passive: true });

  boton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ============================= MENÚ ACTIVO SEGÚN LA SECCIÓN VISIBLE (solo index.html) =============================
   Resalta en la navegación el enlace de la sección que está en pantalla. */
(function () {
  var enlaces = document.querySelectorAll('.nav-principal a[href^="#"]');
  if (!enlaces.length || !('IntersectionObserver' in window)) return;

  var secciones = [];
  enlaces.forEach(function (enlace) {
    var id = enlace.getAttribute('href').slice(1);
    var seccion = document.getElementById(id);
    if (seccion) secciones.push({ enlace: enlace, seccion: seccion });
  });
  if (!secciones.length) return;

  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      var item = secciones.filter(function (s) { return s.seccion === entrada.target; })[0];
      if (!item) return;
      if (entrada.isIntersecting) {
        enlaces.forEach(function (e) { e.classList.remove('activo'); });
        item.enlace.classList.add('activo');
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  secciones.forEach(function (s) { observador.observe(s.seccion); });
})();

/* ============================= TILT + BRILLO EN TARJETAS (index.html y servicios.html) =============================
   Inclinación 3D sutil y un brillo que sigue el cursor en las tarjetas
   de "Por qué elegirme" y de "Servicios". Se desactiva en pantallas
   táctiles y si el usuario prefiere menos movimiento. */
(function () {
  var prefiereMenosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var tienePunteroFino = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (prefiereMenosMovimiento || !tienePunteroFino) return;

  var tarjetas = document.querySelectorAll('.tarjeta, .servicio-item');
  tarjetas.forEach(function (tarjeta) {
    tarjeta.addEventListener('mousemove', function (evento) {
      var rect = tarjeta.getBoundingClientRect();
      var x = evento.clientX - rect.left;
      var y = evento.clientY - rect.top;
      var porcentajeX = (x / rect.width) * 100;
      var porcentajeY = (y / rect.height) * 100;

      tarjeta.style.setProperty('--x', porcentajeX + '%');
      tarjeta.style.setProperty('--y', porcentajeY + '%');

      var rotY = ((x / rect.width) - 0.5) * 6;
      var rotX = ((y / rect.height) - 0.5) * -6;
      tarjeta.style.setProperty('--rx', rotX.toFixed(2) + 'deg');
      tarjeta.style.setProperty('--ry', rotY.toFixed(2) + 'deg');
    });

    tarjeta.addEventListener('mouseleave', function () {
      tarjeta.style.setProperty('--rx', '0deg');
      tarjeta.style.setProperty('--ry', '0deg');
    });
  });
})();

/* ============================= BOTONES MAGNÉTICOS (index.html y servicios.html) =============================
   Los botones principales se desplazan levemente hacia el cursor para
   sentirse más "vivos". Sutil, y desactivado en táctil / reduced motion. */
(function () {
  var prefiereMenosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var tienePunteroFino = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (prefiereMenosMovimiento || !tienePunteroFino) return;

  var botones = document.querySelectorAll('.btn-primario, .btn-whatsapp');
  var limite = 8;

  botones.forEach(function (boton) {
    boton.addEventListener('mousemove', function (evento) {
      var rect = boton.getBoundingClientRect();
      var x = evento.clientX - rect.left - rect.width / 2;
      var y = evento.clientY - rect.top - rect.height / 2;
      var desplazamientoX = Math.max(-limite, Math.min(limite, x * 0.25));
      var desplazamientoY = Math.max(-limite, Math.min(limite, y * 0.25));
      boton.style.transform = 'translate(' + desplazamientoX.toFixed(1) + 'px,' + desplazamientoY.toFixed(1) + 'px)';
    });

    boton.addEventListener('mouseleave', function () {
      boton.style.transform = '';
    });
  });
})();

/* ============================= ACORDEÓN DE PREGUNTAS SUAVE (index.html y servicios.html) =============================
   Anima la apertura/cierre de las preguntas frecuentes (elemento
   <details>) con una transición de altura, en vez del salto brusco por
   defecto del navegador. Si el navegador no soporta bien la animación,
   sigue funcionando igual gracias al comportamiento nativo de <details>. */
(function () {
  var preguntas = document.querySelectorAll('.pregunta-item');
  if (!preguntas.length) return;

  preguntas.forEach(function (item) {
    var contenido = item.querySelector('p');
    var resumen = item.querySelector('summary');
    if (!contenido || !resumen) return;

    resumen.addEventListener('click', function (evento) {
      evento.preventDefault();

      if (item.hasAttribute('data-animando')) return;

      if (item.open) {
        cerrar();
      } else {
        preguntas.forEach(function (otro) {
          if (otro !== item && otro.open && !otro.hasAttribute('data-animando')) {
            var otroContenido = otro.querySelector('p');
            if (otroContenido) {
              otro.setAttribute('data-animando', 'true');
              otroContenido.style.maxHeight = otroContenido.scrollHeight + 'px';
              requestAnimationFrame(function () {
                otroContenido.style.maxHeight = '0px';
              });
              otroContenido.addEventListener('transitionend', function manejador() {
                otro.open = false;
                otro.removeAttribute('data-animando');
                otroContenido.style.maxHeight = '';
                otroContenido.removeEventListener('transitionend', manejador);
              });
            }
          }
        });
        abrir();
      }
    });

    function abrir() {
      item.setAttribute('data-animando', 'true');
      item.open = true;
      contenido.style.overflow = 'hidden';
      contenido.style.maxHeight = '0px';
      contenido.style.transition = 'max-height .3s ease';
      requestAnimationFrame(function () {
        contenido.style.maxHeight = contenido.scrollHeight + 'px';
      });
      contenido.addEventListener('transitionend', function manejador() {
        contenido.style.maxHeight = '';
        contenido.style.overflow = '';
        item.removeAttribute('data-animando');
        contenido.removeEventListener('transitionend', manejador);
      });
    }

    function cerrar() {
      item.setAttribute('data-animando', 'true');
      contenido.style.overflow = 'hidden';
      contenido.style.maxHeight = contenido.scrollHeight + 'px';
      requestAnimationFrame(function () {
        contenido.style.maxHeight = '0px';
      });
      contenido.addEventListener('transitionend', function manejador() {
        item.open = false;
        contenido.style.maxHeight = '';
        contenido.style.overflow = '';
        item.removeAttribute('data-animando');
        contenido.removeEventListener('transitionend', manejador);
      });
    }
  });
})();

/* ============================= ANIMACIÓN AL HACER SCROLL (solo index.html) =============================
   Revela secciones suavemente al entrar en pantalla. No se aplica al
   hero ni a la imagen de "Sobre mí" para no afectar el LCP ni las
   imágenes. Respeta prefers-reduced-motion (ver CSS) y navegadores sin
   soporte de IntersectionObserver (los muestra de inmediato). */
(function () {
  var elementos = document.querySelectorAll('.reveal');
  if (!elementos.length) return;

  if (!('IntersectionObserver' in window)) {
    elementos.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.15 });

  elementos.forEach(function (el) { observador.observe(el); });
})();