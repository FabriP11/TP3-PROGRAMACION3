const { useState } = React;

function IMC() {
  const [peso, setPeso] = useState(""); const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null); const [mensaje, setMensaje] = useState("");
  const [color, setColor] = useState("");

  const calcularIMC = (e) => {
    e.preventDefault();
    const p = parseFloat(peso);
    const h = parseFloat(altura);

    if (isNaN(p) || isNaN(h) || h <= 0) {
      setMensaje("Por favor ingresar valores válidos");
      setColor("gray");
      setImc(null);
      return;
    }

    const valorIMC = p / (h * h);
    setImc(valorIMC.toFixed(2));

    if (valorIMC < 18.5) {
      setMensaje("Nivel bajo");
      setColor("goldenrod");
    } else if (valorIMC <= 24.9) {
      setMensaje("Nivel normal");
      setColor("green");
    } else if (valorIMC <= 29.9) {
      setMensaje("Nivel de sobrepeso");
      setColor("orange");
    } else {
      setMensaje("Nivel de obesidad");
      setColor("red");
    }
  };

  return (
    <div className="contenedor">
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcularIMC}>
        <input type="number" placeholder="Peso (kg)" value={peso}
          onChange={(e) => setPeso(e.target.value)} required/>

        <input type="number" placeholder="Altura (m)" value={altura}
          onChange={(e) => setAltura(e.target.value)} step="0.01" required/>
        <button type="submit">Calcular IMC</button>
      </form>

      {imc && (<p style={{ color: color }}>Tu IMC es: {imc} - {mensaje}</p>)}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<IMC />);

