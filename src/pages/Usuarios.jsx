import { useEffect, useState } from "react"

const Usuarios = () => {
    const [dados, setDados] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const buscaDados = async () => {
            try {
                const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
                if(!resposta.ok){
                    throw new Error(`Erro no fetch: ${resposta.status}`)
                }
                const resultado = await resposta.json();
                setDados(resultado);
            }catch(erro){
                console.log(erro);
            }finally{
                setCarregando(false)
            }
        } 
        buscaDados();
    }, []);
    return (
        <div>
            <h2>Usuarios</h2>
            <p>Dados requisitados por API</p>
            <div>{carregando ? "Carregando..." : ""}</div>
            <ul>
                {dados && dados.map(user => (<li key = {user.id}>{user.name}</li>))}
            </ul>
        </div>
    )
}

export default Usuarios