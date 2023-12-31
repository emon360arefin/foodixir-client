import React from 'react';
import { useState } from 'react';
import ChefCard from '../Home/ChefCard';
import { useEffect } from 'react';
import Loader from '../Shared/Loader';

const Chefpage = () => {

    const [chefs, setChefs] = useState(null)

    useEffect(() => {
        fetch('https://assignment-10-chef-server-emon360arefin.vercel.app/api/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])


    return (
        <div className='py-12 md:py-16 bg-white'>
            {
                chefs ?
                    <div className='max-w-7xl mx-auto px-2'>
                        <h2 className='text-4xl text-center md:text-4xl font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#EA1E34] to-[#EB1555]'>World Class Executive Chefs</h2>

                        <h2 className='text-xl text-center text-slate-600 my-6 leading-snug'>Discover the culinary artists behind our delectable creations. Get to know our skilled and passionate chefs who bring their expertise, creativity, and love for food to every dish. Learn about their backgrounds, specialties, and the inspiration that drives their culinary mastery. Prepare to embark on a delightful gastronomic journey guided by our talented team of chefs.</h2>

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


export default Chefpage;