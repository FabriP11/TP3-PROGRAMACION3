const form = document.getElementById('calculoForm');
const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const operacion = document.getElementById('operacion');
const botonCalcular = document.getElementById('botonCalcular');
const resultado = document.getElementById('resultado');

operacion.addEventListener('change', () => {
  if (operacion.value === 'division') {
    botonCalcular.disabled = true;
    resultado.textContent = 'No se puede realizar una división';
  } else {
    botonCalcular.disabled = false;
    resultado.textContent = '';
  }
});

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
      res = 'No permitido';
      break;
    default:
      res = 'Operación no válida';
  }

  resultado.textContent = `El resultado es: ${res}`;
  
});
