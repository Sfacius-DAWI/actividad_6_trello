# Documentación del Proyecto

Este proyecto es una aplicación web que utiliza Fastify para el servidor y Webpack para agrupar los archivos del frontend.

## Prerrequisitos

- [Node.js](https://nodejs.org/) instalado.
- NPM (incluido con Node.js).

## Instalación

1. Clona el repositorio o descarga el código.
2. Abre una terminal en la raíz del proyecto y ejecuta:

    ```sh
    npm install
    ```

## Modo Desarrollo

1. Para compilar el código con Webpack y arrancar el servidor, ejecuta:

    ```sh
    npm run dev
    ```

2. La aplicación se iniciará en [http://localhost:3001](http://localhost:3001).

## Ejecución en Producción

1. Compila el bundle con Webpack:

    ```sh
    npm run build
    ```

2. Arranca el servidor:

    ```sh
    npm run start
    ```

## Estructura del Proyecto

- **src/**: Código del frontend (JavaScript y CSS).
- **server.js**: Servidor configurado con Fastify para servir los archivos estáticos.
- **webpack.config.mjs**: Configuración de Webpack para agrupar el código.

## Comandos NPM

- `npm install` - Instala las dependencias.
- `npm run build` - Compila el proyecto con Webpack.
- `npm run start` - Inicia el servidor.
- `npm run dev` - Ejecuta el proceso de compilación y arranca el servidor en modo desarrollo.

