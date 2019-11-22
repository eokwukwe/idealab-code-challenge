import { Router } from 'express';
import UserController from '../controllers/user';
import checkEmail from '../middlewares/checkEmail';
import checkConfirmation from '../middlewares/checkConfirmation';
import validateInput from '../middlewares/validateInput';
import PermissionController from '../controllers/permission';
import authentication from '../middlewares/authentication';

const router = Router();

router.post('/user/signup', validateInput, checkEmail, UserController.signup);
router.post('/confirm', UserController.confirm);
router.post('/user/auth', validateInput, checkConfirmation, UserController.login);
router.get('/user/permissions', authentication.authenticate, PermissionController.permissions);

export default router;
