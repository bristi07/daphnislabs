import React, { useState } from 'react'

function ReadMoreReadLess({limit, children}) {
    const text=children;
    const [isReadMoreShown, setReadMoreShown]=useState(false);

    const toggleBtn=()=>{
        setReadMoreShown(prevState=>!prevState)
    }
  return (
    <div className='read-more-read-less'>
   {isReadMoreShown ? text : String(text).substr(0,limit)}
   <button className="px-1 mx-2 text-sm text-black  text-[8px]  hover:bg-blue-900 bg-gradient-to-b from-blue-100 to-blue-300 rounded shadow " onClick={toggleBtn
      }>
      {isReadMoreShown ? 'Read less' : '...Read more'}
                                
                            </button> 
    </div>
  )
}

export default ReadMoreReadLess
