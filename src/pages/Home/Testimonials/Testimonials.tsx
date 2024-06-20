import React, { useId } from "react";
import "./Testimonials.scss";
import { Avatar, IconButton } from "@mui/material";
import SophiaBrownImage from "./../../../assets/testimonials/pic1.jpg";
import LiamJohnsonImage from "./../../../assets/testimonials/pic2.jpg";
import AminaYusufImage from "./../../../assets/testimonials/pic3.jpg";
import SwipeableViews from "react-swipeable-views";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { chunk } from "lodash";
import { IS_MOBILE_LARGE, IS_MOBILE_SMALL } from "../../../config";
const testimonials_list = [
  {
    name: "Sophia Brown",
    career: "Graphic Designer",
    message:
      "Surrelink made my relocation process seamless and stress-free. Their team handled everything with professionalism and care. Highly recommended!",
    img: SophiaBrownImage,
  },
  {
    name: "Liam Johnson",
    career: "Marketing Specialist",
    message:
      "Thanks to Surrelink, I found my dream job abroad. Their guidance and support were invaluable throughout the entire process. Fantastic service!",
    img: LiamJohnsonImage,
  },
  {
    name: "Amina Yusuf",
    career: "Software Engineer",
    message:
      "Surrelink's expertise in international relocation is unmatched. They took care of all the details, making my move to Canada a breeze. Couldn't be happier!",
    img: AminaYusufImage,
  },
  {
    name: "David Smith",
    career: "Teacher",
    message:
      "From visa applications to flight arrangements, Surrelink handled everything efficiently. Their personalized service exceeded my expectations. Highly recommend!",
    // img: DavidSmithImage,
  },
  {
    name: "Chinwe Okeke",
    career: "Entrepreneur",
    message:
      "Surrelink helped me navigate the complexities of moving my business overseas. Their support and expertise were instrumental in making the transition smooth.",
    // img: ChinweOkekeImage,
  },
  {
    name: "James Walker",
    career: "Consultant",
    message:
      "Surrelink provided excellent support throughout my relocation process. Their team was always available to answer my questions and ensure everything went smoothly.",
    // img: JamesWalkerImage,
  },
  {
    name: "Fatima Adewale",
    career: "Nurse",
    message:
      "I am grateful for Surrelink's assistance in helping me find a job abroad. Their comprehensive services made the entire process simple and straightforward.",
    // img: FatimaAdewaleImage,
  },
  {
    name: "Oliver Green",
    career: "Data Analyst",
    message:
      "Surrelink's team is professional and knowledgeable. They guided me through every step of my relocation, making it a stress-free experience.",
    // img: OliverGreenImage,
  },
  {
    name: "Grace Morgan",
    career: "Project Manager",
    message:
      "Thanks to Surrelink, I was able to relocate for my new job smoothly. Their attention to detail and customer service are top-notch!",
    // img: GraceMorganImage,
  },
  {
    name: "Hassan Idris",
    career: "Civil Engineer",
    message:
      "Surrelink exceeded my expectations in helping me move abroad. Their expertise made the process efficient and hassle-free.",
    // img: HassanIdrisImage,
  },
  {
    name: "Nina Taylor",
    career: "Financial Advisor",
    message:
      "Relocating with Surrelink was a fantastic experience. They handled everything professionally, allowing me to focus on my new career opportunity.",
    // img: NinaTaylorImage,
  },
  {
    name: "Michael Ojo",
    career: "Architect",
    message:
      "Surrelink's service is outstanding. They managed all the complexities of my international move, ensuring everything went smoothly.",
    // img: MichaelOjoImage,
  },
];

let testimonials_nested = chunk(testimonials_list, 4);
if (IS_MOBILE_LARGE) {
  testimonials_nested = chunk(testimonials_list, 2);
}
function Testimonials() {
  const [activeStep, setActiveStep] = React.useState(0);
  return (
    <div className="testimonials">
      <div className="content">
        <div className="space-y-4">
          <h3 className="section-highlight">Testimonials</h3>
          <h1 className="section-heading my-2 mb-3 ">
            Good News From <br />
            Our Clients
          </h1>
          <p className="section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            quibusdam eos voluptas vel ducimus veritatis aspernatur pariatur
            beatae vero eius!
          </p>
        </div>
        <div>
          <SwipeableViews
            axis={"x"}
            index={activeStep}
            onChangeIndex={(n) => {
              setActiveStep(n);
            }}
          >
            {testimonials_nested.map((testimonials, i) => {
              return (
                <div className="testimonials-grid" key={useId()}>
                  {testimonials.map((testimonial) => {
                    return (
                      <div className="testimonial">
                        <p className="testimonial__message self-center">
                          {testimonial.message}
                        </p>
                        <div className="flex gap-4 self-end">
                          <Avatar src={testimonial.img} sizes="lg" />
                          <div>
                            <span className="testimonial__name">
                              {testimonial.name}
                            </span>
                            <span className="testimonial__career">
                              {testimonial.career}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </SwipeableViews>
          <div className="flex justify-between mx-10">
            <span className="back">
              <IconButton
                color="primary"
                onClick={() => {
                  setActiveStep((p) => {
                    return Math.abs(1 - p);
                  });
                }}
                disabled={activeStep === 0}
              >
                <ArrowCircleRightOutlinedIcon
                  sx={{ fontSize: "3rem", rotate: "180deg" }}
                />
              </IconButton>
            </span>
            <span className="next">
              <IconButton
                color="primary"
                onClick={() => {
                  setActiveStep((p) => {
                    return 1 + p;
                  });
                }}
                disabled={activeStep === testimonials_nested.length - 1}
              >
                <ArrowCircleRightOutlinedIcon sx={{ fontSize: "3rem" }} />
              </IconButton>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
