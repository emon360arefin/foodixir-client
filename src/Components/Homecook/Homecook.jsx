import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import HomeCookCard from './HomeCookCard';
import Loader from '../Shared/Loader';


const HomeCook = () => {

    const [chefs, setChefs] = useState(null)

    useEffect(() => {
        fetch('https://assignment-10-chef-server-emon360arefin.vercel.app/api/homecooks')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])


    return (
        <div className='py-12 md:py-16 bg-[#FFFAFA]'>
            {
                chefs ? <div className='max-w-7xl mx-auto px-2'>
                    <h2 className='text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EA1E34] to-[#EB1555]'>Self Taught Home Cook</h2>

                    <h2 className='text-xl text-center text-slate-600 my-6 leading-snug mt-8'>Discover the culinary artists behind our delectable creations. Get to know our skilled and passionate chefs who bring their expertise, creativity, and love for food to every dish. Learn about their backgrounds, specialties, and the inspiration that drives their culinary mastery. Prepare to embark on a delightful gastronomic journey guided by our talented team of chefs.</h2>

                    <div className='grid md:grid-cols-2 grid-cols-1 gap-10 mt-10'>
                        {
                            chefs ? chefs.map((chef, index) => <HomeCookCard bg='white' key={index} chef={chef}></HomeCookCard>) : <Loader></Loader>
                        }
                    </div>

                </div> : <Loader></Loader>
            }
        </div>
    );
};

export default HomeCook;