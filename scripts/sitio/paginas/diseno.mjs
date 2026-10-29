import { paginaServicio } from '../plantilla-servicio.mjs';
import { pesos, desde, PLANES } from '../comun.mjs';

const P = PLANES.diseno.planes;

export const { meta, cuerpo } = paginaServicio({
  ruta: '/diseno-de-piezas-publicitarias',
  titulo: 'Diseño de Piezas Publicitarias desde $35.000 | Kairos',
  descripcion: 'Diseño de piezas publicitarias para redes sociales: posts, historias, flyers y banners profesionales para emprendedores desde $35.000, con entrega en 48 horas.',
  miga: 'Diseño de piezas publicitarias',
  cat: 'diseno',
  nombreServicio: 'Diseño de piezas publicitarias para redes sociales',
  tipoServicio: 'Diseño gráfico publicitario',
  descripcionServicio: 'Diseño de publicaciones, historias, flyers y banners para emprendedores y micronegocios, con la identidad de la marca y archivos listos para publicar o imprimir.',
  textoWa: 'Hola Kairos, quiero cotizar diseño de piezas publicitarias para mi negocio.',
  etiqueta: 'Diseño gráfico · Redes sociales',
  h1: 'Diseño de piezas publicitarias <em>para redes sociales</em>',
  entradilla: 'Publicaciones, historias, flyers y banners con diseño profesional para que tu emprendimiento se vea serio, comunique claro y venda más. Con tu logo, tus colores y entrega rápida.',
  foto: ['disenador-grafico-escritorio', 'Diseñador gráfico creando piezas publicitarias para redes sociales en su escritorio'],
  sello: [`Desde ${pesos(desde('diseno'))}`, 'entrega en 48 horas hábiles'],
  insignias: ['Posts e historias', 'Flyers y banners', '2 rondas de ajustes'],
  respuestaTitulo: '¿Qué es una pieza publicitaria?',
  respuesta: `<p><strong>Una pieza publicitaria es cualquier diseño hecho para comunicar algo de tu marca y vender:</strong> una publicación de Instagram, una historia, un flyer, un banner o un aviso.</p>
        <p>En Kairos las diseñamos con tu logo, tus colores y un mensaje claro, listas para publicar o imprimir, desde ${pesos(P[0].precio)} la pieza.</p>`,
  incluyeTitulo: 'Piezas para todos los lugares donde te ven tus clientes',
  incluyeTexto: 'Diseñamos cada pieza para el formato y el canal donde se va a usar, con un solo objetivo: que la persona entienda tu oferta en dos segundos.',
  incluye: ['Publicaciones (posts) para Instagram, Facebook y TikTok', 'Historias en formato vertical', 'Flyers y volantes para imprimir o compartir por WhatsApp', 'Banners para tu página web o portada de redes', 'Adaptación a tu logo, colores y tipografía', 'Archivos listos para publicar (PNG o JPG) o imprimir (PDF)'],
  fotoIncluye: ['diseno-piezas-publicitarias', 'Paleta de colores, tableta de diseño y computador para crear piezas publicitarias'],
  beneficiosTitulo: 'Un buen diseño no es un lujo: es lo que hace que te compren',
  beneficios: [
    ['Te ves profesional', 'Una imagen cuidada genera confianza: es más fácil comprarle a una marca que se ve seria.'],
    ['Comunicas claro', 'Cada pieza tiene un solo mensaje: qué ofreces, por qué elegirte y cómo comprar.'],
    ['Ahorras tiempo', 'Dejas de pelear con plantillas y te concentras en atender y vender.'],
    ['Marca coherente', 'Todas tus piezas con la misma línea gráfica: te reconocen antes de leer tu nombre.'],
  ],
  planesTitulo: 'Precios de diseño de piezas publicitarias',
  planesTexto: 'Elige una pieza suelta o un paquete. Mientras más piezas, menor el precio por pieza.',
  pasos: [
    ['Nos cuentas tu idea', 'Por WhatsApp nos envías el texto, tu logo y ejemplos que te gusten.'],
    ['Propuesta de diseño', 'Diseñamos la pieza con tu identidad y te enviamos una primera versión.'],
    ['Ajustes', 'Tienes dos rondas de ajustes incluidas para dejarla como la quieres.'],
    ['Entrega', 'Recibes los archivos listos para publicar o imprimir.'],
  ],
  faqTitulo: 'Preguntas frecuentes sobre diseño de piezas publicitarias',
  faq: [
    ['¿Cuánto cuesta diseñar una publicación para redes sociales?', `En Kairos una pieza (publicación, historia, flyer o banner) cuesta ${pesos(P[0].precio)}. El Pack Emprende de 4 piezas cuesta ${pesos(P[1].precio)} y el Pack Marca Activa de 8 piezas y una portada, ${pesos(P[2].precio)}.`],
    ['¿Qué necesito enviar para empezar?', 'Tu logo, el texto o la promoción que quieres comunicar, tus fotos si las tienes y, si quieres, ejemplos de diseños que te gusten. Con eso empezamos.'],
    ['¿De dónde salen las imágenes de las piezas?', 'Usamos tus propias fotos o imágenes de bancos con licencia libre para uso comercial. No usamos imágenes con derechos de autor sin permiso, para que tu marca no tenga problemas.'],
    ['¿Puedo pedir cambios?', 'Sí. Cada pieza incluye dos rondas de ajustes. Si necesitas más cambios después de eso, los cotizamos aparte antes de hacerlos.'],
    ['¿En qué formatos entregan los archivos?', 'En PNG o JPG listos para redes sociales, y en PDF cuando la pieza es para imprimir. Si necesitas otro formato, nos dices.'],
    ['¿Hacen videos o reels?', 'Este servicio es de diseño gráfico. Si necesitas video, escríbenos y te contamos qué opciones podemos ofrecerte para tu caso.'],
  ],
  cta: { titulo: '¿Diseñamos tu <em>próxima pieza</em>?', texto: 'Cuéntanos qué quieres comunicar y te enviamos la propuesta. Una pieza puede estar lista en 48 horas hábiles.' },
});
