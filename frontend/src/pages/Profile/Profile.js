import { Form, StyledButton, Wrapper } from "../../components";
import { DisplayCenter, Message, Top } from "../../components/shared";
import styled from "styled-components";
import { formFormater } from "../../utils";
import { useUserData } from "../../hooks";
import { useMutation, useQuery } from "react-query";
import { useForm } from "react-hook-form";
import { updateProfileResolver } from "../../schemas";
import { userApi } from "../../services/userApi";
import { ThreeDots } from "react-loader-spinner";
/* import { useEffect } from "react"; */
import { toast } from "react-toastify";
import { FaRegEdit } from "react-icons/fa";

export function Profile() {
  const {
    state: { userData },
  } = useUserData();
  const { data: user } = useQuery("profile", async () => userApi.getUser(userData.email));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(updateProfileResolver);

  const { isLoading /* isSuccess, error, mutate */ } = useMutation(async (formData) => userApi.updateProfile(formData));

  const submit = async (data) => {
    toast("Em breve! 👀");
    /*     const body = {
      ...data,
      id: userData.userId,
    };

    mutate(formFormater.signup(body)); */
  };

  /*  useEffect(() => {
    if (error) toast.error(error.response.data.message);

    if (isSuccess) {
      toast.success("Informações atualizadas com sucesso");
    }
  }, [error, isSuccess]); */

  return (
    <>
      {user && (
        <>
          <Top>Olá, {userData.name} 🤍</Top>
          <Info>
            <p>🚨 Funcionalidade em construção!! 🚨</p>
            <div>
              <FaRegEdit /> Aqui você pode atualizar seus dados, basta clicar sobre o campo desejado :)
            </div>
          </Info>
          <Wrapper>
            <Form onSubmit={handleSubmit(submit)}>
              <input
                type="text"
                placeholder="Nome"
                defaultValue={user?.name}
                {...register("name")}
                disabled={isLoading}
              />
              {errors.name && <Message formError>{errors.name.message}</Message>}

              <input
                type="email"
                placeholder="Email"
                defaultValue={user?.email}
                {...register("email")}
                disabled={isLoading}
              />
              {errors.email && <Message formError>{errors.email.message}</Message>}

              <input
                type="text"
                placeholder="CPF"
                defaultValue={formFormater.editCpf(user?.cpf)}
                {...register("cpf")}
                disabled={isLoading}
              />
              {errors.cpf && <Message formError>{errors.cpf.message}</Message>}

              <input
                type="text"
                placeholder="Celular"
                defaultValue={formFormater.editPhone(user?.phone)}
                {...register("phone")}
                disabled={isLoading}
              />
              {errors.phone && <Message formError>{errors.phone.message}</Message>}

              <input type="password" placeholder="Senha" {...register("password")} disabled={isLoading} />
              {errors.password && <Message formError>{errors.password.message}</Message>}

              <input
                type="password"
                placeholder="Repita a senha"
                {...register("confirmPassword")}
                disabled={isLoading}
              />
              {errors.confirmPassword && <Message formError>{errors.confirmPassword.message}</Message>}

              <StyledButton type="submit" disabled={isLoading}>
                {isLoading && <ThreeDots color="#ffffff" height={13} width={51} />}
                {!isLoading && <>{"Salvar"}</>}
              </StyledButton>
            </Form>
          </Wrapper>
        </>
      )}
    </>
  );
}

const Info = styled.div`
  ${DisplayCenter}
  width: max-content;
  font-size: 1.3rem;
  margin-bottom: 2rem;
  gap: 0.5rem;

  flex-direction: column;
  align-items: flex-start;
  > p {
    font-size: 1.5rem;
    padding-bottom: 2rem;
    font-weight: 500;
  }
`;
