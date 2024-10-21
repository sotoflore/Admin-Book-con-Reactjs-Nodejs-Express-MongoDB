import { Outlet } from 'react-router-dom';

const Admin = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-5 bg-dark">
            <Outlet />
        </section>
    )
}

export default Admin;