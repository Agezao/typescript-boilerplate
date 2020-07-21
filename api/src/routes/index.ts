import express from 'express';
import HomeRoutes from './home.route';

const router = express.Router();

router.use('/', HomeRoutes);

router.get(`/*`, (_req, res: express.Response) => {
  res.status(404).send('Route not found')
});

export default router;
