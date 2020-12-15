import React from 'react';
import { useState } from 'react';
import '../../global.css';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function Cadastro() {
  const[name, setName] = useState('');
  const[matricula, setMatricula] = useState('');
  const[email, setEmail] = useState('');
  const[cidade, setCidade] = useState('');
  const[senha, setSenha] = useState('');
  const[estado, setEstado] = useState('');
  const[rua, setRua] = useState('');
  const[bairro, setBairro] = useState('');

  const history = useHistory();

  async function cadastro(e){
    e.preventDefault();

    const data={
      name,
      matricula,
      email,
      senha
    };

    const endereco={
      matricula,
      cidade,
      estado,
      rua,
      bairro
    };

    try{
      await api.post('users', data);
      alert('Cadastrado com sucesso!');
 
      await api.post('user', endereco);
      alert('Cadastrado com sucesso2!');
 
      setName('');
      setMatricula('');
      setEmail('');
      setCidade('');
      setSenha('');

      history.push('')
    }
    catch(err){
      alert('Erro ao cadastrar!');
      console.log(err);
    }
  }
  return (
    <div className="main">
      <h1 className="cad-titulo">Faça seu cadastro</h1>
      
      <Link to="/">
        <button className="logout-btn" type="button">
          Voltar
        </button>
      </Link>

      <div className="cad-form">
      <form onSubmit={cadastro}>
        <label className="user-lbl-cad">Informe seu nome</label>
        <input required id="user-cad" className="user-field-cad" value={name} onChange={e => setName(e.target.value)} placeholder="Nome"/>
        
        <label className="mat-lbl-cad">Informe sua matrícula</label>
        <input required id="mat" type="number" className="mat-field-cad" value={matricula} onChange={e => setMatricula(e.target.value)} min="200012010000" max="202012020099" placeholder="exemplo: 201812010018"/>

        <label className="email-lbl">Informe seu email</label>
        <input required id="email" type="email" className="email-field" value={email} onChange={e => setEmail(e.target.value)} placeholder="email@exemplo.com"/>

        <label className="cidade-lbl">Informe sua cidade</label>
        <input required id="cidade"  className="cidade-field" value={cidade} onChange={e => setCidade(e.target.value)} placeholder="Cidade"/>

        <label className="estado-lbl">Informe seu estado</label>
        <input required id="estado"  className="estado-field" value={estado} onChange={e => setEstado(e.target.value)} placeholder="Estado"/>

        <label className="rua-lbl">Informe a rua e o numero</label>
        <input required id="rua"  className="rua-field" value={rua} onChange={e => setRua(e.target.value)} placeholder="exemplo: Rua, numero"/>

        <label className="bairro-lbl">Informe seu  bairro</label>
        <input required id="bairro"  className="bairro-field" value={bairro} onChange={e => setBairro(e.target.value)} placeholder="Bairro"/>

        <label className="senha-lbl">Informe sua senha</label>
        <input required id="senha"  className="senha-field" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Senha"/>
        
        <button className="cad-btn" type="submit">Cadastrar</button>
      </form>
      
      </div>

    </div>
  ); 
}