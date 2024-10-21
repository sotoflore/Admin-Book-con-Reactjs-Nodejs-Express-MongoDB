import imageAbout from '../../assets/img/imagen-section-about.jpeg';

const AboutUs = () => {
    return (
        <section className="px-6 md:px-14">
            <div className="mx-auto max-w-screen-xl flex py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
                    <img className="object-cover object-center rounded" alt="hero" src={imageAbout} />
                </div>
                <div className="lg:flex-grow md:w-1/2 ps-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h2 className="sm:text-4xl text-5xl text-primary mb-4 font-bold uppercase">
                        quienes somos
                    </h2>
                    <p className="leading-relaxed text-white">
                        Colibro Tech es mucho más que una tienda en línea de libros. Somos un equipo apasionado y comprometido con el mundo de la Data y la Analítica. Nuestra misión es proporcionar a profesionales, estudiantes y entusiastas de todo el mundo un acceso sencillo a la información y el conocimiento más actualizado en estos campos en constante evolución.
                    </p>
                    <p className="my-3 leading-relaxed text-white">
                        Nuestro compromiso con la excelencia se refleja en la calidad de los libros que ofrecemos, así como en nuestro servicio al cliente. Estamos aquí para ayudarte a encontrar los recursos adecuados para tus necesidades específicas y responder a tus preguntas. En Colibro Tech, no solo vendemos libros; fomentamos el aprendizaje y el crecimiento en la comunidad de Data y Analítica.
                    </p>
                    <p className="leading-relaxed text-white">
                        Explora nuestra amplia gama de libros, artículos y recursos relacionados con la Data y la Analítica, y únete a nosotros en nuestro viaje hacia un futuro impulsado por el conocimiento y la innovación. ¡Gracias por confiar en Colibro Tech como tu fuente de inspiración y aprendizaje en el emocionante mundo de la Data y la Analítica!"
                    </p>
                </div>
            </div>
        </section>
    )
}
export default AboutUs;