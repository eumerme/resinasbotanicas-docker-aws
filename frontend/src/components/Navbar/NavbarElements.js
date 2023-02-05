import { Link } from "react-router-dom";
import styled from "styled-components";
import { BadgeWrapper, DisplayCenter } from "../shared";

export const Nav = styled.nav`
  ${DisplayCenter}
  justify-content: space-between;
  width: 100%;
  height: 80px;
  font-size: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  color: #6a5525;
  padding: 0 10%;
  background-color: #b9a46c;
  box-shadow: -1px -1px 10px rgba(255, 255, 255, 0.5);
`;

export const Logo = styled(Link)`
  ${DisplayCenter}
  width: 130px;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  font-family: "Amatic SC", cursive;

  > span {
    font-size: 1.7rem;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  font-size: 1.3rem;

  .icon {
    font-size: 2rem;
  }

  > span {
    margin-left: 1rem;

    &:hover {
      color: #e5d13b;
    }
  }
`;

export const Wrapper = styled.span`
  margin-left: 1rem;
  font-weight: 500;

  > div > div {
    border: none;
    box-shadow: 0 0 9px -4px rgba(0, 0, 0, 0.25);

    .active {
      background-color: #eae6cb !important;
      color: #000000 !important;
    }
    a {
      &:visited {
        background-color: #fbf8e3;
      }
    }
  }
`;

export const Item = styled.div`
  height: 80px;
  font-weight: 500;
  color: #6a5525;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  text-decoration: none;
  position: relative;

  &:hover {
    color: #e5d13b;
  }
`;

export const Badge = styled.div`
  ${BadgeWrapper}
  min-width: 25px;
  padding: 0.5rem;
  border-radius: 50%;
  font-size: 10px;
  font-weight: 600;
  position: absolute;
  right: 0;
  top: 10px;
`;
