
import React from 'react';
import { useState } from 'react';
import api from './services/api';
import './global.css';

function App() {

  const [state,setState]=useState(false);
  const cadUrl="pages/catalog/catalog.js";

async function login(e){
    
}
  return (
    <div className="main">
      <h1>Seu Serviço</h1>
      <div className="login-form">
      <form onSubmit={login}>
        <label className="login-titulo">Login</label>
        <label className="user-lbl">Digite seu usuário</label>
        <input required id="user" className="user-field" placeholder="Usuário"/>
        <label className="password-lbl">Digite sua senha</label>
        <input required id="password"  type="password" className="password-field" placeholder="Senha"/>
        <button className="login-btn" type="submit">Acessar</button>
      </form>
      <p className="cad-text">Não possui conta?<a className="cad-link" href={cadUrl}> Cadastre-se</a></p>   
      </div>
    </div>
  ); 
}

export default App;