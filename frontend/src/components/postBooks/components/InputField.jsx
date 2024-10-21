
const InputField = ({ id, label, type, value, onChange, placeholder, min }) => {
    return (
        <div className="w-full">
            <label htmlFor={id} className="font-bold">{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputField;
