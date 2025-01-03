import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
`;

export const StyledMain = styled.main`
  width: 100%;
  flex: 1;
  padding: 0 3.125em;

  display: flex;
  align-items: center;
  justify-content: center;

  .main-content {
    background: #ffffff;
    height: 40%;
    width: 100%;
    padding: 1em 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 0.1em;

    h1 {
      text-transform: uppercase;
    }
  }
`;
