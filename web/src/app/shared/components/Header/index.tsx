import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { StyledHeader } from "./styles";

export function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="" />
      <ul>
        <Link to={"#"}>
          <li>Início</li>
        </Link>
        <Link to={"#"}>
          <li>Front-end</li>
        </Link>
        <Link to={"#"}>
          <li>Back-end</li>
        </Link>
        <Link to={"#"}>
          <li>Mobile</li>
        </Link>
        <Link to={"#"}>
          <li>SQL</li>
        </Link>
        <Link to={"#"}>
          <li>Configurações</li>
        </Link>
      </ul>
    </StyledHeader>
  );
}
