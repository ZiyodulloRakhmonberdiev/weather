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
import tashkent from "./Assets/images/tashkent.jpg";
import andijan from "./Assets/images/andijan.jpg";
import namangan from "./Assets/images/namangan.jpg";
import fergana from "./Assets/images/fergana.jpg";
import jizzakh from "./Assets/images/jizzakh.jpg";
import navoiy from "./Assets/images/navoiy.jpg";
import urgench from "./Assets/images/urgench.jpg";
import bukhara from "./Assets/images/bukhara.jpg";
import samarkand from "./Assets/images/samarkand.jpg";
import qashqadaryo from "./Assets/images/qashqadaryo.jpg";
import sirdaryo from "./Assets/images/sirdaryo.jpg";
import termez from "./Assets/images/termez.jpg";
import karakalpakstan from "./Assets/images/karakalpakstan.jpg";

function App() {
  const state = useSelector((state) => state);
  const [cityName, setCityName] = useState("");
  const [region, setRegion] = useState("");
  const { weather, loading, error } = state;
  const currentWeather = Math.round(weather?.main?.temp);

  return (
    <AppContainer
      style={{
        backgroundImage: `url(${
          region === "tashkent"
            ? tashkent
            : region === "andijan"
            ? andijan
            : region === "namangan"
            ? namangan
            : region === "fergana"
            ? fergana
            : region === "jizzakh"
            ? jizzakh
            : region === "navoiy"
            ? navoiy
            : region === "qashqadaryo"
            ? qashqadaryo
            : region === "sirdaryo"
            ? sirdaryo
            : region === "bukhara"
            ? bukhara
            : region === "samarkand"
            ? samarkand
            : region === "urgench"
            ? urgench
            : region === "termez"
            ? termez
            : region === "karakalpakstan"
            ? karakalpakstan
            : currentWeather <= -10 && currentWeather > -100
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
        setRegion={setRegion}
      />
    </AppContainer>
  );
}

export default App;
