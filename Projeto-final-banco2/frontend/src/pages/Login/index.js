
import React from 'react';
import { useState } from 'react';
import '../../global.css';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const[matricula, setMatricula] = useState('');
  const[senha, setSenha] = useState('');

  const history = useHistory();

  async function makeLogin(e){
    e.preventDefault();
  
  const data={
    matricula,
    senha
  };

  try{
    await api.post(`/session/`, data);
    history.push('catalog');
  }
  
  catch(err){
    alert('Erro ao logar');
    console.log(err);
  }   
}
  return (
    <div className="main">
      <h1 className="login-titulo1">Onde está o DEV?</h1>
      
      
      <div className="login-form">
      
      <form onSubmit={makeLogin}>
        <label className="login-titulo2">Login</label>

        <label className="mat-lbl">Digite sua matrícula</label>
        <input required id="mat" type="number" className="mat-field" min="200012010000" max="202012020099" value={matricula} onChange={e => setMatricula(e.target.value)} placeholder="Matrícula"/>
        
        <label className="password-lbl">Digite sua senha</label>
        <input required id="password"  type="password" className="password-field" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Senha"/>
        
        <button className="login-btn" type="submit">Acessar</button>
      </form>
      
      <p className="cad-text">Não possui conta?</p>

          <Link to="cadastro">
            <b className="cad-link">Cadastre-se</b>
          </Link>    
     

      </div>
    </div>
  ); 
}
