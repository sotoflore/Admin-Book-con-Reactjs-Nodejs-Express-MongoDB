
const ConfirmDelete = ({ onConfirm, onCancel }) => {
    return (
        <div>
            <p className="pb-4">¿Estás seguro de que quieres eliminar este libro?</p>
            <div>
                <button onClick={onConfirm} className="inline-block rounded bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700">
                    Sí
                </button>
                <button onClick={onCancel} className="inline-block rounded bg-indigo-600 px-4 py-2 font-bold text-white hover:bg-indigo-700 ml-2">
                    No
                </button>
            </div>
        </div>
    );

}

export default ConfirmDelete;
