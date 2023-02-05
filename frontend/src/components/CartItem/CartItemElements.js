import styled from "styled-components";
import { DisplayCenter, ImageWrapper } from "../shared";

export const Item = styled.div`
  height: max-content;
  display: grid;
  grid-template-columns: 0.8fr 1.7fr 0.8fr 0.5fr;
  align-items: center;

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr 1fr 0.5fr;
    gap: 1rem;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr 1fr;
    place-content: center;
  }
`;

export const ImageBox = styled.div`
  ${DisplayCenter}
  width: 60%;
  border-radius: 10px;
  box-shadow: 0 0 10px -2px rgba(94, 104, 121, 0.3);

  @media screen and (max-width: 750px) {
    grid-row-end: span 2;
  }

  @media screen and (max-width: 500px) {
    width: 70%;
  }

  @media screen and (max-width: 400px) {
    width: 80%;
    grid-row-end: default;
  }

  @media screen and (max-width: 300px) {
    width: 50%;
    place-self: center;
    grid-column-end: span 2;
    grid-row-end: 1;
  }
`;

export const Image = styled.img`
  ${ImageWrapper}
`;

export const InfoBox = styled.div`
  ${DisplayCenter}
  width: 100%;
  justify-content: flex-start;
  height: 100%;
  flex-wrap: wrap;

  @media screen and (max-width: 750px) {
    grid-column-end: span 2;
  }
  @media screen and (max-width: 400px) {
    grid-column-end: default;
  }
  @media screen and (max-width: 300px) {
    justify-content: center;
    text-align: center;
  }
`;

export const Total = styled.div`
  padding-top: 10px;
  font-size: 0.9rem;
`;

export const CountBox = styled.div`
  ${DisplayCenter}
  width: 100%;

  > p {
    padding: 0 0.7rem;
  }

  > button {
    ${DisplayCenter}
    font-size: 1.3rem;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
  }

  @media screen and (max-width: 750px) {
    grid-column-start: 2;
    grid-column-end: 3;
    justify-content: flex-start;
  }

  @media screen and (max-width: 400px) {
    grid-column-start: default;
    grid-column-end: default;
  }

  @media screen and (max-width: 300px) {
    grid-column-start: 1;
    grid-column-end: 1;
  }
`;

export const Icon = styled.div`
  font-size: 1.4rem;
  cursor: pointer;

  @media screen and (max-width: 750px) {
    ${DisplayCenter}
    justify-content: flex-end;

    grid-column-start: 3;
    grid-column-end: 4;
  }

  @media screen and (max-width: 400px) {
    grid-column-start: default;
    grid-column-end: default;
  }

  @media screen and (max-width: 300px) {
    grid-column-start: 2;
    grid-column-end: 2;
  }
`;
