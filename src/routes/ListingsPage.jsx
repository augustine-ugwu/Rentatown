import { useTheme } from "../context/ThemeContext"; // Import the custom hook for theme

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import AppAppBar from "../assets/components/AppAppBar";
import Footer from "../assets/components/Footer";
import { Typography } from "@mui/material";
import OpenHouses from "../assets/components/OpenHouses";
import RentaownSuggestions from "../assets/components/RentaownSuggestions";
import MostViewed from "../assets/components/MostViewed";
import NewToMarket from "../assets/components/NewToMarket";
import LuxuryHomes from "../assets/components/LuxuryHomes";
import PriceDrop from "../assets/components/PriceDrop";

export default function ListingsPage() {
  const { mode, toggleColorMode } = useTheme(); // Access the global theme state

  return (
    <>
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
    </>
  );
}
