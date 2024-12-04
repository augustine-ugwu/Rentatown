import { Box, Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import BlogCard from "./BlogCard";
import Img001 from "../images/home0012.jpg";
import Img002 from "../images/home0001.webp";
import Img003 from "../images/home0002.webp";
import Img004 from "../images/home0003.webp";
import Img005 from "../images/home0004.jpg";
import Img006 from "../images/home0005.jpg";
import Img007 from "../images/home0006.jpg";
import Img008 from "../images/home0007.jpg";
import Img009 from "../images/home0008.jpg";
import Img010 from "../images/home0009.webp";
import Img011 from "../images/home0010.jpg";
import Img012 from "../images/home0011.jpg";

const blogPosts = [
  {
    avatar: "path/to/avatar1.jpg",
    date: "March 5, 2024",
    readTime: "8 mins read",
    image: Img001,
    title: "How to Start Your Home Ownership Journey",
    content:
      "Discover the steps to transition from renting to owning a home with Rent2Own. Learn about the benefits, the process, and how to get started on your path to homeownership.",
  },
  {
    avatar: "path/to/avatar2.jpg",
    date: "April 10, 2024",
    readTime: "10 mins read",
    image: Img002,
    title: "Top 5 Benefits of Rent-to-Own Programs",
    content:
      "Rent-to-own programs offer a unique path to homeownership. Explore the top 5 benefits, including building equity, flexible terms, and more.",
  },
  {
    avatar: "path/to/avatar3.jpg",
    date: "May 15, 2024",
    readTime: "7 mins read",
    image: Img003,
    title: "Understanding Rent-to-Own Agreements",
    content:
      "Get a detailed breakdown of rent-to-own agreements. Learn about the key terms, conditions, and what you need to know before signing.",
  },
  {
    avatar: "path/to/avatar4.jpg",
    date: "June 20, 2024",
    readTime: "9 mins read",
    image: Img004,
    title: "Success Stories: From Renters to Homeowners",
    content:
      "Read inspiring success stories of individuals who successfully transitioned from renting to owning their dream homes through Rent2Own.",
  },
  {
    avatar: "path/to/avatar5.jpg",
    date: "July 25, 2024",
    readTime: "12 mins read",
    image: Img005,
    title: "The Financial Benefits of Rent-to-Own",
    content:
      "Explore the financial advantages of rent-to-own programs. Understand how you can build credit, save for a down payment, and secure a future home.",
  },
  {
    avatar: "path/to/avatar6.jpg",
    date: "August 30, 2024",
    readTime: "6 mins read",
    image: Img006,
    title: "Choosing the Right Rent-to-Own Home",
    content:
      "Learn how to choose the right rent-to-own home. Tips on evaluating properties, considering your needs, and making the best decision for your future.",
  },
  {
    avatar: "path/to/avatar7.jpg",
    date: "September 5, 2024",
    readTime: "11 mins read",
    image: Img007,
    title: "Rent-to-Own vs. Traditional Renting",
    content:
      "Compare rent-to-own programs with traditional renting. Understand the differences, benefits, and which option might be best for you.",
  },
  {
    avatar: "path/to/avatar8.jpg",
    date: "October 10, 2024",
    readTime: "8 mins read",
    image: Img008,
    title: "Common Pitfalls in Rent-to-Own Agreements",
    content:
      "Learn about common pitfalls in rent-to-own agreements and how to avoid them. Ensure you're fully informed and prepared for a smooth process.",
  },
  {
    avatar: "path/to/avatar9.jpg",
    date: "November 15, 2024",
    readTime: "13 mins read",
    image: Img009,
    title: "The Future of Rent-to-Own Programs",
    content:
      "Discover the future trends in rent-to-own programs. Stay ahead of the curve with insights into how these programs are evolving.",
  },
  {
    avatar: "path/to/avatar10.jpg",
    date: "December 20, 2024",
    readTime: "9 mins read",
    image: Img010,
    title: "Rent-to-Own: A Guide for First-Time Homebuyers",
    content:
      "A comprehensive guide for first-time homebuyers considering rent-to-own options. Get tips, advice, and a step-by-step plan to get started.",
  },
  {
    avatar: "path/to/avatar11.jpg",
    date: "January 10, 2025",
    readTime: "7 mins read",
    image: Img011,
    title: "Legal Considerations in Rent-to-Own",
    content:
      "Understand the legal considerations in rent-to-own agreements. Learn about your rights, responsibilities, and how to protect your interests.",
  },
  {
    avatar: "path/to/avatar12.jpg",
    date: "February 5, 2025",
    readTime: "10 mins read",
    image: Img012,
    title: "Rent2Own: Your Pathway to Homeownership",
    content:
      "Explore how Rent2Own can help you achieve homeownership. Learn about our program, benefits, and how we support you throughout your journey.",
  },
];

export default function Blog() {
  return (
    <Container
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
          width: { xs: "100%" },
        }}>
        <Typography
          component="h2"
          variant="h4"
          textAlign={{ xs: "left", md: "center" }}
          mb={2}>
          Read Our Blog Posts
        </Typography>
        <Typography
          variant="h6"
          textAlign={{ xs: "left", md: "center" }}
          sx={{ color: "grey.600" }}>
          There&apos;s no place like it.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {blogPosts.map((post, index) => (
          <Grid item key={index} xs={12} sm={6} lg={4}>
            <BlogCard {...post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
