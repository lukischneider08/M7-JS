const ingresoTotal = Number(prompt('Ingreso total: '));


var gastosNecesarios = ( ingresoTotal * 0.5);

var gastosOpcionales = (ingresoTotal * 0.3);

var ahorroInversión = (ingresoTotal * 0.2);


alert('Ingreso total: ' + ingresoTotal)
console.log('ingresoTotal: ' + ingresoTotal)

alert('El 50% para los gastos necesarios: ' + gastosNecesarios)
console.log('gastosNecesarios: ' + gastosNecesarios)

alert('El 30% para gastos opcionales: ' + gastosOpcionales)
console.log('gastosOpcionales: ' + gastosOpcionales)

alert('El 20% para ahorro e inversión: ' + ahorroInversión)
console.log('ahorroInversión: ' + ahorroInversión)
