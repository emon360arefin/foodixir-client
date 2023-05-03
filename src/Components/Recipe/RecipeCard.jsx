import React from 'react';
import { IoFastFoodOutline } from 'react-icons/io5';
import { VscChecklist } from "react-icons/vsc";
import { GiCampCookingPot } from "react-icons/gi";

const RecipeCard = (props) => {

    const { recipeName, rating, ingredients, cookingMethod } = props.rec;
    console.log(props.rec);

    return (
        <div className=''>

            <div className=' max-w-7xl mx-auto border bg-white mb-8 rounded-xl overflow-hidden'>

                <div className='px-4 py-2 bg-slate-200 flex items-center gap-8'>
                    <h2 className=' text-2xl  font-semibold'><IoFastFoodOutline className='inline mb-2' /> Recipe Name: <span className='text-[#EB1848]'>{recipeName}</span> </h2>
                    <h2>Rating: {rating}</h2>
                </div>
                <div className='p-4 flex gap-4'>
                    <div className='w-full md:w-1/3 bg-slate-100 rounded-lg p-4'>
                        <h2 className='text-2xl font-semibold mb-3 text-slate-700'> <VscChecklist className='inline mb-1'/>  Ingredients:</h2>
                        {ingredients.map(ingredient => <li className=''>{ingredient}</li>)}
                    </div>
                    <div className='bg-slate-100 rounded-lg p-4 w-full md:w-2/3'>
                        <h2 className='text-2xl text-slate-700 font-semibold mb-3'> <GiCampCookingPot className='inline mb-1'/> Cooking Method:</h2>
                        <p className='text-lg leading-relaxed'>{cookingMethod}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;