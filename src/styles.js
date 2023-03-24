import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 1200px;
  margin: 6rem auto;
  display: flex;
  justify-content: space-between;
  background: rgb(58, 150, 208);
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

export const ContainerSidebar = styled.div`
  position: relative;
  padding: 20px 30px 20px 30px;
  background-color: #336488;
  max-width: 400px;
  width: 25vw;
  @media only screen and (max-width: 1000px) {
    width: 35vw;
    padding-right: 50px;
  }
  @media only screen and (max-width: 800px) {
    width: 80vw;
    margin: 0 auto;
    max-width: inherit;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 0;
  }
  @media only screen and (max-width: 400px) {
    padding: 10px;
    padding-right: 20px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
  .weather {
    display: flex;
    align-items: start;
    font-size: 4rem;
    font-weight: bold;
    font-family: "Rubik";
    span {
      margin-top: 0.5rem;
      font-size: 2rem;
    }
  }
  .city__wrapper {
    display: flex;
  }
  .city__name {
    display: flex;
    flex-direction: column;
    h4 {
      font-size: 1.5rem;
    }
  }
  .weather__details {
    color: #fff;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
    padding-left: 1rem;
  }
`;
export const CitiesList = styled.div`
  width: 100%;
  height: 200px;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 2rem;
  &::-webkit-scrollbar {
    width: 1em;
  }
  &::-webkit-scrollbar-track {
    background-color: #326c91;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #285470;
  }
`;
export const CitiesItem = styled.button`
  border: none;
  background-color: transparent;
  color: #a5cbe2;
  font-size: 14px;
  padding: 1rem 1rem;
  cursor: pointer;
  width: 90%;
  text-align: left;
  &:hover {
    transition: all 0.3s ease 0s;
    background-color: #285470;
    border-radius: 3px;
    color: #fff;
  }
`;

export const Hr = styled.div`
  background-color: #a5cbe2;
  height: 1px;
  margin-left: 1rem;
`;

export const WeatherInfo = styled(CitiesList)`
  margin-top: 0;
  overflow: hidden;
  margin-bottom: 0;
  padding-bottom: 0;
  height: auto;
`;
export const WeatherItem = styled(CitiesItem)`
  display: flex;
  justify-content: space-between;
  padding-right: 0;
  width: 100%;
  cursor: auto;
  &:hover {
    background-color: transparent;
    color: #a5cbe2;
  }
`;
export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 7px;
  margin-left: 20px;
  border-bottom: 1px solid #a5cbe2;
`;

export const Input = styled.input`
  background-color: transparent;
  padding: 1rem 1rem 0 0;
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  &::placeholder {
    color: #a5cbe2;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #f3f3f4;
  cursor: pointer;
  outline: none;
  @media only screen and (max-width: 400px) {
    width: 50px;
    height: 50px;
  }
`;

export const ContainerMain = styled.div`
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Logo = styled.div`
  font-weight: bold;
`;
export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  align-self: end;
  flex-wrap: wrap;
  justify-content: center;
  .weather {
    display: flex;
    align-items: start;
    font-size: 4rem;
    font-weight: bold;
    font-family: "Rubik";
    span {
      margin-top: 0.5rem;
      font-size: 2rem;
    }
  }
  .city__wrapper {
    display: flex;
  }
  .city__name {
    display: flex;
    flex-direction: column;
    h4 {
      font-size: 1.5rem;
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
  }
`;
