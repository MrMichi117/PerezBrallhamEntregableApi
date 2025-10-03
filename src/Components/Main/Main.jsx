import { useState, useEffect } from "react";
import React from 'react'
import './Main.css'
import Card from '../Card/Card'


// const characters=[
//     {
//         id:1,
//         name:"Naruto Uzumaki",
//         image:"https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png"
//     },
//     {
//         id:2,
//         name:"Sasuke Uchiha",
//          image:"https://static.wikia.nocookie.net/naruto/images/5/5e/Sasuke_Part_II.png/revision/latest?cb=20201115015406&path-prefix=es"
//     },
//     {
//         id:3,
//         name:"Sakura Haruno",
//        image:"https://static.wikia.nocookie.net/naruto/images/6/66/Sakura_Part_II.png/revision/latest?cb=20201115015411&path-prefix=es"
//     }
// ]





const Main = () => {
 const [characters, setcharacters] = useState([]);

useEffect(() => {
  fetch("https://cors-anywhere.herokuapp.com/https://www.demonslayer-api.com/api/v1/characters?limit=45")
    .then(res => {
      if (!res.ok) throw new Error("Respuesta no válida");
      return res.json();
    })
    .then(data => {
      console.log(data); // Para verificar que "content" existe
      setcharacters(data.content); // Aquí está la clave
    })
    .catch(err => console.error("Error al obtener personajes:", err));
}, []);




  return (
    <main>
      {characters.length > 0 ? (
        characters.map((item) => <Card Key={item.id} character={item} />)
      ) : (
        <p>NO HAY PERSONAJES PA MOSTRAR</p>
      )}
    </main>
  );
};

export default Main;
