import * as yup from 'yup';

export const startupValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  name: yup.string().required(),
});
