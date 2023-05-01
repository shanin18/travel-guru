import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import LoginLayout from '../Layouts/LoginLayout';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import HotelsLayout from '../Layouts/HotelsLayout';
import Hotels from '../Pages/Hotels/Hotels';
import BookingLayout from '../Layouts/BookingLayout';
import Private from './Private';

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    },
    {
        path:"/",
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    },
    {
        path:"/",
        element:<HotelsLayout></HotelsLayout>,
        children:[
            {
                path:"/hotels",
                element:<Private><Hotels></Hotels></Private>,
                loader: ()=> fetch("http://localhost:5000/hotels")
            }
        ]
    },
    {
        path:"/booking",
        element:<BookingLayout></BookingLayout>
    }
])

export default router;