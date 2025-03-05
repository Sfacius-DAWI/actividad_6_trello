# Documentación del Microservicio

## Descripción
El microservicio está implementado con [Fastify](https://www.fastify.io/) y utiliza el plugin [@fastify/static](https://github.com/fastify/fastify-static) para servir archivos estáticos. Se configura para:
- Servir archivos compilados desde el directorio `dist` en la raíz (`/`).
- Servir imágenes desde el directorio `img` utilizando el prefijo `/img/`.

## Endpoints
- `/`  
  Sirve el archivo `index.html` desde el directorio `dist`.  
  ([server.js](server.js))

## Instalación
1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar todas las dependencias.

## Estructura del Proyecto
- **/src**: Código fuente.
- **/dist**: Archivos compilados.
- **/img**: Recursos estáticos (imágenes).

## Cómo compilar y ejecutar
1. **Compilar**  
   Utiliza Webpack para empaquetar el código.  
   Ejecuta el siguiente comando:
   ```sh
   npm run build
   ```
   La configuración se encuentra en `webpack.config.mjs`.

2. **Ejecutar**  
   Inicia el microservicio ejecutando:
   ```sh
   npm run start
   ```
   El servidor se ejecuta en el puerto 3001.

   la lista con los enlaces sale en cuento ejecutas el comando 

   ![alt text](image.png)

   3. **layaouts**
   El proyecto apenas ha recibido cambios a traves del css.
   los 4 layouts esta en el mismo index.html tan solo hay que actualizar el desde el inspecto 

   layaouts 1

    ![alt text](image-2.png)

   layaouts 2

    ![alt text](image-3.png)

   layaouts 3

    ![alt text](image-4.png)

   layaouts 4

   ![alt text](image-1.png)
