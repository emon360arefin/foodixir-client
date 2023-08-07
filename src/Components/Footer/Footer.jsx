import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import { NavLink } from 'react-router-dom';

const Footer = () => {

    const { user } = useContext(AuthContext);

    let items = [
        { "id": 1, "name": "Home", "path": "/" },
        { "id": 2, "name": "Blog", "path": "/blog" },
        { "id": 3, "name": "All Toys", "path": "/all" }
    ]

    const additional = [
        { "id": 4, "name": "My Toys", "path": "/my" },
        { "id": 5, "name": "Add A Toy", "path": "/add" },
    ]

    { user ? items = items.concat([...additional]) : null; }



    return (
        <div className='bg-slate-100 py-16 z-40'>
            <div className='max-w-7xl mx-auto px-2'>
                <div className='  grid md:grid-cols-6 grid-col-1  gap-6'>
                    <div className='col-span-2 pr-6 pl-12 md:pl-0'>
                        <img src="/logo.png" className='md:h-12 h-12' alt="" />
                        <p className='text-slate-500 my-6'>"Welcome to a culinary haven where flavors collide, techniques inspire, and creativity flourishes!"</p>
                        <div className='flex gap-4'>
                            <div className='bg-white rounded-full w-10 h-10 p-2'>
                                <button><img className=' ' src="/social1.png" alt="" /></button>
                            </div>
                            <div className='bg-white rounded-full w-10 h-10 p-2'>
                                <button><img className=' ' src="/social2.png" alt="" /></button>
                            </div>
                            <div className='bg-white rounded-full w-10 h-10 p-2'>
                                <button><img className=' ' src="/social3.png" alt="" /></button>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-1 pl-12 md:pl-0'>
                        <h2 className='text-slate-600 text-lg font-semibold'>Menu</h2>
                        <ul className='flex flex-col items-start gap-3 mt-6 w-full md:w-auto'>
                            {
                                items.map(item => <NavLink className={'text-sm font-semibold text-slate-500'} key={item.id} to={item.path}>{item.name}</NavLink>)
                            }
                        </ul>

                    </div>
                    <div className='col-span-1 pl-12 md:pl-0'>
                        <h2 className='text-slate-600 text-lg font-semibold'>Category</h2>
                        <div className='flex flex-col items-start gap-3 mt-6'>
                            <button className='text-slate-500 font-semibold  text-sm'>Car</button>
                            <button className='text-slate-500 font-semibold text-sm'>Boat</button>
                            <button className='text-slate-500 font-semibold text-sm'>Plane</button>

                        </div>

                    </div><div className='col-span-1 pl-12 md:pl-0'>
                        <h2 className='text-slate-600 text-lg font-semibold'>Products</h2>
                        <div className='flex flex-col items-start gap-3 mt-6'>
                            <button className='text-slate-500 font-semibold  text-sm'>Lego Ford Vintage</button>
                            <button className='text-slate-500 font-semibold text-sm'>Lego Giant Titanic</button>
                            <button className='text-slate-500 font-semibold text-sm'>Lego Airbus</button>
                            <button className='text-slate-500 font-semibold text-sm'>Lego Pirate Ship</button>
                        </div>

                    </div><div className='col-span-1 pl-12 md:pl-0'>
                        <h2 className='text-slate-600 text-lg font-semibold'>Contact Us</h2>
                        <div className='flex flex-col items-start gap-3 mt-6'>
                            <button className='text-slate-500 font-semibold  text-sm'>Phone: +12345678</button>
                            <button className='text-slate-500 font-semibold text-start text-sm whitespace-normal'>Location: Rocky Beach, Santa Monica</button>
                            <button className='text-slate-500 font-semibold text-start text-sm'>Email: foodixir@domain.com</button>

                        </div>

                    </div>


                </div>
                <p className='text-center text-slate-400 text-sm pt-8 mt-6 border-t border-slate-300'>@2023 Emon Arefin. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;