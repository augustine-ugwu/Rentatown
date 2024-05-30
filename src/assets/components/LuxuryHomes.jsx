import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Container,
  Typography,
  Box,
  Button,
  MobileStepper,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import SwipeableViews from "react-swipeable-views";
import HouseListingsCard from "./ListingsCard";
import properties from "./PropertiesData";

const LuxuryHomes = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));

  // Determine the number of cards per step based on screen size
  const cardsPerStep = isXs ? 1 : isSm ? 2 : 4;

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = Math.ceil(properties.length / cardsPerStep);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Container
      maxWidth="xl"
      id="houselistings"
      sx={{
        pb: { xs: 8, sm: 6 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3 },
        overflow: "hidden",
      }}>
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        {" "}
        <Typography
          component="h1"
          variant="h6"
          p={1.2}
          color="text.primary"
          fontWeight={600}>
          Luxury Homes
        </Typography>
        <Box sx={{ width: "100%", flexGrow: 1, overflow: "hidden" }}>
          {" "}
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            style={{ padding: isXs ? "0 8px" : "0" }}
            containerStyle={{ width: "100%" }}>
            {[...Array(maxSteps)].map((_, stepIndex) => (
              <Box
                key={stepIndex}
                sx={{
                  display: "flex",
                  justifyContent: isXs ? "center" : "space-around",
                  flexWrap: "wrap",
                  gap: 1,
                  py: 2,
                }}>
                {properties
                  .slice(
                    stepIndex * cardsPerStep,
                    (stepIndex + 1) * cardsPerStep
                  )
                  .map((property) => (
                    <Box
                      key={property.address}
                      sx={{
                        width: isXs ? "100%" : isSm ? "48%" : "23%",
                        mb: isXs ? 2 : 0,
                      }}>
                      <HouseListingsCard {...property} />
                    </Box>
                  ))}
              </Box>
            ))}
          </SwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}>
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}>
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </Box>
    </Container>
  );
};

export default LuxuryHomes;
