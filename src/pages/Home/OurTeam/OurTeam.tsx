import React from "react";
import "./OurTeam.scss";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import StanelyTim from "./../../../assets/team/pic1.png";
import JohnDoe from "./../../../assets/team/pic2.png";
import FatimaBello from "./../../../assets/team/pic3.png";
import DanielJohnson from "./../../../assets/team/pic4.png";
import ChiomaOkeke from "./../../../assets/team/pic5.png";
import AlisBrown from "./../../../assets/team/pic6.jpg";
const teamMembers = [
  {
    img: StanelyTim,
    name: "Stanly Tim",
    role: "CEO",
    handles: {
      facebook: "https://facebook.com/prospercoded",
      twitter: "https://twitter.com/prospercoded",
      linkedIn: "https://linkedin.com/in/prospercoded",
    },
  },
  {
    img: ChiomaOkeke,
    name: "Chioma Okeke",
    role: "Travel Consultant",
    handles: {
      facebook: "https://facebook.com/chiomaokeke",
      twitter: "https://twitter.com/chiomaokeke",
      linkedIn: "https://linkedin.com/in/chiomaokeke",
    },
  },
  {
    img: JohnDoe,
    name: "John Doe",
    role: "Flight Coordinator",
    handles: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedIn: "https://linkedin.com/in/johndoe",
    },
  },
  {
    img: FatimaBello,
    name: "Fatima Bello",
    role: "Visa Specialist",
    handles: {
      facebook: "https://facebook.com/fatimabello",
      twitter: "https://twitter.com/fatimabello",
      linkedIn: "https://linkedin.com/in/fatimabello",
    },
  },
  {
    img: DanielJohnson,
    name: "Daniel Johnson",
    role: "Customer Support Manager",
    handles: {
      facebook: "https://facebook.com/danieljohnson",
      twitter: "https://twitter.com/danieljohnson",
      linkedIn: "https://linkedin.com/in/danieljohnson",
    },
  },

  {
    img: AlisBrown,
    name: "Alis Brown",
    role: "Web Devloper",
    handles: {
      facebook: "https://facebook.com/gracenwosu",
      twitter: "https://twitter.com/gracenwosu",
      linkedIn: "https://linkedin.com/in/gracenwosu",
    },
  },
];
function OurTeam() {
  return (
    <div className="our-team">
      <div className="content">
        <div className="space-y-4">
          <h3 className="section-highlight">OUR TEAM</h3>
          <h1 className="section-heading my-2 mb-3 ">
            Best Traveler To Guide You
          </h1>
          <p className="section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            quibusdam eos voluptas vel ducimus veritatis aspernatur pariatur
            beatae vero eius!
          </p>
        </div>
        <div className="team-members">
          {teamMembers.map((member) => {
            return (
              <div className="team-member">
                <div className="size-full overflow-hidden rounded-[1rem]">
                  <img
                    src={member.img}
                    alt="Team Member Image"
                    className="team-member__img"
                  />
                </div>
                <div className="team-member__info">
                  <h5 className="team-member__name">{member.name}</h5>
                  <h5 className="team-member__role">{member.role}</h5>
                  <div className="team-member__handles">
                    <a href={member.handles.facebook}>
                      <Facebook color="secondary" />
                    </a>
                    <a href={member.handles.twitter}>
                      <Twitter color="secondary" />
                    </a>
                    <a href={member.handles.linkedIn}>
                      <LinkedIn color="secondary" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
