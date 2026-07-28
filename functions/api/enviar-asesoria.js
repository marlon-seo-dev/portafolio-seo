/**
 * ============================= FUNCIÓN DE ENVÍO DE CORREO — ASESORÍA GRATUITA =============================
 * Cloudflare Pages Function. Se despliega automáticamente porque vive en /functions/api/.
 * Ruta resultante: POST https://portafolio-seo.pages.dev/api/enviar-asesoria
 *
 * Requiere una variable de entorno secreta configurada en Cloudflare Pages:
 *   Panel de Cloudflare → tu proyecto → Settings → Environment variables → RESEND_API_KEY
 * (instrucciones completas en README-BACKEND.md)
 *
 * Usa Resend (https://resend.com) para el envío real del correo. Plan gratis:
 * 3.000 correos/mes, 100/día — más que suficiente para un formulario de contacto.
 */

const CORREO_DESTINO = 'marlonsherrera7002@gmail.com';
const NOMBRE_SITIO = 'Formulario de Asesoría — Marlon Herrera';

// Remitente que se muestra en el correo. Con el dominio de prueba de Resend
// (onboarding@resend.dev) funciona sin configurar nada. Si más adelante
// conectas tu propio dominio en Resend, cámbialo por algo como
// 'Asesoría <formulario@tudominio.com>'.
const REMITENTE = 'Formulario Web <onboarding@resend.dev>';

function respuestaJSON(datos, estado) {
  return new Response(JSON.stringify(datos), {
    status: estado,
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  });
}

function escaparHTML(texto) {
  return String(texto)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function esCorreoValido(correo) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
}

export async function onRequestPost(context) {
  const { request, env } = context;

  let datos;
  try {
    datos = await request.json();
  } catch (error) {
    return respuestaJSON({ ok: false, mensaje: 'No se pudo leer el formulario enviado.' }, 400);
  }

  const nombre = (datos.nombre || '').toString().trim().slice(0, 120);
  const negocio = (datos.negocio || '').toString().trim().slice(0, 120);
  const tipo = (datos.tipo || '').toString().trim().slice(0, 120);
  const correo = (datos.correo || '').toString().trim().slice(0, 160);
  const whatsapp = (datos.whatsapp || '').toString().trim().slice(0, 40);
  const necesidad = (datos.necesidad || '').toString().trim().slice(0, 2000);

  // Honeypot anti-spam: este campo es invisible para personas reales (ver CSS
  // .campo-trampa) pero los bots que rellenan formularios automáticamente sí
  // lo completan. Si trae contenido, respondemos "éxito" falso y no enviamos
  // nada, para no delatar el mecanismo de defensa al bot.
  const trampa = (datos.sitio_web || '').toString().trim();
  if (trampa) {
    return respuestaJSON({ ok: true }, 200);
  }

  if (!nombre || !negocio || !tipo || !correo || !necesidad) {
    return respuestaJSON({ ok: false, mensaje: 'Faltan campos obligatorios.' }, 400);
  }

  if (!esCorreoValido(correo)) {
    return respuestaJSON({ ok: false, mensaje: 'El correo electrónico no es válido.' }, 400);
  }

  if (!env.RESEND_API_KEY) {
    // Falta configurar la variable de entorno en Cloudflare Pages.
    return respuestaJSON(
      { ok: false, mensaje: 'El formulario aún no está configurado. Escríbenos por WhatsApp mientras tanto.' },
      500
    );
  }

  const cuerpoHTML = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#0B1F3A;">
      <h2 style="color:#0A0E16;">Nueva solicitud de asesoría gratuita</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:8px 0;width:160px;"><strong>Nombre</strong></td><td>${escaparHTML(nombre)}</td></tr>
        <tr><td style="padding:8px 0;"><strong>Negocio</strong></td><td>${escaparHTML(negocio)}</td></tr>
        <tr><td style="padding:8px 0;"><strong>Tipo de negocio</strong></td><td>${escaparHTML(tipo)}</td></tr>
        <tr><td style="padding:8px 0;"><strong>Correo</strong></td><td>${escaparHTML(correo)}</td></tr>
        <tr><td style="padding:8px 0;"><strong>WhatsApp</strong></td><td>${escaparHTML(whatsapp || 'No indicado')}</td></tr>
      </table>
      <p style="margin-top:16px;"><strong>Necesidad principal:</strong></p>
      <p style="white-space:pre-wrap;background:#F5F6FA;border-radius:8px;padding:14px;">${escaparHTML(necesidad)}</p>
      <p style="margin-top:24px;font-size:12px;color:#5B6578;">Enviado desde el formulario de asesoría gratuita de portafolio-seo.pages.dev</p>
    </div>
  `;

  try {
    const respuestaResend = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: REMITENTE,
        to: [CORREO_DESTINO],
        reply_to: correo,
        subject: `${NOMBRE_SITIO}: ${negocio}`,
        html: cuerpoHTML,
      }),
    });

    if (!respuestaResend.ok) {
      const detalleError = await respuestaResend.text();
      console.error('Error de Resend:', respuestaResend.status, detalleError);
      return respuestaJSON(
        { ok: false, mensaje: 'No se pudo enviar el correo en este momento. Intenta por WhatsApp.' },
        502
      );
    }

    // Correo de confirmación automático para el cliente (mejora la
    // experiencia y reduce las dudas de "¿sí se envió mi solicitud?").
    // Si falla, no bloquea la respuesta principal: el correo a Marlon ya se envió.
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: REMITENTE,
          to: [correo],
          subject: 'Recibimos tu solicitud de asesoría gratuita',
          html: `
            <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#0B1F3A;">
              <h2 style="color:#0A0E16;">¡Gracias, ${escaparHTML(nombre)}!</h2>
              <p>Recibimos tu solicitud de asesoría publicitaria gratuita para <strong>${escaparHTML(negocio)}</strong>.</p>
              <p>Te responderé a este mismo correo en menos de 24 horas hábiles con una recomendación inicial para tu negocio.</p>
              <p>Si necesitas algo urgente, puedes escribirme directo por WhatsApp: <a href="https://wa.me/573213457681">+57 321 345 7681</a>.</p>
              <p style="margin-top:24px;">— Marlon Herrera</p>
            </div>
          `,
        }),
      });
    } catch (errorConfirmacion) {
      console.error('No se pudo enviar el correo de confirmación al cliente:', errorConfirmacion);
    }

    return respuestaJSON({ ok: true }, 200);
  } catch (error) {
    console.error('Error inesperado al enviar el correo:', error);
    return respuestaJSON(
      { ok: false, mensaje: 'Ocurrió un error inesperado. Intenta de nuevo o escribe por WhatsApp.' },
      500
    );
  }
}

// Cualquier método distinto de POST recibe un 405 explícito en vez de un error genérico.
export async function onRequestGet() {
  return respuestaJSON({ ok: false, mensaje: 'Método no permitido.' }, 405);
}