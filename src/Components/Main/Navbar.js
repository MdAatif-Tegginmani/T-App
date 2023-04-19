import React from 'react'
import { NavLink,Link,useNavigate} from 'react-router-dom'
import SearchBar from "./SearchBar"
import { getAuth, signOut } from "firebase/auth";


// import { useAuth } from "firebase/userAuthContext";











// }

function Navbar() {
  
  const auth = getAuth();
  const navigate =useNavigate()

const userLogout =()=>{


  
  signOut(auth).then(() => {
      navigate('/login')
  }).catch((error) => {
    console.log(error)
    // An error happened.
  });
}
  
  return (
    <>

      









    


    
    <nav className="bg-gray-900  " >
    <div className="mx-auhref max-w-fullxl  px-2 sm:px-6 lg:px-12 ">
    <div className="relative flex h-16 items-center justify-between">
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidde ">
    <buthrefn type="buthrefn" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
    <span className="sr-only">Open main menu</span>
    
    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
    
    <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
    </buthrefn>
    </div>
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
    <div className="flex flex-shrink-0 items-center  ">
    <img className="block h-8 w-auhref lg:hidden " src="https://w7.pngwing.com/pngs/503/7/png-transparent-airplane-logo-flight-attendant-air-travel-airplane-aviation-avion-text-logo-flight-thumbnail.png" alt="Your Company"/>
    <img className="hidden h-8 w-auhref rounded-full lg:block" src="https://w7.pngwing.com/pngs/503/7/png-transparent-airplane-logo-flight-attendant-air-travel-airplane-aviation-avion-text-logo-flight-thumbnail.png" alt="Your Company"/>
    </div>
    <div className="hidden sm:ml-6 sm:block">
    <div className="flex space-x-4">


          <Link to='/' as={NavLink} className="text-gray-100  hover:bg-gray-700 hover:text-white rounded-md px-2 py-0 text-2xl font-bold">Wanderer.com</Link>



            <Link to="/team" as={NavLink} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team </Link>

            <Link to="/projects" as={NavLink} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</Link>
            <Link to="/products" as={NavLink} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Products</Link>


          </div>
          </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auhref sm:ml-6 sm:pr-0">
      <buthrefn type="buthrefn" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
      <span className="sr-only">View notifications</span>
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
  </buthrefn> 
      
        <div className='mx-4 '>    <SearchBar></SearchBar></div>

        
        <div className=" ml-3">
        <div>
        <button onClick={userLogout} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' >Logout</button>

{ /*       // <Link to="/login" as={NavLink} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Login</Link>
  */}
        </div>
        
        
        {/*<div className="absolute right-0 z-10 mt-2 w-48 origin-hrefp-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-buthrefn" tabindex="-1">
        <Link to="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</Link>
        <Link to="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</Link>
            <Link to="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</Link>
  </div>*/}
        </div>
      </div>
    </div>
    </div>
    
    
</nav> 

  
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Navbar