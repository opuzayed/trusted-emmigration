import { createBrowserRouter } from 'react-router-dom';
import About from '../../components/About/About';
import AddService from '../../components/AddService/AddService/AddService';
import Blog from '../../components/Blog/Blog';
import Home from '../../components/Home/Home';
import Login from '../../components/Login/Login/Login';
import Reviews from '../../components/Reviews/Reviews/Reviews';
import Service from '../../components/Service/Service';
import Services from '../../components/Services/Services';
import SignUp from '../../components/SignUp/SignUp/SignUp';
import Main from '../../layout/Main/Main';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('http://localhost:5000/home')
            },
            {
                path:'/services',
                element:<Services></Services>,
                loader:() => fetch('http://localhost:5000/services')
            },
            {
                path:'/service/:id',
                element:<Service></Service>,
                loader:({params}) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>,
                loader:({params}) => fetch(`http://localhost:5000/addservice/${params.id}`)
            },
            {
                path:'/addservice',
                element:<PrivateRoute><Reviews></Reviews></PrivateRoute>
            },

            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
               path:'/login',
               element:<Login></Login> 
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/review',
                element:<PrivateRoute><Reviews></Reviews></PrivateRoute>
            }
            
        ]
        
    }
]);