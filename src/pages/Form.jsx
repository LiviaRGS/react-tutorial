import { useState } from "react";

const Form = ( {onAddTarefa} ) => {
    const [titulo, setTitulo] = useState('')
    const [texto, setTexto] = useState('')
    const [message, setMessage] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault()

        const data = { titulo, texto }

        
        try {
            const response = await fetch('http://127.0.0.1:8000/notas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            });
    
            if (!response.ok) {
            throw new Error('Oops');
            }
    
            const result = await response.json();
            setMessage('Deu certo!');
            console.log(result);
        } catch (error) {
            setMessage('Não rolou');
            console.error('Erro:', error);
        }
    };
    

    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Digite seu título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)} />
            <input type="text"
            placeholder="Digite seu texto"
            value={texto}
            onChange={(e) => setTexto(e.target.value)} />
            <button type="submit">Adicionar</button>
            {message && <p>{message}</p>}
        </form>
    )
}

export default Form