import { styled } from "@stitches/react";
import Card from "../components/card";

const Container = styled("div", {
  height: "100vh",
  padding: "2rem",
  backgroundColor: "#F6F6F6",
});

export default function Weather() {
  return (
    <Container>
      <Card day="Quarta-Feira" temperature={34} condition="Ensolarado" />
    </Container>
  );
}
