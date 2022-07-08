import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CTA from "../components/home/CTA";

export default function SimpleAccordion() {
  return (
    <>
      <div className="container w-50 mt-5 mb-5">
        <div className="faq-container">
          <h2 className="text-white mb-5">FAQ</h2>
          <Accordion className="faq-accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="accordion-icon" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Account Function</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="faq-accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="accordion-icon" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Crypto Deposit/Withdraw</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="faq-accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="accordion-icon" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Tutorial</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="faq-accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="accordion-icon" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Finance</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="faq-accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="accordion-icon" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Crypto Derivatives</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="faq-accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="accordion-icon" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Security</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="faq-accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="accordion-icon" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Other Topics</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <CTA />
    </>
  );
}
