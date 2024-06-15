import React from "react";
import "./Features.scss";
import GetStarted from "../../../components/utils/GetStarted";
import PrivacyImage from "./../../../assets/img/privacy_policy.webp";
import WhyChooseUsImage from "./../../../assets/img/why_choose_us.webp";
import HowWeDeliverImage from "./../../../assets/img/how_we_deliver.webp";
import { Tooltip } from "@mui/material";
import CarouselImages from "../../../components/utils/CarouselImages/CarouselImages";
function Features() {
  return (
    <div className="features">
      <div className="content">
        <div>
          <h3 className="text-lg text-primary-dark font-bold tracking-wider">
            Welcome to Shurrlink
          </h3>
          <h1 className="text-4xl font-bold my-2 mb-3">
            LET THE TRAVELER IN YOU FLY WITH US
          </h1>
          <p className="font-secondary">
            We help Nigerians relocate and travel to established countries with
            ease, providing assistance with employment, schooling, and
            migration. We manage all procedures and handle flights for a
            seamless, hassle-free experience.
          </p>
          <div className="mt-6">
            <GetStarted variant="contained" />
          </div>
        </div>
        <div className="features__images--phone lg:hidden">
          <CarouselImages />
        </div>
        <div className="features__images--desktop hidden lg:block">
          <div>
            <Tooltip
              arrow
              color="primary"
              placement="left"
              title={
                <p className="text-sm">
                  <b className="text-primary-light">Surrelink</b> stands out for
                  our specialized focus on helping Nigerians migrate to
                  established countries. Our expertise in international
                  relocation and commitment to personalized service ensures you
                  receive the best support.
                </p>
              }
            >
              <div>
                <img src={WhyChooseUsImage} alt="Why Choose Us Image" />
                <p className="content-hover">
                  <span>Why Choose Us</span>
                </p>
              </div>
            </Tooltip>
          </div>
          <div>
            <Tooltip
              arrow
              placement="top"
              title={
                <p className="text-sm">
                  <b className="text-primary-light">Surrelink</b> handles all
                  travel arrangements, including domestic and international
                  flights. We partner with reputable airlines for competitive
                  prices and coordinated, stress-free travel.
                </p>
              }
            >
              <div>
                <img src={HowWeDeliverImage} alt="How We Deliver Image" />
                <p className="content-hover">
                  <span>How We Deliver</span>
                </p>
              </div>
            </Tooltip>
          </div>
          <div>
            <Tooltip
              title={
                <p className="text-sm">
                  At <b className="text-primary-light">Surrelink</b>, we are
                  committed to providing reliable services. If the migration
                  process does not go as expected due to our fault, we offer a
                  full refund. We prioritize your trust and peace of mind.
                </p>
              }
              arrow
              placement="top"
            >
              <div>
                <img src={PrivacyImage} alt="Privacy Image" />
                <p className="content-hover">
                  <span>Refund Policy</span>
                </p>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
