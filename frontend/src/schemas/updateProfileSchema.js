import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { requiredField } from "./signupSchema";

const updateProfileSchema = yup.object().shape({
  name: yup.string().required(requiredField),
  email: yup.string().required(requiredField).email("Insira um email válido"),
  /*   password: yup.string().min(8, "Insira pelo menos 8 caracteres"),
  confirmPassword: yup.string().oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  phone: yup.string().required(requiredField).matches(phonePattern, "Insira seu celular incluindo o DDD"), */
});

export const updateProfileResolver = { resolver: yupResolver(updateProfileSchema) };
