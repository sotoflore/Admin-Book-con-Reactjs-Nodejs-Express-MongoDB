import { Link } from 'react-router-dom';
import IconArrow from '../../icons/IconArrow';
import CardTestimonial from '../../components/card/CardTestimonial';


const Testimonial = () => {

    return (
        <section className="text-white px-14 bg-gradient-to-t from-primary">
            <div className="mx-auto max-w-screen-2xl py-12 lg:py-16">
                <div className="md:flex md:items-end md:justify-between">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-50 sm:text-5xl">
                            Reseñas de nuestros libros
                        </h2>
                        <p className="mt-6 max-w-lg leading-relaxed text-gray-50">
                            En <span className='font-bold'>Colibro Tech</span>, valoramos profundamente las opiniones y experiencias de nuestros clientes.
                        </p>
                    </div>

                    <Link to={"/coleccion-books"} className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-secondary px-5 py-3 text-secondary transition hover:bg-secondary hover:text-black md:mt-0">
                        <span className="font-medium"> comprar ahora </span>
                        <IconArrow/>
                    </Link>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <CardTestimonial
                        text="25 febrero 2024"
                        paragraph="Como ingeniero de datos con varios años de experiencia en la industria, siempre estoy en busca de recursos que puedan mantenerme actualizado con las últimas tecnologías y metodologías. El libro 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow' de Aurélien Géron ha sido, sin duda, uno de los mejores descubrimientos en mi carrera."
                        user="Juan Pérez"
                    />
                    <CardTestimonial
                        text="10 de abril 2024"
                        paragraph="Como ingeniero de datos con varios años de experiencia en la industria, siempre estoy en busca de recursos que puedan mantenerme actualizado con las últimas tecnologías y metodologías. El libro 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow' de Aurélien Géron ha sido, sin duda, uno de los mejores descubrimientos en mi carrera."
                        user="Juan Pérez"
                    />
                    <CardTestimonial
                        text="5 de mayo 2024"
                        paragraph="Como ingeniero de datos con varios años de experiencia en la industria, siempre estoy en busca de recursos que puedan mantenerme actualizado con las últimas tecnologías y metodologías. El libro 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow' de Aurélien Géron ha sido, sin duda, uno de los mejores descubrimientos en mi carrera."
                        user="Juan Pérez"
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonial;

