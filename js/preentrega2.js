let patients = [];
let rta;
let turno = 0;
const maxTurns = 5; // tenemos 5 turnos disponibles como maximo x dia

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
    
    let patient = {
        name: name,
        dni: dni,
        edad: edad,
        obra: obra,
        tel: tel
    };
    
    patients.push(patient);

    let turno = patients.length;
    let remainingTurns = maxTurns - turno;
    console.log("Su turno asignado es el número: " + turno + ". Quedan " + remainingTurns + " turnos disponibles.");

    return patients;
}

console.log(patients);
