import { useState } from 'react'


function AtualizarProduto() {
    const {id} = useParams();
    const [name, setNome] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [preco, setPreco] = useState('')

    async function atualizarProduct() {
        if(name === "" || quantidade === "" || preco === "" ) {
            alert("Preencha todos os campos!")
            return
        } 

        // Integrar com a vossa API
        let api = await fetch("http://localhost:8081/produto/update/"+id, {
            method : "PUT",
            body:JSON.stringify({
                "name":name,
                "preco":preco,
                "quantidade":quantidade
                
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })

        if(api.ok){
            alert("Cadastro com sucesso !")
            window.location.href = "http://localhost:3000//listar-product"
            return;
        }
        else {
            alert("Erro ao cadastrar usuário");
            alert(name)
            alert(quantidade)
        }  
    }


    return (
        <div className='page'>
            <div className='card'>
                <form className='form'>
                    <h2>Atualizar Produto</h2>
                    
                    <label htmlFor='name'>Nome:</label>
                    <input className='campo' type='text' id='name' name='name' placeholder='Digite seu nome' onChange={(e)=> setNome(e.target.value)}></input>

                    <label htmlFor='quantitade'>Quantitade:</label>
                    <input className='campo' type='number' id='quantitade' name='quantitade' placeholder='Digite a quantidade' onChange={(e)=> setQuantidade(e.target.value)}></input>

                    <label htmlFor='preco'>Preco:</label>
                    <input className='campo' type='number' id='preco' name='preco' placeholder='Digite o preço'  onChange={(e)=> setPreco(e.target.value)}></input>

                    <input className='botao' type='button' value="Atualizar" onClick={atualizarProduct}/>
                </form>
            </div>
        </div>
    )
}

export default AtualizarProduto

