import { styled } from "@stitches/react";

const Container = styled("div", {
  width: "fit-content",
  height: 100,
  padding: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  border: "2px solid #E7E7E7",
  borderRadius: 20,
});

const Day = styled("p", {});

const Temperature = styled("p", {});

const Condition = styled("p", {});

interface CardProps {
  day: string;
  temperature: number;
  condition: string;
}

export default function Card({ day, temperature, condition }: CardProps) {
  return (
    <Container>
      <Day>{day}</Day>
      <Temperature>{`${temperature}°`}</Temperature>
      <Condition>{condition}</Condition>
    </Container>
  );
}
