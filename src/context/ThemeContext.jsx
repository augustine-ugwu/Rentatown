import { createContext, useMemo, useState, useContext, useEffect } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import PropTypes from "prop-types"; // Import PropTypes

// Create the context
const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);

// ThemeContext provider
export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("color-mode");
    return savedMode || "light";
  });

  useEffect(() => {
    localStorage.setItem("color-mode", mode);
  }, [mode]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Add PropTypes validation for the children prop
ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
