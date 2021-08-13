import express from 'express';
import { bootcampsRouting } from './routes/bootcamps.routing';
import { coursesRouting } from './routes/courses.routing';
const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Global middleware routing time: ', Date.now());
  console.log(req.url);
  next();
});
router.use('/bootcamps', bootcampsRouting);
router.use('/courses', coursesRouting);

export { router as appRouting };
