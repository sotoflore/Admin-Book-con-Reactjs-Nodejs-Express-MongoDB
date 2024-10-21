import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import IconLogout from '../../icons/IconLogout';
import IconAdd from '../../icons/IconAdd';
import IconList from '../../icons/IconList';
import IconWebsite from '../../icons/IconWebsite';
import IconEmailList from '../../icons/IconEmailList';
import SidebarItem from './components/SidebarItem';
import SidebarHeader from './components/SidebarHeader';

const Sidebar = () => {
    const { auth, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/auth/login');
    };

    return (
        <aside className='w-full'>
            <nav className='mt-10 h-full'>
                <SidebarHeader/>
                <ul className='px-5 h-[25rem] flex flex-col justify-between'>
                    <div className="flex flex-col gap-4">
                        {auth && (
                            <>
                                <SidebarItem to="/" target="_blank" rel="noopener noreferrer" text="Ver sitio web">
                                    <IconWebsite/>
                                </SidebarItem>
                                <SidebarItem to="/admin" text="Lista de Libros">
                                    <IconList/>
                                </SidebarItem>
                                <SidebarItem to="/admin/add-book" text="Agregar Nuevo Libro">
                                    <IconAdd/>
                                </SidebarItem>                                                     
                                <SidebarItem to="/admin/emails" text="Mensaje de emails">
                                    <IconEmailList/>
                                </SidebarItem>                               
                            </>
                        )}
                    </div>
                    {auth && (
                        <li>
                            <button onClick={handleLogout} className='bg-red-600 py-2 rounded hover:bg-red-700 w-full flex items-center justify-center text-white'>
                                <span className='pe-1 uppercase font-bold'>Cerrar Sesión</span>
                                <IconLogout/>
                            </button>
                        </li>                       
                    )}
                </ul>               
            </nav>
        </aside>
    );
};

export default Sidebar;
