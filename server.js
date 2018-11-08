import express from 'express';
import dotenv from 'dotenv';
import { mLog } from './lib/utils';
import { db as database } from './models';
import routes from './routes';

dotenv.config();
const port = parseInt(process.argv[2], 10) || process.env.PORT;

const app = express();

(async () => {
  try {
    await database.authenticate();
    if (process.env.APP === 'development') {
      database.sync({ force: process.env.DATABASE_SYNC_FORCE });
    }

    app.use('/api', routes);

    app.listen(port, (err) => {
      if (err) {
        throw err;
      } else {
        mLog(`server is running on port: ${port}`, 'cyan');
      }
    });
  } catch (e) {
    throw e;
  }
})();
