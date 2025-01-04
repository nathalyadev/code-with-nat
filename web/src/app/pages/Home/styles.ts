import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
`;

export const StyledMain = styled.main`
  width: 100%;
  flex: 1;
  padding: 1.875em 3.125em 0 3.125em;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1em;

  .main-content {
    background: #ffffff;

    width: 100%;
    padding: 1.75em 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 1.875em;

    h1 {
      text-transform: uppercase;
      font-size: 1.875em;
      font-weight: 500;
      font-style: normal;
    }
    .container {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      gap: 1.875em;

      width: 80%;
      flex: 1;

      p {
        font-size: 1.125em;
        font-weight: 500;
        font-style: normal;
        color: #47494a;
        opacity: 0.8;
      }
      .items {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.875em;
        width: 100%;
      }
      .helper-text {
        display: flex;
        flex-direction: column;
        gap: 0.25em;
      }
    }
  }
`;
