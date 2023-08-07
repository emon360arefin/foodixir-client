import React from 'react';

const Hero = (props) => {

    const { color } = props

    return (
        <div className='bg-[#fffafa] pt-6 md:pt-16 '>
            <div className='max-w-7xl mx-auto px-2 flex md:flex-row flex-col-reverse justify-between items-center w-full'>
                <div className='w-full md:w-1/2 py-6 md:py-0'>
                    <h2 className={`text-5xl md:text-6xl font-bold leading-snug ${color}`}>Unleash Your Inner Chef </h2>
                    <h2 className='text-3xl text-slate-600 my-10 leading-snug'>Embark on a Culinary Adventure with Inspiring Recipes and Culinary Delights!</h2>
                    <p className='text-slate-600 text-lg'>"Welcome to a culinary haven where flavors collide, techniques inspire, and creativity flourishes. Immerse yourself in a world of exquisite ingredients, expertly crafted recipes, and culinary adventures that will ignite your passion for all things food. Whether you're a seasoned chef or an aspiring home cook, our platform offers a curated collection of culinary inspiration and resources to elevate your kitchen prowess and create unforgettable dining experiences."</p>
                </div>

                <div className='w-full md:w-1/2 pl-20'>
                    <img className='' src="/hero-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;