import { useState } from "react";
import Searchbar from "../../Components/Searchbar/app";
import { data } from "../../dummy/data";
import {
  Container,
  Content,
  CitiesList,
  CitiesItem,
  WeatherInfo,
  WeatherItem,
  Hr,
} from "./styles";
const App = ({ weather }) => {
  const [cityName, setCityName] = useState("");
  return (
    <Container>
      <Content>
        <Searchbar cityName={cityName} setCityName={setCityName} />
        <CitiesList>
          {data?.map((city) => (
            <CitiesItem
              key={city?.id}
              onClick={() => {
                setCityName(city?.title);
              }}
            >
              {city?.title}
            </CitiesItem>
          ))}
        </CitiesList>
        <Hr />
        <p className="weather__details">Weather Details</p>
        <WeatherInfo>
          <WeatherItem>
            <label>Cloudy</label>
            <span>{weather?.weather[0]?.main}</span>
          </WeatherItem>
          <WeatherItem>
            <label>Humidity</label>
            <span>{weather?.main?.humidity}%</span>
          </WeatherItem>
          <WeatherItem>
            <label>Wind</label>
            <span>{weather?.wind?.speed}m/s</span>
          </WeatherItem>
          <WeatherItem>
            <label>Pressure</label>
            <span>{weather?.main?.pressure}hPa</span>
          </WeatherItem>
        </WeatherInfo>
        <Hr />
      </Content>
    </Container>
  );
};

export default App;
