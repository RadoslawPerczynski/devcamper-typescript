import express from 'express';
import { bootcampsRouting } from './routes/bootcamps.routing';
import morgan from 'morgan';
import { UrlConstants } from './urlConstants.constants';

const router = express.Router();

router.use(morgan('dev'));

router.use(UrlConstants.bootcamps.getBootcamps, bootcampsRouting);

export { router as appRouting };
