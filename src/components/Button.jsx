import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button className='py-3 px-7 bg-[#F9A51A] font-semibold rounded-md btn outline-none border-none text-black hover:bg-[rgb(238,149,6)]'>
                {children}
            </button>
        </div>
    );
};

export default Button;