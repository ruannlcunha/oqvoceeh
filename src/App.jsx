import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  
  return (
      <RouterProvider router={router} />
  );
}

export default App;
