import React from 'react';
import Hero from './Hero';
import ChefCard from './Second';
import Third from './Third';
import Fourth from './Fourth';
import HomeBlog from './Blog/HomeBlog';
import TabsSection from './Blog/TabsSection';



const Home = () => {

    const color = 'text-transparent bg-clip-text bg-gradient-to-r from-[#EA1E34] to-[#EB1555]'

    return (
        <div>
            <Hero color={color}></Hero>
            <ChefCard> </ChefCard>
            <HomeBlog></HomeBlog>
            <Third></Third>
            <Fourth></Fourth>
        </div>
    );
};

export default Home;