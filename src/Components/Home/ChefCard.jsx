import React from 'react';
import { BriefcaseIcon, ClipboardDocumentListIcon, HandThumbUpIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const ChefCard = (props) => {

    const { id, img_url, name, experience, number_of_recipes, likes } = props.chef

    console.log(img_url);
    return (
        <div className='border rounded-xl border-slate-300 bg-[#FFFAFA]'>
            <div className='flex md:flex-row flex-col gap-2 md:gap-6'>
                <img className='md:w-64 md:h-64 md:rounded-l-xl ' src={img_url} alt="" />
                <div className='p-4 md:p-0 md:pt-4 flex-col items-start justify-between'>
                    <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-[#EA1E34] to-[#EB1555] text-3xl font-semibold'>{name}</h2>
                    <div className='flex flex-col gap-2 mt-4 justify-between'>
                        <h2 className='text-xl font-semibold text-slate-600'> <BriefcaseIcon className='h-6 w-6 inline mb-1' /> Experience: {experience} years</h2>
                        <h2 className='text-xl font-semibold text-slate-600'> <ClipboardDocumentListIcon className='h-6 w-6 inline mb-1' /> Number of Recipes: {number_of_recipes} </h2>

                        <h2 className='text-xl font-semibold text-slate-600'> <HandThumbUpIcon className='h-6 w-6 inline mb-1' /> Likes: {likes} </h2>

                        <Link to={`/recipe/${id}`}>
                            <button className='py-2 md:px-8 px-4 mt-4  border bg-gradient-to-r from-[#EA1E34] to-[#EB1555] text-white rounded'>
                                View Recipes
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;