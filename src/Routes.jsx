import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LoginPage from "pages/LoginPage";
import Homepage from "pages/Homepage";
import ChatbotPage from "pages/ChatbotPage";
import AboutUs from "pages/AboutUs";
import KnowMoreFrame from "pages/KnowMoreFrame";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "loginpage",
      element: <LoginPage />,
    },
    {
      path: "homepage",
      element: <Homepage />,
    },
    {
      path: "chatbotpage",
      element: <ChatbotPage />,
    },
    {
      path: "aboutus",
      element: <AboutUs />,
    },
    {
      path: "knowmoreframe",
      element: <KnowMoreFrame />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
