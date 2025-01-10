import { StyledDropdownList } from "./styles";
import { arrowDropDownIcon } from "../../assets";
import { Link } from "react-router-dom";
import { routesConfigs } from "../../configs/routes";

interface IDropdownProps {
  dropdownTitle: string;
  options: Models.DropdownOption[];
}

export function Dropdown({ dropdownTitle, options }: IDropdownProps) {
  return (
    <>
      <li className="navigation-item ">
        <span>{dropdownTitle}</span>

        {options.length > 0 && <img src={arrowDropDownIcon} alt="" />}
      </li>

      <StyledDropdownList className="dropdown-content">
        {options.map((option, key) => (
          <Link to={routesConfigs.DOCUMENTATIONS} key={key}>
            <li>
              <div className="dropdown-item">
                {option.icon}
                <p className="dropdown-title">{option.title}</p>
              </div>

              <div className="dropdown-item">
                <p className="dropdown-desc">{option.description}</p>
              </div>
            </li>
          </Link>
        ))}
      </StyledDropdownList>
    </>
  );
}
