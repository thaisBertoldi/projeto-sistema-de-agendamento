import { TfiHome } from "react-icons/tfi";
import { LinkNavBar, NavBarContainer, NavList } from "./NavBar.style";

function NavBar () {
  return (
    <NavBarContainer>
        <NavList>
            <LinkNavBar to="/" ><TfiHome /></LinkNavBar>
            <LinkNavBar to="/list">Consultas</LinkNavBar>
            <LinkNavBar to="/register">Cadastrar consulta</LinkNavBar>
        </NavList>
    </NavBarContainer>
  )
}

export default NavBar;