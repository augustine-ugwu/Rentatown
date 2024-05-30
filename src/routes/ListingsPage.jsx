import * as React from "react";
import PropTypes from "prop-types";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "../assets/components/AppAppBar";
import Footer from "../assets/components/Footer";
import Theme from "./Theme";
import { Typography } from "@mui/material";
import OpenHouses from "../assets/components/OpenHouses";
import RentaownSuggestions from "../assets/components/RentaownSuggestions";
import MostViewed from "../assets/components/MostViewed";
import NewToMarket from "../assets/components/NewToMarket";
import LuxuryHomes from "../assets/components/LuxuryHomes";
import PriceDrop from "../assets/components/PriceDrop";

function ToggleCustomTheme() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100dvw",
        position: "fixed",
        bottom: 24,
      }}></Box>
  );
}

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.shape({
    valueOf: PropTypes.func.isRequired,
  }).isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

export default function ListingsPage() {
  const [mode, setMode] = React.useState("light");
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const theme = createTheme(Theme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? theme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Box sx={{ pt: { xs: 14, sm: 16 } }}>
        <Typography
          component="h2"
          variant="h4"
          textAlign={{ sm: "left", md: "center" }}
          mb={2}
          px={2}>
          House Listings
        </Typography>
        <OpenHouses />
        <RentaownSuggestions />
        <MostViewed />
        <NewToMarket />
        <LuxuryHomes />
        <PriceDrop />
      </Box>

      <Box sx={{ bgcolor: "background.default" }}>
        <Divider />
        <Footer />
      </Box>
      <ToggleCustomTheme
        showCustomTheme={showCustomTheme}
        toggleCustomTheme={toggleCustomTheme}
      />
    </ThemeProvider>
  );
}
