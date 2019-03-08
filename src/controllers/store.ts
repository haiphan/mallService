import { Router, Request, Response } from 'express';
const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  const stores = [{s1: 'store1'}, {s1: 'store1'}];
  res.json(stores);
});

router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Hello, ${id}`);
});

router.post('/', (req: Request, res: Response) => {
  const {name} = req.body;
  console.log('nis', name);
  res.send({status: 'ok'});
});

export const StoreController: Router = router;
