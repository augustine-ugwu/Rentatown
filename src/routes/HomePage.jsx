import { Box, Divider } from "@mui/material";
import AppAppBar from "../assets/components/AppAppBar";
import Hero from "../assets/components/Hero";
import Features from "../assets/components/Features";
import Testimonials from "../assets/components/Testimonials";
import FAQ from "../assets/components/FAQ";
import Footer from "../assets/components/Footer";
import { useTheme } from "../context/ThemeContext"; // Import the theme context hook

export default function HomePage() {
  const { mode, toggleColorMode } = useTheme();

  return (
    <>
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </>
  );
}
