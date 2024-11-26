import { createBrowserRouter } from "react-router-dom";

//pages
import { Home } from "./Pages/Home";
import { Cronograma } from "./Pages/Cronograma";
import { Fundadora } from "./Pages/Fundadora";
import { NossaHistoria } from "./Pages/NossaHistoria";
import { Midias } from "./Pages/Midias";
import { Noticias } from "./Pages/Noticias";
import { QueroAjudar } from "./Pages/QueroAjudar";

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
      {
        path: "/midias",
        element: <Midias />,
      },
      {
        path: "/noticias",
        element: <Noticias />,
      },
      {
        path: "/queroajudar",
        element: <QueroAjudar />,
      },
    ],
  },
]);

export { router };
