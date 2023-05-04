import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../Authentication/AuthProvider';

const Header = () => {

    const { user, signOutUser } = useContext(AuthContext)

    const activeClassList = 'text-[#EB1750] text-lg bg-slate-100 border  px-4 py-px rounded w-full md:w-auto';

    const inactiveClassList = 'text-[#EB1750] text-lg px-4 py-px rounded w-full md:w-auto ';

    let items = [
        { "id": 1, "name": "Home", "path": "/" },
        { "id": 2, "name": "Blog", "path": "/blog" }
    ]

    const [open, setOpen] = useState(true);
    const [hover, setHover] = useState(false);

    const handleLogOut = () => {
        signOutUser()
    }



    return (
        <nav className=' bg-[#fffafa] sticky left-0 top-0 right-0 z-50'>
            <div className='inner max-w-7xl h-16 mx-auto px-2  flex items-center justify-between z-40 relative'>
                <Link to="/">
                    <img src="/logo.png" className='md:h-10 h-8 ' alt="" /></Link>
                <div onClick={() => setOpen(!open)} className='md:hidden static z-50'>
                    <span>{open ?
                        <Bars3Icon className="h-6 w-6 text-[#EA1D35]" /> :
                        <XMarkIcon className="h-6 w-6 text-[#EA1D35] " />}</span>
                </div>
                <div className={`absolute md:static md:-ml-20 bg-[#fffafa] p-4 md:p-0 md:bg-transparent flex w-full md:w-auto justify-end transition-all ease-in-out duration-300 md:top-16 z-10 md:z-20 ${!open ? 'top-16' : '-top-52'}`}>

                    <ul className='flex md:flex-row flex-col items-end gap-4 md:gap-6 w-full md:w-auto'>
                        {
                            items.map(item => <NavLink onClick={() => setOpen(!open)} className={({ isActive }) => isActive ? activeClassList : inactiveClassList} key={item.id} to={item.path}>{item.name}</NavLink>)
                        }
                    </ul>
                </div>


                {!user ?
                    <Link to='/login' className='md:py-1 py-1 md:px-8 px-4  border bg-gradient-to-r from-[#EA1E34] to-[#EB1555] text-white rounded'>Login</Link> :

                    <div className='flex gap-4 items-center'>

                        <div className='h-12 w-12 rounded-full bg-slate-100 relative border-2 border-slate-300'>
                            <img onMouseOut={() => setHover(false)} onMouseEnter={() => setHover(true)} className='w-12 rounded-full absolute top-0 bottom-0' src={user.photoURL} alt="" />
                        </div>

                        <Link onClick={handleLogOut} className='py-1 md:px-8 px-4 h-8 border bg-gradient-to-r from-[#EA1E34] to-[#EB1555] text-white rounded'>Log Out</Link>
                    </div>
                }

                {
                    hover && <div className={`bg-white shadow-md rounded-md px-4 py-2 absolute transition-all ease-in-out duration-500 right-36 hover ${hover ? 'top-16' : 'top-0'} `}>
                        <h2 className='text-center text-md font-semibold'>{user.displayName}</h2>
                    </div>

                }


            </div>
        </nav>
    );
};

export default Header;