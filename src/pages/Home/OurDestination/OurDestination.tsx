import "./OurDestination.scss";
import React from "react";
import BanffNationalPark from "./../../../assets/our-destination/Banff National Park, Canada.jpg";
import SantoriniGreece from "./../../../assets/our-destination/Santorini, Greece.jpg";
import MachuPicchuPeru from "./../../../assets/our-destination/Machu Picchu, Peru.jpg";
import SerengetiNationalPark from "./../../../assets/our-destination/Serengeti National Park, Tanzania.jpg";
import NorwegianFjordsNorway from "./../../../assets/our-destination/Norwegian Fjords, Norway.jpg";
import GalapogosIslandsEcuador from "./../../../assets/our-destination/Galápagos Islands, Ecuador.jpg";

// import GreatBarrierReef from "./../../../assets/our-destination/";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const destinations = [
  {
    title: "Banff National Park, Canada",
    description:
      "Known for its turquoise lakes, rugged mountains, and abundant wildlife, offering hiking, skiing, and scenic drives.",
    img: BanffNationalPark,
  },
  {
    title: "Santorini, Greece",
    description:
      "Famous for its stunning sunsets, white-washed buildings with blue domes, and beautiful beaches.",
    img: SantoriniGreece,
  },
  {
    title: "Machu Picchu, Peru",
    description:
      "An ancient Incan city set high in the Andes Mountains, known for its dramatic landscape and archaeological significance.",
    img: MachuPicchuPeru,
  },
  {
    title: "Serengeti National Park, Tanzania",
    description:
      "Home to the Great Migration of wildebeest and zebras, offering incredible wildlife safaris and stunning landscapes.",
    img: SerengetiNationalPark,
  },
  {
    title: "Norwegian Fjords, Norway",
    description:
      "Spectacular fjords with steep cliffsides, waterfalls, and picturesque villages, ideal for cruising and outdoor activities.",
    img: NorwegianFjordsNorway,
  },
  {
    title: "Galápagos Islands, Ecuador",
    description:
      "A volcanic archipelago famous for its unique wildlife, such as giant tortoises and marine iguanas, perfect for eco-tourism and diving.",
    img: GalapogosIslandsEcuador,
  },
];
function OurDestination() {
  return (
    <div className="our-destination">
      <p className="section-highlight text-center ">OUR DESTINATIONS</p>
      <p className="section-heading text-center">OUR BEST DESTINATIONS</p>
      <div className="content">
        {destinations.map((d,i) => {
          return (
            <div className="card" key={i}>
              <div className="card__image-container">
                <img
                  src={d.img}
                  className="card__image"
                  alt="Banff National Park"
                  loading="lazy"
                />
              </div>
              <div className="p-2 flex flex-col justify-between">
                <p className="card__name">{d.title}</p>
                <p className="card__description">{d.description}</p>

                <a href="#" className="card__link">
                  Learn More <TrendingFlatIcon />
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <a href="#quote" className="nav-icon">
        <KeyboardArrowDownIcon
          fontSize="large"
          color="secondary"
          sx={{ fontSize: "6rem" }}
        />
      </a>
    </div>
  );
}
export default OurDestination;
