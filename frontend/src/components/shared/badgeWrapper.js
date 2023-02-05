import { css } from "styled-components";
import { DisplayCenter } from "./displayCenter";

export const BadgeWrapper = css`
  ${DisplayCenter}
  width: max-content;
  height: max-content;
  padding: 8px 15px;
  background-color: #9ba17bdb;
  border-radius: 30px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;

  ${({ success, error }) => {
    if (success) {
      return `
        background-color: #198754;
      `;
    }
    if (error) {
      return `
        background-color: #dc3545;
      `;
    }
  }}
`;
