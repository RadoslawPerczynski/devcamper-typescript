import express, { Request, Response, NextFunction } from 'express';
import { bootcampController } from '../controllers/bootcampsController.controller';
const router = express.Router();

// router.route('/').get(getAllBootcamps).post(createBootcamp);
router
  .route('/')
  .get(bootcampController.getAllBootcamps)
  .post(bootcampController.createBootcamp);

router
  .route('/:id')
  .get(bootcampController.getBootcamp)
  .put(bootcampController.updateBootcamp)
  .delete(bootcampController.deleteBootcamp);

export { router as bootcampsRouting };
