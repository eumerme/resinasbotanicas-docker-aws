import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const signinSchema = yup.object().shape({
  email: yup.string().required().email("Insira email válido"),
  password: yup.string().required().min(8, "Insira pelo menos 8 caracteres"),
});

export const signinResolver = { resolver: yupResolver(signinSchema) };
