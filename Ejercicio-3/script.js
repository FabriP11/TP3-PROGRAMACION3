const lista = document.getElementById("listaTareas");
const mensaje = document.getElementById("mensaje");
const botonTodas = document.getElementById("mostrarTodas");
const botonCompletadas = document.getElementById("mostrarCompletadas");

let tareas = [];

(async function obtenerTareas() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    tareas = await res.json();
    mostrarTodas();
  } catch (err) {
    mensaje.textContent = "Error al cargar las tareas.";
    console.error(err);
  }
})();

function mostrarTodas() {
  lista.innerHTML = "";
  mensaje.textContent = `Total de tareas: ${tareas.length}`;

  tareas.forEach(t => {
    const li = document.createElement("li");
    li.textContent = `#${t.id} - ${t.title}`;
    lista.appendChild(li);
  });
}

function mostrarCompletadas() {
  const completadas = tareas.filter(t => t.completed);
  lista.innerHTML = "";
  mensaje.textContent = `Tareas completadas: ${completadas.length}`;

  completadas.forEach(t => {
    const li = document.createElement("li");
    li.textContent = `#${t.id} - ${t.title}`;
    lista.appendChild(li);
  });
}

botonTodas.addEventListener("click", mostrarTodas);
botonCompletadas.addEventListener("click", mostrarCompletadas);

