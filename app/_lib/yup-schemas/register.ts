import * as Yup from 'yup';

export const defaultRegisterFormSchemaShape = {
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
};

export const feRegisterFormSchemaShape = {
  ...defaultRegisterFormSchemaShape,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm password is required'),
  allowExtraEmails: Yup.boolean(),
};
