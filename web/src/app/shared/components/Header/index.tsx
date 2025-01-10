import { logo } from "../../assets";
import { StyledLink, StyledNav } from "./styles";
import { Dropdown } from "../Dropdown";
import { dropdownOptions } from "../../constants/options";
import { routesConfigs } from "../../configs/routes";

export function Header() {
  return (
    <StyledNav>
      <img src={logo} alt="" />

      <ul className="navigation">
        <StyledLink to={routesConfigs.HOME}>
          <li className="navigation-item">Início</li>
        </StyledLink>

        <StyledLink to={"#"}>
          <Dropdown
            dropdownTitle="Front-end"
            options={dropdownOptions.frontEnd}
          />
        </StyledLink>

        <StyledLink to={"#"}>
          <Dropdown
            dropdownTitle="Back-end"
            options={dropdownOptions.backEnd}
          />
        </StyledLink>

        <StyledLink to={"#"}>
          <Dropdown dropdownTitle="Mobile" options={dropdownOptions.mobile} />
        </StyledLink>

        <StyledLink to={"#"}>
          <Dropdown dropdownTitle="SQL" options={dropdownOptions.sql} />
        </StyledLink>
      </ul>
    </StyledNav>
  );
}
