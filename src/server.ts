import express from 'express';
import bodyParser from 'body-parser';
import {ShoppingCenterController, StoreController, OfferController} from './controllers';


const {PORT} = process.env;
const port: number = PORT ? Number(PORT) : 3456;
const app: express.Application = express();

const defaultErrHandler = (req: express.Request, res: express.Response) =>
  res.status(400).json({
    message: 'Failed to process request'
  });
const routes = express.Router();
routes.use('/', defaultErrHandler);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/stores', StoreController);
app.use('/offers', OfferController);
app.use('/shoppingcenter', ShoppingCenterController);
app.use(routes);

app.listen(port, () =>
  console.log(`Listening at http://localhost:${port}/`)
);