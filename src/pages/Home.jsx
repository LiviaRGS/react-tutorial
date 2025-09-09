import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const Home = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <h2>Página Inicial - {theme}</h2>
            <p>Bem-vindo yay.</p>
        </div>
    )
}

export default Home