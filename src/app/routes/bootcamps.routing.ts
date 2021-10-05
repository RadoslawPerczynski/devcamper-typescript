import express, { Request, Response, NextFunction } from 'express';
import {
  createBootcamp,
  deleteBootcamp,
  getAllBootcamps,
  getBootcamp,
  updateBootcamp,
} from '../controllers/bootcampsController.controller';
const router = express.Router();

router.route('/').get(getAllBootcamps).post(createBootcamp);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

export { router as bootcampsRouting };
