import React, { useState } from "react";
import moment from "moment";
import "./App.css";
import { data } from "./dummy/data";
import {
  AppContainer,
  ContainerMain,
  ContainerSidebar,
  Logo,
  InfoContainer,
  Content,
  CitiesList,
  CitiesItem,
  WeatherInfo,
  WeatherItem,
  Hr,
  Form,
  Input,
  Button,
} from "./styles";

function App() {
  const url = "https://api.openweathermap.org/data/2.5/weather";
  const api_key = "cf75f18af860230d8ee7c926c04aac33";
  const [cityName, setCityName] = useState("");
  const [cityData, setCityData] = useState({});
  const getSimpleData = (data) => {
    setCityData(data);
  };
  const getData = (e) => {
    fetch(`${url}?q=${cityName}&units=metric&appid=${api_key}`)
      .then((res) => res.json())
      .then((res) => {
        getSimpleData(res);
      });
  };
  return (
    <AppContainer>
      <ContainerMain>
        <Logo>the.weather</Logo>
        <InfoContainer>
          <div className="weather">
            {cityData?.main ? Math.round(cityData?.main?.temp) : ""}
            <span>{cityData?.main ? "°" : ""}</span>
          </div>
          <div className="city__wrapper">
            <div className="city__name">
              <h4>{cityData?.name || "Search city"}</h4>
              <p>{moment().format("MMMM Do YYYY")}</p>
            </div>
          </div>
        </InfoContainer>
      </ContainerMain>
      <ContainerSidebar>
        <Content>
          <Form
            onSubmit={(e) => {
              getData();
              e.preventDefault();
            }}
          >
            <Input
              value={cityName}
              placeholder="Another location"
              onChange={(e) => setCityName(e.target.value)}
            />
            <Button type="submit">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.7388 2C17.1088 2 21.4768 6.368 21.4768 11.738C21.4768 14.2715 20.5045 16.5823 18.9134 18.3165L22.0442 21.4407C22.3372 21.7337 22.3382 22.2077 22.0452 22.5007C21.8992 22.6487 21.7062 22.7217 21.5142 22.7217C21.3232 22.7217 21.1312 22.6487 20.9842 22.5027L17.8156 19.343C16.1488 20.6778 14.0354 21.477 11.7388 21.477C6.36876 21.477 1.99976 17.108 1.99976 11.738C1.99976 6.368 6.36876 2 11.7388 2ZM11.7388 3.5C7.19576 3.5 3.49976 7.195 3.49976 11.738C3.49976 16.281 7.19576 19.977 11.7388 19.977C16.2808 19.977 19.9768 16.281 19.9768 11.738C19.9768 7.195 16.2808 3.5 11.7388 3.5Z"
                  fill="#000"
                />
              </svg>
            </Button>
          </Form>
          <CitiesList>
            {data?.map((city) => (
              <CitiesItem
                type="button"
                key={city?.id}
                onClick={() => {
                  setCityName(city?.title);
                  getData();
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
              <span>{cityData?.main ? cityData?.weather[0]?.main : ""}</span>
            </WeatherItem>
            <WeatherItem>
              <label>Humidity</label>
              <span>{cityData?.main?.humidity}%</span>
            </WeatherItem>
            <WeatherItem>
              <label>Wind</label>
              <span>{cityData?.wind?.speed}m/s</span>
            </WeatherItem>
            <WeatherItem>
              <label>Pressure</label>
              <span>{cityData?.main?.pressure}hPa</span>
            </WeatherItem>
          </WeatherInfo>
          <Hr />
        </Content>
      </ContainerSidebar>
    </AppContainer>
  );
}

export default App;
