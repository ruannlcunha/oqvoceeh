import { createHashRouter } from "react-router-dom";
import { HomeScreen, GayScreen, RootScreen } from "../ui/screens";

export const router = createHashRouter([
  {
    path: `/`,
    element: <RootScreen />,
    children: [
      {
        path: `/`,
        element: <HomeScreen />,
      },
      {
        path: `/gay`,
        element: <GayScreen />,
      },
    ],
  },
]);
