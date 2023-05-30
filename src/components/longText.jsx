import React, { useState } from 'react';

export const LongText = (props) => {
  const [isExpanded, setIsExpanded] = useState(false); 
  
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className='font-poppins font-light'>
        <div className={`text-container ${isExpanded ? 'h-auto' : 'h-20 overflow-hidden border-b border-transparent'}`}>
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
