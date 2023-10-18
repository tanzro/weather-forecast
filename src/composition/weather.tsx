import Card from "../components/card";
import stitches from "../stitches";

const { styled } = stitches;

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
