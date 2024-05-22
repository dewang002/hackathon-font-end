import ReactDOM from "react-dom/client";
import Home from "./src/components/Home";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import Nav from "./src/components/Nav";
import About from "./src/components/About";
import Vision from "./src/components/Vision";
import Offering from "./src/components/Offering";
import Contact from "./src/components/Contact";
import baseRelativePath from './path.js';

const App = () => {
  return (
    <div className="bg-black mx-auto text-white  w-full overflow-x-hidden">
      <Nav />
      <Outlet />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const Routing = createBrowserRouter([
  {
    path: `${baseRelativePath}/`,
    element: <App />,
    children: [
      {
        path:`${baseRelativePath}/`,
        element: <Home />,
      },
      {
        path: `${baseRelativePath}/about`,
        element: <About />,
      },
      {
        path: `${baseRelativePath}/vision`,
        element: <Vision />,
      },
      {
        path: `${baseRelativePath}/offering`,
        element: <Offering />,
      },
      {
        path: `${baseRelativePath}/contact`,
        element: <Contact />,
      },
    ],
  },
]);

root.render(<RouterProvider basename={process.env.PUBLIC_URL} router={Routing} />);
