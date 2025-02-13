import { Component } from "react";

// Definindo a interface para o estado do componente
interface State {
  contador: number;
}

class ContadorClasse extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    // Definindo o estado inicial do contador
    this.state = {
      contador: 0,
    };
  }

  // Método para incrementar o contador
  incrementar = (): void => {
    this.setState((prevState) => ({
      contador: prevState.contador + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Componente Contador - Classe</h2>
        <h1>Contador: {this.state.contador}</h1>
        <button style={botaoEstilo} onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
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

export default ContadorClasse;