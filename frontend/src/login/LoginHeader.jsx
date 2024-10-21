import LogoWebSite from '../components/logoApp/LogoWebSite';

const LoginHeader = () => {
    return (
        <div className='flex flex-col items-center'>
            <LogoWebSite className="w-28 drop-shadow-lg" />
            <h1 className='text-xl pb-3 font-extrabold text-center uppercase'>Bienvenido a Colibro Tech Admin</h1>
        </div>
    );
};

export default LoginHeader;