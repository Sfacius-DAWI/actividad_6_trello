import connection from '../db.js';

export default async function boxesRoutes(app, opts) {
  app.get('/boxes', async (req, reply) => {
    try {
      // Asume que en MySQL tienes una tabla llamada "boxes" con al menos los campos "id" y "titulo"
      const [rows] = await connection.execute('SELECT id, titulo FROM boxes');
      return rows;
    } catch (error) {
      reply.code(500).send({ error: error.message });
    }
  });
}