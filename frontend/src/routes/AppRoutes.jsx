import { Navigate, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from '../pages/SIgnIn/Login';
import Home from '../pages/home/Home';
import Admin from '../pages/admin/Admin';
import BookList from "../pages/admin/bookList/BookList";
import AddNewBook from "../pages/admin/addNewBook/AddNewBook";
import ContactForm from "../pages/contact/ContactForm";
import EmailList from "../pages/admin/emailList/EmailList";
import NotFound from "../pages/notFound/NotFound";

import EditBookForm from '../components/updateBooks/EditBookForm';

import PrivateRoute from '../routes/PrivateRoute';
import AuthProvider from '../context/AuthContext';
import RootLayoutPrivate from "../layout/RootLayoutPrivate";
import RootLayoutPublic from "../layout/RootLayoutPublic";
import AllBooks from "../pages/ColectionBooks/AllBooks";
import BookDetails from "../pages/detailsBooks/BookDetails";
import CategoryBooks from "../pages/categorybooks/CategoryBooks";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayoutPublic />,
        errorElement: <NotFound/>, 
        children: [
            { 
                path: '', element: <Home /> 
            }, 
            { 
                path: 'nosotros', element: <div>nosotros</div> 
            }, 
            { 
                path: 'contacto', element: <ContactForm/> 
            },
            {
                path: 'coleccion-books', element: <AllBooks />
            },
            {
                path: '/book/:id', element: <BookDetails/>
            },
            {
                path: '/category/:category', element: <CategoryBooks />
            }
        ]
    },
    {
        path: 'auth/login',
        element: <Login />
    },
    {
        path: 'admin',
        element: <PrivateRoute element={<Admin />} />,
        children: [
            {
                path: '',
                element: <RootLayoutPrivate/>,
                children: [
                    { path: '', element: <Navigate to="books" /> },
                    { path: 'books', element: <BookList /> },
                    { path: 'add-book', element: <AddNewBook /> },
                    { path: 'emails', element: <EmailList /> },
                    { path: 'books/:id/edit', element: <EditBookForm /> }
                ]
            }
        ]
    }
]);

const AppRoutes = () => {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
};

export default AppRoutes;
