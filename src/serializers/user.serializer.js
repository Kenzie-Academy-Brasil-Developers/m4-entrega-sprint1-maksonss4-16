import { v4 } from "uuid";
import * as yup from "yup";
import * as bcrypt from "bcryptjs";

export const createUserSerializer = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .transform((recievedValue) => bcrypt.hashSync(recievedValue, 10))
    .required(),
  isAdm: yup.boolean().required(),
  createdOn: yup
    .date()
    .default(() => new Date())
    .notRequired(),
  updatedOn: yup
    .date()
    .default(() => new Date())
    .notRequired(),
  uuid: yup
    .string()
    .transform(() => v4())
    .default(() => v4())
    .notRequired(),
});

export const userWithOutPasswordSerializer = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  isAdm: yup.boolean().notRequired(),
  createdOn: yup.date().notRequired(),
  updatedOn: yup.date().notRequired(),
  uuid: yup.string().notRequired(),
});

export const loginUserSerializer = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const updateUserSerializer = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  password: yup
    .string()
    .transform((recievedValue) => bcrypt.hashSync(recievedValue, 10))
    .notRequired(),
  updatedOn: yup
    .date()
    .transform(() => new Date())
    .default(() => new Date())
    .notRequired(),
});
