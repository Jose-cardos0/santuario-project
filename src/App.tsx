import { createBrowserRouter } from "react-router-dom";

//pages
import { Home } from "./Pages/Home";

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
    ],
  },
]);

export { router };
