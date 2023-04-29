const vector1 = [];
const vector2 = [];

// Ingreso de datos para el primer vector
console.log("Ingreso de datos para el primer vector:");
for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt(`Ingrese el numero ${i+1}:`));
  while (numero <= (vector1[i - 1] || 0)) {
    numero = parseInt(prompt(`El numero ${i+1} debe ser mayor que el anterior. Ingrese un nuevo numero:`));
  }
  vector1.push(numero);
}

// Ingreso de datos para el segundo vector
console.log("Ingreso de datos para el segundo vector:");
for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt(`Ingrese el numero ${i+1}:`));
  while (numero <= (vector2[i - 1] || 0)) {
    numero = parseInt(prompt(`El numero ${i+1} debe ser mayor que el anterior. Ingrese un nuevo numero:`));
  }
  vector2.push(numero);
}

// Unión de los vectores y ordenamiento
const vector3 = vector1.concat(vector2).sort((a, b) => a - b);

// Vectores ordenados
console.log("\nVector ordenado de la mezcla de los dos vectores:");
console.log(vector3);
