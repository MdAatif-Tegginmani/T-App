import React from 'react'

function Cards(props) {
  return (
    <>
    <div className="relative h-[11rem]    w-full max-w-[20rem] flex-col rounded-3xl  bg-gray-300  bg-clip-border p-8 text-white  opacity-80    mr-4">
    <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
      
        <h2 className='text-xl text-black  font-bold my-2'>{props.cardHeading}</h2>
        <hr />
        <strong>
        <p className='text-black text-lg my-3 font-medium'>
            {props.cardText}
        </p>
        </strong>

     
    </div>
  </div>

    </>
  )
}

export default Cards