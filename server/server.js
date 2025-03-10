import path from 'path';
import { fileURLToPath } from 'url';
import fastify from 'fastify';
import fastifyStatic from '@fastify/static';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = fastify({ logger: true });

app.register(fastifyStatic, {
  // Actualiza la ruta para que apunte a c:\Users\santi\Documents\actividad10_js\client\dist
  root: path.join(__dirname, '..', 'client', 'dist'),
  prefix: '/',
});

app.get('/', async (req, reply) => {
  return reply.sendFile('index.html');
});

const start = async () => {
  try {
    await app.listen({ port: 3001, host: '0.0.0.0' });
    app.log.info('Servidor corriendo en http://localhost:3001');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();