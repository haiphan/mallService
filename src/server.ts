import express from 'express';
import bodyParser from 'body-parser';
import {HelloController, StoreController} from './controllers';


const {PORT} = process.env;
const port: number = PORT ? Number(PORT) : 3000;
const app: express.Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/hello', HelloController);
app.use('/stores', StoreController);

app.listen(port, () =>
  console.log(`Listening at http://localhost:${port}/`)
);