import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ContactForm from "./pages/Mycontact";
export const router = createBrowserRouter([

    {
        path: "/",
        element:<App/>,
        children:[
            {
                path: "/",
                element: <Home/>,
              },
              {
                path: "/login",
                element: <Login/>,
              },
              {
                path: "/Signup",
                element: <Signup/>,
              },
              {
                path: "/ContactForm",
                element: <ContactForm/>,
              },    
        ]
    },
    // {
        // path: "*",
        // element:<NotFound />,
    // }
  ]);