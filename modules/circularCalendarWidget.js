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
["Близнецы", '05-22', '06-21'],
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
let calendarForMoon = [
  ["Овен", 0, 30],["Телец",31, 60],["Блинецы",61,90],
  ["Рак",91,120],["Лев",121,150], ["Дева",151,180],
  ["Весы",181,210],["Скорпион",211,240],["Стрелец",241, 270],
  ["Козерог",271, 300],["Водолей",301,330],["Рыбы",331,360],

  ["Водолей", 328, 351],["Рыбы",352, 360],["Рыбы",0, 28],
  ["Овен",29, 53],["Телец",54, 90],["Близнецы", 91,118],
  ["Рак",119,138],["Лев",139, 174],["Дева",175, 218],
  ["Весы",219,241],["Скорпион", 242, 247],["Змееносец", 248, 266],
  ["Стрелец",267, 299],["Козерог", 300,327]
  ];

var date = new Date();
var year = date.getFullYear();//получение текущего года
date = addZero(date.getMonth()+1) + "-" + addZero(date.getDate());//ввод даты в виде "мм-дд". Важно, чтобы обязательно было два числа
var zodiakNow, alf, gradus, alfMoon, gradusMoon;
var radius  = 110; // радиус окружности 

//функция добавления нуля перед числом. Применяется, если число записано как "2", чтобы стало "02"
function addZero(num) {
  if (num <= 9 )  num = '0'+num;
  return num;
}
//функция получения даты из поля ввода при нажатии на кнопку
function getDateForCalendar() {
if (document.getElementById("entereddate").textContent != "Invalid Date"){//если над поле не появилось надписи "Invalid Date"
var str = document.getElementById("input").value.split(".");//получаем дату по отдельности как массив
 for (let i = 0 ; i!=str.length-1; i++){
  if (str[i].length == 1 )  str[i] = addZero(str[i]); 
}
date =  str[1] +"-"+str[0];//переводим в правильную форму
year = str[2];
findOfZodiak();//запускаем функцию получения знака зодиака
}}
//функция нахождения знака зодиака по дате
//Просто проверяем текущую дату с датами из массива zodiacsDate
function findOfZodiak() {
  for (let i=0; i<12; i++){
    if (date >= zodiacsDate[i][1] && date <= zodiacsDate[i][2] && i!=9) {
      moveAndRotateSun(i);//запуск функции вращения и поворота Солнца
    } else if ( (i == 9) && (date >='12-23' && date<='12-31') || (date>='01-01' && date<='01-20')) {
      moveAndRotateSun(i);
    }
}}
//функция поворота и перемещение Солнца
function moveAndRotateSun(index) {
    zodiakNow = zodiacsDate[index][0];
    var dayInZodiak;//количество дней, показывающее сколько уже дней этот зодиак вступил в силу
    //вычисление переменной dayInZodiak
    if ((date[0]+date[1])==(zodiacsDate[index][1][0]+zodiacsDate[index][1][1])){
      dayInZodiak = (date[3]+date[4])-(zodiacsDate[index][1][3]+zodiacsDate[index][1][4]);
    } else if ((date[0]+date[1])==(zodiacsDate[index][2][0]+zodiacsDate[index][2][1])){
      var countDayInMonth= new Date(2021, zodiacsDate[index][1][0]+zodiacsDate[index][1][1], 0).getDate();
      dayInZodiak = Number(date[3]+date[4]) + (countDayInMonth-(zodiacsDate[index][1][3]+zodiacsDate[index][1][4]));
    }
    gradus = 180 - (30*index+dayInZodiak);//градус, на который нужно повернуть Солнце. Здесь вначале стоит 180, потому что на сайте изначально Солнце расположено на 90 градусах
    alf = ((30*index+dayInZodiak) * Math.PI)/180;//перевод градусов в радианы
    document.getElementById("ZnakSun").innerHTML = "Знак зодиака: "+zodiakNow;//вывод на сайт информациb о знаке
    moveAndRotateMoon(30*index+dayInZodiak);//функция поворот и вращение Луны, которая получает долготу Солнца
    document.querySelector("#Sun").style.transform = 'rotate(' + gradus +'deg)';
    document.querySelector("#Sun").style.marginLeft  = -104+ radius * Math.sin(alf) + 'px';
    document.querySelector("#Sun").style.marginTop  = -8 + radius * Math.cos(alf) + 'px';
}
//функция поворота и перемещение Луны
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
  //вычиление долготы Луны
  var longitudeMoon = ageOfMoon * 12 + longitudeSun;
  //определение, к какому знаку и в каком созвездии находится Луна
  for (var i = 0; i<26; i++){
    if ((longitudeMoon >= calendarForMoon[i][1] && longitudeMoon<=calendarForMoon[i][2]) || ((longitudeMoon <= calendarForMoon[i][1] && longitudeMoon>=calendarForMoon[i][2]))){
      if (i<12) document.getElementById("ZnakMoon").innerHTML = "Луна в знаке: " + calendarForMoon[i][0];
      else      document.getElementById("constellationMoon").innerHTML ="Луна в создвездии: " + calendarForMoon[i][0];
    }}
  gradusMoon = 180 - longitudeMoon;
  alfMoon = (longitudeMoon * Math.PI)/180;
  document.querySelector("#Moon").style.transform = 'rotate(' + gradusMoon +'deg)';
  document.querySelector("#Moon").style.marginLeft = -100 + radius * Math.sin(alfMoon) + 'px';
  document.querySelector("#Moon").style.marginTop = -3 + radius * Math.cos(alfMoon) + 'px';
}

var flag = true;
var idSetIntervalOfSun, idSetIntervalOfMoon;
//функция анимации вращения Солнца и Луны по окружности
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
      rotateSun -= 2; // поворот
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
  clearInterval(idSetIntervalOfMoon);//остонавливаем анимацию вращения
  //возвращаем в изначальное положение
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
//запускаем функцию для знака зодиака при загрузке документа
document.onload = findOfZodiak();