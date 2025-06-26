const { useState } = React;

function BotonesAlternantes() {
  const [habilitado, setHabilitado] = useState("izquierdo");

  function handleClickIzquierdo() {
    setHabilitado("derecho");
  }

  function handleClickDerecho() {
    setHabilitado("izquierdo");
  }

  return (
    <div className="botones">
      <h1>Botones Alternantes</h1>

      <button onClick={handleClickIzquierdo} disabled={habilitado !== "izquierdo"}>Izquierdo</button>

      <button onClick={handleClickDerecho} disabled={habilitado !== "derecho"}>Derecho</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BotonesAlternantes />);
