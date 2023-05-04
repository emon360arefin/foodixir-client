import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Login = () => {

    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const [error, setError] = useState(null)

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
                navigate(from, { replace: true })

            })
            .catch(error => {
                setError(error.message)
            })

    }

    return (
        <div className='bg-[#FFFAFA] py-6 md:py-16'>
            <div className='px-2 max-w-7xl mx-auto'>
                <div className=" flex justify-center ">
                    <div className="rounded-xl flex-shrink-0 w-full max-w-md shadow-md bg-base-100">
                        <form onSubmit={handleSubmitForm} className="p-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter password" className="input input-bordered" required />
                                <label className="label">
                                    <h2>New to Foodixir? Please <span className='text-blue-700'> <Link to='/register'>Register</Link>  </span></h2>
                                </label>

                            </div>

                            <div className="form-control mt-6">
                                <button className="bg-[#EB1651] text-white text-xl py-2 px-auto rounded-md">Login</button>
                            </div>
                            <div className='mt-6 flex flex-col gap-4'>
                                <h2 className='text-center text-xl text-slate-800'>OR</h2>
                                <button className='md:py-2 py-1 md:px-8 px-4 border w-full rounded '> <FcGoogle className='inline mb-1 mr-2 text-2xl ' /> <span className='text-xl'>Continue With Google</span> </button>

                                <button className='md:py-2 py-1 md:px-8 px-4 border w-full rounded '> <BsGithub className='inline mb-1 mr-2 text-2xl ' /> <span className='text-xl'>Continue With GitHub</span> </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;