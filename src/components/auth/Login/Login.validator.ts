import * as Yup from 'yup';
import {FormConstants} from '../../../constants/form-constants';

export const LoginValidator = Yup.object({
  email: FormConstants.email('Email'),
  password: FormConstants.loginPassword('Password'),
});
