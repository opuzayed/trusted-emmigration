import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import ServiceData from '../ServiceData/ServiceData';
import './Home.css';
const Home = () => {
    const servicesData = useLoaderData();
    
    return (
        <div>
           <Carousel></Carousel>
            <div className='card-style'>
                {
                    servicesData.map(sData =><ServiceData
                    key={sData._id}
                    sData={sData}
                    ></ServiceData>)
                }
            </div>
            <div className='flex flex-col items-center mt-5'>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-orange-600">Show All Services</button>
            </div>

        </div>
    );
};

export default Home;