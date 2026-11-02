# Kairos — sitio web

Página de Kairos, agencia de marketing digital para emprendedores y pequeños negocios: <https://portafolio-seo.pages.dev>

## Cómo funciona

- Las páginas **se generan** con Node a partir de los módulos de `scripts/sitio/`. Los `.html` de la raíz y de `guias/` son el resultado: **no se editan a mano**, porque se sobrescriben cada vez que se genera.
- Con cada push a `main`, Cloudflare Pages publica la carpeta tal cual, sin paso de compilación. Por eso los `.html` generados también se suben a GitHub.
- La página no usa plugins ni librerías: HTML, un archivo CSS y un archivo JS.

## Carpetas

```
├── index.html, precios.html, …        ← generados (no editar)
├── guias/                             ← guías generadas (no editar)
├── assets/
│   ├── css/style.css                  ← todos los estilos (colores y medidas al inicio)
│   ├── js/main.js                     ← menú, animaciones, barra de marcas, pestañas de precios, formulario
│   ├── fonts/                         ← tipografías propias
│   └── images/
│       ├── fotos/                     ← fotos de Unsplash en WebP (800, 1200 y 1600 px)
│       ├── marcas/                    ← logos de clientes (transparentes, 200 px)
│       ├── certificaciones/           ← certificados del director, insignias y logos de los emisores
│       └── kairos-*, marlon-herrera-* ← logo, favicon, íconos y fotos de Marlon
├── scripts/
│   ├── sitio/
│   │   ├── generar.mjs                ← construye todas las páginas y sitemap.xml
│   │   ├── validar.mjs                ← revisión SEO antes de publicar
│   │   ├── comun.mjs                  ← piezas compartidas: precios, marcas, menú, pie, <head> y datos para Google (JSON-LD)
│   │   ├── plantilla-servicio.mjs     ← plantilla de las páginas de servicio (diseño, redes, web, SEO, IA)
│   │   └── paginas/*.mjs              ← contenido de cada página, una por archivo
│   ├── herramientas/logos/            ← prepara los logos de clientes
│   └── indexnow.mjs                   ← avisa a Bing (y a ChatGPT y Copilot) de los cambios
├── functions/api/enviar-asesoria.js   ← envía a tu correo el formulario de asesoría gratuita
├── _headers, _redirects               ← caché, seguridad y redirecciones 301 (Cloudflare)
├── sitemap.xml                        ← generado
├── llms.txt, robots.txt, manifest.json
└── marketing/                         ← solo en tu PC (no se sube): plan off-page, créditos de fotos, logos originales
```

Qué módulo genera cada página está en la lista `PAGINAS` de `scripts/sitio/generar.mjs`.

## Comandos

Desde la carpeta del proyecto, en la terminal de VS Code:

