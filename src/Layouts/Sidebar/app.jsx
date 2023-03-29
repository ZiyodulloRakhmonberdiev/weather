import Searchbar from "../../Components/Searchbar/app";
import { useDispatch } from "react-redux";
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
import { fetchedWeather } from "../../Redux/slices/weatherSlices";

const App = ({ weather, cityName, setCityName, setRegion }) => {
  const dispatch = useDispatch();
  const handleCity = (cityName) => {
    dispatch(fetchedWeather(cityName));
    setRegion(cityName?.toLowerCase());
  };
  // function getCachedData(func) {
  //   let cache = new Map();
  //   return function (x) {
  //     if (cache.has(x)) {
  //       return cache.get(x);
  //       console.log(x);
  //     }
  //     let res = func();
  //     return cache.set(x, res);
  //   };
  // }
  // handleCity = getCachedData(handleCity);
  return (
    <Container>
      <Content>
        <Searchbar
          cityName={cityName}
          setCityName={setCityName}
          setRegion={setRegion}
        />
        <CitiesList>
          {data?.map((city) => (
            <CitiesItem
              key={city?.id}
              onClick={() => {
                setCityName(city?.title.toLowerCase());
                handleCity(city?.title);
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
