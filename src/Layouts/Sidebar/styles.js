import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 20px 30px 20px 30px;
  background-color: #336488;
  max-width: 400px;
  width: 25vw;
  z-index: 10;
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
