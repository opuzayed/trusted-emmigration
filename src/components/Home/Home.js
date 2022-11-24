import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import ServiceData from '../ServiceData/ServiceData';
import './Home.css';
import Skills from './../Skills/Skills';
import Country from '../Country/Country';
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
                <Link to='/services'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-orange-600 mb-5">Show All Services</button></Link>
            </div>
                <section>
                    <Skills></Skills>
                </section>
                <section>
                    <Country></Country>
                </section>
        </div>
    );
};

export default Home;