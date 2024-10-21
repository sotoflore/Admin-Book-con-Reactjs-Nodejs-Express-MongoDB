import { Children } from "react";

const LoginInput = ({ type, value, onChange, placeholder, children  }) => {
    return (
        <div className='flex w-full bg-gray-50 items-center justify-between border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 mb-3 p-1.5'>
            <input 
                type={type}
                value={value} 
                onChange={onChange}
                placeholder={placeholder}
                className='w-full p-1.5 rounded bg-gray-50'
                required
            />
            { children }
        </div>
    );
};

export default LoginInput;
