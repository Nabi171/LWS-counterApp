import React from 'react';

const Button = ({ children, handler }) => {
    return (
        <div>
            <button
                class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                onClick={handler}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;