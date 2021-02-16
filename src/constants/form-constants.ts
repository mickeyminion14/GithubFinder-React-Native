import * as Yup from 'yup';

export const FormConstants = {
  email: (name: string) =>
    Yup.string().required(`${name} is required`).email('Invalid Email').trim(),
  password: (name: string) =>
    Yup.string()
      .required(`${name} is required`)
      .matches(new RegExp(''), {message: 'Invalid Password'})
      .min(8, `${name} must be atleast 8 characters long`)
      .max(16, `${name} cannot be more than 16 characters long`)
      .trim(),
  loginPassword: (name: string) =>
    Yup.string().trim().required(`${name} is required`),
};
