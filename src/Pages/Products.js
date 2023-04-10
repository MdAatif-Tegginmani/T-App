import React, { useState, useEffect } from "react";

export default function Products() {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch('https://fakestoreapi.com/products?limit=5')
    .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className=" flex flex-col items-center justify-center ">

    <h1 className="text-5xl mb-10">Our Products</h1>
      <div className="flex flex-wrap w-60 ">
        {users.length > 0 && (
          <ul>
            {users.map((prods) => (
              <div className=" my-10">
                <li key={prods.id}>
                <h2>{prods.id}. {prods.title}</h2>
                <img className="max-w-xs max-h-60" src={prods.image} alt="" />
                <div className="">
                <h2>${prods.price}</h2>
                <p>{prods.description}</p>
                <br />
        
                </div>
        
                </li>
              </div>
              ))}
              </ul>
              
              
              )}
              </div>
    </div>
  );
}
