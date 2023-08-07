const costosVariables = Number(prompt("Ingrese los costos variables"));

console.log(
    'costosVariables: ' + costosVariables
)

const costosFijos = Number(prompt("Ingrese el costo fijo"));

console.log(
    'costosFijos: ' + costosFijos
)

const precio = Number(prompt("Ingrese el precio del producto"));

console.log(
    'precio: ' + precio
)

const puntoEquilibrio = costosFijos / (precio - costosVariables);

alert(
    "Debera producir y vender, " +
    puntoEquilibrio +
    " productos para no perder ni obtener ganancias."
);

document.write("Debera producir y vender, " +
    puntoEquilibrio +
    " productos para no perder ni obtener ganancias.")

console.log(
    'PuntoEquilibrio: ' + puntoEquilibrio
)