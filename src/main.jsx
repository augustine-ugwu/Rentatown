import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./routes/NotFoundPage.jsx";
import HomePage from "./routes/HomePage.jsx";
import Contact from "./routes/ContactPage.jsx";
import Blog from "./routes/Blog.jsx";
import FAQ from "./routes/FAQ.jsx";
import FindAgent from "./routes/FindAgent.jsx";
import Privacy from "./routes/Privacy.jsx";
import SignIn from "./routes/SignIn.jsx";
import SignUp from "./routes/SignUp.jsx";
import TACs from "./routes/TACs.jsx";
import AboutPage from "./routes/AboutPage.jsx";

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
    path: "/blog",
    element: <Blog />,
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
