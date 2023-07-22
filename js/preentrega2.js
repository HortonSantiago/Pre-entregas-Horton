let patients = [];
let rta;
let turno = 0;
const maxTurns = 5; // tenemos 5 turnos disponibles como maximo x dia
const availableDays = ["MARTES", "JUEVES"]; // dia de atencion

const tareas = {};
availableDays.forEach((day) => {
  tareas[day] = [];
});

while(rta !== "NO"){
    rta = prompt("¿Quieres un turno? SI o NO");

    if (rta === "SI") {
        turno++;
        if (turno <= maxTurns){
        addPatient();
        } else {
            console.log ("No tenemos mas turnos por hoy, contactese pronto. ");
            break;
        }
    }else {
        if (rta === "NO") {
        console.log("¡Muchas gracias por elegirnos!!!");
        }else {
            console.log("Respuesta inválida. Por favor, responda SI o NO.");
        }
        
    }
}
function addPatient() {
    let name = prompt("Ingrese su nombre y apellido completo: ");
    let dni = prompt("Ingrese su DNI: ");
    let edad = prompt("Ingrese su Edad: ");
    let obra = prompt("Ingrese su obra social: ");
    let tel = prompt("Ingrese su telefono: ");
    let day = prompt ("Ingrese el dia del turno preferido (MARTES o JUEVES): ");
    
  if (!availableDays.includes(day)){
     console.log ("dia invalido. UNICAMENTE MARTES O JUEVES.");
     return;
  }
  if (tareas[day].length >= maxTurns){
    console.log("no hay turnos disponibles para el dia" + day + ".");
    return;
  }
    let patient = {
        name: name,
        dni: dni,
        edad: edad,
        obra: obra,
        tel: tel,
        day: day,
    };
    
    patients.push(patient);
    tareas[day].push(patient);

    let turno = tareas[day].length;
    let remainingTurns = maxTurns - turno;
    console.log(
      "Su turno asignado es el dia: "+ 
      day + 
      "\n su numero de atencion es el :  " + 
      turno + 
      "\n quedan : " + 
      remainingTurns + 
      " turnos disponibles para ese dia.");

    return patients;
    
}
console.log(patients);
let searchName = prompt("Ingrese el nombre completo del paciente que desea buscar: ");
let foundPatient = null;

//  forEach para buscar el paciente por nombre
patients.forEach((paciente) => {
  if (paciente.name === searchName) {
    foundPatient = paciente;
  }
});

if (foundPatient) {
  console.log("Lista de paciente/s encontrados:");
  console.log(foundPatient);
} else {
  console.log("No se encontró al paciente con el nombre proporcionado.");
}