
import request from 'supertest';
import app from './app';

describe('GET /tareas', () => {
  test('debe responder con estado 200 y una lista vacía', async () => {
    const respuesta = await request(app).get('/tareas');

    expect(respuesta.status).toBe(200);
    expect(respuesta.body).toEqual([]);
  });
});
