import styled from "styled-components";

export const TopBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ product }) => (product ? "flex-end" : "space-between")};
`;
