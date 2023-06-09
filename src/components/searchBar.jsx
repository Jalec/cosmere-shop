import React, { useState } from 'react'

export function SearchBar(props) {
    const [search, setSearch] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSearch(search);
    }

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    return (
        <form className="sm:block lg:w-1/3 z-0" onSubmit={handleSubmit}>   
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" onChange={handleChange} id="default-search" className="font-inter block p-4 pl-10 w-full text-sm text-gray-900 rounded-lg border" placeholder="Search" required></input>
                <button type="submit" className="lg:block text-white absolute right-2.5 bottom-2.5 bg-slate-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium font-inter rounded-lg text-sm px-4 py-2 hidden">Search</button>
            </div>
        </form>
    )
}
