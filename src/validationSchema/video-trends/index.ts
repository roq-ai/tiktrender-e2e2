import * as yup from 'yup';

export const videoTrendValidationSchema = yup.object().shape({
  video_id: yup.string().nullable().required(),
  trend_id: yup.string().nullable().required(),
});
