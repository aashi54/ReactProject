import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import App from "./App";

const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/about",
          element: <About />,
        },

        {
          path: "/home",
          element: <Home />,
        },
      ],
    },
]);

export default appRouter;
