
import express from 'express';

const app = express();

app.use(express.json());

interface Tarea {
  id: number;
  titulo: string;
}

const tareas: Tarea[] = [];

app.get('/tareas', (req, res) => {
  res.status(200).json(tareas);
});


app.post('/tareas', (req, res) => {
  const { titulo } = req.body;

  if (typeof titulo !== 'string' || titulo.trim() === '') {
    return res.status(400).json({
      error: 'El título de la tarea es obligatorio'
    });
  }

  const nuevaTarea: Tarea = {
    id: tareas.length + 1,
    titulo: titulo.trim()
  };

  tareas.push(nuevaTarea);

  return res.status(201).json(nuevaTarea);
});


export default app;
