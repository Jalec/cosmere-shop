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
        <form className="w-1/3 z-0" onSubmit={handleSubmit}>   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" onChange={handleChange} id="default-search" class="font-poppins block p-4 pl-10 w-full text-sm text-gray-900 rounded-lg border" placeholder="Search" required></input>
                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-slate-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium font-poppins rounded-lg text-sm px-4 py-2 ">Search</button>
            </div>
        </form>
    )
}
