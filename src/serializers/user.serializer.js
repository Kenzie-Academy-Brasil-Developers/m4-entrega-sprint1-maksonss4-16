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
  is_adm: yup.boolean().required(),
  created_on: yup
    .date()
    .default(() => new Date())
    .notRequired(),
  updated_on: yup
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
  is_adm: yup.boolean().notRequired(),
  created_on: yup.date().notRequired(),
  updated_on: yup.date().notRequired(),
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
  updated_on: yup
    .date()
    .transform(() => new Date())
    .default(() => new Date())
    .notRequired(),
});
