import * as yup from 'yup';

export const hashtagValidationSchema = yup.object().shape({
  tag: yup.string().required(),
  video_id: yup.string().nullable().required(),
});
