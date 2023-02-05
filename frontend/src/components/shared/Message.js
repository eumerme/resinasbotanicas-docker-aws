import styled from "styled-components";
import { DisplayCenter } from "./displayCenter";

export function Message({ children, formError }) {
  return <ContainerML formError={formError}>{children}</ContainerML>;
}

export const ContainerML = styled.div`
  ${DisplayCenter}
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.5rem;
  color: inherit;
  margin-bottom: 1rem;

  ${({ formError }) => {
    if (formError) {
      return `
          font-size: 0.7rem;
          margin-top: 5px;
          color:#dc3545;
          font-weigth: 400;
      `;
    }
  }}
`;
