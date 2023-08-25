// Calculadora de edad


alert("ingresa el dia de tu nacimiento entre 1 y 31 !!!");
let dayNumber = parseInt(prompt("Ingresa el dia de tu nacimiento: "));
while(dayNumber <= 0 || dayNumber > 31){
    alert("Dia invalido \nIngresa el dia de tu nacimiento entre 1 y 31 !!! ");
    dayNumber = parseInt(prompt("Ingresa el dia de tu nacimiento nuevamente: "));
}
alert("Dia valido: " + dayNumber);

let monthNumber = parseInt(prompt("Ingresa el mes de tu nacimiento: "));

while( monthNumber <= 0 || monthNumber > 12){
    alert("Mes invalido \nIngresa el mes de tu nacimiento entre 1 y 12 !!!");
    monthNumber = parseInt(prompt("Ingresa el mes de tu nacimiento nuevamente: "));
}
alert("numero valido: " + monthNumber);

let yearNumber = parseInt(prompt("Ingresa el año de tu nacimiento: "));

while(yearNumber <= 0 || yearNumber > 2023){
    alert ("Año invalido \nIngresa el año de tu nacimiento entre 1 y 2023 !!!");
    yearNumber = parseInt(prompt("Ingresa el año de tu nacimiento nuevamente: "));
}
alert("Año valido: " + yearNumber);




let dateActual = new Date(); 

let dayActual = dateActual.getDate();
let monthActual = dateActual.getMonth() + 1;
let yearActual = dateActual.getFullYear();

let edad = yearActual - yearNumber; 

if(monthActual < monthNumber || (monthActual === monthNumber && dayNumber > dayActual)){
    console.log(edad - 1);
}else{
console.log(edad);
}

