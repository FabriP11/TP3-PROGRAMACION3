const listaPalabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];
const form = document.getElementById('formFiltro');
const input = document.getElementById('inputFiltro');
const resultado = document.getElementById('resultado');
const mensaje = document.getElementById('mensaje');

function mostrarResultado(filtradas) {
  resultado.innerHTML = "";
  filtradas.forEach(palabra => {
    const li = document.createElement("li");
    li.textContent = palabra;
    resultado.appendChild(li);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const texto = input.value.trim().toLowerCase();

  if (texto === "") {
    mensaje.textContent = "Por favor, ingresá un texto para filtrar.";
    resultado.innerHTML = "";
    return;
  }

  mensaje.textContent = "";

  const palabrasFiltradas = listaPalabras.filter(palabra =>
    palabra.toLowerCase().includes(texto)
  );

  mostrarResultado(palabrasFiltradas);
});

