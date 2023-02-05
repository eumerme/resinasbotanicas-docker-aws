import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LinkBox, StyledButton, Wrapper, Form } from "../../components";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { signupResolver } from "../../schemas";
import { Message, Top } from "../../components/shared";
import { useMutation } from "react-query";
import { userApi } from "../../services/userApi";
import { formFormater } from "../../utils";

export function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(signupResolver);

  const { isSuccess, isLoading, error, mutate } = useMutation(async (formData) => userApi.signup(formData));

  const submit = async (data) => {
    mutate(formFormater.signup(data));
  };

  useEffect(() => {
    if (error) toast.error(error.response.data.message);

    if (isSuccess) {
      toast.success("Cadastro realizado com sucesso");
      navigate("/signin");
    }
  }, [error, isSuccess]);

  return (
    <>
      <Top>Cadastre-se</Top>
      <Wrapper>
        <Form onSubmit={handleSubmit(submit)}>
          <input type="text" placeholder="Nome" {...register("name")} disabled={isLoading} />
          {errors.name && <Message formError>{errors.name.message}</Message>}

          <input type="email" placeholder="Email" {...register("email")} disabled={isLoading} />
          {errors.email && <Message formError>{errors.email.message}</Message>}

          <input type="text" placeholder="CPF" {...register("cpf")} disabled={isLoading} />
          {errors.cpf && <Message formError>{errors.cpf.message}</Message>}

          <input type="text" placeholder="Celular" {...register("phone")} disabled={isLoading} />
          {errors.phone && <Message formError>{errors.phone.message}</Message>}

          <input type="password" placeholder="Senha" {...register("password")} disabled={isLoading} />
          {errors.password && <Message formError>{errors.password.message}</Message>}

          <input type="password" placeholder="Repita a senha" {...register("confirmPassword")} disabled={isLoading} />
          {errors.confirmPassword && <Message formError>{errors.confirmPassword.message}</Message>}

          <StyledButton type="submit" disabled={isLoading}>
            {isLoading && <ThreeDots color="#ffffff" height={13} width={51} />}
            {!isLoading && <>{"Cadastrar"}</>}
          </StyledButton>
        </Form>
      </Wrapper>

      <LinkBox>
        <Link to="/signin">Já tem uma conta? Entre agora!</Link>
      </LinkBox>
    </>
  );
}
