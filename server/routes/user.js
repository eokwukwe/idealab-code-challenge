import { Router } from 'express';
import UserController from '../controllers/user';
import checkEmail from '../middlewares/checkEmail';
import validateInput from '../middlewares/validateInput';

const router = Router();

router.post('/user/signup', validateInput, checkEmail, UserController.signup);

export default router;
