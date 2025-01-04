import { arrowDropDownIcon, logo } from "../../assets";
import { StyledLink, StyledNav } from "./styles";
import { Dropdown } from "../Dropdown";

export function Header() {
  return (
    <StyledNav>
      <img src={logo} alt="" />

      <ul className="navigation">
        <StyledLink to={"#"}>
          <li className="navigation-item">Início</li>
        </StyledLink>
        <StyledLink to={"#"}>
          <li className="navigation-item">
            <span>Front-end</span>
            <img src={arrowDropDownIcon} alt="" />
          </li>

          <Dropdown />
        </StyledLink>

        <StyledLink to={"#"}>
          <li className="navigation-item">Back-end</li>
        </StyledLink>
        <StyledLink to={"#"}>
          <li className="navigation-item">Mobile</li>
        </StyledLink>
        <StyledLink to={"#"}>
          <li className="navigation-item">SQL</li>
        </StyledLink>
        <StyledLink to={"#"}>
          <li className="navigation-item">Configurações</li>
        </StyledLink>
      </ul>
    </StyledNav>
  );
}
