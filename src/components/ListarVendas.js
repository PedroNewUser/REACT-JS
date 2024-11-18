
import './ListarVendas.css'
import { useEffect, useState } from 'react'

function onclick(id){            
    window.location.href = "http://localhost:3000/atualizar-product?id="+id}

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
                            <input className='table-button' type='button' value="Atualizar" onClick={() => onclick(venda.id)} />
                            <input className='table-button-comprar' type='button' value="Comprar"/>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListarVendas;


    // const [name, setNome] = useState('')
    // const user = [
    //     {id:1, name:"Carlos", cpf:"23456"},
    //     {id:2, name:"Josue", cpf:"464164"},
    //     {id:3, name:"Astolfo", cpf:"8416516"},
    //     {id:4, name:"Thomas", cpf:"716541684"}
    // ]

    // <input className="table-button" type="button" value="Atualizar" onClick={() => update(user.id)}></input>
