import { createBrowserRouter } from "react-router-dom";

//pages
import { Home } from "./Pages/Home";
import { Cronograma } from "./Pages/Cronograma";

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
    ],
  },
]);

export { router };
