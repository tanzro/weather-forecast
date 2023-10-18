import { styled } from "@stitches/react";

const Container = styled("div", {
  width: "fit-content",
  height: 180,
  padding: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  border: "2px solid $secondary",
  borderRadius: 20,
});

const Day = styled("p", {
  color: "$tertiary",
  fontWeight: "bold",
});

const Temperature = styled("p", {
  color: "$primary",
  fontSize: "$lg",
});

const Condition = styled("p", {
  color: "$secondary",
});

interface CardProps {
  day: string;
  temperature: number | undefined;
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
