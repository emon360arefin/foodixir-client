import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='h-screen flex flex-col gap-12 justify-center items-center'>
            <img className='w-full md:w-1/2' src="/notfound.jpg" alt="" />

            <Link to='/'>
                <Button width='w-44'>Back To Home</Button>
            </Link>

        </div>
    );
};

export default NotFound;