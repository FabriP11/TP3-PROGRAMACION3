const form = document.getElementById('calculoForm');
const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const operacion = document.getElementById('operacion');
const botonCalcular = document.getElementById('botonCalcular');
const resultado = document.getElementById('resultado');

function verificarDivisionPorCero() {
  const op = operacion.value;
  const valor2 = parseFloat(numero2.value);

  if (op === 'division' && valor2 === 0) {
    botonCalcular.style.display = 'none';
    resultado.textContent = 'No se puede dividir por cero';
    resultado.classList.add('error');
  } else {
    botonCalcular.style.display = 'inline-block';
    resultado.textContent = '';
    resultado.classList.remove('error');
  }
}

operacion.addEventListener('change', verificarDivisionPorCero);
numero2.addEventListener('input', verificarDivisionPorCero);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const a = parseFloat(numero1.value);
  const b = parseFloat(numero2.value);
  let res;

  switch (operacion.value) {
    case 'suma':
      res = a + b;
      break;
    case 'resta':
      res = a - b;
      break;
    case 'multiplicacion':
      res = a * b;
      break;
    case 'division':
      res = a / b;
      break;
    default:
      res = 'Operación no válida';
  }

  resultado.textContent = `El resultado es: ${res}`;
  resultado.classList.remove('error');
});