import { createBrowserRouter } from 'react-router-dom';
import Home from '../../components/Home/Home';
import Service from '../../components/Service/Service';
import Services from '../../components/Services/Services';
import Main from '../../layout/Main/Main';

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
                element:<Services></Services>
            },
            {
                path:'/service/:id',
                element:<Service></Service>,
                loader:({params}) => fetch(`http://localhost:5000/service/${params.id}`)
            }
        ]
        
    }
]);