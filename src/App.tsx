import { createBrowserRouter } from "react-router-dom";

//pages
import { Home } from "./Pages/Home";
import { Cronograma } from "./Pages/Cronograma";
import { Fundadora } from "./Pages/Fundadora";
import { NossaHistoria } from "./Pages/NossaHistoria";

//header
import { MyHeaderRoot } from "./Components/MyHeaderRoot";

const router = createBrowserRouter([
  {
    element: <MyHeaderRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cronograma",
        element: <Cronograma />,
      },
      {
        path: "/fundadora",
        element: <Fundadora />,
      },
      {
        path: "/nossahistoria",
        element: <NossaHistoria />,
      },
    ],
  },
]);

export { router };
