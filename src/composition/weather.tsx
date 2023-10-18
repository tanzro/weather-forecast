import { useEffect, useState } from "react";
import Card from "../components/card";
import stitches from "../stitches";
import { WeatherData, WeatherService } from "../services/weather";

const { styled } = stitches;

const Container = styled("div", {
  height: "100vh",
  padding: "2rem",
  backgroundColor: "#F6F6F6",
});

export default function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData>();

  const getWeather = () => {
    WeatherService.getWeather("uberlandia")
      .then((response) => {
        setWeatherData(response);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <Container>
      <Card
        day="Quarta-Feira"
        temperature={weatherData?.main.temp}
        condition="Ensolarado"
      />
    </Container>
  );
}
