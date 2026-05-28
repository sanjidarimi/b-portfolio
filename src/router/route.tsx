import { createBrowserRouter } from "react-router";
import { ProjectDetails } from "../components/ProjectDetails";
import HomePage from "../pages/Home";
import  RootLayout from "../layouts/RootLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, 
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/project/:projectId",
        element: <ProjectDetails />,
      },
    ],
  },
]);
