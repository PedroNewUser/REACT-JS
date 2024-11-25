import React from 'react'
import ReactDOM from 'react-dom'
import './ListarVendas.css'
import { useEffect, useState } from 'react'

function ListarVendas(){     
    const [vendas, setVendas] = useState([]);


    async function listvendas() {
        const api = await fetch("http://localhost:8081/produto/list/vendas")
        const resposta = await api.json()

        if (api.ok) {
            setVendas(resposta)
            //window.location.href = "http://localhost:3000/atualizar-product"
        } else {
            alert("Erro")
            return false
        }

    }

    useEffect(() => {
        listvendas()
    }, []);


    return(
        <div className='page-produto'>
            <form>
            <input className='botaovendas' type='button' value="Listar Vendas"/>
            </form>

    <label htmlFor='name'>Nome:</label>
                    <input className='campo' type='text' id='name' name='name' placeholder='Digite seu nome'></input>

            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                </tr>
                <tbody>
                    {vendas.map((venda) => (
                        <tr>
                            <th>{venda.id}</th>
                            <th>{venda.name}</th>
                            <th>{venda.preco}</th>
                            <th>{venda.quantidade}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListarVendas;