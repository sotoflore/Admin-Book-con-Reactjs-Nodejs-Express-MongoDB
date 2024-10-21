import { Link } from "react-router-dom";
import IconDelete from "../../../icons/IconDelete";
import IconEdit from "../../../icons/IconEdit";

const BodyTable = ({ book, onEdit, onDelete }) => {
    return (
        <tr className="hover:bg-gray-200 cursor-pointer">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {book.title}
            </th>
            <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 overflow-hidden text-ellipsis text-nowrap'>{book.author}</td>
            <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>${book.price}</td>
            <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>{book.language}</td>
            <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>{book.category}</td>
            <td className='whitespace-nowrap px-4 py-2 flex items-center'>
                <Link to={onEdit} className="inline-block rounded bg-indigo-600 px-4 py-2 me-2 font-medium text-white hover:bg-indigo-700">
                    <IconEdit />
                </Link>
                <button onClick={onDelete} className="inline-block rounded bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700">
                    <IconDelete />
                </button>
            </td>
        </tr>
    )
}

export default BodyTable;