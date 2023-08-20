import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';
import Loader from '../Shared/Loader';

const Second = () => {

    const [chefs, setChefs] = useState(null)

    useEffect(() => {
        fetch('https://assignment-10-chef-server-emon360arefin.vercel.app/api/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])


    return (
        <div className='py-12 md:py-16 bg-white'>
            {
                chefs ? <div className='max-w-7xl mx-auto px-2'>
                    <h2 className='text-4xl text-center md:text-4xl font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#EA1E34] to-[#EB1555]'>Meet Our Talented Chefs</h2>

                    <h2 className='text-xl text-center text-slate-600 my-6 leading-snug'>"Introducing Our Culinary Maestros: Discover a world of flavor crafted by our talented chefs. From seasoned professionals with years of expertise to rising stars igniting culinary trends, our diverse team brings passion, innovation, and a dash of magic to every dish. Get ready to embark on a delectable journey as you meet the brilliant minds behind the artistry in our kitchens."</h2>

                    <div className='grid md:grid-cols-2 grid-cols-1 gap-10 mt-10'>
                        {
                            chefs ? chefs.map((chef, index) => <ChefCard key={index} chef={chef}></ChefCard>) : <Loader></Loader>
                        }
                    </div>

                </div> : <Loader></Loader>
            }
        </div>
    );
};

export default Second;