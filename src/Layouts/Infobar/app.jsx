import moment from "moment";
import { Container, Logo, InfoContainer } from "./styles";
const App = ({ weather, loading, error }) => {
  return (
    <Container>
      <Logo>the.weather</Logo>
      <InfoContainer>
        <div className="weather">
          {weather ? Math.round(weather?.main?.temp) : ""}
          <span>{weather?.main ? "°" : ""}</span>
        </div>
        <div className="city__wrapper">
          <div className="city__name">
            <h4>{weather?.name || "This city was not found"}</h4>
            <p>{moment().format("MMMM Do YYYY")}</p>
          </div>
          <div className="city__img">
            <img
              src={`https://openweathermap.org/img/wn/${
                weather?.weather === undefined ? "" : weather?.weather[0]?.icon
              }@2x.png`}
              alt=""
            />
            <span>{weather?.weather[0]?.main}</span>
          </div>
        </div>
      </InfoContainer>
    </Container>
  );
};

export default App;
