import * as Yup from 'yup';

export const defaultRegisterFormSchemaShape = {
  firstName: Yup.string().required('error_first_name_is_required'),
  lastName: Yup.string().required('error_last_name_is_required'),
  email: Yup.string()
    .email('error_invalid_email')
    .required('error_required_email'),
  password: Yup.string()
    .min(8, 'error_password_minimum_8_chars')
    .required('error_required_password'),
};

export const feRegisterFormSchemaShape = {
  ...defaultRegisterFormSchemaShape,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'error_passwords_must_match')
    .required('error_confirm_password_is_required'),
  allowExtraEmails: Yup.boolean(),
};
