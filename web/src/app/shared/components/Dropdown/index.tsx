import { IoLogoReact } from "react-icons/io5";
import { StyledDropdownList } from "./styles";

interface IDropdownProps {}

export function Dropdown({}: IDropdownProps) {
  return (
    <StyledDropdownList>
      <li>
        <div className="dropdown">
          <IoLogoReact />
          <p className="dropdown-title">React JS</p>
        </div>

        <div className="dropdown">
          <IoLogoReact />
          <p>Documentações sobre a linguagem</p>
        </div>
      </li>

      <li>
        <div className="dropdown">
          <IoLogoReact />
          <p className="dropdown-title">React JS</p>
        </div>

        <div className="dropdown">
          <IoLogoReact />
          <p>Documentações sobre a linguagem</p>
        </div>
      </li>
    </StyledDropdownList>
  );
}
