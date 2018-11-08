import { Router } from 'express';

const api = Router();

api.get('/', (req, res) => {
  res.json({ hello: 'express.island' });
});

export default api;
