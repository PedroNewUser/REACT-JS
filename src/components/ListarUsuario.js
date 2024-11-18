import './ListarUsuario.css'
import { useEffect, useState } from 'react'

function onClickbotao(){
    window.location.href = "http://localhost:3000/listar-product"
}

function ListarUsuario(){     
    const [users, setUsers] = useState([]);


    async function listUser() {
        const api = await fetch("http://localhost:8081/user/list")
        const resposta = await api.json()

        if (api.ok) {
            setUsers(resposta)
            // window.location.href = "http://localhost:3000/atualizar"
        } else {
            alert("Erro")
            return false
        }

    }

    function update(id){
        window.location.href = "/atualizar/"+id
    }

    useEffect(() => {
        listUser()
    }, []);

   
    return(
        <div>
            <form>
                <input className='botaoprodutos' type='button' value="Produtos" onClick={onClickbotao}/>
            </form>

    <label htmlFor='name'>Nome:</label>
                    <input className='campo' type='text' id='name' name='name' placeholder='Digite seu nome'></input>

            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Atualizar</th>
                </tr>
                <tbody>
                    {users.map((user) => (
                        <tr>
                            <th>{user.id}</th>
                            <th>{user.name}</th>
                            <th>{user.cpf_cnpj}</th>
                            <input className='table-button' type='button' value="Atualizar" onClick={() => update(user.id)} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListarUsuario;


    // const [name, setNome] = useState('')
    // const user = [
    //     {id:1, name:"Carlos", cpf:"23456"},
    //     {id:2, name:"Josue", cpf:"464164"},
    //     {id:3, name:"Astolfo", cpf:"8416516"},
    //     {id:4, name:"Thomas", cpf:"716541684"}
    // ]

    // <input className="table-button" type="button" value="Atualizar" onClick={() => update(user.id)}></input>