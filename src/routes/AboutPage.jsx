import { useTheme } from "../context/ThemeContext"; // Import the custom hook
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import AppAppBar from "../assets/components/AppAppBar";
import Footer from "../assets/components/Footer";
import About from "../assets/components/About";

export default function AboutPage() {
  const { mode, toggleColorMode } = useTheme(); // Access the global theme state

  return (
    <>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <About />
      <Box sx={{ bgcolor: "background.default" }}>
        <Divider />
        <Footer />
      </Box>
    </>
  );
}
