import React from 'react';

const Button = ({ children, width }) => {

    
    return (
        <button className={`flex items-center justify-center h-10  bg-gradient-to-r from-[#EA1E34] to-[#EB1555] text-white rounded ${width}`}>
            {children}
        </button>
    );
};

export default Button;