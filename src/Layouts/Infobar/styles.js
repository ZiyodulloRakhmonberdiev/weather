import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;
`;
export const Logo = styled.div`
  font-weight: bold;
`;
export const InfoContainer = styled.div`
  display: flex;
  align-items: end;
  gap: 1rem;
  align-self: end;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;
  position: relative;
  .weather {
    transform: translateY(8px);
    display: flex;
    align-items: start;
    font-size: 4rem;
    font-weight: bold;
    font-family: "Rubik", serif;
    span {
      margin-top: 0.5rem;
      font-size: 2rem;
    }
  }
  .city__wrapper {
    display: flex;
    align-items: end;
    gap: 1rem;
  }
  .city__name {
    display: flex;
    flex-direction: column;
    h4 {
      font-size: 1.5rem;
    }
    p {
      @media only screen and (max-width: 350px) {
        font-size: 12px;
      }
    }
  }
  .city__img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    img {
      width: 70px;
      transform: translateY(10px);
    }
  }
  @media only screen and (max-width: 800px) {
    margin: 4rem 0;
    align-self: center;
  }
  @media only screen and (max-width: 400px) {
    align-items: center;
    justify-content: center;
    row-gap: 0;
    column-gap: 1rem;
    padding: 0 10px;
  }
`;
