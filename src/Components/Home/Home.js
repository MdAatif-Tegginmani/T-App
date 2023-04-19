import Navbar from '../Main/Navbar'
import Hero from "../Main/Hero";
import Footer from "../Main/Footer";
import { getAuth, signOut } from "firebase/auth";
import { Navigate } from 'react-router-dom';
// import Team from "../../Pages/Team" ;
// import Products from "../../Pages/Products";
// import Projects from "../../Pages/Projects";
// import Plans from "../../Pages/Plans";


export default function Home(props) {



const auth = getAuth();
signOut(auth).then(() => {
  Navigate('/login')
}).catch((error) => {
    console.log(error)

});

  return (
      
    <>
    
    <Navbar />
    <div className="container" >
    {/*
        
    
        <Routes>
          <Route path="/team" element={<Team/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/plans" element={<Plans/>}></Route>

    
    
    
    </Routes>*/}

        <Hero></Hero>
        <Footer></Footer>
        
        </div>
        
        
    
    
    
    
    
    
    
        
    
    
        </>
      
      

      
      
      
      


      
      
      
      
    
      )
    }
    
    
      // {props.name ? (
      //   <h2>Welcome, {props.name}!</h2>
      //     ) : (
      //   <div>
      //     <ClipLoader
      //       color={color}
      //       loading={loading}
      //       cssOverride={override}
      //       size={150}
      //       aria-label="Loading Spinner"
      //       data-testid="loader"
      //     />
      //     <p>Loading...</p>
      //   </div>
      // )}// import React from "react";

// import { Route, Routes } from "react-router-dom";
// import Navbar from '../Main/Navbar'
// import Team from "../../Pages/Team" ;
// import Products from "../../Pages/Products";
// import Projects from "../../Pages/Projects";
// import Plans from "../../Pages/Plans";
// import Dashboard from "../Main/Dashboard";












// function App() {
  
    
  
//   return (
    //     <>
    
//     <Navbar />

//     <div className="container" >

//     <Routes>
//       <Route path="/dahboard" element={<Dashboard/>}></Route>
//       <Route path="/team" element={<Team/>}></Route>
//       <Route path="/projects" element={<Projects/>}></Route>
//       <Route path="/products" element={<Products/>}></Route>

//       <Route path="/plans" element={<Plans/>}></Route>



//     </Routes>
    
//     </div>
    
    







    


//     </>
//   );
// }

// <div>
//   <div>
//     <h1>
//       <Link to="/login">Login</Link>

//     </h1>
//     <h1>
//       <Link to="/signup" >Signup</Link>
//     </h1>

//   </div>
//   <br />
//   <br />
//   <br />


  
//           <h2>{props.name ? ` Welcome -${props.name}` : "Login please"}</h2>
// export default App;
