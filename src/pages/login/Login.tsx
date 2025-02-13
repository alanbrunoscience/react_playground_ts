import { useState } from "react";
import Home from "../home/Home";

function Login() {

    const [isLogged, setIsLogged] = useState(false);

    return (
        <>
            {
                isLogged ? (
                    <Home
                        titulo="Componente Home"
                        texto="Bem-vindo de Volta!"
                    />
                ) : (
                    <div>
                        <h2>Componente Login</h2>
                        <button style={botaoEstilo} onClick={() => setIsLogged(true)}>Entrar</button>
                    </div>
                )
            }
        </>
    )
}

// Estilo dos botões
const botaoEstilo = {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "white",
    cursor: "pointer",
    transition: "0.3s",
};

export default Login