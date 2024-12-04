import { Box, Divider } from "@mui/material";
import AppAppBar from "../assets/components/AppAppBar";
import Hero from "../assets/components/Hero";
import Features from "../assets/components/Features";
import OpenHouses from "../assets/components/OpenHouses";
import RentaownSuggestions from "../assets/components/RentaownSuggestions";
import MostViewed from "../assets/components/MostViewed";
import NewToMarket from "../assets/components/NewToMarket";
import LuxuryHomes from "../assets/components/LuxuryHomes";
import PriceDrop from "../assets/components/PriceDrop";
import Testimonials from "../assets/components/Testimonials";
import FAQ from "../assets/components/FAQ";
import Footer from "../assets/components/Footer";
import { useTheme } from "../context/ThemeContext";

export default function HomePage() {
  const { mode, toggleColorMode } = useTheme();

  return (
    <>
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        <Features />
        <Divider />
        <OpenHouses />
        <Divider />
        <RentaownSuggestions />
        <Divider />
        <MostViewed />
        <Divider />
        <NewToMarket />
        <Divider />
        <LuxuryHomes />
        <Divider />
        <PriceDrop />
        <Divider />
        <Testimonials />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </>
  );
}
