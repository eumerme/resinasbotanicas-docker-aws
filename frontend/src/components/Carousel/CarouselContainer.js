import styled from "styled-components";

export function CarouselContainer({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  margin-bottom: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px -2px rgba(94, 104, 121, 0.3);

  .carousel-inner {
    border-radius: 10px;
    max-height: 500px;
  }
`;
