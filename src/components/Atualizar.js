import React from 'react'
import ReactDOM from 'react-dom'
import { useParams } from 'react-router-dom';
import './FormUser.css'
import { useState } from 'react'


function Atualizar() {
    const {id} = useParams();
    const [name, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setPassword] = useState('')
    const [cpf_cnpj, setCpf_cnpj] = useState('')

    async function AtualizarUser() {
        if(name === "" || email === "" || senha === "" || cpf_cnpj==="") {
            alert("Preencha todos os campos!")
            return
        } 

        // Integrar com a vossa API
        let api = await fetch("http://localhost:8081/user/update/"+id, {
            method : "PUT",
            body:JSON.stringify({
                "name":name,
                "email":email,
                "password":senha,
                "cpf_cnpj":cpf_cnpj,
                "is_active":1
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })

        if(api.ok){
            alert("Cadastro com sucesso !")
            window.location.href = "http://localhost:3000/listar-user"
            return;
        }
        else {
            alert("Erro ao cadastrar usuário");
        }

        alert(name)
        alert(email)
    }


    return (
        <div className='page'>
            <div className='card'>
                <form className='form'>
                    <h2>Atualizar usuário</h2>

                    <label htmlFor='name'>Nome:</label>
                    <input className='campo' type='text' id='name' name='name' placeholder='Digite seu nome' onChange={(e)=> setNome(e.target.value)}></input>

                    <label htmlFor='email'>E-mail:</label>
                    <input className='campo' type='text' id='email' name='email' placeholder='Digite seu e-mail' onChange={(e)=> setEmail(e.target.value)}></input>

                    <label htmlFor='password'>Senha:</label>
                    <input className='campo' type='password' id='password' name='password' placeholder='Digite sua senha'  onChange={(e)=> setPassword(e.target.value)}></input>

                    <label htmlFor='cpf_cnpf'>CPF/CNPJ:</label>
                    <input className='campo' type='text' id='cpf_cnpf' name='cpf_cnpf' placeholder='Digite seu CPF/CNPJ' onChange={(e)=> setCpf_cnpj(e.target.value)}></input>

                    <input className='botao' type='button' value="Cadastrar" onClick={AtualizarUser}/>
                    <input className='botao-produto' type='button' value="Produtos"/>
                </form>
            </div>
        </div>
    )
}

export default Atualizar