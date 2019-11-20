import { Router } from 'express';

const mainAppRouter = Router();
mainAppRouter.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Welcome to IdeaLab API'
  })
});


export default mainAppRouter