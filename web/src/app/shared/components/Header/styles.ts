import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  background-color: #ffffff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0em 1.875em;

  .navigation {
    display: flex;
    align-items: center;
    gap: 1.875em;

    .navigation-item {
      color: #000000;

      display: flex;
      align-items: center;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  position: relative;
  padding: 1em 0;

  &:hover .dropdown-content {
    display: block;
  }
`;
