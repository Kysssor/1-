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
    console.log("Work");
};


var date = new Date();
date = addZero(date.getMonth()+1) + "-" + addZero(date.getDate());
//date = "11-25";
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

var zodiakNow;
var current_rotation = 180;
var alf, gradus;
var radius  = 220; // радиус окружности 

for (let i=0; i<12; i++){
    if (date >= zodiacsDate[i][1] && date <= zodiacsDate[i][2] && i!=9) {
      moveAndRotateSun(i);
    } else if ( (i == 9) && (date >='12-23' && date<='12-31') || (date>='01-01' && date<='01-20')) {
      moveAndRotateSun(i);
    }
}
//Намётки на отыскание центра
const { right, left, width, height } = document.querySelector("#TropicCircle").getBoundingClientRect();
console.log("Размер "+ height + " "+ width + " "+ left + " " + right + " ");

function moveAndRotateSun(index) {
    zodiakNow = zodiacsDate[index][0];
    gradus = current_rotation - (30*index+15);
    //var radius  = 220; // радиус окружности 
    alf = ((30*index+15) * Math.PI)/180;
    document.querySelector("#Sun").style.transform = 'rotate(' + gradus +'deg)';
    document.querySelector("#Sun").style.left = 1100+ radius * Math.sin(alf);
    document.querySelector("#Sun").style.top = 360 + radius * Math.cos(alf);
    
}

function animation(args, elem) { // некоторые аргументы определим на будущее
	var $ = {
		radius  :     220, // радиус окружности 
		speed   :     40 // скорость/задержка ( в js это мс, например 10 мс = 100 кадров в секунду)
	}
  var rotateSun = gradus;
	var f = alf;
	var s = 2 * Math.PI / 180; //Вычислим угол
	setInterval(function() { // функция движения 
		f += s; // приращение аргумента

		  elem.style.left =  1100 + radius * Math.sin(f) + 'px' ;//858 + $.radius * Math.sin(f)  + 'px'; // меняем координаты элемента, подобно тому как мы это делали в школе в декартовой системе координат. Правда, в данном случае используется полярная система координат, изменяя угол
		  elem.style.top =   360 + radius * Math.cos(f) + 'px';//360 + $.radius * Math.cos(f) + 'px';
      

      rotateSun -= 2; // rotate clockwise by 90 degrees
      document.querySelector("#Sun").style.transform = 'rotate(' + rotateSun + 'deg)';
	}, $.speed)
}

