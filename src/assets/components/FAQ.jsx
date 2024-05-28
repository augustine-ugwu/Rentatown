import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 14, sm: 16 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}>
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}>
        Frequently asked questions
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header">
            <Typography component="h3" variant="subtitle2">
              How do I search for properties on Rentaown?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}>
              To search for properties on Rentaown, simply use the search bar
              located at the top of the homepage. You can enter keywords such as
              location, price range, property type, and amenities to narrow down
              your search. Additionally, you can use our advanced filters to
              customize your search further and find the perfect home that meets
              your criteria.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header">
            <Typography component="h3" variant="subtitle2">
              Can I schedule a virtual tour of a property before visiting in
              person?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}>
              Yes, you can schedule a virtual tour of any property listed on
              Rentaown. Virtual tours provide an immersive experience that
              allows you to explore the property from the comfort of your
              current location. Simply click on the virtual tour option
              available for the property you&apos;re interested in, and
              you&apos;ll be guided through a detailed tour of the interior and
              exterior spaces.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header">
            <Typography component="h3" variant="subtitle2">
              What information is provided in the neighborhood insights section?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}>
              The neighborhood insights section on Rentaown provides detailed
              information about the surrounding area of each property. This
              includes data on nearby schools, parks, grocery stores,
              restaurants, public transportation options, and more. You can also
              read user reviews and ratings to get a better understanding of the
              community and decide if it&apos;s the right fit for you.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header">
            <Typography component="h3" variant="subtitle2">
              How can I apply for a property on Rentaown?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}>
              Applying for a property on Rentaown is easy and straightforward.
              Once you&apos;ve found a property that you&apos;re interested in,
              simply click on the &quot;Apply Now&quot; button located on the
              property listing page. You&apos;ll be prompted to fill out an
              online application form with your personal information, employment
              details, and rental history. After submitting your application,
              you can track its status and communicate directly with the
              property manager or owner through our platform.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
