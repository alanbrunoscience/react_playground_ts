import { useState, useEffect } from "react";

function Tarefa() {

  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState('');

  useEffect(() => {
    if (completed) {
      setTarefa('Parabéns! Você concluiu a tarefa!');
    }
  }, [completed]);

  return (
    <div>
      <h2>Componente Tarefa</h2>
      <h3>{tarefa}</h3>
      <p>Conclua a tarefa</p>
      <button style={botaoEstilo} onClick={() => setCompleted(true)}>Concluir Tarefa</button>
    </div>
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

export default Tarefa