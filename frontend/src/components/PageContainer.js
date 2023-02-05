import styled from "styled-components";

export function PageContainer({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: max-content;
  padding: 3rem 10%;
  padding-top: 120px;
`;
