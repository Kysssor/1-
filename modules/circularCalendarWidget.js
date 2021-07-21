//Вращение календарей
var rotate1 = 0;
var rotate2 = 0;
Circle.onclick = function() {
    var circleTrop = document.getElementById('TropicCircle');
    var circleSider = document.getElementById('SiderCircle');
    var circleAstr = document.getElementById('AstrolCircle');
    rotate1 = rotate1 ? 0 : 360;
    rotate2 = rotate2 ? 0 : -360;
    circleTrop.style.transform = "rotate(" + rotate1 + "deg)";
    circleSider.style.transform = "rotate(" + rotate2 + "deg)";
    circleAstr.style.transform = "rotate(" + rotate1 + "deg)";
    circleTrop.style.transition = "transform 1.5s";
    circleSider.style.transition = "transform 1.5s";
    circleAstr.style.transition = "transform 1.5s";
};


let zodiacsDate = [
["Овен", '03-21', '04-20'],
["Телец", '04-21', '05-21'],
["Блинецы", '05-22', '06-21'],
["Рак", '06-22', '07-22'],
["Лев", '07-23', '08-23'],
["Дева", '08-24', '09-23'],
["Весы", '09-24', '10-23'],
["Скорпион", '10-24', '11-22'],
["Стрелец", '11-23', '12-22'],
["Козерог", '12-23', '01-20'],
["Водолей", '01-21', '02-19'],
["Рыбы", '02-20', '03-20']
];

var date = new Date();
var year = date.getFullYear();
date = addZero(date.getMonth()+1) + "-" + addZero(date.getDate());
var zodiakNow, alf, gradus, alfMoon, gradusMoon;
var radius  = 110; // радиус окружности 

function addZero(num) {
  if (num <= 9 )  num = '0'+num;
  return num;
}

function getDateForCalendar() {
if (document.getElementById("entereddate").textContent != "Invalid Date"){
var str = document.getElementById("input").value.split(".");
 for (let i = 0 ; i!=str.length-1; i++){
  if (str[i].length == 1 )  str[i] = addZero(str[i]); 
}
date =  str[1] +"-"+str[0];
year = str[2];
findOfZodiak();
}}

function findOfZodiak() {
  for (let i=0; i<12; i++){
    if (date >= zodiacsDate[i][1] && date <= zodiacsDate[i][2] && i!=9) {
      moveAndRotateSun(i);
    } else if ( (i == 9) && (date >='12-23' && date<='12-31') || (date>='01-01' && date<='01-20')) {
      moveAndRotateSun(i);
    }
}}

function moveAndRotateSun(index) {
    zodiakNow = zodiacsDate[index][0];
    var dayInZodiak;//количество дней, показывающее сколько уже дней этот зодиак вступил в силу
    //вычисление угла для поворота солнца
    if ((date[0]+date[1])==(zodiacsDate[index][1][0]+zodiacsDate[index][1][1])){
      dayInZodiak = (date[3]+date[4])-(zodiacsDate[index][1][3]+zodiacsDate[index][1][4]);
    } else if ((date[0]+date[1])==(zodiacsDate[index][2][0]+zodiacsDate[index][2][1])){
      var countDayInMonth= new Date(2021, zodiacsDate[index][1][0]+zodiacsDate[index][1][1], 0).getDate();
      dayInZodiak = Number(date[3]+date[4]) + (countDayInMonth-(zodiacsDate[index][1][3]+zodiacsDate[index][1][4]));
    }
    gradus = 180 - (30*index+dayInZodiak);
    alf = ((30*index+dayInZodiak) * Math.PI)/180;
    moveAndRotateMoon(30*index+dayInZodiak);
    document.querySelector("#Sun").style.transform = 'rotate(' + gradus +'deg)';
    document.querySelector("#Sun").style.marginLeft  = -104+ radius * Math.sin(alf) + 'px';
    document.querySelector("#Sun").style.marginTop  = -8 + radius * Math.cos(alf) + 'px';
}

function moveAndRotateMoon(longitudeSun) {
  var numberMoon; //Лунное число (меняется в зависимости от года)
  if (year > 2013 ) {
    if (19 >= (year - 2013)){
    numberMoon = (year - 2013);
    } else numberMoon = (year - 2013) % 19;
  } else  {
    if (19 >= (2013-year)) {
      numberMoon = 19 - (2013-year);
    } else numberMoon = 19 - (2013-year)%19;
  }
  //Вычисляем возраст луны
  var ageOfMoon = (numberMoon*11 - 14) % 30 + Number(date[0]+date[1]) + Number(date[3] + date[4]);
  if (ageOfMoon>30) {
    ageOfMoon = ageOfMoon % 30;
  }
  var longitudeMoon = ageOfMoon * 12 + longitudeSun;
  gradusMoon = 180 - longitudeMoon;
  alfMoon = (longitudeMoon * Math.PI)/180;
  document.querySelector("#Moon").style.transform = 'rotate(' + gradusMoon +'deg)';
  document.querySelector("#Moon").style.marginLeft = -100 + radius * Math.sin(alfMoon) + 'px';
  document.querySelector("#Moon").style.marginTop = -3 + radius * Math.cos(alfMoon) + 'px';
}

var flag = true;
var idSetIntervalOfSun, idSetIntervalOfMoon;
function animation() { 
  if (flag){
  flag = false;
	var speed= 50;
  var rotateSun = gradus;
  var rotateMoon = gradusMoon;
	var f = alf;
  var f2 = alfMoon;
	var s = 2 * Math.PI / 180; //Вычислим угол в радианах
	idSetIntervalOfSun = setInterval(function() { // функция движения 
		f += s; // приращение аргумента
      document.querySelector("#Sun").style.marginLeft =  -104 + radius * Math.sin(f) + 'px' ;// меняем координаты элемента, подобно тому как мы это делали в школе в декартовой системе координат
      document.querySelector("#Sun").style.marginTop = -8 + radius * Math.cos(f) + 'px';
      rotateSun -= 2; // rotate clockwise by 90 degrees
      document.querySelector("#Sun").style.transform = 'rotate(' + rotateSun + 'deg)';
	}, speed)
  idSetIntervalOfMoon = setInterval(function() { // функция движения 
		f2 += s; // приращение аргумента
    document.querySelector("#Moon").style.marginLeft =  -100 + radius * Math.sin(f2) + 'px' ;
    document.querySelector("#Moon").style.marginTop =   -3 + radius * Math.cos(f2) + 'px';
      rotateMoon -= 2;
      document.querySelector("#Moon").style.transform = 'rotate(' + rotateMoon + 'deg)';
	}, speed/5)
} else {
  clearInterval(idSetIntervalOfMoon);
  document.querySelector("#Moon").style.transform = 'rotate(' + gradusMoon +'deg)';
  document.querySelector("#Moon").style.marginLeft = -100 + radius * Math.sin(alfMoon) + 'px';
  document.querySelector("#Moon").style.marginTop = -3 + radius * Math.cos(alfMoon) + 'px';

  clearInterval(idSetIntervalOfSun);
  document.querySelector("#Sun").style.transform = 'rotate(' + gradus +'deg)';
  document.querySelector("#Sun").style.marginLeft  = -104+ radius * Math.sin(alf) + 'px';
  document.querySelector("#Sun").style.marginTop  = -8 + radius * Math.cos(alf) + 'px';
  flag = true;
}
}
window.onload = findOfZodiak();