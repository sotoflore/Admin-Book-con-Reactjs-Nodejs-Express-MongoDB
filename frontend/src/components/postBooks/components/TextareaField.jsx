
const TextareaField = ({ id, label, value, onChange }) => {
    return (
        <div>
            <label htmlFor={id} className="font-bold">{label}</label>
            <textarea
                id={id}
                value={value}
                onChange={onChange}
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-3" 
                placeholder="Escribe la descripción..."
            />
        </div>
    );
};

export default TextareaField;
