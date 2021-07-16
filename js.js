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


var date = new Date();
date = addZero(date.getMonth()+1) + "-" + addZero(date.getDate());
//date = "07-22";
console.log(date);
  function addZero(num) {
    if (num <= 9 ){
    num = '0'+num;
    }
  return num;
  }

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

var zodiakNow, alf, gradus, alfMoon;
var radius  = 220; // радиус окружности 

for (let i=0; i<12; i++){
    if (date >= zodiacsDate[i][1] && date <= zodiacsDate[i][2] && i!=9) {
      moveAndRotateSun(i);
    } else if ( (i == 9) && (date >='12-23' && date<='12-31') || (date>='01-01' && date<='01-20')) {
      moveAndRotateSun(i);
      //moveAndRotateMoon();
    }
}

//Намётки на отыскание центра
//const { right, left, width, height } = document.querySelector("#TropicCircle").getBoundingClientRect();
//console.log("Размер "+ height + " "+ width + " "+ left + " " + right + " ");

function moveAndRotateSun(index) {
    zodiakNow = zodiacsDate[index][0];
    var dayInZodiak;
    var firstdate = zodiacsDate[index][1];
    var lastDate = zodiacsDate[index][2];
    //вычисление угла для поворота солнца
    if ((date[0]+date[1])==(firstdate[0]+firstdate[1])){
      dayInZodiak = (date[3]+date[4])-(firstdate[3]+firstdate[4]);
    } else if ((date[0]+date[1])==(lastDate[0]+lastDate[1])){
      var countDayInMonth= new Date(2021, firstdate[0]+firstdate[1], 0).getDate();
      dayInZodiak = Number(date[3]+date[4]) + (countDayInMonth-(firstdate[3]+firstdate[4]));
    }
    
    gradus = 180 - (30*index+dayInZodiak);
    alf = ((30*index+dayInZodiak) * Math.PI)/180;
    moveAndRotateMoon(30*index+dayInZodiak);
    document.querySelector("#Sun").style.transform = 'rotate(' + gradus +'deg)';
    document.querySelector("#Sun").style.marginLeft = -206 + radius * Math.sin(alf);
    document.querySelector("#Sun").style.marginTop = 183 + radius * Math.cos(alf);
    document.getElementById("ZnakZodiak").innerHTML = zodiakNow;
}
var gradusMoon;
function moveAndRotateMoon(longitudeSun) {
  
  var ageOfMoon = (8*11 - 14) % 30 + Number(date[0]+date[1]) + Number(date[3] + date[4]);
  if (ageOfMoon>30) {
    ageOfMoon = ageOfMoon % 30;
  }
  var longitudeMoon = ageOfMoon * 12 + longitudeSun;
  gradusMoon = 180 - longitudeMoon;
  alfMoon = (longitudeMoon * Math.PI)/180;
  document.querySelector("#Moon").style.transform = 'rotate(' + gradusMoon +'deg)';
  document.querySelector("#Moon").style.marginLeft = -200 + radius * Math.sin(alfMoon);
  document.querySelector("#Moon").style.marginTop = 193 + radius * Math.cos(alfMoon);
  console.log("Возраст "+ageOfMoon + " " + longitudeMoon + " " + longitudeSun + " " + gradusMoon);
}

function animation(args, elem) { // некоторые аргументы определим на будущее
	var $ = {
		speed   :     40 // скорость/задержка ( в js это мс, например 10 мс = 100 кадров в секунду)
	}
  var rotateSun = gradus;
  var rotateMoon = gradusMoon;
	var f = alf;
  var f2 = alfMoon;
	var s = 2 * Math.PI / 180; //Вычислим угол
	setInterval(function() { // функция движения 
		f += s; // приращение аргумента
		  elem.style.marginLeft =  -206 + radius * Math.sin(f) + 'px' ;//1100 + $.radius * Math.sin(f)  + 'px'; // меняем координаты элемента, подобно тому как мы это делали в школе в декартовой системе координат. Правда, в данном случае используется полярная система координат, изменяя угол
		  elem.style.marginTop =   183 + radius * Math.cos(f) + 'px';//360 + $.radius * Math.cos(f) + 'px';
      rotateSun -= 2; // rotate clockwise by 90 degrees
      document.querySelector("#Sun").style.transform = 'rotate(' + rotateSun + 'deg)';
	}, $.speed)
  setInterval(function() { // функция движения 
		f2 += s; // приращение аргумента
    document.querySelector("#Moon").style.marginLeft =  -200 + radius * Math.sin(f2) + 'px' ;//1100 + $.radius * Math.sin(f)  + 'px'; // меняем координаты элемента, подобно тому как мы это делали в школе в декартовой системе координат. Правда, в данном случае используется полярная система координат, изменяя угол
    document.querySelector("#Moon").style.marginTop =   193 + radius * Math.cos(f2) + 'px';//360 + $.radius * Math.cos(f) + 'px';
      rotateMoon -= 2; // rotate clockwise by 90 degrees
      document.querySelector("#Moon").style.transform = 'rotate(' + rotateMoon + 'deg)';
	}, 8)
}

