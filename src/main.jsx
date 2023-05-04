import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Landing from './Components/Landing/Landing.jsx';
import Home from './Components/Home/Home.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Register from './Components/Register/Register.jsx';
import Login from './Components/Login/Login.jsx';
import Recipe from './Components/Recipe/Recipe.jsx';
import AuthProvider from './Components/Authentication/AuthProvider';
import PrivateRoute from './Components/Route/PrivateRoute';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing></Landing>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'recipe/:id',
                element: <PrivateRoute><Recipe></Recipe></PrivateRoute>
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>,
)
