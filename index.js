/////////////// Son los selectores para dar las alertas de error
const warningsDay = document.getElementById("warnings--day");
const warningsMonth = document.getElementById("warnings--month");
const warningsYear = document.getElementById("warnings--year");

///////////// Son las constantes para recibir los inputs de las fechas
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");


/////////// Son las constantes con los nombres para colocar el texto
const days = document.getElementById("days");
const months = document.getElementById("months");
const years = document.getElementById("years");

days.innerText = "- -";
months.innerText = "- -";
years.innerText = "- -";


//////// Cada vez que se envia el formulario crea constantes de las fechas

function sendMessage() {
  let entrar = false;
  let regexYear = /^(0|[1-9]\d{0,2}|1\d{3}|20[0-1]\d|202[0-4])$/; /////Expresion regular para año
  let regexDay = /^(0?[1-9]|[1-2][0-9]|3[0-1])$/; ////Expresion regular para dia
  let regexMonth = /^(0?[1-9]|1[0-2])$/ ; //// Expresion regular para mes

  warningsDay.innerText = "";
  warningsMonth.innerText = "";
  warningsYear.innerText = "";

  day.classList.remove("incorrecto");
  year.classList.remove("incorrecto");
  month.classList.remove("incorrecto");

  const tiempoTranscurrido = Date.now(); /// Muestra la fecha actual
  const dateNow = new Date(tiempoTranscurrido); /// Convierte la fecha actual en objeto fecha
  const date1 = new Date(year.value, month.value, day.value); //// convierte los valores de los inputs en una fecha
  const dateYear = dateNow.getFullYear() - date1.getFullYear(); //// Resta los años de la fecha actual con los años de la fecha
  const age = new Date(dateNow - date1); ///// Resta la fecha actual con la que se dio para mostrar cuanto tiempo a pasado


  if (!regexDay.test(day.value)) {
    warningsDay.innerText = "Debe ser un numero entre 0 y 31";
    entrar = true;
    day.classList.add("incorrecto");
  }

  if (!regexYear.test(year.value)) {
    warningsYear.innerText = "Debe ser un numero entre 0 y 2024";
    entrar = true;
    year.classList.add("incorrecto");
  } 

  if (!regexMonth.test(month.value)) {
    warningsMonth.innerText = "Debe ser un numero entre 0 y 12";
    entrar = true;
    month.classList.add("incorrecto");
  }

  if(!entrar){
  ///////// Coloca el texto en el HTML de los dias, años y meses
  days.innerText = age.getDate();
  months.innerText = age.getMonth();
  years.innerText = dateYear;
  } 
  
  return false; ///// sirve para que no se refresque la pagina

}




