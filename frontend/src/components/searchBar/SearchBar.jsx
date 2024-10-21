import IconSearch from '../../icons/IconSearch';

const SearchBar = ({ onSearch }) => {
    const handleInputChange = (event) => {
        onSearch(event.target.value);
    };

    return (
        <div className="bg-white w-full">
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="relative mt-1">
                <div className="absolute inset-y-0  start-0 flex items-center ps-3 pointer-events-none">
                    <IconSearch/>
                </div>
                <input type="text" id="table-search" onChange={handleInputChange} className="block py-3 ps-10 text-sm w-1/2 text-white rounded-lg bg-dark shadow-custom" placeholder="Buscar libros..." />
            </div>
        </div>
    );
};

export default SearchBar;