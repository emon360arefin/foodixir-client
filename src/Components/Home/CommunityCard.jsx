import React from 'react';

const CommunityCard = () => {
    return (
        <div className='rounded-lg bg-[#FFFAFA] w-[470px] h-80 p-6 mx-8 shadow-md'>
            <div className='flex gap-6'>
                <img className='w-24 h-24 rounded-full' src="/home/home-1.jpg" alt="" />
                <div className='flex flex-col justify-center' >
                    <h2 className='text-xl font-semibold'>Lina Allen</h2>
                    <h2>Residence: Australia</h2>
                    <h2>Age: 26</h2>
                </div>
            </div>
            <div className='mt-4'>

                <p className=''>Lina Allen is a passionate home cook residing in Australia. With a love for culinary arts, Lina spends much of her time experimenting with various flavors, ingredients, and cooking techniques in her kitchen. Her kitchen is a place of creativity and inspiration, where she concocts delicious dishes that reflect her diverse culinary influences.</p>
            </div>
        </div>
    );
};

export default CommunityCard;