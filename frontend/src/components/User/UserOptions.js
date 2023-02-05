import { BsPerson } from "react-icons/bs";
import { useUserData } from "../../hooks";
import { NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

export function UserOptions() {
  const { dispatch, TYPES } = useUserData();

  return (
    <NavDropdown title={<BsPerson className="icon" />} id="basic-nav-dropdown">
      <LinkContainer to="/profile">
        <NavDropdown.Item>Perfil</NavDropdown.Item>
      </LinkContainer>
      <LinkContainer to="/orderhistory">
        <NavDropdown.Item>Compras</NavDropdown.Item>
      </LinkContainer>
      <NavDropdown.Divider />
      <Link className="dropdown-item" to="/" onClick={() => dispatch({ type: TYPES.userSignout })}>
        Sair
      </Link>
    </NavDropdown>
  );
}
