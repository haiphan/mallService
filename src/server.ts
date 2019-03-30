import express from 'express';
import bodyParser from 'body-parser';
import {ShoppingCenterController, StoreController, OfferController} from './controllers';


const {PORT} = process.env;
const port: number = PORT ? Number(PORT) : 3000;
const app: express.Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/stores', StoreController);
app.use('/offers', OfferController);
app.use('/shoppingcenter', ShoppingCenterController);

app.listen(port, () =>
  console.log(`Listening at http://localhost:${port}/`)
);