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
import { Toaster } from 'react-hot-toast'
import NotFound from './Components/Shared/NotFound/NotFound';
import Chefpage from './Components/Chefpage/Chefpage';
import OurChefs from './Components/Chefpage/OurChefs';
import Homecookrecipe from './Components/Chefpage/Homecookrecipe';

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
                path: 'recipes/:name',
                element: <Recipe></Recipe>
            },
            {
                path: 'homecookrecipes/:name',
                element: <Homecookrecipe></Homecookrecipe>
            },
            {
                path: 'ourchef',
                element: <OurChefs></OurChefs>
            }
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <Toaster />
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>,
)
