import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 1200px;
  margin: 6rem auto;
  display: flex;
  justify-content: space-between;
  position: relative;
  background: rgb(58, 150, 208);
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background: linear-gradient(
    90deg,
    rgba(58, 150, 208, 1) 0%,
    rgba(174, 205, 225, 1) 100%
  );
  @media only screen and (max-width: 1000px) {
    margin: 0 auto;
  }
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Shadow = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
`;
