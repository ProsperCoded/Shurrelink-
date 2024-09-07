import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/joy";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import PrivacyImage from "./../../../assets/img/privacy_policy.webp";
import WhyChooseUsImage from "./../../../assets/img/why_choose_us.webp";
import HowWeDeliverImage from "../../../assets/img/how_we_deliver.webp";
import { divide } from "lodash";
import ExpandLessTwoToneIcon from "@mui/icons-material/ExpandLessTwoTone";
import { LocationOnRounded } from "@mui/icons-material";
import { Card, CardContent, CardCover } from "@mui/joy";
import { Collapse } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: PrivacyImage,
  },
  {
    label: "Bird",
    imgPath: WhyChooseUsImage,
  },
  {
    label: "Bali, Indonesia",
    imgPath: HowWeDeliverImage,
  },
];

// function CarouselImages() {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step: number) => {
//     setActiveStep(step);
//   };

//   return (
//     <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
//       <Paper
//         square
//         elevation={0}
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           height: 50,
//           pl: 2,
//           bgcolor: "background.default",
//         }}
//       >
//         <Typography>{images[activeStep].label}</Typography>
//       </Paper>
//       <SwipeableViews
//         axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//       >
//         {images.map((step, index) => (
//           <div key={step.label}>
//             {Math.abs(activeStep - index) <= 2 ? (
//               <div className="carousel-image-container">
//                 <Box
//                   component="img"
//                   sx={{
//                     height: 255,
//                     display: "block",
//                     maxWidth: 400,
//                     overflow: "hidden",
//                     width: "100%",
//                     borderRadius: "1rem",
//                   }}
//                   src={step.imgPath}
//                   alt={step.label}
//                 />
//                 <p className="paragraph">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
//                   voluptate illo obcaecati quo quos repellendus alias, tenetur
//                   ipsum? Pariatur, perspiciatis.
//                   <Button variant="text">More {">"}</Button>
//                 </p>
//               </div>
//             ) : null}
//           </div>
//         ))}
//       </SwipeableViews>
//       <MobileStepper
//         steps={maxSteps}
//         position="static"
//         activeStep={activeStep}
//         nextButton={
//           <Button
//             size="small"
//             onClick={handleNext}
//             disabled={activeStep === maxSteps - 1}
//           >
//             Next
//             {theme.direction === "rtl" ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//             {theme.direction === "rtl" ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//             Back
//           </Button>
//         }
//       />
//     </Box>
//   );
// }

function CarouselImages({
  data: _data,
}: {
  data: {
    heading: string;
    body: string;
    img: string;
  }[];
}) {
  const [data, setData] = React.useState(
    _data.map((i) => {
      return { expanded: false, ...i };
    })
  );
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div className="mx-auto px-3">
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {data.map((item, i) => {
          return (
            <Card
              sx={{ minHeight: "280px", width: "100%" }}
              key={i}
              onClick={() => {
                setData((prev) => {
                  const copy = [...prev];
                  copy[i] = { ...copy[i], expanded: !copy[i].expanded };
                  return copy;
                });
              }}
            >
              <CardCover>
                <img src={item.img} loading="lazy" alt="" />
              </CardCover>
              <CardCover
                sx={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                }}
              />
              <CardContent sx={{ justifyContent: "flex-end" }}>
                <Typography level="title-lg" textColor="#fff">
                  {item.heading}
                </Typography>
                <div className="text-slate-300">
                  {!item.expanded && (
                    <div className="w-full">
                      <span> Shurrlink {item.body.slice(0, 20)}...</span>
                      <ExpandLessTwoToneIcon
                        color="primary"
                        sx={{ transform: "rotateZ(90deg)" }}
                      />
                    </div>
                  )}
                  <Collapse in={item.expanded}>
                    <span>{item.body}</span>
                  </Collapse>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default CarouselImages;
