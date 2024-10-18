# 🚀 Boilerplate

Boilerplate opinionado que incluye integraciones y configuraciones enfocadas en buenas prácticas para construir sitios rápidos, accesibles y listos para producción.

## 👀 Características

- 🚀 Última versión de Astro
- ✅ ESLint y Prettier configurados sin complicadas reglas
- ✉️ Reglas para commits semánticos
- 🗃️ Reglas para nombres de archivos y carpetas
- 🤖 Dependabot para actualizaciones automáticas
- 🔄 Plantillas para Pull Requests
- 🌐 Configuración para Tunnels
- ⚡ Enfocado en Performance
- ⚙️ Enfocado en SEO
- ✨ Soporte iconos SVG
- 🪄 View transitions entre documentos ([Reference](https://developer.chrome.com/docs/web-platform/view-transitions/cross-document))

## 🤔 ¿Cómo usar la plantilla?

Para utilizar la plantilla puedes copiar y ejecutar el siguiente comando en tu terminal:

Con NPM:

```bash
npm create astro@latest -- --template UXCorpRangel/boilerplate
```

Con PNPM:

```bash
pnpm create astro@latest --template UXCorpRangel/boilerplate
```

## 🛠️ Estructura del proyecto

- [public/favicons/](./public/favicons/): Contiene los archivos de favicon utilizados en la aplicación.

- [public/media/](./public/media/): Almacena archivos de medios como videos que son utilizados en la aplicación.

- [public/og/](./public/og/): Esta carpeta almacena las imágenes Open Graph que son utilizadas para previsualizaciones cuando la página es compartida en redes sociales.

- [src/components/](./src/components/): Contiene los componentes reutilizables que no tienen que ver con la UI que pueden ser usados en diferentes partes de la aplicación.

- [src/components/ui](./src/components/): Contiene los componentes de UI reutilizables.

- [src/data/](./src/data/): Esta carpeta almacena los datos estáticos o archivos que contienen la información que la aplicación necesita.

- [src/icons/](./src/icons/): Incluye los íconos utilizados en la aplicación.

- [src/images/](./src/images/): Contiene todas las imágenes que son utilizadas en la aplicación, ya sean para fondos, gráficos u otros elementos visuales. _IMPORTANTE: Debes añadir acá las imágenes que quieres que sean procesadas por Astro utilizando el componente `<Image>` o `<Picture>`_.

- [src/layouts/](./src/layouts/): Almacena los componentes de disposición general de la aplicación, como estructuras de páginas completas para a mantener una consistencia visual en diferentes páginas.

- [src/pages/](./src/pages/): Contiene las páginas principales de la aplicación.

- [src/pages/\_index](./src/pages/_index/): Las carpetas que inician con guión bajo dentro de `src/pages` contienen las secciones de cada página. Por ejemplo, [src/pages/\_index](./src/pages/_index/) contiene las secciones de la página de inicio.

- [src/scripts/](./src/scripts/): Contiene los scripts adicionales necesarios para la funcionalidad del proyecto. Estos scripts pueden incluir utilidades, funciones auxiliares o cualquier lógica que no esté directamente relacionada con la UI.

- [src/styles/](./src/styles/): Almacena los archivos de estilos que definen la apariencia visual de la aplicación. Aquí se definen colores, tipografías, márgenes, entre otros elementos visuales.

## 📦 Dependencias

Descubre las principales integraciones de Astro utilizadas en este proyecto:

- [@playform/compress](https://www.npmjs.com/package/@playform/compress): Es una herramienta que se enfoca en la compresión de activos, como imágenes, scripts y estilos, durante el proceso de construcción.

- [@playform/inline](https://www.npmjs.com/package/@playform/inline): Es una herramienta que se enfoca en la extracción de CSS Critico para la aplicación.

- [astro-compressor](https://www.npmjs.com/package/astro-compressor): Es una integración que se encarga de comprimir los archivos a Brotli y Gzip durante el proceso de build.

- [astro-icon](https://www.npmjs.com/package/astro-icon): Es una integración que facilita la gestión e inserción de íconos SVG en tu proyecto de Astro.

- [astro-seo-schema](https://www.npmjs.com/package/astro-seo-schema): Es una integración que genera automáticamente datos estructurados de esquema ([schema.org](https://schema.org/)) para tu sitio web de Astro.

- [astro-sitemap](https://www.npmjs.com/package/astro-sitemap): Genera automáticamente un sitemap XML para tu sitio web de Astro.

- [astro-tunnel](https://www.npmjs.com/package/astro-tunnel): Permite exponer localmente tu proyecto de Astro a través de una URL pública.

- [sanitize.css](https://www.npmjs.com/package/sanitize.css): Es una hoja de estilos que ofrece un reinicio (reset) y una normalización de los estilos CSS por defecto en los navegadores. Garantiza una apariencia más consistente entre distintos navegadores, eliminando las diferencias en estilos por defecto, lo que permite un desarrollo más predecible y coherente de la UI.

## 🤝 Contribuir

Si deseas contribuir a este proyecto, puedes hacerlo leyendo la [Guía de Contribución](./CONTRIBUTING.md).

## 📄 Licencia

Este proyecto utiliza la Licencia MIT. Consulte el [Archivo de Licencia](./LICENCE) para obtener más información.

---

Hecho con ❤️ por [Felix Icaza](https://felixicaza.com).
