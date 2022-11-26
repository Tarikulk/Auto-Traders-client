import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import SignIn from "../../Pages/Authentication/SignIn";
import SignUp from "../../Pages/Authentication/SignUp";
import CategoriesCar from "../../Pages/Home/CategoriesCar/CategoriesCar";
import Home from "../../Pages/Home/Home/Home";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/categoriesCar/:id",
                element: <PrivateRoute><CategoriesCar></CategoriesCar></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/categoriesCar/${params.id}`) 
            },
            {
                path:"/signIn",
                element: <SignIn></SignIn>
            },
            {
                path:"/signUp",
                element: <SignUp></SignUp>
            }
        ], 
    },
    {
        path:"/dashboard", 
        element: <DashboardLayout></DashboardLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
           
        ]
    }
])