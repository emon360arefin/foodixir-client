import React from 'react';
import Hero from './Hero';
import ChefCard from './Second';
import Third from './Third';
import Fourth from './Fourth';

const Home = () => {

    const color = 'text-transparent bg-clip-text bg-gradient-to-r from-[#EA1E34] to-[#EB1555]'

    return (
        <div>
            <Hero color={color}></Hero>
            <ChefCard> </ChefCard>
            <Third></Third>
            <Fourth></Fourth>
        </div>
    );
};

export default Home;