import express from 'express';
import {HelloController} from './controllers';

const app: express.Application = express();
const {PORT} = process.env;
const port: number = PORT ? Number(PORT) : 3000;
app.use('/hello', HelloController);
app.listen(port, () =>
  console.log(`Listening at http://localhost:${port}/`)
);