import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import AppLayout from "./pages/AppLayout";
import ContactInfo from "./pages/ContactInfo";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Posts from "./pages/Posts";
import RequireAuth from "./pages/RequireAuth";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/contact/:id",
        element: <ContactInfo />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        // yha hum protected route bna rahre hai
        path: "/posts",
        element: (
          <RequireAuth>
            <Posts />
          </RequireAuth>
        ),
      },

      {
        path: "/products",
        element: <Product />
      }
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router}>App</RouterProvider>
    </div>

    // make it old way

    // <div>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<AppLayout />} chil />
    //     </Routes>
    //   </BrowserRouter>
    // </div>
  );
};

export default App;
