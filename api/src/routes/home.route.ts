import express from 'express';
import HomeController from '../controllers/home.controller';

const HomeRoutes = express.Router();

HomeRoutes.route('/')
  .get(HomeController.get);

export default HomeRoutes;
