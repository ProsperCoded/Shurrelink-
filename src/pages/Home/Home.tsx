import { Button, Container, useTheme } from "@mui/material";
import Hero from "./Hero/Hero";

export default function Home() {
  const theme = useTheme();
  // console.log(theme.palette.primary.dark);
  return (
    <Container>
      <Hero />
    </Container>
  );
}
