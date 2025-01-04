import styled from "styled-components";

export const StyledDropdownList = styled.ul`
  position: absolute;
  left: 0;
  top: 1.875em;

  background-color: #ffffff;
  width: 19.6875em;

  li {
    display: flex;
    flex-direction: column;
    gap: 0.125em;
    padding: 1em 0.5em;

    border-bottom: 1px solid #d9d9d9;

    .dropdown {
      display: flex;
      gap: 0.5em;

      svg {
        fill: #a7b5c0;
        width: 1.125em;
      }

      .dropdown-title {
        color: #000000;
      }
      p {
        color: #6b7f8e;
      }

      &:last-child {
        svg {
          opacity: 0;
        }
      }
    }
  }
`;
