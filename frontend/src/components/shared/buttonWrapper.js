import { css } from "styled-components";

export const ButtonWrapper = css`
  width: max-content;
  height: max-content;
  padding: 0.75rem 1.2rem;
  border: 1px solid #a7b656db;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 400ms ease;
  background-color: #ae3e3e;
  color: #ffffff;
  outline: none;
  font-size: 1rem;
  box-shadow: 0 0 10px -2px rgba(94, 104, 121, 0.3);

  &:hover {
    border: 1px solid #3f6555;
    color: #000000;
    background-color: transparent;
  }
`;
