import React from "react";
import {
  Container,
  Box,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
  Button,
} from "@mui/material";

const ContactForm = () => {
  const [formValues, setFormValues] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (prop) => (event) => {
    setFormValues({ ...formValues, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formValues);
  };

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
        gap: { xs: 3, sm: 6 },
      }}>
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: "center",
        }}>
        <Typography component="h2" variant="h4">
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "grey.400", textAlign: "center" }}>
          At Rentaown, we&apos;re here to help you every step of the way on your
          real estate journey. Whether you have questions about a listing, need
          assistance with your property, or simply want to learn more about our
          services, our dedicated team is ready to assist you.
        </Typography>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: { xs: "100%", md: "60%" },
        }}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="name">Name</InputLabel>
          <OutlinedInput
            id="name"
            type="text"
            value={formValues.name}
            onChange={handleChange("name")}
            label="Name"
          />
        </FormControl>
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <OutlinedInput
            id="email"
            type="email"
            value={formValues.email}
            onChange={handleChange("email")}
            label="Email address"
          />
        </FormControl>
        <TextField
          id="message"
          label="Message"
          multiline
          rows={4}
          variant="standard"
          value={formValues.message}
          onChange={handleChange("message")}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default ContactForm;
