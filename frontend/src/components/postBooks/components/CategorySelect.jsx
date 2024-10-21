import React from 'react'

const CategorySelect = ({ onChange,category }) => {
    return (
        <div>
            <label htmlFor="category" className="font-bold">Categoría:</label>
            <select 
                id="category"
                value={category}
                onChange={onChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
                <option value="">seleccione una categoría...</option>
                <option value="Data Engineering">Data Engineering</option>
                <option value="Data Science">Data Science</option>
                <option value="Data Analysis">Data Analysis</option>
                <option value="Data Management">Data Management</option>
            </select>
        </div>
    )
}

export default CategorySelect;