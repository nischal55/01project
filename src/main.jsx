import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import About from './about';
import ProductDesc from './ProductDesc';
import AdminLogin from './Components/AdminSite/adminLogin';
import FilterCategory from './Components/Categories/FilterCategory';
import Search from './Components/Search';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path:'/ProductDesc/:id',
    element:<ProductDesc/>
  },
  {
    path:'/admin',
    element:<AdminLogin/>
  },
  {
    path:'/search/:search',
    element:<Search/>
  },
  {
    path:'/category/:category_name',
    element:<FilterCategory/>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
