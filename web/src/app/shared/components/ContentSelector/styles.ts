import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledContentSelector = styled(Link)`
  border: 1px solid #dddddd;
  border-radius: 6px;
  padding: 0.5em;

  li {
    display: flex;
    align-items: center;
    gap: 0.5em;

    .image {
      height: 2.5em;
      width: 2.5em;

      background-color: var(--gray);
      border-radius: 4px;
    }
    p {
      min-width: 18ch;
    }
  }
`;
