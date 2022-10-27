import React from "react";
import {
    createBrowserRouter,

} from "react-router-dom";
import Blog from "../AllPage/Blog/Blog";
import CategoryList from "../AllPage/CategoryList/CategoryList";
import Courses from "../AllPage/Courses/Courses";
import Faq from "../AllPage/Faq/Faq";
import Home from "../AllPage/Home/Home";
import Login from "../AllPage/ShareFile/Login/Login";
import Register from "../AllPage/ShareFile/Login/Register";
import Main from "../Main/Main";
import PrivetRouter from "./PrivetRouter";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                loader: () => fetch('https://assignment-10-serversite-rakib011110.vercel.app/course'),
                element: <Home></Home>
            },

            {
                path: "/catergory/:id",
                loader: ({ params }) => fetch(`https://assignment-10-serversite-rakib011110.vercel.app/category/${params.id}`),
                element: <CategoryList />

            },
            {
                path: "/cours/:id",
                loader: ({ params }) => fetch(`https://assignment-10-serversite-rakib011110.vercel.app/cours/${params.id}`),
                element: <PrivetRouter><Courses /></PrivetRouter>
            },

            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/blog",
                element: <Blog />
            },

            {
                path: "/faq",
                element: <Faq />
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