import React, { useState } from 'react';
import './Cadastro.css';

function Cadastro({ navigate }) {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [endereco, setEndereco] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmeSenha, setConfirmeSenha] = useState('');

    return (
        <div className="cadastro-container">
            <header className="cadastro-header">
                <button onClick={() => navigate('welcome')} className="back-button"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg> </button>
                <h1>Cadastro</h1>
                <div className="header-placeholder"></div>
            </header>
            <main className="form-content">
                <div className="input-field"><input type="email" placeholder="Informe seu e-mail" value={email} onChange={e => setEmail(e.target.value)} /></div>
                <div className="input-field"><input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} /></div>
                <div className="input-field"><input type="text" placeholder="Informe CPF" value={cpf} onChange={e => setCpf(e.target.value)} /></div>
                <div className="input-field"><input type="text" placeholder="Data de Nascimento" value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} /></div>
                <div className="input-field"><input type="text" placeholder="Endereço" value={endereco} onChange={e => setEndereco(e.target.value)} /></div>
                <div className="input-field"><input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} /></div>
                <div className="input-field"><input type="password" placeholder="Confirme Senha" value={confirmeSenha} onChange={e => setConfirmeSenha(e.target.value)} /></div>
                <button className="finalize-button">Finalizar Cadastro</button>
            </main>
        </div>
    );
}
export default Cadastro;