import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../global.css';
import api from '../../services/api';

export default function Cadastro() {
  const userId = localStorage.getItem('userId');
  const userName = localStorage.getItem('userName');
  const userMatricula = localStorage.getItem('userMatricula');
  const userEmail = localStorage.getItem('userEmail');
  const userCidade = localStorage.getItem('userCidade');

  const history = useHistory();

  const[name, setNewName] = useState(userName);
  const[matricula, setNewMatricula] = useState(userMatricula);
  const[email, setNewEmail] = useState(userEmail);
  const[cidade, setNewCidade] = useState(userCidade);
  const[estado, setEstado] = useState('');
  const[rua, setRua] = useState('');
  const[bairro, setBairro] = useState('');

  async function editar(e){
    e.preventDefault();

    const data={
      name,
      matricula,
      email,
      cidade 
    };

    try{
      await api.put(`users/${userId}`,data);
      alert('Editado com sucesso!');

      localStorage.clear();
      history.push('catalog')
    }
    catch(err){
      alert('Erro ao editar!');
      console.log(err);
    }
  }
  return (
    <div className="main">
      <h1 className="cad-titulo">Editar dados do usuário</h1>
      
      <div className="cad-form">
      <form onSubmit={editar}>
        <label className="user-lbl-cad">Informe seu nome</label>
        <input required id="user-cad" className="user-field-cad" value={name} onChange={e => setNewName(e.target.value)} placeholder="Nome"/>
        
        <label className="mat-lbl-cad">Informe sua matrícula</label>
        <input required id="mat" type="number" className="mat-field-cad" value={matricula} onChange={e => setNewMatricula(e.target.value)} min="200012010000" max="202012020099" placeholder="exemplo: 201812010018"/>

        <label className="email-lbl">Informe seu email</label>
        <input required id="email" type="email" className="email-field" value={email} onChange={e => setNewEmail(e.target.value)} placeholder="email@exemplo.com"/>

        <label className="cidade-lbl">Informe sua cidade</label>
        <input required id="cidade"  className="cidade-field" value={cidade} onChange={e => setNewCidade(e.target.value)} placeholder="Cidade"/>

        <label className="estado-lbl">Informe seu estado</label>
        <input required id="estado"  className="estado-field" value={estado} onChange={e => setEstado(e.target.value)} placeholder="Estado"/>

        <label className="rua-lbl">Informe a rua e o numero</label>
        <input required id="rua"  className="rua-field" value={rua} onChange={e => setRua(e.target.value)} placeholder="exemplo: Rua, numero"/>

        <label className="bairro-lbl">Informe seu  bairro</label>
        <input required id="bairro"  className="bairro-field" value={bairro} onChange={e => setBairro(e.target.value)} placeholder="Bairro"/>

        <button className="cad-btn" type="submit">Editar</button>
      </form>
      
      </div>

    </div>
  ); 
}