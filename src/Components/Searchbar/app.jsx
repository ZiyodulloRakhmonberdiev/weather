import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchedWeather } from "../../Redux/slices/weatherSlices";
import { Form, Input, Button } from "./styles";

const App = ({ cityName, setCityName }) => {
  const state = useSelector((state) => state);
  const { weather, loading, error } = state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchedWeather(cityName || "Tashkent"));
  }, []);
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(fetchedWeather(cityName));
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
  );
};

export default App;
