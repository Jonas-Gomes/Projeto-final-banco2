import React, { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import '../../global.css';
import api from '../../services/api';


export default function Catalog() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    api.get('users').then(response => {
      setUsers(response.data);
    })
  })

async function deleteUser(id){
  try{
    await api.delete(`users/${id}`);

    setUsers(users.filter(users => users.id != id));
  }
  catch(err){
    alert("Erro ao deletar o usuário!");
  }
}

function editUser(data){
  localStorage.setItem('userId',data._id);
  localStorage.setItem('userName',data.name);
  localStorage.setItem('userMatricula',data.matricula);
  localStorage.setItem('userEmail',data.email);
  localStorage.setItem('userCidade',data.cidade);
}


  return (
    <div className="main">
      <div className="escanteio"></div>
      <h1 className="catalog-titulo">Estes são os DEVS</h1>
      
     <ul>
       {users.map(user => (
        <li key={user.id}>
          <label className="card-name">Nome: {user.name}</label><br/><br/>
          <label className="card-matricula">Matrícula: {user.matricula}</label><br/><br/>
          <label className="card-email">Email: {user.email}</label><br/><br/>
          <Link to="/info">
              <button className="edit-btn" type="button" onClick={() => editUser(user)}>
                Ver informações
              </button>
            </Link>
            <Link to="/editar">
              <button className="edit-btn" type="button" onClick={() => editUser(user)}>
                Editar
              </button>
            </Link>
            <button className="delete-btn" onClick={() => deleteUser(user._id)} type="button">
              Deletar
            </button>
        </li>  
       ))}
     </ul>
    
    </div>
  ); 
}