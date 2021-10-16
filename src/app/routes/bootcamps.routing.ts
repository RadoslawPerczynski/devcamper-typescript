import express, { Request, Response, NextFunction } from 'express';
import { bootcampController } from '../controllers/bootcampController.controller';
import { asyncHandler } from '../middleware/asyncHandler';
const router = express.Router();

router
  .route('/')
  .get(asyncHandler(bootcampController.getAllBootcamps))
  .post(asyncHandler(bootcampController.createBootcamp));

router
  .route('/:id')
  .get(bootcampController.getBootcamp)
  .put(bootcampController.updateBootcamp)
  .delete(bootcampController.deleteBootcamp);

export { router as bootcampsRouting };
