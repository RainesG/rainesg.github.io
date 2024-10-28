import { Gallery, ErrorPage, Home } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
]);
