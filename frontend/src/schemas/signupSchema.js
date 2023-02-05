import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const cpfPattern = "[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}";
export const phonePattern = "([1-9]{2})? ?(?:[2-8]|9[1-9])[0-9]{3}-?[0-9]{4}";
export const requiredField = "Campo obrigatório";

const signupSchema = yup.object().shape({
  name: yup.string().required(requiredField),
  email: yup.string().required(requiredField).email("Insira um email válido"),
  password: yup.string().required(requiredField).min(8, "Insira pelo menos 8 caracteres"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais")
    .required(requiredField),
  cpf: yup.string().required(requiredField).matches(cpfPattern, "Insira seu CPF"),
  phone: yup.string().required(requiredField).matches(phonePattern, "Insira seu celular incluindo o DDD"),
});

export const signupResolver = { resolver: yupResolver(signupSchema) };
