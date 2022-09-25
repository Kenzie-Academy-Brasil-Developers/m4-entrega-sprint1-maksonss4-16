import * as yup from "yup";

export const createSessionSerializer = yup.object().shape({
  email: yup.string().email().notRequired(),
  password: yup.string().notRequired(),
});
