import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import Logo from "../images/rentatown2219.png";

const logoStyle = {
  width: "140px",
  height: "auto",
};

function Copyright() {
  return (
    <Typography variant="body2" color="#4876EE" mt={1}>
      {"Copyright © "}
      <Link to={"/"} style={{ textDecoration: "none", color: "Graytext" }}>
        Rentaown&nbsp;
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}>
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <Box>
              <img src={Logo} style={logoStyle} alt="logo of rentaown" />
            </Box>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Subscribe to our newsletter for weekly updates and promotions.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Your email address"
                inputProps={{
                  autoComplete: "off",
                  "aria-label": "Enter your email address",
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ flexShrink: 0 }}>
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}>
          <Typography variant="body2" fontWeight={600}>
            Product
          </Typography>
          <Link
            color="text.secondary"
            to={"/"}
            style={{ textDecoration: "none", color: "GrayText" }}>
            Features
          </Link>
          <Link
            color="text.secondary"
            to={"/"}
            style={{ textDecoration: "none", color: "GrayText" }}>
            Testimonials
          </Link>
          <Link
            color="text.secondary"
            to={"/"}
            style={{ textDecoration: "none", color: "GrayText" }}>
            Highlights
          </Link>
          <Link
            color="text.secondary"
            to={"/listings"}
            style={{ textDecoration: "none", color: "GrayText" }}>
            Listings
          </Link>

          <Link
            color="text.secondary"
            to={"/faq"}
            style={{ textDecoration: "none", color: "GrayText" }}>
            FAQs
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}>
          <Typography variant="body2" fontWeight={600}>
            Company
          </Typography>
          <Link
            to={"/about"}
            style={{ textDecoration: "none", color: "GrayText" }}>
            About us
          </Link>
          <Link to={"/"} style={{ textDecoration: "none", color: "GrayText" }}>
            Blog
          </Link>
          <Link
            color="text.secondary"
            to={"/"}
            style={{ textDecoration: "none", color: "GrayText" }}>
            Press Release
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}>
          <Typography variant="body2" fontWeight={600}>
            Legal
          </Typography>
          <Link
            color="text.secondary"
            to={"/"}
            style={{ textDecoration: "none", color: "GrayText" }}>
            Terms
          </Link>
          <Link
            color="text.secondary"
            to={"/"}
            style={{ textDecoration: "none", color: "GrayText" }}>
            Privacy
          </Link>
          <Link
            color="text.secondary"
            to={"/contact"}
            style={{ textDecoration: "none", color: "GrayText" }}>
            Contact
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}>
        <div>
          <Link
            color="text.secondary"
            to={"/"}
            style={{ textDecoration: "none", color: "GrayText" }}>
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link
            color="text.secondary"
            to={"/"}
            style={{ textDecoration: "none", color: "GrayText" }}>
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          style={{ textDecoration: "none", color: "GrayText" }}>
          <IconButton
            color="inherit"
            to={"/"}
            aria-label="GitHub"
            sx={{ alignSelf: "center" }}
            style={{ textDecoration: "none", color: "GrayText" }}>
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            to={"/"}
            aria-label="X"
            sx={{ alignSelf: "center" }}
            style={{ textDecoration: "none", color: "GrayText" }}>
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            to={"/"}
            aria-label="LinkedIn"
            sx={{ alignSelf: "center" }}
            style={{ textDecoration: "none", color: "GrayText" }}>
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
