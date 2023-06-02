import React, { useState } from 'react';

export const LongText = (props) => {
  const [isExpanded, setIsExpanded] = useState(false); 
  
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className='font-inter font-light text-gray-700'>
        <div className={`text-container ${isExpanded ? 'h-auto text-left tracking-tighter w-80' : 'h-20 overflow-hidden border-b border-transparent tracking-tighter w-80' }`}>
            {isExpanded ? props.text : props.text.slice(0, 143) + '...'}
        </div>
        {!isExpanded ? (
            <button onClick={toggleText} className="text-blue-600 hover:underline">
                Show More
            </button>
        ) : (
            <button onClick={toggleText} className="text-blue-600 hover:underline">
                Show Less
            </button>
        )
        }
    </div>
  )
}
