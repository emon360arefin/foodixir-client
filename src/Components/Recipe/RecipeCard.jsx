import React, { useState } from 'react';
import { IoFastFoodOutline } from 'react-icons/io5';
import { VscChecklist } from "react-icons/vsc";
import { GiCampCookingPot } from "react-icons/gi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import checkLocalStorage from '../../Utility/localStorage';
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import useScrollToTop from '../../Utility/useScrollToTop';
import { useEffect } from 'react';


const RecipeCard = (props) => {

    const { user } = useContext(AuthContext)
    const email = user?.email

    const { id, recipeName, rating, ingredients, cookingMethod } = props.rec;

    const [fav, setFav] = useState(false)


    useEffect(() => {
        fetch(`https://assignment-10-chef-server-emon360arefin.vercel.app/api/favorites/${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.favoriteIds.includes(id)) {
                    setFav(true);
                }
            })
            .catch(error => console.log("Error", error.message))
    }, [email, id])



    const handleFavorite = (email, id) => {

        if (!email) {
            toast.error("Please login first to add favorite recipe")
            return
        }

        fetch(`https://assignment-10-chef-server-emon360arefin.vercel.app/api/favorites/${email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
            .then(response => response.json())
            .then(data => {


                console.log("data", data);

                if (data.modifiedCount > 0) {
                    setFav(true)
                    toast.success("Added to favorite")
                }
                else if (data.upsertedCount > 0) {
                    setFav(true)
                    toast.success("Added to favorite")
                } else {
                    toast.error("Already Added")

                }


                // if (data.success) {
                //     setFav(true)
                //     toast.success("Added to favorite")

                // } else {
                //     toast.error("Already Added")
                // }
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });
    }

    const handleFav = () => {
        if (!fav) {
            setFav(true)
            toast.success("Added to favorite")
        }
        else {
            toast.arguments("Already Added")
            StoreData(id)
        }



    }

    return (
        <div className=''>

            <div className=' max-w-7xl mx-auto border bg-white mb-8 rounded-xl overflow-hidden'>

                <div className='px-4 py-4 bg-slate-200 flex md:flex-row flex-col md:items-center gap-4 md:gap-8'>
                    <h2 className=' text-2xl  font-semibold'><IoFastFoodOutline className='inline mb-2' /> Recipe Name: <span className='text-[#EB1848]'>{recipeName}</span> </h2>
                    <div className='flex items-center justify-between md:justify-center gap-8 md:ml-auto'>
                        <div className='flex items-center  gap-2'>
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
                        <Link onClick={() => handleFavorite(email, id)}><BsFillBookmarkFill className={`text-${!fav ? 'slate-500' : '[#EA1C3B]'} text-2xl`} /></Link>

                    </div>

                </div>
                <div className='p-4 flex gap-4 md:flex-row flex-col'>
                    <div className='w-full md:w-1/3 bg-slate-100 rounded-lg p-4'>
                        <h2 className='text-2xl font-semibold mb-3 text-slate-700'> <VscChecklist className='inline mb-1' />  Ingredients:</h2>
                        {ingredients.map((ingredient, index) => <li key={index} className=''>{ingredient}</li>)}
                    </div>
                    <div className='bg-slate-100 rounded-lg p-4 w-full md:w-2/3'>
                        <h2 className='text-2xl text-slate-700 font-semibold mb-3'> <GiCampCookingPot className='inline mb-1' /> Cooking Method:</h2>
                        <p className='text-lg leading-relaxed'>{cookingMethod}</p>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default RecipeCard;