const LoginButton = ({ type, children }) => {
    return (
        <button type={type} className='bg-secondary w-full font-bold py-2 uppercase rounded-lg'>
            {children}
        </button>
    );
};

export default LoginButton;
