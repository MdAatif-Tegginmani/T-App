import React from 'react'
import { Link } from 'react-router-dom';
import Cards from './Cards'
import "./Hero.css" ;
function Hero() {

  const handleButtonClick=(event)=>{
    
       
  }





  return (
    <>

    <div className="   bg-gray-700  opacity-80  py-32   ">
  <img id='img1' src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2022/07/The-Clan-Hotel.png" alt="" className=" absolute inset-y-12 mt-4 h-full w-full md:object-center"/>
     
  
    <div className="static ml-36 max-w-7xl  ">
      <div className=" absolute my-10 mx-auto max-w-2xl lg:mx-0" >
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">It’s A Big World
        Out There, Go
        explore.</h2>
       <button onClick={handleButtonClick}  className='bg-gray-100 hover:bg-blue-dark text-black font-bold py-2 px-4 my-8 rounded-full'   ><Link to='/plans' >For Details</Link></button>
      

       </div>
       
       
       
       </div>
       
       <div className=' inline-flex mt-96 ml-96  '>
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