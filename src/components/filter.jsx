import React, { useState } from 'react';

export function Filter(props) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
      props.onFilterChange(event.target.value);
  };

  return (
    <div className='flex flex-row sm:flex-col sm:items-center items-start mt-2 gap-12'>                
        <select className='bg-white border border-gray-300 rounded shadow py-2 px-4 pr-8 leading-tight 2xl:w-48 focus:outline-none focus:border-slate-800' value={selectedOption} onChange={handleOptionChange}>
            {props.options.map(option => <option className='' value={option}>{option}</option>)}
        </select>
    </div>
  )
}
