import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import "../styles/pages/Catalogue.scss";


function Catalogue() {
const [data, setData] = useState();



useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/phones/Apple`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);


return (
  <div className="page-catalogue">
       <div className="phone-details">
      {data && data.map((phone) => (
        <div className="phone-details__item" key={phone.id}>
          <h1 className="phone-details__brand">{phone.brand}</h1>
          <h2 className="phone-details__model">{phone.model_name}</h2>
          <p className="phone-details__os">OS: {phone.os}</p>
          <p className="phone-details__ram">RAM: {phone.ram} GB</p>
          <p className="phone-details__memory">Memoire: {phone.memory} GB</p>
           <p className="phone-details__network">Réseau: {phone.network}</p>
          <p className="phone-details__screen-size">Taille de l'écran: {phone.screen_size} "</p>
          <p className="phone-details__category">Catégorie:{phone.category}</p>
         <img className="phone-details__image" src={phone.image} alt={`${phone.brand} ${phone.model_name}`}/>
        </div>
      ))}
    </div></div>
  )
}

export default Catalogue