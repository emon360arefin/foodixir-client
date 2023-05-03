import React, { useState } from 'react';
import { IoFastFoodOutline } from 'react-icons/io5';
import { VscChecklist } from "react-icons/vsc";
import { GiCampCookingPot } from "react-icons/gi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = (props) => {



    const { id, recipeName, rating, ingredients, cookingMethod } = props.rec;
    console.log(props.rec);

    const notify = (recipeName) => toast(`${recipeName} is added as favorite`);

const [fav, setFav] = useState(false)

const handleFav = () => {
    notify(recipeName)
    setFav(true)
}

return (
    <div className=''>

        <div className=' max-w-7xl mx-auto border bg-white mb-8 rounded-xl overflow-hidden'>

            <div className='px-4 py-2 bg-slate-200 flex items-center gap-8'>
                <h2 className=' text-2xl  font-semibold'><IoFastFoodOutline className='inline mb-2' /> Recipe Name: <span className='text-[#EB1848]'>{recipeName}</span> </h2>
                <div className='flex items-center justify-center gap-4 ml-auto'>
                    <h2 className='text-xl text-slate-700 font-semibold'>Rating:</h2>
                    <Rating
                        placeholderRating={rating}
                        readonly
                        emptySymbol={<AiOutlineStar className='text-[#EA1C3B] text-2xl' />}
                        placeholderSymbol={<AiFillStar className='text-[#EA1C3B] text-2xl' />}
                        fullSymbol={<AiFillStar className='text-[#EA1C3B] text-2xl' />}
                        className='mt-2'
                    />
                </div>
                <div>
                    <Link onClick={handleFav}><BsFillBookmarkFill className={`text-${!fav ? 'slate-500' : '[#EA1C3B]'} text-2xl`} /></Link>

                </div>
            </div>
            <div className='p-4 flex gap-4'>
                <div className='w-full md:w-1/3 bg-slate-100 rounded-lg p-4'>
                    <h2 className='text-2xl font-semibold mb-3 text-slate-700'> <VscChecklist className='inline mb-1' />  Ingredients:</h2>
                    {ingredients.map(ingredient => <li className=''>{ingredient}</li>)}
                </div>
                <div className='bg-slate-100 rounded-lg p-4 w-full md:w-2/3'>
                    <h2 className='text-2xl text-slate-700 font-semibold mb-3'> <GiCampCookingPot className='inline mb-1' /> Cooking Method:</h2>
                    <p className='text-lg leading-relaxed'>{cookingMethod}</p>
                </div>

            </div>
        </div>

        <ToastContainer position="bottom-center" />
    </div>
);
};

export default RecipeCard;