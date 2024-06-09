import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('error_invalid_email')
    .required('error_required_email'),
  password: yup.string().required('error_required_password'),
});
