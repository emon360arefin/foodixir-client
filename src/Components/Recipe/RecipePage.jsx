import React from 'react';
import { BriefcaseIcon, ClipboardDocumentListIcon, HandThumbUpIcon } from '@heroicons/react/24/solid'

const RecipePage = (props) => {
    const { id, img_url, name, experience, number_of_recipes, likes, shortBio } = props.chef;

    return (
        <div className='bg-white py-6 md:py-16'>
            <div className='px-2 max-w-7xl mx-auto'>
                <div className=' grid md:grid-cols-12 rounded-xl overflow-hidden grid-cols-1 gap-8 border border-slate-200 bg-[#FFFAFA] pb-4 md:pb-0'>
                    <div className="md:col-span-3 col-span-12 relative">
                        <img className='' src={img_url} alt="" />

                    </div>
                    <div className='md:col-span-9 col-span-12 pl-8 flex flex-col justify-center md:pr-12 pr-4'>
                        <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-[#EA1E34] to-[#EB1555] text-4xl font-semibold'>{name}</h2>
                        <div className='md:flex gap-2 md:gap-8 mt-6'>
                            <h2 className='text-xl font-semibold text-slate-600'> <BriefcaseIcon className='h-6 w-6 inline mb-1' /> Experience: {experience} years</h2>

                            <h2 className='text-xl font-semibold text-slate-600 my-2 md:my-0'> <ClipboardDocumentListIcon className='h-6 w-6 inline mb-1' /> Number of Recipes: {number_of_recipes} </h2>

                            <h2 className='text-xl font-semibold text-slate-600'> <HandThumbUpIcon className='h-6 w-6 inline mb-1' /> Likes: {likes} </h2>
                        </div>
                        <p className='text-xl text-slate-600 mt-8 leading-loose'>{shortBio}</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default RecipePage;