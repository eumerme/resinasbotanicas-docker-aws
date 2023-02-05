import styled from "styled-components";
import { GoBack } from "../GoBack";

export function Top({ children }) {
  return (
    <TopBox>
      <Title>{children}</Title>
      <GoBack />
    </TopBox>
  );
}

const TopBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 1.7rem;
  padding-bottom: 3rem;
`;
