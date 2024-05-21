import ReactDOM from "react-dom/client";
import Home from "./src/components/Home";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import Nav from "./src/components/Nav";
import About from "./src/components/About";
import Vision from "./src/components/Vision"

const App =()=>{
  
  return (
    <div className="bg-black mx-auto text-white  w-full overflow-x-hidden">
      <Nav />
      <Outlet />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
const Routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/vision",
        element: <Vision />,
      },
    ],
  },
]);

root.render(<RouterProvider router={Routing} />);
