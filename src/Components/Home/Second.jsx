import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';

const Second = () => {

    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('https://assignment-10-chef-server-emon360arefin.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])


    console.log(chefs);


    return (
        <div className='pt-6 md:pt-16 '>
            <div className='max-w-7xl mx-auto px-2'>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-10 mt-8'>
                    {
                        chefs.map(chef => <ChefCard chef={chef}></ChefCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Second;