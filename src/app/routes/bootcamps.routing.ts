import express, { Request, Response, NextFunction } from 'express';
import { getAllBootcamps } from '../controllers/bootcampsController.controller';
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Bootcamps Time: ', Date.now());
  next();
});

router.get('/', getAllBootcamps);

// router.get('/', function (req: Request, res: Response, next: NextFunction) {
//   // res.render('index', { title: 'HOMEPAGE' });
//   console.log(add(4, 10));
//   res.send('Get all bootcamps homie');
// });

// app.use('/bootcamps', bootcampsRouting);

// app.post('/', function (req, res) {
//   res.send('Got a POST request')
// })

// app.put('/user', function (req, res) {
//   res.send('Got a PUT request at /user')
// })

// app.delete('/user', function (req, res) {
//   res.send('Got a DELETE request at /user')
// })
// app.get('/users/:userId/books/:bookId', function (req, res) {
//   res.send(req.params)
// })
// app.get('/example/b', function (req, res, next) {
//   console.log('the response will be sent by the next function ...')
//   next()
// }, function (req, res) {
//   res.send('Hello from B!')
// })

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

// module.exports = router;

export { router as bootcampsRouting };
