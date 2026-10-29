
import express from 'express';

const app = express();

app.use(express.json());

app.get('/tareas', (req, res) => {
  res.status(200).json([]);
});

export default app;
