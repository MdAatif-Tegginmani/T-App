import React from 'react'
import Cards from './Cards'

function Hero() {
  return (
    <>

    <div className="relative isolate overflow-hidden bg-gray-600 py-24 opacity-80 sm:py-32">
    <img src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2022/07/The-Clan-Hotel.png" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"/>
   
  
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">It’s A Big World
        Out There, Go
        explore.</h2>
       <button className='bg-gray-200 hover:bg-blue-dark text-black font-bold py-2 px-4 my-8 rounded-full'>BOOK YOUR NOW</button>
      

       </div>
       
       
       
       </div>
       
       <div className='flex justify-center my-24 ml-96'>
       <Cards cardHeading="Top Choices" cardText="Total 800+ destination
       you can work with" ></Cards>
       <Cards cardHeading='Quality Guidance' cardText="Our tour Guide Has 25 Years Experience"></Cards>
       <Cards cardHeading='Easy Booking' cardText='Best is Class Ticket Booking'></Cards>  
       
       </div>
       
       </div>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Hero