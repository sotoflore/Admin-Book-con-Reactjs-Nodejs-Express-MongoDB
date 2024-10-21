import { Link } from 'react-router-dom';
import IconList from '../../icons/IconList';

const Carousel = ({ image }) => {

    return (
        <div className="h-screen">
            <div className="h-full w-full flex justify-center bg-cover bg-top" style={{ backgroundImage: `url(${image})`, width: '100%', maxWidth:'100vw' }}>
                <div className="flex flex-col items-center justify-center h-full w-full bg-dark bg-opacity-55 px-14">
                    <h1 className="text-6xl font-bold mb-2 uppercase">
                        <span className='text-white pe-3'>colibro</span>
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>tech</span>
                    </h1>
                    <p className="text-white text-lg text-center mb-4 w-1/2">
                        Transforma tu carrera y tus habilidades con nuestra colección de libros en Data & Analítica. 
                        Desde principiantes hasta expertos, aprende análisis, visualización de datos y mucho más.
                    </p> 
                    <div className='flex items-centes gap-5'>
                        <Link to={"/coleccion-books"} className="bg-secondary font-bold px-4 py-2 rounded-lg text-lg hover:bg-green-400 transition-colors flex items-center">
                            <IconList/>
                            <span className='ps-1'>Explora nuestra coleccion</span>
                        </Link>
                        <Link href="#" className="bg-white underline font-bold px-4 py-2 rounded-lg text-lg hover:bg-gray-100 transition-colors">
                            ¿Necesitas ayuda?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
