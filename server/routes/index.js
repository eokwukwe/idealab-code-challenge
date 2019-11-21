import { Router } from 'express';

import userRoute from './user';

const mainAppRouter = Router();

mainAppRouter.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Welcome to IdeaLab API'
  });
});

mainAppRouter.use('/', userRoute);

export default mainAppRouter;
