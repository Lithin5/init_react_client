import React, { lazy } from "react";
import Layout from "./component/layout";
import Loadable from "./component/Loadable";
import { Route, Routes } from "react-router-dom";
import AdminProtectedRoute from "./utils/AdminProtectedRoute";
import UserProtectedRoute from "./utils/UserProtectedRoute";

const Home = Loadable(lazy(() => import('./pages/home')));
const Login = Loadable(lazy(() => import('./pages/login')));
const Register = Loadable(lazy(() => import('./pages/register')));
const List = Loadable(lazy(() => import('./pages/list')));
const CreateBook = Loadable(lazy(() => import('./pages/admin/createbook')));
const MyBooks = Loadable(lazy(() => import('./pages/user/mybooks')));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/list" element={<List />} />
        <Route path="/createbook" element={
          <AdminProtectedRoute>
            <CreateBook />
          </AdminProtectedRoute>
        } />
        <Route path="/mybooks" element={
          <UserProtectedRoute>
            <MyBooks />
          </UserProtectedRoute>
        } />
      </Route>
    </Routes>
  );
}

export default App;
