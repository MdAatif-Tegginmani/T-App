import React from 'react'
import SearchBar from "./SearchBar"


function Navbar() {
  return (
    <>
    <nav className="bg-gray-900">
  <div className="mx-auto max-w-fullxl px-2 sm:px-6 lg:px-12 ">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
        
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
         <div className="flex flex-shrink-0 items-center  ">
          <img className="block h-8 w-auto lg:hidden " src="https://w7.pngwing.com/pngs/503/7/png-transparent-airplane-logo-flight-attendant-air-travel-airplane-aviation-avion-text-logo-flight-thumbnail.png" alt="Your Company"/>
          <img className="hidden h-8 w-auto rounded-full lg:block" src="https://w7.pngwing.com/pngs/503/7/png-transparent-airplane-logo-flight-attendant-air-travel-airplane-aviation-avion-text-logo-flight-thumbnail.png" alt="Your Company"/>
       </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <a href="/" className="text-gray-300  hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Dashboard</a>

            <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>

            <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>

          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="sr-only">View notifications</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>

        <div className='mx-4 '>    <SearchBar></SearchBar></div>


        <div className=" ml-3">
          <div>
            <button type="button" className=" flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <img className="h-8 w-8 rounded-full" src="data:image/png;base64,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" alt=""/>
            </button>
          </div>

     
          {/*<div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            <a href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
            <a href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
  </div>*/}
        </div>
      </div>
    </div>
  </div>

  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pt-2 pb-3">
      <a href="/" className="bg-gray-00 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>

      <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>

      <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>

      <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
    </div>
  </div>
</nav>

        
    
    
    </>
  )
}

export default Navbar