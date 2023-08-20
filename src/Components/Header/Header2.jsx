import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import { AuthContext } from '../Authentication/AuthProvider';
import debounce from 'lodash.debounce';


const Header = () => {

    const { user, signOutUser } = useContext(AuthContext)

    const activeClass = 'select-none ml-0 md:mr-6 text-lg text-left my-2 border-0 md:border-b-2 border-[#EA1650] px-1 pb-1  text-[#EA1650] transition-all ease-in-out duration-200'
    const inactiveClass = 'select-none ml-0 md:mr-6 text-lg text-left my-2  border-0 md:border-b-2 border-transparent  px-1 pb-1 transition-all ease-in-out duration-200'

    let items = [
        { "id": 1, "name": "Home", "path": "/" },
        { "id": 2, "name": "Our Chefs", "path": "/ourchef" },
        { "id": 3, "name": "Blog", "path": "/blog" },
        { "id": 4, "name": "Our Homecook", "path": "/homecook" },
    ]

    const [open, setOpen] = useState(true);
    const [hover, setHover] = useState(false);
    let [scroll, setScroll] = useState(false)

    useEffect(() => {
        const handleScroll = debounce(() => {
            setScroll(window.scrollY > 100);
        }, 100);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLogOut = () => {
        signOutUser()
        setOpen(true)
    }

    useEffect(() => {
        if (open) {
            document.body.style = "overflow:auto";
        } else {
            document.body.style = "overflow:hidden";
        }
    }, [open]);



    return (
        <div className={`  h-full ${scroll ? 'md:bg-[#ffffffa9] shadow-sm backdrop-blur-xl' : ' bg-[#FFFAFA] shadow-none '}   header z-[15] sticky top-0`}>

            {/* Inner Section */}
            <div className={`max-w-7xl mx-auto flex transition-all duration-500 ease-in-out items-center justify-evenly md:bg-transparent h-full  relative z-[5] ${scroll ? ' md:h-[70px]' : ' md:h-[90px]'}`}>

                <div className={`w-full md:w-2/12 px-4  md:bg-transparent  py-4 flex z-20 transition-all duration-300 ease-in-out h-full ${scroll ? 'bg-[#ffffffa9] md:bg-transparent shadow md:shadow-none backdrop-blur-xl md:backdrop-blur-none' : 'bg-[#FFFAFA]'}`}>

                    {/* Logo */}
                    <Link
                        onClick={() => setOpen(true)}
                        className=' flex items-center '
                        to='/'> <img className={`w-1/3 transition-all duration-300 ease-in-out select-none ${scroll ? 'md:w-11/12' : 'md:w-full'}`} src="/logo.png" alt="" /></Link>

                    {/* Profile Icon */}

                    <div className='md:hidden mr-4'>
                        {!user ?
                            <></> :

                            <div className='flex gap-4 items-center'>

                                <div className='h-10 w-10 rounded-full bg-slate-100 relative border-2 border-slate-300 cursor-pointer'>
                                    <img onMouseOut={() => setHover(false)} onMouseEnter={() => setHover(true)} className='w-12 rounded-full absolute top-0 bottom-0' src={user.photoURL} alt="" />
                                </div>


                            </div>
                        }
                    </div>


                    {/* Hamburger */}
                    <div onClick={() => setOpen(!open)} className='md:hidden mr-4 text-2xl text-[#EA1650] flex items-center cursor-pointer '>
                        {open ? <RxHamburgerMenu /> : <RxCross2 />}
                    </div>
                </div>


                {/* Dropdown  */}

                <ul className={`w-full  md:w-10/12 backdrop-blur-sm md:backdrop-blur-0  text-right absolute md:static bg-white  md:bg-transparent  flex md:flex-row flex-col md:items-center justify-start md:justify-center z-60 gap-1 px-4 py-4 transition-all duration-500 ease-out pt-20 md:p-0 shadow md:shadow-none ${open ? ' -top-[340px] ' : 'top-0 '}`}>


                    {
                        items.map(item => <NavLink
                            onClick={() => setOpen(true)}
                            className={({ isActive }) => isActive ? activeClass : inactiveClass}
                            key={item.id}
                            to={item.path}
                        >
                            {item.name}
                        </NavLink>)
                    }

                    <div className='block md:hidden mt-1'>
                        {!user ?
                            <Link to='/login' onClick={() => setOpen(true)} className='flex items-center justify-center w-24 h-8  border bg-gradient-to-r from-[#EA1E34] to-[#EB1555] text-white rounded'>Login</Link> :

                            <div className='flex gap-4 items-center'>



                                <Link onClick={handleLogOut} className='flex items-center justify-center w-24 h-8 border bg-gradient-to-r from-[#EA1E34] to-[#EB1555] text-white rounded'>Log Out</Link>
                            </div>
                        }
                    </div>
                </ul>

                <div className='hidden md:block'>
                    {!user ?
                        <Link to='/login' className='flex items-center justify-center w-24 h-8  border bg-gradient-to-r from-[#EA1E34] to-[#EB1555] text-white rounded'>Login</Link> :

                        <div className='flex gap-4 items-center'>

                            <div className='h-10 w-10 rounded-full bg-slate-100 relative border-2 border-slate-300 cursor-pointer'>
                                <img onMouseOut={() => setHover(false)} onMouseEnter={() => setHover(true)} className='w-12 rounded-full absolute top-0 bottom-0' src={user.photoURL} alt="" />
                            </div>

                            <Link onClick={handleLogOut} className='flex items-center justify-center w-24 h-8 border bg-gradient-to-r from-[#EA1E34] to-[#EB1555] text-white rounded'>Log Out</Link>
                        </div>
                    }
                </div>
            </div>







        </div>
    );
};

export default Header;