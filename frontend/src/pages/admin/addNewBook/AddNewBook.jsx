import { toast,Toaster } from 'react-hot-toast';
import CreateNewBook from '../../../components/postBooks/CreateNewBook';

const AddNewBook= () => {
    const token = localStorage.getItem('token');
    const handleSubmit = async (book) => {
        try {
            const response = await fetch('http://localhost:5000/api/books', {
                    method: 'POST',
                    headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            toast.success('Producto agregado correctamente')
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    return (
        <div className='px-10'>
            <h2 className='text-center text-4xl my-4 font-extrabold'>Crear nuevo Libro</h2>
            <div className='max-h-[31rem] overflow-y-auto rounded-xl border border-gray-200 shadow-custom scrollbar-custom'>
                <CreateNewBook onSubmit={handleSubmit}/>
                <Toaster position="top-center" />
            </div>
        </div>
    );
};

export default AddNewBook;