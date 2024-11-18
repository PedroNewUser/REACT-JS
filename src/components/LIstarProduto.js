import './ListarProduto.css'
import { useEffect, useState } from 'react'


function onclick(id){            
    window.location.href = "http://localhost:3000/atualizar-product?id="+id}


function onClickvendas() {
    window.location.href = "http://localhost:3000/listar-vendas"
}

async function onClickCompras(id){
    let api = await fetch("http://localhost:8081/produto/comprar/"+id, {
        method : "POST",
        body:JSON.stringify({
            "id":id,
        }),
        headers:{
            'Content-Type':'application/json'
        }
    })
}


function ListarProduto(){     
    const [products, setProducts] = useState([]);

    async function listProduct() {
        const api = await fetch("http://localhost:8081/produto/list")
        const resposta = await api.json()

        if (api.ok) {
            setProducts(resposta)
            //window.location.href = "http://localhost:3000/atualizar-product"
        } else {
            alert("Erro")
            return false
        }

    }

    useEffect(() => {
        listProduct()
    }, []);


    return(
        <div className='page-produto'>
            <form>
            <input className='botaovendas' type='button' value="Listar Vendas" onClick={onClickvendas}/>
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
                    {products.map((product) => (
                        <tr>
                            <th>{product.id}</th>
                            <th>{product.name}</th>
                            <th>{product.preco}</th>
                            <th>{product.quantidade}</th>
                            <input className='table-button' type='button' value="Atualizar" onClick={() => onclick(product.id)} />
                            <input className='table-button-comprar' type='button' value="Comprar" onClick={() => onClickCompras(product.id)}/>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListarProduto;


    // const [name, setNome] = useState('')
    // const user = [
    //     {id:1, name:"Carlos", cpf:"23456"},
    //     {id:2, name:"Josue", cpf:"464164"},
    //     {id:3, name:"Astolfo", cpf:"8416516"},
    //     {id:4, name:"Thomas", cpf:"716541684"}
    // ]

    // <input className="table-button" type="button" value="Atualizar" onClick={() => update(user.id)}></input>