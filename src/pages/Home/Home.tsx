import { Button, Container, useTheme } from "@mui/material";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";

export default function Home() {
  const theme = useTheme();
  // console.log(theme.palette.primary.dark);
  return (
    <Container>
      <Hero />
      <Features />
    </Container>
  );
}
