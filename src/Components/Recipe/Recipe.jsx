import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipePage from './RecipePage';
import RecipeCard from './RecipeCard';
import Loader from '../Shared/Loader';

const Recipe = () => {
    const { name } = useParams();

    const [chef, setChef] = useState([]);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-10-chef-server-emon360arefin.vercel.app/api/chefs/${name}`)
            .then(res => res.json())
            .then(data => setChef(data))
    }, [name])



    useEffect(() => {
        fetch(`https://assignment-10-chef-server-emon360arefin.vercel.app/api/recipes/${name}`)
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [name]);


    console.log("Recipes", recipes);



    return (
        <div>
            <div>
                {
                    chef && chef ? <RecipePage key={chef.id} chef={chef}></RecipePage> : <Loader></Loader>
                }
            </div>
            <div className=' bg-[#FFFAFA] py-6 md:py-16 px-2'>
                <div className='max-w-7xl mx-auto'>
                    <h2 className='text-4xl text-center md:text-4xl font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#EA1E34] to-[#EB1555]'>{chef && chef.name}'s Specials</h2>

                    <h2 className='text-lg text-center text-slate-600 my-6 leading-snug'>In this exclusive section, our skilled and innovative chefs showcase their culinary expertise through a collection of extraordinary dishes known as the "Chef Special Recipes." These recipes are meticulously crafted with a combination of unique flavors, premium ingredients, and creative techniques, ensuring an unforgettable dining experience.</h2>
                </div>
                <div className=''>
                    {
                        recipes ? recipes.map(rec => <RecipeCard key={rec.id} rec={rec}></RecipeCard>) : <Loader></Loader>
                    }
                </div>
            </div>
        </div>
    );
};

export default Recipe;