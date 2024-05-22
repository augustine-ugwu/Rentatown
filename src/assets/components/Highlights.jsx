import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ListIcon from "@mui/icons-material/List";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import TourIcon from "@mui/icons-material/Tour";
import InsightsIcon from "@mui/icons-material/Insights";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

const items = [
  {
    icon: <ListIcon />,
    title: "Extensive Listings",
    description:
      "We provide detailed descriptions and high-resolution images  to give you a comprehensive view of each property. From apartments to houses, and everything in between, find the perfect place that matches your needs.",
  },
  {
    icon: <SearchRoundedIcon />,
    title: "Advanced Search Tools",
    description:
      "Narrow down your search by location, price, property type, and specific amenities to find the ideal home quickly. Easily save your favorite listings and compare them to make an informed decision.",
  },
  {
    icon: <TourIcon />,
    title: "Immersive Virtual Tours",
    description:
      "Experience properties through detailed virtual tours that let you explore every nook and cranny from the comfort of your current home. Schedule in-person visits seamlessly once you’ve shortlisted your top choices.",
  },
  {
    icon: <InsightsIcon />,
    title: "Detailed Neighborhood Insights",
    description:
      "Access detailed information about neighborhoods, including schools, parks, shopping, and dining options. Read reviews from current residents to get a real feel for the community.",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Dedicated Customer Support",
    description:
      "Our support team is always ready to assist you with any questions or concerns. Access a wealth of resources and guides to help you through every step of renting, leasing, or owning",
  },
  {
    icon: <SettingsRoundedIcon />,
    title: "Secure Application Process",
    description:
      "Apply for properties securely online with confidence. Monitor the status of your applications and communicate directly with property managers.",
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#06090a",
      }}>
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}>
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}>
          <Typography component="h2" variant="h4">
            Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation. Enjoy reliable customer
            support and precision in every detail.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor: "grey.900",
                }}>
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
