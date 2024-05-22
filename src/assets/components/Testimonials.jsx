import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const userTestimonials = [
  {
    avatar: <Avatar alt="Sani Ahmed" src="/static/images/avatar/1.jpg" />,
    name: "Sani Ahmed",
    testimonial:
      "Rentaown made finding a rental so easy! The advanced search filters saved me a lot of time. I found the perfect apartment in just a few days.",
  },
  {
    avatar: <Avatar alt="Michael Obinna" src="/static/images/avatar/2.jpg" />,
    name: "Michael Obinna",
    testimonial:
      "The virtual tours on Rentaown were incredibly detailed. I could see every corner of the house before deciding to visit in person. It made the whole process much more efficient.",
  },
  {
    avatar: <Avatar alt="Uche Johnson" src="/static/images/avatar/3.jpg" />,
    name: "Uche Johnson",
    testimonial:
      "I was worried about the paperwork, but Rentaown's secure application process was straightforward and hassle-free. I felt confident and informed throughout.",
  },
  {
    avatar: <Avatar alt="Kemi Olatunji" src="/static/images/avatar/4.jpg" />,
    name: "Kemi A. Olatunji",
    testimonial:
      "The variety of listings on Rentaown is impressive. From rentals to rent-to-own options, I found everything I needed. The detailed neighborhood insights were a huge plus!",
  },
  {
    avatar: <Avatar alt="Amanda Taiwo" src="/static/images/avatar/5.jpg" />,
    name: "Amanda Taiwo",
    testimonial:
      "Using Rentaown's platform was a game-changer. The virtual tours and advanced filters made it easy to find a home that fit all my criteria. Highly recommend!",
  },
  {
    avatar: <Avatar alt="Gabriel Matthew" src="/static/images/avatar/6.jpg" />,
    name: "Gabriel Matthew",
    testimonial:
      "Rentaown's support team was fantastic. They answered all my questions and guided me through the entire process, from searching to signing the lease. Excellent service!",
  },
];

export default function Testimonials() {
  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
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
          textAlign: { sm: "left", md: "center" },
        }}>
        <Typography component="h2" variant="h4" color="text.primary">
          Testimonials
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Discover why our customers love Rentaown. See how we excel in
          efficiency, durability, and satisfaction. Join us for quality,
          innovation, and reliable support.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                p: 1,
              }}>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  pr: 2,
                }}>
                <CardHeader
                  avatar={testimonial.avatar}
                  title={testimonial.name}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
