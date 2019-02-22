import { Router, Request, Response } from 'express';
const router: Router = Router();
router.get('/', (req: Request, res: Response) => {
  res.send('Hello kittei!');
});

router.get('/:name', (req: Request, res: Response) => {
  const { name } = req.params;
  res.send(`Hello, ${name}`);
});

export const HelloController: Router = router;
