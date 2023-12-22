import React, { lazy } from "react";
import Layout from "../component/Layout";
import Loadable from "../component/Loadable";
const Home = Loadable(lazy(() => import('../Pages/Home')));
const List = Loadable(lazy(() => import('../Pages/List')));
const Register = Loadable(lazy(() => import('../Pages/Register')));
const Login = Loadable(lazy(() => import('../Pages/Login')));

const CommonRoutes = {
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/list",
            element: <List />
        }
    ]
}

export default CommonRoutes;