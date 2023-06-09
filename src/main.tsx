import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Members from "./components/Members";
import Login from "./components/Login";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import { AuthProvider } from "./utils/AuthProvider";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after{
    box-sizing:border-box;
    padding: 0;
    margin: 0;
  }
  
  html {
    scroll-behavior:smooth; font-family: 'Montserrat', sans-serif;
  }
  
  a {
    text-decoration:none; color:inherit; cursor:pointer;
  }
  
  button {
    background-color:transparent; color:inherit; border-width:0; padding:0; cursor:pointer;
  }
  
  input::-moz-focus-inner {
    border:0; padding:0; margin:0;
  }
  
  ul, ol, dd {
    margin:0; padding:0; list-style:none;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin:0; font-size:inherit; font-weight:inherit;
  }

  p {
    margin:0;
    }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute element={<App />} />,
    children: [
      {
        path: "users",
        element: <Members />,
      },
      {
        path: "memberships",
        element: <Members />,
      },
      {
        path: "types",
        element: <Members />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider>
    <GlobalStyle />
    <RouterProvider router={router} />
  </AuthProvider>
);
