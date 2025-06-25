const form = document.getElementById('calculoForm');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operacion = document.getElementById('operacion');
const btnCalcular = document.getElementById('botonCalcular');
const resultado = document.getElementById('resultado');

operacion.addEventListener('change', () => {
  if (operacion.value === 'division') {
    btnCalcular.disabled = true;
    resultado.textContent = 'No se puede realizar una división';
  } else {
    btnCalcular.disabled = false;
    resultado.textContent = '';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);
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
      res = 'No permitido';
      break;
    default:
      res = 'Operación no válida';
  }

  resultado.textContent = `El resultado es: ${res}`;
  
});
