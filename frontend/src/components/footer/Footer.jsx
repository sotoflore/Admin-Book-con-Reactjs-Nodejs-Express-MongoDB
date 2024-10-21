import IconEmailList from "../../icons/IconEmailList";
import IconInstagram from "../../icons/IconInstagram";
import IconPhone from "../../icons/IconPhone";
import IconUbication from "../../icons/IconUbication";
import LogoWebSite from "../logoApp/LogoWebSite";

const Footer = () => {
    
    const currentYear = new Date().getFullYear();

    return (
        <footer className="px-14 bg-black">
            <div className="pb-6 pt-16 lg:pt-24">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
                    <div>
                        <div className="flex justify-center text-teal-600 sm:justify-start">
                            <LogoWebSite className="w-14"/>
                        </div>
                        <p className="mt-4 max-w-md text-center text-white sm:max-w-xs sm:text-left">
                            <span className="font-extrabold">Colibro Tech</span> es una plataforma en línea dedicada a la venta de libros.
                        </p>
                        <a href="#" rel="noreferrer" target="_blank" className="inline-block  mt-3 text-rose-700 text-3xl">
                            <IconInstagram/>
                        </a>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:col-span-2">
                        <div className="text-center">
                            <p className="text-lg font-medium text-primary">Categorías</p>
                            <ul className="mt-3">
                                <li>
                                    <a className="text-white transition hover:text-gray-200 hover:underline" href="#">
                                        Data Engineering
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white transition hover:text-gray-200 hover:underline" href="#">
                                        Data Science
                                    </a>
                                </li>

                                <li>
                                    <a className="text-white transition hover:text-gray-200 hover:underline" href="#">
                                        Data Analysis
                                    </a>
                                </li>

                                <li>
                                    <a className="text-white transition hover:text-gray-200 hover:underline" href="#">
                                        Data Management
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-lg font-medium text-primary">Contacto</p>
                            <ul className="mt-3">
                                <li>
                                    <a className="flex items-center gap-2 text-white" href="#">
                                        <IconEmailList/>
                                        <span>contacto@colibrotech.com</span>
                                    </a>
                                </li>

                                <li>
                                    <a className="flex items-center gap-2 text-white" href="#">
                                        <IconPhone/>         
                                        <span>+57 3508858369</span>
                                    </a>
                                </li>

                                <li className="flex items-center gap-2 text-white">
                                    <IconUbication/>
                                    <span>Medellín</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-100 pt-6">
                    <div className="text-center sm:flex sm:justify-between sm:text-left">
                        <p className="text-sm text-white">
                            <span className="block sm:inline pe-2">All rights reserved.</span>
                            <a
                                className="inline-block text-secondary underline transition hover:text-gray-100"
                                href="#"
                            >
                                Políticas de privacidad
                            </a>
                        </p>

                        <p className="mt-4 text-sm text-white sm:order-first sm:mt-0">
                            &copy; {currentYear} - Powered By 
                            <a href="https://analytikacore.com" className="ps-2">
                                <span className="text-yellow-500">Analytika</span>Core
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;