| Para qué | Comando |
|---|---|
| Generar todas las páginas y el sitemap | `node scripts/sitio/generar.mjs` |
| Revisar el SEO (debe terminar sin errores) | `node scripts/sitio/validar.mjs` |
| Ver la página en tu PC (abre http://localhost:8788) | `npx wrangler@4 pages dev . --port 8788` |
| Avisar a Bing de todas las URLs (con la página ya publicada) | `node scripts/indexnow.mjs` |
| Avisar solo de algunas URLs | `node scripts/indexnow.mjs / /precios` |

En Git Bash, las rutas que empiezan con `/` se dañan: escribe `MSYS_NO_PATHCONV=1` antes del comando de IndexNow. En PowerShell no hace falta.

## Cómo publicar un cambio

1. Edita el módulo que corresponde (ver la tabla de abajo).
2. Ejecuta `node scripts/sitio/generar.mjs` y luego `node scripts/sitio/validar.mjs`.
3. Haz commit y push a `main` desde VS Code. Cloudflare publica en uno o dos minutos.
4. Con el cambio ya en vivo, ejecuta IndexNow. En Google, para páginas nuevas o cambios grandes: Search Console → Inspección de URLs → Solicitar indexación.

## Dónde se cambia cada cosa

| Quiero cambiar… | Dónde |
|---|---|
| Un precio o un plan | `PLANES` en `scripts/sitio/comun.mjs`. Se actualiza en todas las páginas y en los datos para Google |
| El número de WhatsApp | `WA` en `comun.mjs` |
| El menú | `NAV` en `comun.mjs` |
| El pie de página | `pie()` en `comun.mjs` |
| Los logos de clientes | `MARCAS` en `comun.mjs` (ver "Agregar un logo de cliente") |
| Las certificaciones del director | `CREDENCIALES` en `comun.mjs` (ver "Agregar un certificado") |
| El texto de una página | su módulo en `scripts/sitio/paginas/` |
| Las guías destacadas del inicio | `GUIAS` en `paginas/inicio.mjs` |
| Colores, tipografías y espacios | las variables del inicio de `assets/css/style.css` (`--acento`, `--tinta`, …) |
| La fecha de última modificación | `HOY` en `comun.mjs`. Cámbiala solo cuando cambie el contenido de verdad |
| `llms.txt` (resumen para las IA) | se edita a mano: actualiza la fecha y los datos si cambian precios, servicios o clientes |

## Tareas frecuentes

### Agregar un logo de cliente

1. Guarda la imagen que te mandó el cliente en `marketing/logos-clientes/`.
2. Solo la primera vez en cada PC: `npm install --prefix scripts/herramientas/logos`
3. Ejecuta `node scripts/herramientas/logos/nuevo-logo.mjs marketing/logos-clientes/<archivo> "<Nombre de la marca>"`
4. Mira la vista previa en `scripts/herramientas/logos/vistas/`. Si el comando muestra avisos (fondo oscuro, letras blancas, logo muy ancho), el logo necesita una receta a mano como las de `recetas-clientes.mjs`.
5. Pega en `MARCAS` la línea que imprime el comando. Agrega el nombre en "Algunos clientes" de `llms.txt`. Después: generar, validar y push.

El logo sale en el inicio, en Nosotros y en la ficha "Algunos clientes".

### Agregar un certificado

Los certificados salen en Nosotros (`#certificaciones`), en la franja del inicio y de las páginas de SEO y AEO, en la caja de autor de las guías y en los datos para Google (`hasCredential`). Todo sale de `CREDENCIALES`.

1. Convierte el PDF en imagen. **Publica solo la imagen, nunca el PDF.** Antes de publicarla, difumina las firmas (son de otras personas y se pueden copiar para falsificar documentos) y cualquier dato privado: apellidos que no uses en el sitio, cédula, correo o teléfono. Agrega la marca de agua "Kairos · portafolio-seo.pages.dev", para que nadie reutilice el certificado como propio.
2. Guarda en `assets/images/certificaciones/` dos WebP del certificado, `<nombre>-640.webp` y `<nombre>-1280.webp`, más la insignia o el logo del emisor (112 px de alto, fondo transparente). Pon el emisor y "marlon-herrera" en el nombre del archivo.
3. Agrega la credencial a `CREDENCIALES` con los datos tal como dicen en el documento: nombre, tipo (Certificación, Diploma de realización, Certificado de asistencia…), emisor, fechas, código y enlace de verificación si lo tiene.
4. Agrégala también en "Formación y certificaciones" de `llms.txt`. Después: generar, validar y push.

Cuando una certificación vence, sale sola de las franjas y la tarjeta dice "Venció el…". Al renovarla, cambia las fechas y sube la imagen nueva con otro nombre.

### Agregar una guía

1. En `scripts/sitio/paginas/`, copia una guía parecida (por ejemplo `guia-maps.mjs`) con un nombre nuevo y cambia sus datos: ruta, título (máximo 60 caracteres), descripción (110 a 160), preguntas frecuentes…
2. Regístrala en `PAGINAS` de `generar.mjs`, con su imagen para el sitemap.
3. Agrégala a `GUIAS` en `paginas/guias.mjs` (índice de guías).
4. Foto: WebP en `assets/images/fotos/` con versiones `-800` y `-1200`, y su crédito en `marketing/creditos-imagenes.md`.
5. Generar, validar, push, IndexNow y solicitar la indexación en Search Console.

### Cambiar o quitar una URL

Nunca borres una URL que Google ya conoce. Agrega una redirección en `_redirects`, con y sin `.html`:

```
/ruta-vieja        /ruta-nueva  301
/ruta-vieja.html   /ruta-nueva  301
```

### Cambiar una imagen o un logo

Los navegadores guardan las imágenes 30 días (`_headers`). Usa siempre un **nombre de archivo nuevo**; con el mismo nombre, muchos visitantes seguirán viendo la imagen vieja. El CSS y el JS no tienen ese problema.

## Reglas para no romper nada

- No edites los `.html` generados ni `sitemap.xml`.
- Cada página lleva un solo H1, título de máximo 60 caracteres, descripción de 110 a 160 y preguntas frecuentes visibles iguales a las del JSON-LD. El validador lo revisa.
- Enlaces internos sin `.html`: `/servicios`, no `/servicios.html`.
- No quites de la plantilla Google Tag Manager (verifica la propiedad en Search Console) ni Microsoft Clarity.
- Fotos solo con licencia libre (Unsplash) y con su crédito. Nunca de Pinterest ni de la competencia, y nunca copiar textos de otros sitios.
- No borres `a8d4ce5375174b71a99434caa311a934.txt` ni `7f2d1fd4d16ec4e2a9e26c8b76d38b77.txt`: son las claves de IndexNow.
- **Todo lo que está en el repositorio se publica en la web**, incluido este archivo. No guardes aquí contraseñas ni datos privados: van en las variables de Cloudflare o en `marketing/`.

## Formulario de asesoría

`functions/api/enviar-asesoria.js` recibe el formulario de `/asesoria-gratuita` y lo envía a tu correo con [Resend](https://resend.com) (plan gratis). Necesita la variable `RESEND_API_KEY` en Cloudflare: tu proyecto → Settings → Environment variables, guardada como **Secret**.

## Copia de seguridad

La carpeta `marketing/` no se sube a GitHub para que no quede publicada. Cópiala a Google Drive u OneDrive cada vez que cambie: tiene el plan off-page, los créditos de las fotos y los logos originales de los clientes.
