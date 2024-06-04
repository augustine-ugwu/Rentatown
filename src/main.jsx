import React from "react";
import ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./routes/NotFoundPage.jsx";
import HomePage from "./routes/HomePage.jsx";
import Contact from "./routes/ContactPage.jsx";
import BlogPage from "./routes/BlogPage.jsx";
import FAQ from "./routes/FaqPage.jsx";
import FindAgent from "./routes/FindAgent.jsx";
import Privacy from "./routes/Privacy.jsx";
import SignIn from "./routes/SignIn.jsx";
import SignUp from "./routes/SignUp.jsx";
import TACs from "./routes/TACs.jsx";
import AboutPage from "./routes/AboutPage.jsx";
import Listings from "./routes/ListingsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/listings",
    element: <Listings />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/findagent",
    element: <FindAgent />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/tacs",
    element: <TACs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
