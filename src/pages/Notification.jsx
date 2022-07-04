import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Modaldata } from "../components/Modal/data";

const Notification = () => {
  return (
    <>
      <div className="container w-50 mt-5 mb-5">
        <div className="faq-container">
          <h2 className="text-white mb-5">Notifications</h2>
          {Modaldata.map((info) => (
            <div>
              <Accordion className="faq-accordion" key={info}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon className="accordion-icon" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  style={{ marginTop: "20px" }}
                >
                  <Typography>{info.tittle}</Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography>{info.text}</Typography>
                  <Typography>{info.date}</Typography>
                </AccordionDetails>
              </Accordion>

            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notification;
