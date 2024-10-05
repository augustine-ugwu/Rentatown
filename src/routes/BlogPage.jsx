import { useTheme } from "../context/ThemeContext"; // Import the custom hook for theme
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import AppAppBar from "../assets/components/AppAppBar";
import Footer from "../assets/components/Footer";
import Blog from "../assets/components/Blog";

export default function BlogPage() {
  const { mode, toggleColorMode } = useTheme(); // Access the global theme state

  return (
    <>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Blog />
      <Box sx={{ bgcolor: "background.default" }}>
        <Divider />
        <Footer />
      </Box>
    </>
  );
}
