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

        </div>
    );
};

export default Home;