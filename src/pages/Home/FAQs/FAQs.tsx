import React from "react";
import { accordionClasses } from "@mui/joy/Accordion";
import { accordionSummaryClasses } from "@mui/joy/AccordionSummary";
import { accordionDetailsClasses } from "@mui/joy/AccordionDetails";
import "./FAQs.scss";
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
} from "@mui/joy";
const FAQs_DATA = [
  {
    question: "What services does Surrelink offer?",
    answer:
      "Surrelink specializes in helping Nigerians relocate and travel to established countries. We offer comprehensive services including assistance with employment opportunities, schooling, and other migration opportunities. We manage all complex procedures, from application processes to post-arrival support, ensuring a seamless transition for you. Additionally, we handle domestic and international flights to make your travel experience hassle-free.",
  },
  {
    question: " How does Surrelink help with migration opportunities?",
    answer:
      "Surrelink stays updated on the latest migration opportunities such as job openings, educational programs, and new developments. We guide you through the legal and administrative processes, helping you take advantage of these opportunities without missing out. Our expertise ensures that all applications are thorough and compliant with regulations, maximizing your chances of success",
  },
  {
    question: " Is Surrelink's process legal and trustworthy?",
    answer:
      "Yes, Surrelink operates strictly within legal frameworks and regulations. We pride ourselves on our transparency and integrity, ensuring all processes are legitimate and in compliance with the laws of the destination countries. Our experienced team is dedicated to providing trustworthy and reliable services, giving you peace of mind throughout your migration journey.",
  },
  {
    question:
      " What kind of post-support does Surrelink provide after relocation?",
    answer:
      "Surrelink offers extensive post-support to help you settle in your new country. This includes assistance with finding accommodation, understanding local laws and customs, accessing essential services, and integrating into the community. Our goal is to make your transition as smooth and comfortable as possible, ensuring you feel at home in your new environment.",
  },
  {
    question: "How does Surrelink handle flight arrangements?",
    answer:
      "The costs of our services vary depending on the specific needs and circumstances of each client. We provide a transparent pricing structure and detailed estimates upfront. Our goal is to offer affordable solutions without compromising on the quality of our services. Contact us for a personalized consultation and quote tailored to your migration plans.",
  },
  {
    question: "How does Surrelink handle flight arrangements?",
    answer:
      "The costs of our services vary depending on the specific needs and circumstances of each client. We provide a transparent pricing structure and detailed estimates upfront. Our goal is to offer affordable solutions without compromising on the quality of our services. Contact us for a personalized consultation and quote tailored to your migration plans.",
  },
  {
    question: "Why should I choose Surrelink over other travel agencies?",
    answer:
      "Surrelink stands out because of our specialized focus on helping Nigerians migrate to established countries. Our expertise in navigating the complexities of international relocation, combined with our commitment to personalized service, ensures that you receive the best possible support. We are dedicated to making your dreams of living abroad a reality through professional, reliable, and compassionate service.",
  },
  {
    question: "Can Surrelink help with visa applications and documentation?",
    answer:
      "Absolutely. Surrelink provides comprehensive support for visa applications and documentation. Our team is well-versed in the requirements of various countries and will guide you through the process, ensuring that all your paperwork is accurate and complete. We aim to streamline the application process to enhance your chances of a successful visa approval.",
  },
  {
    question: "How do I get started with Surrelink?",
    answer:
      "Getting started with Surrelink is easy! Simply contact us through our website or visit our office for a consultation. Our team will discuss your needs and goals, provide detailed information about our services, and outline the next steps. We are here to support you every step of the way, from initial consultation to your successful relocation.",
  },
  {
    question: "What makes Surrelink's support unique?",
    answer:
      "Our support is unique because we provide end-to-end services tailored specifically to Nigerians looking to migrate. We understand the unique challenges and opportunities for our clients, and our personalized approach ensures that each client receives dedicated attention and customized solutions. Our commitment to your success and satisfaction sets us apart as a trusted partner in your migration journey.",
  },
  {
    question: " What happens if the migration process does not go as expected?",
    answer:
      "At Surrelink, we are committed to providing reliable and effective services. However, if the migration process does not go as expected due to reasons entirely attributable to Surrelink, we offer a full refund. We stand by our commitment to customer satisfaction and ensure that you are not financially disadvantaged due to any shortcomings on our part. Your trust and peace of mind are our top priorities.",
  },
];
function FAQs() {
  const [index, setIndex] = React.useState<number | null>(0);
  return (
    <div className="FAQs">
      <p className="section-highlight text-center ">FAQs</p>
      <p className="section-heading text-center">Frequent Asked Questions</p>
      <div className="mt-5">
        <AccordionGroup
          size="lg"
          variant="soft"
          color="primary"
          // transition={{ initial: "0.3s ease-out", expanded: "0.2s ease" }}
          sx={{
            // maxWidth: 400,
            [`& .${accordionClasses.root}`]: {
              marginTop: "0.5rem",
              transition: "0.2s ease",
              '& button:not([aria-expanded="true"])': {
                transition: "0.2s ease",
                paddingBottom: "0.625rem",
              },
              "& button:hover": {
                background: "transparent",
              },
            },
            [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
              bgcolor: "background.level1",
              borderRadius: "md",
              borderBottom: "1px solid",
              borderColor: "background.level2",
            },
            '& [aria-expanded="true"]': {
              boxShadow: (theme) =>
                `inset 0 -1px 0 ${theme.vars.palette.divider}`,
            },
            borderRadius: "lg",
            [`& .${accordionSummaryClasses.button}:hover`]: {
              bgcolor: "transparent",
            },
            [`& .${accordionDetailsClasses.content}`]: {
              boxShadow: (theme) => `inset 0 1px ${theme.vars.palette.divider}`,
              [`&.${accordionDetailsClasses.expanded}`]: {
                paddingBlock: "0.75rem",
              },
            },
          }}
        >
          {FAQs_DATA.map((data, i) => {
            return (
              <Accordion
                // defaultExpanded={i === 0}
                key={i}
                expanded={index === i}
                onChange={(event, expanded) => {
                  setIndex(expanded ? i : null);
                }}
              >
                <AccordionSummary>{data.question}</AccordionSummary>
                <AccordionDetails>{data.answer}</AccordionDetails>
              </Accordion>
            );
          })}
        </AccordionGroup>
      </div>
    </div>
  );
}

export default FAQs;
