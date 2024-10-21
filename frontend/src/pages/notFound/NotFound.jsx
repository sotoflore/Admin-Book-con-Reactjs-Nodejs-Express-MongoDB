import { Link } from 'react-router-dom';
import imageNotFound from '../../assets/img/image-not-found.svg';
import IconArrowBack from '../../icons/IconArrowBack';

const NotFound = () => {
    return (
        <section className="grid h-screen place-content-center bg-white px-4">
            <div className="text-center">
               <img className='w-full' src={imageNotFound} alt="imagen de error" />
                <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</h1>
                <p className="mt-4 text-gray-500 text-xl">Página no encontrada.</p>
                <Link to="/" className='bg-primary hover:bg-purple-500 rounded-md mt-2 text-white font-bold py-2 flex items-center justify-center'>
                    <IconArrowBack/>
                    <span className='ps-0.5'>Regresar al inicio</span>
                </Link>
            </div>
        </section>
    )
}

export default NotFound;