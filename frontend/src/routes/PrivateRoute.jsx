import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ element }) => {
    const { auth, loading } = useContext(AuthContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    return auth ? element : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
