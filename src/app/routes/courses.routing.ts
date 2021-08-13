import express, { Request, Response, NextFunction } from 'express';
import { getAllCourses } from '../controllers/coursesController.controller';
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Courses Time: ', Date.now());
  next();
});

router.get('/', getAllCourses);

export { router as coursesRouting };
