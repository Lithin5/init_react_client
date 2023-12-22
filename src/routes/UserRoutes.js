import React, { lazy } from "react";
import Layout from "../component/Layout";
import Loadable from "../component/Loadable";

const Admin = Loadable(lazy(() => import('../Pages/Admin')));
const CreateBook = Loadable(lazy(() => import('../Pages/Admin/Createbook')));

const UserRoutes = {
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "/dashboard",
            element: <Admin />
        },
        {
            path: "/createbook",
            element: <CreateBook />
        }
    ]
}

export default UserRoutes;