const HeaderTable = () => {
    return (
        <thead className="text-xs text-white font-bold uppercase bg-dark sticky top-0">
            <tr> 
                <th scope="col" className="px-6 py-3">
                    Título
                </th>
                <th scope="col" className="px-6 py-3">
                    Autor
                </th>
                <th scope="col" className="px-6 py-3">
                    Precio
                </th>
                <th scope="col" className="px-6 py-3">
                    Idioma
                </th>
                <th scope="col" className="px-6 py-3">
                    Categoría
                </th>                                                          
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
    )
}
export default HeaderTable;