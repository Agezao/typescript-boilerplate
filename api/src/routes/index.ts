import express from 'express';
import UsersRoutes from './users.route';

const router = express.Router();

router.get(`/`, (_req: express.Request, res: express.Response) => res.send('Documentation at /api-docs'));

router.use('/users', UsersRoutes);

router.get(`/*`, (_req, res: express.Response) => {
  res.status(404).send('Route not found')
});

export default router;
