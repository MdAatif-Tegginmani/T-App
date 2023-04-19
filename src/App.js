import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Team from "./Pages/Team";
import Plans from "./Pages/Plans";
import Products from "./Pages/Products";
import Projects from "./Pages/Projects";


function App() {
 

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home  />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/products" element={<Products />}></Route>

          <Route path="/plans" element={<Plans />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
