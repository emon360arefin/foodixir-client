import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { TbFidgetSpinner } from 'react-icons/tb';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { AuthContext } from '../Authentication/AuthProvider';
import { toast } from 'react-hot-toast';
import { useRef } from 'react';
import { saveUser } from '../../api/auth';

const Login = () => {

    const { signInUser, gitSignIn, googleSignIn, loading, setLoading, resetPassword } = useContext(AuthContext);
    const navigate = useNavigate()

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [hidden, setHidden] = useState(true)
    const emailRef = useRef()

    const location = useLocation()

    const from = location.state?.from?.pathname || "/"

    const handleSubmitForm = (event) => {
        event.preventDefault()
        setError(null)

        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password)

        signInUser(email, password)
            .then(result => {
                event.target.reset()
                toast.success("Logged In Successfully")
                console.log("Email", result.user.email)
                saveUser(result.user)
                navigate(from, { replace: true })

            })
            .catch(error => {

                setError(error.message)
                toast.error("Logged In Faild")
                setLoading(false)
            })
    }

    const handleGooglSignIn = () => {
        googleSignIn()
            .then(result => {
                toast.success("Logged In Successfully")
                saveUser(result.user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
                toast.error("Logged In Faild")
                setLoading(false)
            })
    }

    const handleforgot = () => {
        const email = emailRef.current.value;
        resetPassword(email)
            .then(() => {
                toast.success("Please check your email for reset link")
                setLoading(false)
            })
            .catch(err => {

                console.log(err.message);
                setError(err.message)
                toast.error(err.message)
                setLoading(false)

            })
    }

    return (
        <div className='bg-[#FFFAFA] py-12 md:py-20'>
            <div className='px-2 max-w-7xl mx-auto'>
                <div className=" flex flex-col md:flex-row justify-center gap-4 md:gap-28 ">

                    <div className='w-full md:w-5/12'>
                        <img className='h-full w-full' src="/login-red.svg" alt="" />
                    </div>



                    <div className="rounded-md flex-shrink-0 pb-6 w-full  max-w-lg shadow-md bg-white">

                        <form onSubmit={handleSubmitForm} className="p-6 flex flex-col gap-4">

                            {/* Email Field */}
                            <div className="flex flex-col gap-2">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    ref={emailRef}
                                    type="email"
                                    name='email'
                                    placeholder="Enter your email"
                                    className="border px-4 py-2 rounded focus:outline-none "
                                    required />
                            </div>

                            {/* Password Field */}
                            <div className="flex flex-col gap-2">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='flex items-center gap-4 border rounded pr-2'>
                                    <input
                                        type={hidden ? 'password' : 'text'}
                                        name='password'
                                        placeholder="Enter password"
                                        className=" px-4 py-2 rounded w-full focus:outline-none"
                                        required />

                                    <div onClick={() => setHidden(!hidden)}>
                                        {
                                            hidden ? <AiFillEyeInvisible className='cursor-pointer text-2xl hover:text-[#EB1651]'></AiFillEyeInvisible> :
                                                <AiFillEye className='cursor-pointer text-2xl hover:text-[#EB1651]'></AiFillEye>
                                        }
                                    </div>
                                </div>

                            </div>



                            {/* Button */}
                            <div className=" mt-4">
                                <button className="bg-[#EB1651] hover:bg-[#f92460] text-white text-xl py-2 px-auto rounded w-full transition-all duration-200 ease-in-out flex justify-center items-center h-10">
                                    {
                                        loading ? <TbFidgetSpinner className=' animate-spin' /> : "Login"
                                    }
                                </button>
                            </div>

                            {/* Remember + Forget */}

                            <div className='flex justify-between items-center w-full '>

                                {/* Already */}
                                <label className="label">
                                    <h2>New on Foodixir? Please <span >
                                        <Link
                                            className='text-[#EB1651] hover:text-[#EB1651]'
                                            to='/register'
                                        >Register</Link>
                                    </span></h2>
                                </label>


                                {/* Forget */}
                                <h2 onClick={handleforgot} className='text-theme-primary hover:text-[#EB1651] ml-auto'>   <Link >Forgot Password?</Link>  </h2>



                                <div>

                                </div>
                            </div>



                        </form>
                        <div className=' px-6 flex flex-col gap-2'>
                            <h2 className='text-center mb-4 text-xl text-slate-700'>_______ OR _______</h2>

                            <button onClick={handleGooglSignIn} className='md:py-2 py-2 md:px-8 px-4 border w-full rounded hover:shadow-md transform-all ease-in-out duration-500'> <FcGoogle className='inline mb-1 mr-2 text-2xl ' /> <span className='text-xl'>Login With Google</span> </button>




                            <p className='text-red-400 text-center'>{error}</p>
                            <p className='text-green-400 text-center'>{success}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;