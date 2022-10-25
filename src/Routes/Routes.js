import React from "react";
import {
    createBrowserRouter,

} from "react-router-dom";
import CategoryList from "../AllPage/CategoryList/CategoryList";
import Courses from "../AllPage/Courses/Courses";
import Home from "../AllPage/Home/Home";
import Login from "../AllPage/ShareFile/Login/Login";
import Register from "../AllPage/ShareFile/Login/Register";
import Main from "../Main/Main";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                loader: () => fetch('http://localhost:5000/course'),
                element: <Home></Home>
            },

            {
                path: "/catergory/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <CategoryList />

            },
            {
                path: "/cours/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/cours/${params.id}`),
                element: <Courses />
            },

            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }








        ]
    }


])


const Routes = () => {
    return (
        <div>

        </div>
    );
};

export default Routes;