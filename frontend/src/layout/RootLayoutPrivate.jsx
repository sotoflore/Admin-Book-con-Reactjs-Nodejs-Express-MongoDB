import Sidebar from '../components/sibebar/Sidebar'
import { Outlet } from 'react-router-dom'

const RootLayoutPrivate = () => {
    return (
        <>
            <div className='h-creen bg-dark'>
                <Sidebar />
            </div>
            <div className='h-screen rounded-s-md lg:col-span-4 bg-white'>
                <Outlet />
            </div>
        </>
    )
}

export default RootLayoutPrivate;