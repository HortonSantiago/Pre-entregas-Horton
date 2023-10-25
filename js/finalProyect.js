//arrglo de los pacientes vacios
let patients = [];
// maxima cantidad de turnos x dia
const maxTurns = 5;
// base de datos para almacenar pacientes por fecha
const database = {};

function showMessage(message) {
  const messageContainer = document.getElementById("messageContainer");
  const messageElement = document.createElement("p");
  messageElement.textContent = message;
  messageContainer.appendChild(messageElement);
}

function addPatient() {
  let name = document.getElementById("name").value;
  let dni = document.getElementById("dni").value;
  let age = document.getElementById("age").value;
  let obra = document.getElementById("card").value;
  let tel = document.getElementById("tel").value;
  let date = document.getElementById("date").value; // Obtén la fecha seleccionada

  //validacin de dato

  // Validación name
  if (!name || typeof name !== "string" || name.trim() === "") {
    showMessage("Nombre inválido. Debe ser una cadena no vacía.");
    return;
  }

  // Validación DNI
  if (!dni || !/^\d{8}$/.test(dni)) {
    showMessage("DNI inválido. Debe ser un número de 8 dígitos.");
    return;
  }

  // Validación age
  if (!age || isNaN(age) || age <= 0) {
    showMessage("Edad inválida. Debe ser un número entero positivo.");
    return;
  }

  // Validación  obra social
  if (!obra || typeof obra !== "string" || obra.trim() === "") {
    showMessage("Obra social inválida. Debe ser una cadena no vacía.");
    return;
  }

  // Validación de teléfono (cadena de 12 dígitos numéricos como máximo)
  if (!tel || !/^\d{1,12}$/.test(tel)) {
    showMessage(
      "Teléfono inválido. Debe ser una cadena de hasta 12 dígitos numéricos."
    );
    return;
  }

  if (!date) {
    showMessage("Fecha inválida.");
    return;
  }

  // Verifica si ya hay 5 turnos agendados para la fecha seleccionada
  if (database[date] && database[date].length >= maxTurns) {
    showMessage("No quedan turnos disponibles para esa fecha.");
    return;
  }

  let patient = {
    name: name,
    dni: dni,
    age: age,
    obra: obra,
    tel: tel,
    date: date, // Almacena la fecha seleccionada
  };

  // Agrega al paciente a la base de datos
  if (!database[date]) {
    database[date] = []; // Crea una entrada para la fecha si no existe
  }
  database[date].push(patient);

  patients.push(patient);

  let remainingTurns = maxTurns - (database[date] ? database[date].length : 0);
  showMessage(
    "Hola " +
      name +
      " Su turno asignado para el " +
      date +
      "\nNúmero de atención: " +
      patients.length +
      "\nQuedan " +
      remainingTurns +
      "\nturnos disponibles para este dia."
  );
}

const fakeApi = {
  // Datos de 10 personas ficticias
  patients: [
    {
      name: "Juan Perez",
      dni: "12345678",
      age: 30,
      obra: "OSDE",
      tel: "555-1234",
    },
    {
      name: "María Rodriguez",
      dni: "23456789",
      age: 25,
      obra: "Swiss Medical",
      tel: "555-5678",
    },
    {
      name: "Luis González",
      dni: "34567890",
      age: 40,
      obraobraSocial: "Medifé",
      tel: "555-9876",
    },
    {
      name: "Ana López",
      dni: "45678901",
      age: 35,
      obra: "Galeno",
      tel: "555-4321",
    },
    {
      name: "Pedro Smith",
      dni: "56789012",
      age: 28,
      obra: "IOMA",
      tel: "555-6789",
    },
    {
      name: "Laura Martinez",
      dni: "67890123",
      age: 32,
      obra: "Sancor",
      tel: "555-7890",
    },
    {
      name: "Diego Fernandez",
      dni: "78901234",
      age: 45,
      obra: "Medicar",
      tel: "555-2345",
    },
    {
      name: "Sofía Castro",
      dni: "89012345",
      age: 29,
      obra: "Federada Salud",
      tel: "555-3456",
    },
    {
      name: "Javier Morales",
      dni: "90123456",
      age: 37,
      obra: "Accord Salud",
      tel: "555-6789",
    },
    {
      name: "Carla Fernandez",
      dni: "12345679",
      age: 27,
      obra: "Obra Social del Gobierno",
      tel: "555-7891",
    },
  ],

  // Método para obtener todas las personas
  getAllPatients: function () {
    return this.patients;
  },

  // Método para obtener una persona por su DNI
  getPersonaByDni: function (dni) {
    return this.patients.find((patient) => patient.dni === dni) || null;
  },

  // Método para agregar una nueva persona
  addPersona: function (patient) {
    this.patients.push(patient);
  },

  // Método para eliminar una persona por su DNI
  deletePersonaByDni: function (dni) {
    const index = this.patien.findIndex((patient) => patient.dni === dni);
    if (index !== -1) {
      this.patien.splice(index, 1);
    }
  },
};

// Ejemplos de cómo utilizar la API ficticia
console.log(fakeApi.getAllPatients());
console.log(fakeApi.getPersonaByDni("23456789"));
fakeApi.addPersona({
  name: "Nueva Persona",
  dni: "99999999",
  age: 50,
  obra: "Otra Obra Social",
  tel: "555-9999",
});
console.log(fakeApi.getAllPatients());

console.log(fakeApi.getAllPatients());

// Función para mostrar pacientes con turno
function showPatientsWithTurn() {
  const messageContainer = document.getElementById("messageContainer");
  messageContainer.innerHTML = ""; // Limpia el contenedor de mensajes

  if (patients.length === 0) {
    showMessage("No hay pacientes con turno.");
    return;
  }

  showMessage("Pacientes con turno:");

  patients.forEach((patient, index) => {
    showMessage(
      `Fecha del Turno: ${patient.date}, Nombre: ${patient.name}, DNI: ${patient.dni}, Edad: ${patient.age}, Obra Social: ${patient.obra}, Teléfono: ${patient.tel}`
    );
  });

  showMessage("Lista de pacientes almacenados en el objeto fakeApi: \n \n \n");

  fakeApi.getAllPatients().forEach((patient, index) => {
    showMessage(
      `Nombre: ${patient.name}, DNI: ${patient.dni}, Edad: ${patient.age}, Obra Social: ${patient.obra}, Teléfono: ${patient.tel}`
    );
  });
}

// Evento para manejar el clic en el botón "fetch"
document.getElementById("fetchButton").addEventListener("click", () => {
  showPatientsWithTurn();
});
document.getElementById("resetButton").addEventListener("click", () => {
  const messageContainer = document.getElementById("messageContainer");
  messageContainer.innerHTML = ""; // Limpia el contenedor de mensajes
});
