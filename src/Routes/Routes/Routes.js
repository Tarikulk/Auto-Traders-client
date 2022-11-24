import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import SignIn from "../../Pages/Authentication/SignIn";
import SignUp from "../../Pages/Authentication/SignUp";
import Home from "../../Pages/Home/Home/Home";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";

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
                path:"/signIn",
                element: <SignIn></SignIn>
            },
            {
                path:"/signUp",
                element: <SignUp></SignUp>
            }
        ]
    }
])