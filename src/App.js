import React from "react";

import { Route, Routes } from "react-router-dom";



import Navbar from "./Components/Navbar";


import Dashboard from "./Pages/Dashboard";
import Team from "./Pages/Team" ;
import Projects from "./Pages/Projects";
import Products from "./Pages/Products";
import Plans from "./Pages/Plans";








function App() {
  
  
  
  return (
    <>
    
    <Navbar />
    
    <div className="container" >
    
    <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="/team" element={<Team/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/products" element={<Products/>}></Route>

      <Route path="/plans" element={<Plans/>}></Route>



    </Routes>
    
    </div>
    
    
    
    
    
      
      
    
    
    
    
      
    </>
  );
}

export default App;
