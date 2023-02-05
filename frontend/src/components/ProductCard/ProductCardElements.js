import styled from "styled-components";
import { ButtonWrapper, ImageWrapper } from "../shared";

export const ProductsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media screen and (max-width: 1380px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1074px) {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  @media screen and (max-width: 771px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const Content = styled.div`
  max-width: 100%;
  min-height: 400px;
  box-shadow: 0 0 10px -2px rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: scale(1.05);
    background-color: #d8cdb1;
  }
`;

export const Image = styled.img`
  ${ImageWrapper}
  margin-bottom: 15px;
`;

export const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 500;
`;

export const Text = styled.p`
  font-size: 1rem;
  padding: 1rem 0;
`;

export const StyledButton = styled.button`
  ${ButtonWrapper}
`;
