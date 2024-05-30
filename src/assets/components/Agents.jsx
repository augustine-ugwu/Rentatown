import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
  Stack,
  TextField,
} from "@mui/material";
import AgentCard from "./AgentCard";
import agentImg1 from "../images/agent0012.jpg";
import agentImg2 from "../images/agent0011.jpg";
import agentImg3 from "../images/agent0013.jpg";
import agentImg4 from "../images/agent0014.jpg";
import agentImg5 from "../images/agent0015.jpg";
import agentImg6 from "../images/agent0016.jpg";
import agentImg7 from "../images/agent0017.jpg";
import agentImg8 from "../images/agent0018.jpg";
import agentImg9 from "../images/agent0019.jpg";
import agentImg10 from "../images/agent0020.jpg";
import agentImg11 from "../images/agent0023.jpg";
import agentImg12 from "../images/agent0022.jpg";

const agents = [
  {
    name: "Aisha Bello",
    company: "Khalid Real Estate Company",
    phone: "+2348199920110",
    totalSales: 21,
    priceRange: { min: 250000, max: 400000 },
    image: agentImg1,
  },
  {
    name: "Ahmed Bako",
    company: "Bako Realty",
    phone: "+2348123456789",
    totalSales: 15,
    priceRange: { min: 300000, max: 500000 },
    image: agentImg12,
  },
  {
    name: "Susan Matthew",
    company: "Matthew's Properties",
    phone: "+2348129876543",
    totalSales: 30,
    priceRange: { min: 200000, max: 450000 },
    image: agentImg3,
  },
  {
    name: "Adewale Johnson",
    company: "Johnson Realty",
    phone: "+2348112345678",
    totalSales: 25,
    priceRange: { min: 280000, max: 420000 },
    image: agentImg4,
  },
  {
    name: "Gregory Phillip",
    company: "Greg's Homes",
    phone: "+2348109876543",
    totalSales: 18,
    priceRange: { min: 260000, max: 380000 },
    image: agentImg5,
  },
  {
    name: "Chris Uche",
    company: "Chris Real Estate",
    phone: "+2348098765432",
    totalSales: 22,
    priceRange: { min: 290000, max: 410000 },
    image: agentImg6,
  },
  {
    name: "David Adebayo",
    company: "Ade Realty",
    phone: "+2348087654321",
    totalSales: 19,
    priceRange: { min: 270000, max: 390000 },
    image: agentImg7,
  },
  {
    name: "Jessica Olatunji",
    company: "The Olatunji's Properties",
    phone: "+2348076543210",
    totalSales: 23,
    priceRange: { min: 300000, max: 450000 },
    image: agentImg2,
  },
  {
    name: "William Tayo",
    company: "Tayo's Real Estate",
    phone: "+2348065432109",
    totalSales: 20,
    priceRange: { min: 250000, max: 400000 },
    image: agentImg9,
  },
  {
    name: "Daniel White",
    company: "White Realty",
    phone: "+2348054321098",
    totalSales: 17,
    priceRange: { min: 280000, max: 420000 },
    image: agentImg10,
  },
  {
    name: "Joseph Harris",
    company: "Joe's Homes",
    phone: "+2348043210987",
    totalSales: 21,
    priceRange: { min: 260000, max: 380000 },
    image: agentImg11,
  },
  {
    name: "Matthew Clark",
    company: "Clark Properties",
    phone: "+2348032109876",
    totalSales: 26,
    priceRange: { min: 300000, max: 450000 },
    image: agentImg8,
  },
];

const Agents = () => {
  return (
    <Container
      id="contact"
      sx={{
        pt: { xs: 14, sm: 16 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3 },
      }}>
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { xs: "left", sm: "center" },
        }}>
        Search Our Agents Directory
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignSelf="center"
        spacing={1}
        useFlexGap
        sx={{ width: { xs: "100%", sm: "auto" } }}>
        <TextField
          id="outlined-basic"
          hiddenLabel
          size="small"
          variant="outlined"
          aria-label="Search for place, neighbourhood, school or agent"
          placeholder="Search: Place, Neighbourhood, School or Agent"
          inputProps={{
            autoComplete: "on",
            "aria-label": "Place, Place, Neighbourhood or Agent",
          }}
        />
        <Button variant="contained" color="primary">
          Search
        </Button>
      </Stack>
      <Box>
        <Typography
          component="h1"
          variant="h5"
          py={2}
          color="text.primary"
          fontWeight={600}
          sx={{
            textAlign: { sm: "center" },
          }}>
          Here are a few agents that might fit your needs.
        </Typography>
        <Grid container spacing={2}>
          {agents.map((agent, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <AgentCard agent={agent} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Button variant="contained">View More Agents</Button>
    </Container>
  );
};

export default Agents;
