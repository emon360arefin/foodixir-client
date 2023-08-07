import React from 'react';
import { Link } from 'react-router-dom';


const Third = () => {
    return (
        <div className='py-12 md:py-16 bg-[#FFFAFA]'>
            <div className='max-w-7xl mx-auto px-2'>
                <h2 className='text-4xl text-center md:text-4xl font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#EA1E34] to-[#EB1555]'>Learn From The Best</h2>

                <h2 className='text-xl text-center text-slate-600 my-6 leading-snug'>Discover the culinary artists behind our delectable creations. Get to know our skilled and passionate chefs who bring their expertise, creativity, and love for food to every dish. Learn about their backgrounds, specialties, and the inspiration that drives their culinary mastery. Prepare to embark on a delightful gastronomic journey guided by our talented team of chefs.</h2>

                
                <div className='flex md:flex-row flex-col gap-6 md:gap-16 mt-12'>
                    <div className='w-full md:w-1/2'>
                        <img className='rounded-lg' src="/third.jpg" alt="" />
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col gap-6'>
                        <h2 className='text-3xl text-slate-800 font-semibold'>Expert Tips and Techniques from Top Chefs</h2>
                        <p className='text-lg'>
                            "Learn from the best chef" is a section where you can gain valuable culinary insights and skills from top chefs in the industry. Discover their secrets, techniques, and tips that will elevate your cooking to the next level. Dive into exclusive tutorials, step-by-step guides, and expert advice to enhance your culinary journey. Whether you're a beginner or an experienced cook, this section will inspire you to explore new flavors, refine your techniques, and create extraordinary dishes. Embark on a culinary adventure and learn from the best chef to unleash your inner culinary maestro.
                        </p>

                        <Link to='/blog' className='py-2 md:px-8 px-4 w-full md:w-40 text-center border bg-gradient-to-r from-[#EA1E34] to-[#EB1555] text-white rounded'> Learn More </Link>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Third;