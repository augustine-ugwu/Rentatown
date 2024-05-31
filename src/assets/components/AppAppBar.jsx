import * as React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleColorMode from "./ToggleColorMode";
import Logo from "../images/rentatown2219.png";
import RentaownLogo from "../images/RentaownLogo.svg";
import { Link } from "react-router-dom";

const logoStyle = {
  width: "90px",
  height: "auto",
  cursor: "pointer",
};

const rentaownLogoStyle = {
  width: "30px",
  paddingRight: "6px",
  height: "auto",
};

function AppAppBar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}>
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "20px",
                px: 0,
              }}>
              <Link to={"/"}>
                <img
                  src={RentaownLogo}
                  style={rentaownLogoStyle}
                  alt="logo of rentaown"
                />
                <img src={Logo} style={logoStyle} alt="logo of rentaown" />
              </Link>
              <Box sx={{ display: { xs: "none", md: "flex" }, ml: "20px" }}>
                <Link to={"/findagent"} style={{ textDecoration: "none" }}>
                  <MenuItem sx={{ py: "6px", px: "12px" }}>
                    <Typography variant="body2" color="text.primary">
                      Find an Agent
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to={"/about"} style={{ textDecoration: "none" }}>
                  <MenuItem sx={{ py: "6px", px: "12px" }}>
                    <Typography variant="body2" color="text.primary">
                      About Us
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to={"/blog"} style={{ textDecoration: "none" }}>
                  <MenuItem sx={{ py: "6px", px: "12px" }}>
                    <Typography variant="body2" color="text.primary">
                      Blog
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to={"/contact"} style={{ textDecoration: "none" }}>
                  <MenuItem sx={{ py: "6px", px: "12px" }}>
                    <Typography variant="body2" color="text.primary">
                      Contact
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to={"/faq"} style={{ textDecoration: "none" }}>
                  <MenuItem sx={{ py: "6px", px: "12px" }}>
                    <Typography variant="body2" color="text.primary">
                      FAQ
                    </Typography>
                  </MenuItem>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}>
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              <Button
                color="primary"
                variant="text"
                size="small"
                component="a"
                target="_blank">
                Sign in
              </Button>
              <Button
                color="primary"
                variant="contained"
                size="small"
                component="a"
                target="_blank">
                Sign up
              </Button>
            </Box>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}>
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}>
                    <ToggleColorMode
                      mode={mode}
                      toggleColorMode={toggleColorMode}
                    />
                  </Box>
                  <Link to={"/findagent"} style={{ textDecoration: "none" }}>
                    <MenuItem>Find an Agent</MenuItem>
                  </Link>
                  <Link to={"/about"} style={{ textDecoration: "none" }}>
                    <MenuItem>About Us</MenuItem>
                  </Link>
                  <Link to={"/blog"} style={{ textDecoration: "none" }}>
                    <MenuItem>Blog</MenuItem>
                  </Link>
                  <Link to={"/contact"} style={{ textDecoration: "none" }}>
                    <MenuItem>Contact</MenuItem>
                  </Link>
                  <Link to={"/faq"} style={{ textDecoration: "none" }}>
                    <MenuItem>FAQ</MenuItem>
                  </Link>
                  <Divider sx={{ mb: "0.8rem" }} />
                  <Link to={"/signup"} style={{ textDecoration: "none" }}>
                    <MenuItem>
                      <Button
                        color="primary"
                        variant="contained"
                        component="a"
                        target="_blank"
                        sx={{ width: "100%" }}>
                        Sign up
                      </Button>
                    </MenuItem>
                  </Link>
                  <Link to={"/signin"} style={{ textDecoration: "none" }}>
                    <MenuItem>
                      <Button
                        color="primary"
                        variant="outlined"
                        component="a"
                        target="_blank"
                        sx={{ width: "100%" }}>
                        Sign in
                      </Button>
                    </MenuItem>
                  </Link>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

AppAppBar.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default AppAppBar;
