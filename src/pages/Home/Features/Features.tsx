import React from "react";
import "./Features.scss";
import CallToAction from "../../../components/utils/CallToAction";
import RefundPolicy from "./../../../assets/img/privacy_policy.webp";
import WhyChooseUsImage from "./../../../assets/img/why_choose_us.webp";
import HowWeDeliverImage from "./../../../assets/img/how_we_deliver.webp";
import { Tooltip } from "@mui/material";
import CarouselImages from "../../../components/utils/CarouselImages/CarouselImages";
const TransparencyInfo = [
  {
    heading: "Why Choose Us",
    body: "stands out for  our specialized focus on helping Nigerians migrate to established countries. Our expertise in international relocation and commitment to personalized service ensures you receive the best support.",
    img: WhyChooseUsImage,
  },
  {
    heading: "How We Deliver",
    body: "handles all travel arrangements, including domestic and international flights. We partner with reputable airlines for competitive prices and coordinated, stress-free travel.",
    img: HowWeDeliverImage,
  },
  {
    heading: "Refund Policy",
    body: "we are committed to providing reliable services. If the migration process does not go as expected due to our fault, we offer a full refund. We prioritize your trust and peace of mind.",
    img: RefundPolicy,
  },
];
function Transparency() {
  return (
    <div className="features" id="features">
      <div className="content">
        <div>
          <h3 className="section-highlight">Welcome to Shurrlink</h3>
          <h1 className="section-heading my-2 mb-3">
            LET THE TRAVELER IN YOU FLY WITH US
          </h1>
          <p className="section-text">
            We help Nigerians relocate and travel to established countries with
            ease, providing assistance with employment, schooling, and
            migration. We manage all procedures and handle flights for a
            seamless, hassle-free experience.
          </p>
          <div className="mt-6">
            <CallToAction variant="contained" text="Get Started" />
          </div>
        </div>
        <div className="features__images--phone mt-6 lg:hidden">
          <CarouselImages data={TransparencyInfo} />
        </div>
        <div className="features__images--desktop hidden lg:block">
          {TransparencyInfo.map((info, i) => {
            return (
              <div key={i}>
                <Tooltip
                  arrow
                  color="primary"
                  placement="left"
                  title={
                    <p className="text-sm">
                      <b className="text-primary-light">Surrelink</b>
                      {info.body}
                    </p>
                  }
                >
                  <div>
                    <img
                      src={info.img}
                      alt="Why Choose Us Image"
                      loading="lazy"
                    />
                    <p className="content-hover">
                      <span>{info.heading}</span>
                    </p>
                  </div>
                </Tooltip>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Transparency;
