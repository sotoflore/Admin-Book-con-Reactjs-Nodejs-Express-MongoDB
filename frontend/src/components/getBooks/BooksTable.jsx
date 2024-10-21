import { toast } from 'react-hot-toast';
import HeaderTable from './components/HeaderTable';
import ConfirmDelete from './components/ConfirmDelete';
import BodyTable from './components/BodyTable';

const BooksTable = ({ books, onDeleteBook }) => {

    const token = localStorage.getItem('token');
    
    const handleDeleteClick = (bookId) => {
        fetch(`http://localhost:5000/api/books/${bookId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': token,
            }
        })
        .then(response => {
            if (response.ok) {
                onDeleteBook(bookId)
                toast.success('Producto eliminado correctamente')
            } else {
                toast.error('Error al eliminar el producto')
                throw new Error('Error al eliminar el libro');
            }
        })
        .catch(error => {
            console.error(error);
        });
    };

    const confirmDelete = (bookId) => {
        toast(
            (t) => (
                <ConfirmDelete
                    onConfirm={() => {
                        toast.dismiss(t.id);
                        handleDeleteClick(bookId);
                    }}
                    onCancel={() => toast.dismiss(t.id)}
                />
            ),
            { 
                duration: Infinity,
                style: {
                    background: '#110f1a',
                    color: '#fff',
                }, 
            }
        );
    }

    return (
        <>
            <div className="rounded-lg border border-gray-200 max-h-96 overflow-y-auto scrollbar-custom shadow-custom">
                <table className="w-full text-sm text-left divide-y-2 divide-gray-200 bg-white">
                    <HeaderTable/>
                    <tbody className="divide-y divide-gray-200 w-full">
                        {
                            books.length === 0 ? (
                                <tr className='w-full'>
                                    <th className='w-full py-10 ps-5 font-bold'>No se encontraron resultados &#x2639;</th>
                                </tr> 
                            ):(
                                books.map((book) => (
                                    <BodyTable
                                        key={book._id}
                                        book={book}
                                        onEdit={`/admin/books/${book._id}/edit`}
                                        onDelete={() => confirmDelete(book._id)}
                                    />
                                ))
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default BooksTable;
