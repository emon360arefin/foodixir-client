import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { AuthContext } from '../Authentication/AuthProvider';

const Register = () => {

    const { createUser, updateUser, googleSignIn, gitSignIn } = useContext(AuthContext)

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const navigate = useNavigate()


    const handleSubmitForm = (event) => {
        event.preventDefault()
        setError(null)
        setSuccess(null)


        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const photo = event.target.photo.value;

        console.log(name, email, password, photo)

        if (password.length < 6) {
            setError("Password has to be at least 6 characters");
            return
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                event.target.reset()
                setSuccess("User account has been created successfully")
                updateUser(name, photo)
                    .then(result => {

                    })
                    .catch(error => {
                        setError(error.message)
                    })

                navigate('/', { replace: true })

            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    const handleGooglSignIn = () => {
        googleSignIn()
            .then(result => {
                setSuccess('User account has been created successfully');
                navigate('/', { replace: true })

                console.log(result.user);
            })
            .catch(error => {
                setError(error.message)
                console.log(error);
            })
    }

    const handleGitSignIn = () => {
        gitSignIn()
            .then(result => {
                setSuccess("User account has been created successfully");
                navigate('/', { replace: true })

                console.log(result.user);
            })
            .catch(error => {
                setError(error.message)
                console.log(error);
            })
    }



    return (
        <div className='bg-[#FFFAFA] py-6 md:py-16'>
            <div className='px-2 max-w-7xl mx-auto'>
                <div className=" flex justify-center ">
                    <div className="rounded-xl w-full pb-4 max-w-lg shadow-md bg-base-100">
                        <form onSubmit={handleSubmitForm} className="p-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
                            </div>
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

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                                <label className="label">
                                    <h2>Already have an account? Please <span className='text-blue-700'> <Link to='/login'>Login</Link>  </span></h2>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-[#EB1651] text-white text-xl py-2 px-auto rounded-md">Register</button>
                            </div>

                        </form>

                        <div className='px-6 flex flex-col gap-4'>
                            <h2 className='text-center text-xl text-slate-700'> _______ OR _______</h2>
                            <button onClick={handleGooglSignIn} className='md:py-2 py-1 md:px-8 px-4 border w-full rounded hover:shadow-md transform-all ease-in-out duration-500'> <FcGoogle className='inline mb-1 mr-2 text-2xl  ' /> <span className='text-lg'>Continue With Google</span> </button>

                            <button onClick={handleGitSignIn} className='md:py-2 hover:shadow-md transform-all ease-in-out duration-500 py-1 md:px-8 px-4 border w-full rounded '> <BsGithub className='inline mb-1 mr-2 text-2xl ' /> <span className='text-lg'>Continue With GitHub</span> </button>
                            <p className='text-red-400'>{error}</p>
                            <p className='text-green-400'>{success}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;