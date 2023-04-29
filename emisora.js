// Definición de la clase Persona
class Persona {
    constructor(nombre, cedula, fechaNacimiento, correoElectronico, ciudadResidencia, ciudadOrigen) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.fechaNacimiento = fechaNacimiento;
        this.correoElectronico = correoElectronico;
        this.ciudadResidencia = ciudadResidencia;
        this.ciudadOrigen = ciudadOrigen;
        this.cancionesFavoritas = [];
    }

    agregarCancionFavorita(cancion, artista) {
        this.cancionesFavoritas.push({ cancion, artista });
    }
}

// Arreglo para almacenar las personas
let personas = [];

// Función para agregar una persona
function agregarPersona() {
    let nombre = prompt("Ingrese su nombre:");
    let cedula = prompt("Ingrese su numero de identificación (cedula):");
    let fechaNacimiento = prompt("Ingrese la fecha de su nacimiento (dd/mm/aaaa):");
    let correoElectronico = prompt("Ingrese su correo electronico:");
    let ciudadResidencia = prompt("Ingrese su ciudad de residencia:");
    let ciudadOrigen = prompt("Ingrese su ciudad de origen:");

    let persona = new Persona(nombre, cedula, fechaNacimiento, correoElectronico, ciudadResidencia, ciudadOrigen);

    // Agregar canciones favoritas
    for (let i = 0; i < 3; i++) {
        let cancion = prompt(`Ingrese el título de una de sus canciones favoritas (${i + 1}/3):`);
        let artista = prompt(`Ingrese el nombre del artista de la canción "${cancion}":`);
        persona.agregarCancionFavorita(cancion, artista);
    }

    personas.push(persona);
    let posicion = personas.length - 1;
    console.log(`Persona registrada con éxito! Su posición en el vector es ${posicion}.`);
}

// Función para mostrar la información de una persona por código
function mostrarInformacionPersonal() {
    if (personas.length === 0) {
        console.log("No hay personas registradas.");
    } else {
        let codigo = prompt("Ingrese el código de la persona:");

        let persona = personas.find((p, i) => p && i.toString() === codigo);

        if (persona) {
            console.log(`Información personal de la persona en la posición ${codigo}:`);
            console.log(`Nombre: ${persona.nombre}`);
            console.log(`Cédula: ${persona.cedula}`);
            console.log(`Fecha de Nacimiento: ${persona.fechaNacimiento}`);
            console.log(`Correo electrónico: ${persona.correoElectronico}`);
            console.log(`Ciudad de Residencia: ${persona.ciudadResidencia}`);
            console.log(`Ciudad de Origen: ${persona.ciudadOrigen}`);

            console.log("Canciones Favoritas:");
            persona.cancionesFavoritas.forEach(cancionFavorita => {
                console.log(`- ${cancionFavorita.cancion} de ${cancionFavorita.artista}`);
            });
        } else {
            console.log(`No se encontró una persona en la posición ${codigo}.`);
        }
    }
}

// Menú principal
while (true) {
    let opcion = prompt("Seleccione una de las siguientes opciones: \nA. Agregar una persona. \nB. Mostrar la información de una persona por medio de su código. \nX. Salir. \nIngrese una opción:");

    if (opcion === "A") {
        agregarPersona();
    } else if (opcion === "B") {
        mostrarInformacionPersonal();
    } else if (opcion === "X") {
        console.log("Programa finalizado.");
        break;
    } else {
        console.log("Opción no válida. Inténtelo de nuevo.");
    }
}
node 