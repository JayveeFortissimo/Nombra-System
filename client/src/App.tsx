import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import AdminDashboard from "@/pages/AdminDashboard";
import UserDashboard from "@/pages/UserDashboard";
import Wrapper from "@/Wrapper";
import ErrorPage from "@/pages/ErrorPage";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element:<Wrapper/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          index:true,
          element:<Login/>
        },
        {
          path:"register",
          element:<Register/>
        },
        {
          path:"admin",
          element:<AdminDashboard/>
        },
        {
          path:"user",
          element:<UserDashboard/>
        }
      ]
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App;
