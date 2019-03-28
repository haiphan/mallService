import { Router, Request, Response } from 'express';
import {StoreInterface} from '../models/store'
const router: Router = Router();
const allStores: StoreInterface[] = require('./storeData');

router.get('/', (req: Request, res: Response) => {
  return res.json(allStores);
});

router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const store: StoreInterface|undefined = allStores.find(s => s.id === id);
  if (!store) {
    res.status(404);
    return res.json({error: "Not found"});
  }
  res.json(store);
});

export const StoreController: Router = router;
