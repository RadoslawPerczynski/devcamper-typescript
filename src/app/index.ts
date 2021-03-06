/**
 * Module dependencies.
 */
import { app } from './app';
import http from 'http';

// LOAD env variables
import { envVariables } from './utils/config';
import { connectDB } from './utils/db';

// Connect to DB
connectDB();

// var debug = require('debug')('test:server');

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(envVariables.PORT || '5000');
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('listening', onListening);
server.on('error', onError);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: any) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  console.log(`Server running on port ${envVariables.PORT}`);
  // var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  // debug('Listening on ' + bind);
}
