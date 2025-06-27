const { useState } = React;

function App() {
  const [numero1, setNumero1] = useState(""); const [numero2, setNumero2] = useState("");
  const [operacion, setOperacion] = useState("suma"); const [resultado, setResultado] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const a = parseFloat(numero1); const b = parseFloat(numero2);
    let res;

    switch (operacion) {
      case "suma":
        res = a + b;
        break;
      case "resta":
        res = a - b;
        break;
      case "multiplicacion":
        res = a * b;
        break;
      case "division":
        res = b !== 0 ? a / b : "No se puede dividir por cero";
        break;
      default:
        res = "Operación no válida";
    }

    setResultado(`El resultado es: ${res}`);
  };

  const ocultarBoton = operacion === "division" && parseFloat(numero2) === 0;

  return (
    <div className="contenedor">
      <h1>Operaciones entre dos números (React)</h1>
      <form onSubmit={handleSubmit}>
        
        <input
          type="number" placeholder="Inserte un número" value={numero1}
          onChange={(e) => setNumero1(e.target.value)}required/>
        
        <input type="number" placeholder="Inserte un número" value={numero2}
          onChange={(e) => setNumero2(e.target.value)}required/>
        
        <select value={operacion} onChange={(e) => setOperacion(e.target.value)}>
          <option value="suma">Suma</option>
          <option value="resta">Resta</option>
          <option value="multiplicacion">Multiplicación</option>
          <option value="division">División</option>
        </select>

        {ocultarBoton && (
          <p className="resultado">No se puede dividir por cero.</p>
        )}

        {!ocultarBoton && (
          <button type="submit">Calcular</button>
        )}
      </form>

      {resultado && (
        <p className="resultado">{resultado}</p>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);