require('./db/db.js');

const express = require('express');
const morgan = require('morgan');
// const admin = require('firebase-admin');

const router = require('./api');
const { logger } = require('./utils/logger');
const { errorHandler } = require('./middleware/error-handler');
// const serviceAccount = require('../firebase-credentials.json');

// Create a new express application instance
const app = express();

// The port the express app will listen on
const port = process.env.PORT || 8081;

logger.info('🤖 Initializing middleware');

app.use(morgan('tiny', { stream: logger.stream }));
app.use('/', router);
app.use(errorHandler);

// this v is supposed to automatically append body to req. req.body. But not working.
app.use(express.json());

// Serve the application at the given port
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    logger.info(`🎧 Listening at http://localhost:${port}/`);
  });
}
