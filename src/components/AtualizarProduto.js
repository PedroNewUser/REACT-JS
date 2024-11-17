import { useState } from 'react'
import './AtualizarProduto.css'
import { useParams } from 'react-router-dom'


function AtualizarProduto() {
    const { id } = useParams()
    const [name, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [quantidade, setQuantidade] = useState('')



    async function cadastroProduct() {
        if(name === "" || preco === "" || quantidade === "") {
            alert("Preencha todos os campos!")
            return
        } 

        // Integrar com a vossa API
        let api = await fetch("http://localhost:8081/produto/update"+id, {
            method : "POST",
            body:JSON.stringify({
                "name":name,
                "preco":preco,
                "quantidade":quantidade,
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })

        if(api.ok){
            alert("Atualizado com sucesso!")
            window.location.href = "http://localhost:3000/listar-product"
            return;
        }
        else {
            alert("Erro ao atualizar produto");
        }


        alert(name)
        alert(preco)
    }


    return (
        <div className='page'>
            <div className='card'>
                <form className='form'>
                    <h2>Atualizar Produto</h2>

                    <label htmlFor='name'>Nome:</label>
                    <input className='campo' type='text' id='name' name='name' placeholder='Digite seu nome' onChange={(e)=> setNome(e.target.value)}></input>

                    <label htmlFor='preco'>Preço:</label>
                    <input className='campo' type='number' id='preco' name='preco' placeholder='Digite o preço do produto' onChange={(e)=> setPreco(e.target.value)}></input>

                    <label htmlFor='quantidade'>Quantidade:</label>
                    <input className='campo' type='number' id='quantidade' name='quantidade' placeholder='Digite a quantidade do produto'  onChange={(e)=> setQuantidade(e.target.value)}></input>

                    <input className='botao' type='button' value="Atualizar Produto" onClick={cadastroProduct}/>
                </form>
            </div>
        </div>
    )
}

export default AtualizarProduto
