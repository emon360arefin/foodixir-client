import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipePage from './RecipePage';

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
    },[]);

    const chef = chefs.find(chef => chef.id === parseInt(id));
    const recipe = recipes.filter(recipe => parseInt(recipe.categoryId) === parseInt(id));

    console.log(recipe);

    return (
        <div>
            <div>
                {
                    chef && <RecipePage key={chef.id} chef={chef}></RecipePage>
                }
            </div>
            <div>

            </div>
        </div>
    );
};

export default Recipe;