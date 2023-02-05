import styled from "styled-components";
import { ButtonWrapper, DisplayCenter } from "../shared";

export const Wrapper = styled.div`
  ${DisplayCenter}
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  > p {
    ${DisplayCenter}
    width: max-content;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const Form = styled.form`
  ${DisplayCenter}
  width: 70%;
  flex-direction: column;
  align-items: flex-start;

  > input {
    width: 100%;
    font-size: 18px;
    border: none;
    border-radius: 10px;
    outline: none;
    padding: 10px 15px;
    margin-top: 13px;
    box-shadow: 0 0 9px -4px rgba(0, 0, 0, 0.25);
    background-color: inherit;
    border-bottom: 1px solid #ac3636;
    position: relative;

    &::placeholder {
      color: #868686;
    }

    &:focus {
      border: none !important;
      border-bottom: 1px solid #ac3636 !important;
      border-radius: 10px;
    }
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #cabd89 inset;
  }
`;

export const StyledButton = styled.button`
  ${ButtonWrapper}
  margin-top: 2rem;
`;

export const LinkBox = styled.div`
  ${DisplayCenter}
  margin-top: 32px;
  text-align: center;
`;
