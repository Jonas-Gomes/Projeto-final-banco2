import React, { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import '../../global.css';
import api from '../../services/api';


export default function Catalog() {
  const [endereco, setEndereco] = useState([]);
  
  useEffect(() => {
    api.get('user').then(response => {
      setEndereco(response.data);
    })
  })

  return (
    <div className="main">
      <div className="escanteio"></div>
      <h1 className="catalog-titulo">Endereço dos DEVs</h1>
      
      <Link to="/catalog">
        <button className="logout-btn" type="button">
          Voltar
        </button>
      </Link>

     <ul>
       {endereco.map(endereco => (
        <li key={endereco.matricula}>
          <label className="card-matricula">Matricula: {endereco.matricula}</label><br/><br/>
          <label className="card-name">Cidade: {endereco.cidade}</label><br/><br/>
          <label className="card-matricula">Estado: {endereco.estado}</label><br/><br/>
          <label className="card-email">Rua: {endereco.rua}</label><br/><br/>
          <label className="card-bairro">Bairro: {endereco.bairro} </label>
        </li>  
       ))}
     </ul>
    
    </div>
  ); 
}