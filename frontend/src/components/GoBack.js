import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export function GoBack({ detail }) {
  const navigate = useNavigate();

  return (
    <Wrapper detail>
      <BsFillArrowLeftCircleFill onClick={() => navigate(-1)} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 1.5rem;
  color: #6a5525d6;
  cursor: pointer;
`;
