import { useState } from "react";

function Contador() {
  const [valor, setValor] = useState(0);

  // Arrow functions para manipular o estado
  const handleClickSum = () => setValor(valor + 1);
  const handleClickSub = () => setValor(valor - 1);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Componente Contador</h2>
      <p>O valor atual é: {valor}</p>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
      }}>
        <button style={botaoEstilo} onClick={handleClickSum}>Adicionar 1</button>
        <button style={botaoEstilo} onClick={handleClickSub}>Subtrair 1</button>
      </div>
    </div>
  );
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

export default Contador;