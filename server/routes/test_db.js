import connection from '../db.js';

export default async function testDbRoutes(app, opts) {
  app.get('/db-test', async (req, reply) => {
    try {
      const [rows] = await connection.execute('SELECT 1+1 AS result');
      return rows;
    } catch (error) {
      reply.code(500).send({ error: error.message });
    }
  });
}