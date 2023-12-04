import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/Register/RegisterPage";
import Login from "./pages/Login/LoginPage";
import HomePage from "./pages/Home/homePage";
import RestaurantDetail from "./pages/RestaurantDetail/restaurantDetail";
import PublicLayout from "./layouts/public.layout";
import Provider from "./stores/providers";
import PrivateLayout from "./layouts/private.layout";
import UserDetailsPage from "./pages/UserDetails/UserDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/restaurant/:id",
        element: <RestaurantDetail />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: '/users',
    element: <PrivateLayout/>,
    children:[
      {
        path:'',
        element:<UserDetailsPage/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
