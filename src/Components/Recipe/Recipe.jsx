import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipePage from './RecipePage';
import RecipeCard from './RecipeCard';

const Recipe = () => {
    const { id } = useParams();

    const [chefs, setChefs] = useState([]);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-chef-server-emon360arefin.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    useEffect(() => {
        fetch('https://assignment-10-chef-server-emon360arefin.vercel.app/recipe')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);

    const chef = chefs.find(chef => chef.id === parseInt(id));
    const recipe = recipes.filter(recipe => parseInt(recipe.categoryId) === parseInt(id));


    return (
        <div>
            <div>
                {
                    chef ? <RecipePage key={chef.id} chef={chef}></RecipePage> : <div className='min-h-screen flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0 z-20 backdrop-blur-lg bg-[#ffffffe4]'> <span className='text-xl mb-2'>Loading ...</span> <progress className="progress  mx-auto  w-1/3">  </progress> </div>
                }
            </div>
            <div className=' bg-[#FFFAFA] py-6 md:py-16 px-2'>
                <div className='max-w-7xl mx-auto'>
                    <h2 className='text-4xl text-center md:text-4xl font-bold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#EA1E34] to-[#EB1555]'>{chef && chef.name}'s Specials</h2>

                    <h2 className='text-lg text-center text-slate-600 my-6 leading-snug'>In this exclusive section, our skilled and innovative chefs showcase their culinary expertise through a collection of extraordinary dishes known as the "Chef Special Recipes." These recipes are meticulously crafted with a combination of unique flavors, premium ingredients, and creative techniques, ensuring an unforgettable dining experience.</h2>
                </div>
                <div className=''>
                    {
                        recipe ? recipe.map(rec => <RecipeCard key={rec.id} rec={rec}></RecipeCard>) : <div className='min-h-screen flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 z-20 backdrop-blur-lg bg-[#ffffffe4]'> <progress className="progress mx-auto  w-1/3"></progress> </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Recipe;