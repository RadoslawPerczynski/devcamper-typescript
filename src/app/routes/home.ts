import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();

const add = (a: number, b: number): number => {
  return a + b;
};

/* GET home page. */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
  // res.render('index', { title: 'HOMEPAGE' });
  console.log(add(4, 10));
  res.send('THIS IS HOMEPAGE');
});

// module.exports = router;
export { router as homeRouter };
