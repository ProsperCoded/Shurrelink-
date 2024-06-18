import { Button, Container, useTheme } from "@mui/material";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Quote from "./Quote/Quote";
import "./Home.scss";
import OurDestination from "./OurDestination/OurDestination";
import Testimonials from "./Testimonials/Testimonials";
import OurTeam from "./OurTeam/OurTeam";
import Memories from "./LastCallToAction/LastCallToAction";
import LastCallToAction from "./LastCallToAction/LastCallToAction";
import FAQs from "./FAQs/FAQs";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  const theme = useTheme();
  // console.log(theme.palette.primary.dark);
  return (
    <Container>
      <div className="home">
        <Hero />
        <Features />
        <OurDestination />
        <Quote />
        <Testimonials />
        <OurTeam />
        <LastCallToAction />
        <FAQs />
        
      </div>
    </Container>
  );
}
