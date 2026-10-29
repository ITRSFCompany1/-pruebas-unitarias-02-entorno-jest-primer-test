
import request from 'supertest';
import app from './app';

describe('GET /tareas', () => {
  test('debe responder con estado 200 y una lista vacía', async () => {
    const respuesta = await request(app).get('/tareas');

    expect(respuesta.status).toBe(200);
    expect(respuesta.body).toEqual([]);
  });
});

describe('POST /tareas', () => {
  test('Caso feliz: debe crear una tarea correctamente', async () => {
    const respuesta = await request(app)
      .post('/tareas')
      .send({ titulo: 'Estudiar Jest' });

    expect(respuesta.status).toBe(201);
    expect(respuesta.body).toEqual({
      id: 1,
      titulo: 'Estudiar Jest'
    });
  });

  test('Caso de error: debe rechazar una tarea sin título', async () => {
    const respuesta = await request(app)
      .post('/tareas')
      .send({});

    expect(respuesta.status).toBe(400);
    expect(respuesta.body).toEqual({
      error: 'El título de la tarea es obligatorio'
    });
  });
});
