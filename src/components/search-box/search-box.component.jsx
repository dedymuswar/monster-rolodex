import React from 'react'

const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <input type="text" className="border border-gray-400 px-2 py-3 rounded-lg text-gray-700 text-base font-medium focus:outline-none focus:border-green-500 placeholder-gray-600" placeholder={placeholder}
            onChange={handleChange} />
    )
}

export default SearchBox
