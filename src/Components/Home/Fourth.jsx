import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";

const Fourth = () => {
    return (
        <div className='py-12 md:py-16 bg-[#FFFAFA]'>
            <div className='max-w-7xl mx-auto px-2'>
                <h2 className='text-4xl text-center md:text-4xl font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#EA1E34] to-[#EB1555]'>Meet The Community</h2>

                <h2 className='text-xl text-center text-slate-600 my-6 leading-snug'>Dive into exclusive tutorials, step-by-step guides, and expert advice to enhance your culinary journey. Whether you're a beginner or an experienced cook, this section will inspire you to explore new flavors, refine your techniques, and create extraordinary dishes. Embark on a culinary adventure and learn from the best chef to unleash your inner culinary maestro.</h2>


                <div>
                    <Marquee className='flex gap-10 p-2' loop={0} pauseOnHover={true}>



                        <div className='rounded-lg bg-[#FFFAFA] h-80 w-[470px] p-6 mx-8 shadow-md'>
                            <div className='flex gap-6'>
                                <img className='w-24 h-24 rounded-full' src="/home/home-2.jpg" alt="" />
                                <div className='flex flex-col justify-center' >
                                    <h2 className='text-xl font-semibold'>David Miller</h2>
                                    <h2>Residence: America</h2>
                                    <h2>Age: 31</h2>
                                </div>
                            </div>
                            <div className='mt-4'>

                                <p className=''>David Miller is an enthusiastic home cook hailing from the United States. Cooking is not just a hobby for David; it's a passion that permeates every aspect of his life. Living in America, he draws inspiration from the rich and diverse culinary traditions found throughout the country.</p>
                            </div>
                        </div>

                        <div className='rounded-lg bg-[#FFFAFA] h-80 w-[470px] p-6 mx-8 shadow-md'>
                            <div className='flex gap-6'>
                                <img className='w-24 h-24 rounded-full' src="/home/home-3.jpg" alt="" />
                                <div className='flex flex-col justify-center' >
                                    <h2 className='text-xl font-semibold'>Jonathan Robby</h2>
                                    <h2>Residence: Germany</h2>
                                    <h2>Age: 33</h2>
                                </div>
                            </div>
                            <div className='mt-4'>

                                <p className=''>Jonathan Robby is a dedicated home cook residing in Germany. Hailing from a multicultural background, Jonathan's culinary journey is influenced by a rich tapestry of flavors and techniques from around the world. Drawing inspiration from his travels and diverse cultural experiences, he brings a unique twist to traditional German cuisine.</p>
                            </div>
                        </div>

                        <div className='rounded-lg bg-[#FFFAFA] h-80 w-[470px] p-6 mx-8 shadow-md'>
                            <div className='flex gap-6'>
                                <img className='w-24 h-24 rounded-full' src="/home/home-2.jpg" alt="" />
                                <div className='flex flex-col justify-center' >
                                    <h2 className='text-xl font-semibold'>David Miller</h2>
                                    <h2>Residence: America</h2>
                                    <h2>Age: 31</h2>
                                </div>
                            </div>
                            <div className='mt-4'>

                                <p className=''>David Miller is an enthusiastic home cook hailing from the United States. Cooking is not just a hobby for David; it's a passion that permeates every aspect of his life. Living in America, he draws inspiration from the rich and diverse culinary traditions found throughout the country.</p>
                            </div>
                        </div>
                    </Marquee>

                </div>

                <div className=' flex justify-center mt-12'>
                    <Link to='/register' className='py-3 md:px-8 px-4 w-full md:w-60 text-center border text-lg bg-gradient-to-r from-[#EA1E34] to-[#EB1555] text-white rounded'> Join Our Community </Link>
                </div>

            </div>

        </div>
    );
};

export default Fourth;