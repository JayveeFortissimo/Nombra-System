import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import AdminDashboard from "@/pages/AdminDashboard";
import UserDashboard from "@/pages/UserDashboard";
import Wrapper from "@/Wrapper";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element:<Wrapper/>,
      children:[
        {
          index:true,
          element:<Login/>
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
