import styled from "styled-components";
import { BadgeWrapper, ButtonWrapper, ImageWrapper } from "../../components/shared";

export const Image = styled.img`
  ${ImageWrapper}
  max-width: 400px;
  box-shadow: -1px -1px 10px rgba(255, 255, 255, 0.5);
  margin: 0 auto;
`;

export const Content = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 6rem;
  padding-top: 3rem;

  @media screen and (max-width: 852px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: 600;
`;

export const Text = styled.p`
  font-size: 1rem;
  padding: 1rem 0;

  ${({ price }) => {
    if (price) {
      return `
        font-size: 1.3rem;
        font-weight: 500;
			`;
    }
  }}
`;

export const StyledButton = styled.button`
  ${ButtonWrapper}
  margin-top: 10px;
`;

export const Badge = styled.div`
  ${BadgeWrapper}
`;

export const SelectBox = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;

  > select {
    border-radius: 30px;
    padding: 0 7px 0 10px;
    outline: none;
    cursor: pointer;
  }
`;
