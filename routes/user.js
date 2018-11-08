import { Router } from 'express';
import User from '../models/user';

const api = Router();

api.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

export default api;
