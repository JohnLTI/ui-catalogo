import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { CardHb } from "./components/Hamb";
import { CardPizza } from "./components/Pizza";
import { CardHotDog } from "./components/HotDog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <CardHb />,
      },
      {
        path: "/Pizza",
        element: <CardPizza />,
      },
      {
        path: "/HotDog",
        element: <CardHotDog />,
      },
    ],
  },
]);
