let patients = [];
const maxTurns = 5;
const availableDays = ["MARTES", "JUEVES"];
let shift = 0;
const tasks = {};
availableDays.forEach((day) => {
  tasks[day] = [];
});

loadDatafromLocalStorage();

function addPatient(){
    let name = document.getElementById("name").value;
    let dni = document.getElementById("dni").value;
    let edad = document.getElementById("age").value;
    let obra = document.getElementById("card").value;
    let tel = document.getElementById("tel").value;
    let day = document.getElementById("day").value.toUpperCase();

    if(!availableDays.includes(day)){
        alert("dia invalido. unicamente MARTES O JUEVES. ");
        return;
    }
    if(tasks[day].length >= maxTurns){
        alert("No quedan turnos disponibles para ese dia");
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
    tasks[day].push(patient);

    shift = tasks[day].length;
    let remainingTurns = maxTurns - shift;
    console.log(
      "Su turno asignado es el dia: "+ 
      day + 
      "\n su numero de atencion es el :  " + 
      shift + 
      "\n quedan : " + 
      remainingTurns + 
      " turnos disponibles para ese dia."
      );

    saveDataToLocalStorage();
    displayLastPatient();
}
const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", function() {
    patients = [];
    const patientList = document.getElementById("patientList");
    patientList.innerHTML = "";
});

function displayLastPatient() {
    const patientList = document.getElementById("patientList");
    if(patients.length > 0){
    const lastPatient = patients[patients.length - 1];
    const patientItem = document.createElement("li");
    patientItem.innerText = `Nombre: ${lastPatient.name}, DNI: ${lastPatient.dni}, Edad: ${lastPatient.edad}, Obra Social: ${lastPatient.obra}, Teléfono: ${lastPatient.tel}, Día Turno: ${lastPatient.day}`;
    patientList.appendChild(patientItem);
}}



function saveDataToLocalStorage (){
    localStorage.setItem("patientsData", JSON.stringify(patients));
}

function loadDatafromLocalStorage(){
    const data = localStorage.getItem("patientsData");
    if(data){
        patients = JSON.parse(data);
        
    }
}