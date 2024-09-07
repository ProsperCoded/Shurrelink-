import { Button, useTheme, Modal, Grow } from "@mui/material";
import "./Hero.scss";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import MapIcon from "@mui/icons-material/Map";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import { useState } from "react";
import { locationsData } from "./locationData";
import AvailableLocations from "./AvailableLocations";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const subHeadingWords = [
  {
    text: "Expert",
  },
  {
    text: "Guidance",
  },
  {
    text: "and",
  },
  {
    text: "Seamless",
  },
  {
    text: "Travel",
  },
  {
    text: "Solutions",
  },
  {
    text: "for",
  },
  {
    text: "Your",
  },
  {
    text: "Global",
  },
  {
    text: "Adventure",
  },
].map((e) => {
  return {
    ...e,
    className: "font-normal font-primary text-xl text-stone-50 ",
  };
});
function Hero() {
  // animateText =
  const [headingItem, setHeadingItem] = useState<number>(1);
  setInterval(() => {
    setHeadingItem(headingItem === 4 ? 1 : headingItem + 1);
  }, 2000);

  return (
    <div className="hero">
      <div className="content">
        <div>
          {headingItem === 1 && (
            <h1
              className="font-accent font-extrabold text-4xl text-light md:text-5xl boingInUp"
              style={{ animationDuration: "1s" }}
            >
              <span>Unlock</span>
              <span>
                <LockOpenIcon sx={{ fontSize: "2.5rem", mb: 1 }} />
              </span>
            </h1>
          )}
          {headingItem === 2 && (
            <h1
              className="font-accent font-extrabold text-4xl text-light md:text-5xl puffIn"
              style={{ animationDuration: "1s" }}
            >
              <span>YOUR WORLD</span>
            </h1>
          )}
          {headingItem === 3 && (
            <h1
              className="font-accent font-extrabold text-4xl text-light md:text-5xl puffIn"
              style={{ animationDuration: "1s" }}
            >
              <span>WITH</span>
            </h1>
          )}
          {headingItem === 4 && (
            <h1
              className="font-accent font-extrabold text-4xl text-light md:text-5xl puffIn"
              style={{ animationDuration: "1s" }}
            >
              <span>SURRE LINK TRAVELS</span>
            </h1>
          )}
          {/* <h2 className="mb-7 font-bold text-3xl md:text-6xl">Your World</h2> */}
          <p className="max-w-[45ch]">
            <TypewriterEffect
              words={subHeadingWords}
              cursorClassName="text-white h-[1rem]"
            />
          </p>
        </div>
      </div>
      <HeroAddon />
    </div>
  );
}

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center h-[40rem]">
      <p className="mb-10 text-base text-neutral-600 dark:text-neutral-200">
        The road to freedom starts from here
      </p>
      <TypewriterEffect words={words} />
      <div className="flex md:flex-row flex-col space-x-0 md:space-x-4 space-y-4 md:space-y-0 mt-10">
        <button className="dark:border-white bg-black border border-transparent rounded-xl w-40 h-10 text-sm text-white">
          Join now
        </button>
        <button className="bg-white border border-black rounded-xl w-40 h-10 text-black text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}

function HeroAddon() {
  const theme = useTheme();
  const [openLocationsModal, setOpenLocationsModal] = useState(false);
  return (
    <div className="hero-addon" id="hero-addon">
      <div>
        <Button
          sx={{ color: theme.palette.text.primary }}
          onClick={(e) => {
            setOpenLocationsModal(true);
          }}
        >
          <span className="flex flex-col justify-center items-center">
            <MapIcon fontSize="large" />
            <h3 className="font-bold">LOCATIONS</h3>
            <p className="capitalize">{locationsData.length} Slots Available</p>
            <span className="adsClickIcon">
              <AdsClickIcon />
            </span>
          </span>
        </Button>
      </div>
      <Modal
        open={openLocationsModal}
        onClose={() => {
          setOpenLocationsModal(false);
        }}
        aria-labelledby="locations-modal"
        aria-describedby="locations-modal"
      >
        <Grow in={openLocationsModal}>
          <div className="modal-child">
            <AvailableLocations setOpen={setOpenLocationsModal} />
          </div>
        </Grow>
      </Modal>
    </div>
  );
}

export default Hero;
