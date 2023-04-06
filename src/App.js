import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Infobar from "./Layouts/Infobar/app";
import Sidebar from "./Layouts/Sidebar/app";
import { AppContainer, Shadow } from "./styles";
import verycold from "./Assets/images/verycold.jpg";
import cold from "./Assets/images/cold.jpg";
import warm from "./Assets/images/warm.jpg";
import warmer from "./Assets/images/warmer.jpg";
import hot from "./Assets/images/hot.jpg";
function App() {
  const state = useSelector((state) => state);
  const [cityName, setCityName] = useState("");
  const { weather, loading, error } = state;
  const currentWeather = Math.round(weather?.main?.temp);

  return (
    <AppContainer
      style={{
        backgroundImage: `url(${
          currentWeather <= -10 && currentWeather > -100
            ? verycold
            : currentWeather <= 0 && currentWeather > -10
            ? cold
            : currentWeather <= 10 && currentWeather > 0
            ? warm
            : currentWeather <= 20 && currentWeather > 10
            ? warmer
            : currentWeather <= 100 && currentWeather > 20
            ? hot
            : "gradient"
        })`,
      }}
    >
      <Shadow />
      <Infobar weather={weather} loading={loading} error={error} />
      <Sidebar
        weather={weather}
        setCityName={setCityName}
        cityName={cityName}
      />
    </AppContainer>
  );
}

export default App;
