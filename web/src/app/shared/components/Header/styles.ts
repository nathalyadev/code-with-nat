import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  background-color: #ffffff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1em 1.875em;

  .navigation {
    display: flex;
    gap: 1.875em;

    .navigation-item {
      color: #000000;

      display: flex;
      align-items: center;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  position: relative;
`;
