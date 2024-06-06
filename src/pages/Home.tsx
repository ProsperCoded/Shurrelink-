import { Button, Container, useTheme } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  const theme = useTheme();
  console.log(theme.palette.primary.dark);
  return <Container>Home</Container>;
}
