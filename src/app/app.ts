import express, { Application } from 'express';

// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/home');
// var usersRouter = require('./routes/users');
// var usersRouter = require('./routes/users');
// var indexRouter = require('./routes/home');
import { appRouting } from './appRouting.routing';

// ==================
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
// app.use(function (req: Request, res: Response, next: NextFunction) {
//   next(createError(404));
// });

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

const app: Application = express();

// app.use(function timeLog(req, res, next) {
//   console.log(req.originalUrl);
//   console.log('Middleware 1 mount to app directly: ', Date.now());
//   next();
// });

app.use('/', appRouting);

export { app };
