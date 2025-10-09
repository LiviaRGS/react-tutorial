import { useEffect, useState } from "react"

const Notas = () => {
    const [dados, setDados] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const buscaDados = async () => {
            try {
                const resposta = await fetch('http://127.0.0.1:8000/notas');
                if(!resposta.ok){
                    throw new Error(`Erro no fetch: ${resposta.status}`)
                }
                const resultado = await resposta.json();
                setDados(resultado);
                console.log(dados)
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
            <h2>Notas</h2>
            <p>Dados requisitados por API</p>
            <div>{carregando ? "Carregando..." : ""}</div>
            <ul>
                {dados && dados.map(nota => (<li key = {nota.id}>
                    <p>{nota.titulo}</p>
                    <p>{nota.texto}</p>
                </li>))}
            </ul>
        </div>
    )
}

export default Notas