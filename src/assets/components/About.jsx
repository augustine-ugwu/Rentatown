import { Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function About() {
  return (
    <Container
      id="about"
      sx={{
        pt: { xs: 14, sm: 16 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}>
      <Box
        sx={{
          width: { sm: "100%" },
        }}>
        <Typography
          component="h2"
          variant="h4"
          textAlign={{ sm: "left", md: "center" }}
          mb={2}>
          About Us
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "grey.400", textAlign: "justify" }}>
          At Rentaown, we&apos;re dedicated to simplifying the process of
          finding your perfect home. Whether you&apos;re looking to rent, buy,
          or lease, we&apos;re here to make the journey as smooth as possible.
          With an extensive database of listings, we offer a wide range of
          properties to suit every need and preference. From cozy apartments in
          the heart of the city to spacious family homes in serene suburbs, our
          platform caters to diverse lifestyles and budgets.
          <p>
            What sets us apart is our commitment to providing a seamless and
            transparent experience for both tenants and property owners. Our
            user-friendly interface allows you to browse through listings
            effortlessly, while our comprehensive search filters help you narrow
            down your options to find the ideal property. For property owners,
            we offer a hassle-free platform to list and manage their properties,
            ensuring maximum visibility and efficiency in the rental or sale
            process. At Rentaown, we understand that finding the perfect home is
            more than just a transaction, it&apos;s about finding a place where
            memories are made and dreams are realized. Let us help you find your
            next home sweet home. Welcome to Rentaown where your perfect home
            awaits.
          </p>
        </Typography>
      </Box>
      <Box>
        <Typography
          component="h4"
          variant="h6"
          textAlign={"left"}
          my={2}
          fontWeight={600}>
          Mission Statement
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "grey.400", textAlign: "justify" }}>
          At Rentaown, our mission is to empower individuals and families to
          find their perfect home, while providing property owners with a
          seamless and efficient platform to list and manage their properties.
          We are committed to delivering exceptional service, transparency, and
          reliability throughout the real estate journey, ensuring that every
          interaction with Rentaown is a positive and enriching experience.
          <p>
            Driven by our passion for connecting people with their ideal living
            spaces, we strive to offer a diverse range of high-quality
            properties that cater to various lifestyles and preferences. By
            leveraging cutting-edge technology and innovative solutions, we aim
            to simplify the property search and transaction process, making it
            easier and more accessible for everyone involved. Central to our
            mission is a deep-rooted commitment to integrity, honesty, and
            ethical business practices. We prioritize the needs and interests of
            our customers above all else, striving to exceed their expectations
            at every turn. Whether you&apos;re searching for your dream home or
            looking to list your property for rent or sale, Rentaown is here to
            support you every step of the way, providing personalized guidance
            and support to ensure a seamless and successful real estate
            experience. At Rentaown, we believe that everyone deserves to find a
            place they can truly call home. Our mission is to make that dream a
            reality for individuals and families across the globe, one property
            at a time.
          </p>
        </Typography>
      </Box>
    </Container>
  );
}
