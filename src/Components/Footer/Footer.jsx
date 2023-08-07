import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='bg-slate-200 py-6 md:py-12 px-4'>
                <div className='max-w-[1170px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4'>
                    <div className='mr-0 md:mr-20 col-span-2 md:col-span-1'>
                        <Link to="/" className='flex-1 relative'>
                            <img className='w-56' src="/logo.png" alt="" />
                        </Link>
                        <p className="text-gray-800 mt-4">Welcome to a culinary haven where flavors collide, techniques inspire, and creativity flourishes. </p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-gray-800 font-semibold font-secondary text-xl mb-3'>Quick Links</p>
                        
                        <Link to="/" className='text-gray-800'>Chefs</Link>
                        <Link to="/blog" className='text-gray-800'>Blog</Link>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-gray-800 font-semibold font-secondary text-xl mb-3'>Navigation</p>
                        <Link  className='text-gray-800'>About Us</Link>
                        <Link  className='text-gray-800'>Contact Us</Link>
                        
                    </div>
                </div>
                <div className='max-w-[1170px] mx-auto'>
                    <div className='py-4 border-t border-gray-800 text-gray-800 text-sm mt-12'> Copyright reserved. Designed by Emon Arefin</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;