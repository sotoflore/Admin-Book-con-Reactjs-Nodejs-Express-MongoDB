import { Link } from "react-router-dom";
import Card from "../../components/card/Card";

const Category = () => {

    return (
        <section className="text-white px-14">
            <div className="max-w-screen-xl py-8 sm:py-12 lg:py-16">
                <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center">
                    <div className="mx-auto max-w-lg lg:mx-0 ">
                        <h2 className="flex items-center">
                            <span className="block text-secondary uppercase pe-2">categorías</span>
                            <span className="block w-16 h-1 rounded bg-primary"></span>
                        </h2>
                        <h2 className="text-3xl font-bold sm:text-4xl text-primary">
                            <span>EXPLORA NUESTRA COLECCIÓN</span>
                        </h2>

                        <p className="mt-4 text-white">
                            Descubre nuestras categorías especializadas para potenciar tus habilidades y conocimientos en el análisis, 
                            la ingeniería y la gestión de datos. Aquí encontrarás todo lo que necesitas para triunfar.
                        </p>

                        <Link to={"/coleccion-books"} className="mt-8 inline-block rounded-lg bg-secondary px-12 py-3 font-bold text-black">
                            Ver toda la colección
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <Card
                            to="/category/Data%20Science"
                            title="Ciencia de Datos"
                            text="Examinar datos para descubrir patrones, tendencias y obtener información valiosa."
                        />
                        <Card
                            to="/category/Data%20Engineering"
                            title="Ingeniería de datos"
                            text="Gestión, procesamiento y optimización de datos para aplicaciones empresariales."
                        />
                        <Card
                            to="/category/Data%20Analysis"
                            title="Análisis de Datos"
                            text="Análisis de datos para obtener información y tomar decisiones informadas."
                        />
                        <Card
                            to="/category/Data%20Management"
                            title="Data Management"
                            text="Gestión estratégica de datos para garantizar calidad, integridad y utilidad."
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Category;