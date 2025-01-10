import styled from "styled-components";

export const StyledDropdownList = styled.ul`
  display: none;
  position: absolute;
  right: 0;
  top: 100%;

  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  background-color: #ffffff;
  min-width: 23.785em;

  li {
    display: flex;
    flex-direction: column;
    gap: 0.125em;
    padding: 1em 0.5em;

    border-bottom: 1px solid #d9d9d9;

    .dropdown-item {
      display: flex;
      align-items: flex-start;
      gap: 0.5em;

      svg {
        fill: #a7b5c0;
        font-size: 1.5em;
      }

      .dropdown-title {
        color: #828e97;
        font-size: 1.125em;
        line-height: 1.5em;
        font-weight: 500;
        font-style: normal;
      }
      .dropdown-desc {
        color: #6b7f8e;
        word-wrap: break-word;
        width: 100%;
        padding-left: calc(1.5em + 0.5em);
        font-size: 0.9875em;
        font-weight: 400;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
      }

      &:last-child {
        svg {
          opacity: 0;
        }
      }
    }

    &:hover {
      background-color: #e3e9ef;
    }
  }
`;
