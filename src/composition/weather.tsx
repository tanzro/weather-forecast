import { useEffect, useState } from "react";
import Card from "../components/card";
import stitches from "../stitches";
import { WeatherData, WeatherService } from "../services/weather";
import SearchBox from "../components/search";
import { kelvinToCelsius } from "../utils/convert-temperature";
import { getCurrentDayOfWeek } from "../utils/current-day";

const { styled } = stitches;

const Container = styled("div", {
  height: "100vh",
  padding: "2rem",
  backgroundColor: "#F6F6F6",
});

export default function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const [day, setDay] = useState("");

  const getWeather = (city: string) => {
    WeatherService.getWeather(city)
      .then((response) => {
        setWeatherData(response);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearch = (searchQuery: string) => {
    getWeather(searchQuery);
  };

  function getTemperatureInCelsius() {
    if (weatherData && weatherData.main) {
      return kelvinToCelsius(weatherData.main.temp);
    }
    return undefined;
  }

  useEffect(() => {
    setDay(getCurrentDayOfWeek());
  }, []);

  return (
    <Container>
      <SearchBox onSearch={handleSearch} />
      <Card
        day={day}
        temperature={getTemperatureInCelsius()}
        condition={weatherData?.weather[0].main}
      />
    </Container>
  );
}
