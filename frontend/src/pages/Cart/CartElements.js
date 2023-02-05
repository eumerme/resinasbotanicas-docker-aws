import styled from "styled-components";
import { ButtonWrapper } from "../../components/shared";

export const MsgContent = styled.div`
  > a {
    text-decoration: underline;
  }
`;

export const ItemsBox = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: 2fr 0.9fr;
  gap: 1.8rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const CartContent = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: -1px -1px 10px rgba(255, 255, 255, 0.5);
`;

export const CheckoutContent = styled.div`
  height: max-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: -1px -1px 10px rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  padding: 1.5rem;

  h1 {
    font-size: 1.1rem;
    font-weight: 500;
  }

  h2 {
    font-size: 1.3rem;
    padding: 1rem 0 1.4rem;
  }
`;

export const StyledButton = styled.button`
  ${ButtonWrapper}
`;
