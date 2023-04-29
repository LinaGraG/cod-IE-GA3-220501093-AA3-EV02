// Definimos el vector que almacenará las edades
let edades = [];

// Iniciamos un bucle para pedir las 10 edades y validar cada ingreso
for (let i = 0; i < 10; i++) {
  let edad;
  do {
    // Pedimos la edad al usuario y la validamos
    edad = parseInt(prompt(`Ingrese la edad de la persona ${i+1}:`));
    if (edad < 1 || edad > 120) {
      alert("La edad ingresada es inválida. Ingrese una edad entre 1 y 120 años.");
    }
  } while (edad < 1 || edad > 120); // Repetimos mientras la edad sea inválida

  // Agregamos la edad al vector
  edades.push(edad);
}

// Calculamos la cantidad de personas menores, mayores y adultas mayores
let menores = 0;
let mayores = 0;
let adultas = 0;
for (let edad of edades) {
  if (edad < 18) {
    menores++;
  } else if (edad < 60) {
    mayores++;
  } else {
    adultas++;
  }
}

// Ordenamos el vector de edades de menor a mayor
edades.sort(function(a, b){return a-b});

// Calculamos la edad más baja, la más alta y el promedio
let minEdad = edades[0];
let maxEdad = edades[9];
let sumaEdades = edades.reduce((a, b) => a + b, 0);
let promedio = sumaEdades / edades.length;

// Mostramos los resultados
console.log(`Cantidad de personas menores de edad: ${menores}`);
console.log(`Cantidad de personas mayores de edad: ${mayores}`);
console.log(`Cantidad de personas adultas mayores: ${adultas}`);
console.log(`Edad mas baja: ${minEdad}`);
console.log(`Edad mas alta: ${maxEdad}`);
console.log(`Promedio de edades: ${promedio}`);
