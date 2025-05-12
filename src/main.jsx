import {createRoot} from "react-dom/client"
import "./index.css"

import Home from "./pages/Home.jsx"

import "bootstrap/dist/css/bootstrap.min.css"

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import AppNavbar from "./components/AppNavbar.jsx"

const router = createBrowserRouter([
  {
    path: "/",

    element: <AppNavbar />,
  },
])

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />)
