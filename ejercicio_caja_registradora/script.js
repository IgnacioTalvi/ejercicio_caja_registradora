const valoresCaja = [
  [500, 0],
  [200, 0],
  [100, 0],
  [50, 1],
  [20, 4],
  [10, 8],
  [5, 2],
  [2, 5],
  [1, 4],
  [0.5, 0],
  [0.2, 0],
  [0.1, 1],
  [0.05, 2],
  [0.02, 3],
  [0.01, 1],
];

// VALOR INICIAL DE LA CAJA
const valoresActualesCaja = (a, b) => a * b,
  valorTotal = valoresCaja.map((a) => a.reduce(valoresActualesCaja));

var sumaValoresCaja = Math.round(
  valorTotal.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0)
);

// console.log(sumaValoresCaja);

//
function calcularValores(precioArticulo, importeGastado) {
  let diferencia = importeGastado - precioArticulo;
  let dineroActualEnCaja = sumaValoresCaja + diferencia;

  if (precioArticulo === importeGastado) {
    console.log("El pago esta justo.");
  } else if (importeGastado - precioArticulo !== 0) {
    console.log(
      `El cambio para el cliente es: ${importeGastado - precioArticulo}`,
      console.log(`El dinero actual en caja es: ${dineroActualEnCaja}`)
    );
  } else if (dineroActualEnCaja <= 0) {
    console.log("El pago esta justo");
  }
}

console.log(calcularValores(1000, 2200));

// else if (dineroActualEnCaja < importeGastado) {
//   ("No hay suficiente dinero en caja.");

// Expected output: 10

// let valorActualCaja = () for (const position in valoresCaja) {
//   s
// }

// console.log(valorActualCaja);

// console.log(programaCalcularCambio(0, 120));

// Si no hay dinero en la caja, que hacemos?

// importeGastado

//Vale 100 - Pago 120 --
