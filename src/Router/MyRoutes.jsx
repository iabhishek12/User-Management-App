import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AddUser from "../Pages/AddUser";
import EditUser from "../Pages/EditUser";
import ViewUser from "../Pages/ViewUser";
import ErrorPage from "../Pages/ErrorPage";

let MyRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/add",
        element: <AddUser/>,
      },
      {
        path: "/edit/:id",
        element: <EditUser />,
      },
      {
        path: "/view/:id",
        element: <ViewUser />,
      },
    
    ],
  },

  { path: "*", element: <ErrorPage/> }, {/*error handling pade */}
]);

export default MyRoutes;
