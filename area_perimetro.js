// Definimos una función para calcular el área y perímetro de cada figura
function calcularFigura(nombre, base, altura, radio, lado1, lado2) {
  let area, perimetro;
  
  switch(nombre) {
    case "triangulo":
      area = (base * altura) / 2;
      perimetro = lado1 + lado2 + base;
      break;
    case "rectangulo":
      area = base * altura;
      perimetro = 2 * (base + altura);
      break;
    case "cuadrado":
      area = base * base;
      perimetro = 4 * base;
      break;
    case "circulo":
      area = Math.PI * radio * radio;
      perimetro = 2 * Math.PI * radio;
      break;
    default:
      console.log("Figura no reconocida.");
      return;
  }
  
  console.log(`El area del ${nombre} es ${area.toFixed(2)} y su perimetro es ${perimetro.toFixed(2)}.`);
}

// Pedimos los datos necesarios para cada figura y los calculamos
let figura = prompt("Ingrese el nombre de la figura (triangulo, rectangulo, cuadrado o circulo):");

if (figura === "triangulo") {
  let base = parseFloat(prompt("Ingrese la base del triangulo:"));
  let altura = parseFloat(prompt("Ingrese la altura del triangulo:"));
  let lado1 = parseFloat(prompt("Ingrese el lado 1 del triangulo:"));
  let lado2 = parseFloat(prompt("Ingrese el lado 2 del triangulo:"));
  calcularFigura(figura, base, altura, null, lado1, lado2);
} else if (figura === "rectangulo") {
  let base = parseFloat(prompt("Ingrese la base del rectangulo:"));
  let altura = parseFloat(prompt("Ingrese la altura del rectangulo:"));
  calcularFigura(figura, base, altura, null, null, null);
} else if (figura === "cuadrado") {
  let lado = parseFloat(prompt("Ingrese el lado del cuadrado:"));
  calcularFigura(figura, lado, null, null, null, null);
} else if (figura === "circulo") {
  let radio = parseFloat(prompt("Ingrese el radio del circulo:"));
  calcularFigura(figura, null, null, radio, null, null);
} else {
  console.log("Figura no reconocida.");
}
