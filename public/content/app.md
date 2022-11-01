# app.js

Una de las características más queridas de Next.js es el enrutador basado en el sistema de archivos. Colocas un archivo dentro de una carpeta y creas rutas instantáneamente en tu aplicación. Sin configuración.

Today, we're improving routing and layouts in Next.js with the introduction of the app/ directory (beta). This is the result of the Layouts RFC previously published for community feedback. This includes support for:

Con la introducción de la carpeta `app/` (*beta*) esto llega a otro nivel. Esto incluye soporte para:

Layouts: Easily share UI while preserving state and avoiding re-renders.
Server Components: Making server-first the default for the most dynamic applications.
Streaming: Display instant loading states and stream in updates.
Suspense for Data Fetching: The new use hook enables component-level fetching.
The app/ directory can coexist with the existing pages directory for incremental adoption. While you don't need to use the app/ directory when upgrading to Next.js 13, we're laying the foundations to build complex interfaces while shipping less JavaScript.