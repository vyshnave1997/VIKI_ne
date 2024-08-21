import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/hero-image.png'; // New .jpg image for the hero section

const Hero = () => {
    return (
        <>
            <div className="hero" id='hero'>
                <div>
                    <NavBar />
                </div>
                
                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
                    <div id='hero' className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
                                Transforming Technology into Your Competitive Advantage
                            </h1>
                            <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
                                We are a team of highly motivated and skilled developers dedicated to delivering only the best software.
                            </div>
                            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                                <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                    Learn more
                                   
                                </Link>
                            </div>
                        </div>
                        {/* Removed the side image section */}
                        <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                            <img alt="Hero Image" className="rounded-t float-right duration-1000 w-full mb-5px" src={heroImg} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
