
import React, { useEffect, useState } from "react";
import RM_Service from "../../services/RM.Service";
import Card from "./Card";

 const Cards = () => {
const [personajes, setPersonajes] = useState([]);

useEffect(()=> {
  RM_Service.getAllCharacters()
  .then((data) =>setPersonajes(data.results ))
  .catch((error) => console.log(error + "error al cargar el api"));

}, [])

  const cardList = personajes.map((m) => <Card personaje={m} key={m.id} /> ); 

  // personajes.map((m) => <Card personajes={m} key={m.id} />);
  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
         {cardList}
        </div>
      </div>
    </div>
  );
};

export default Cards;