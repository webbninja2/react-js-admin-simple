// Hidden for simplicity
import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).max(32).required(),
});
