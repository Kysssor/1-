var rotate1 = 0;
var rotate2 = 0;
Circle.onclick = function() {
    var circle = document.getElementById('TropicCircle');
    var circle2 = document.getElementById('SiderCircle');
    var circle3 = document.getElementById('AstrolCircle');
    rotate1 = rotate1 ? 0 : 360;
    rotate2 = rotate2 ? 0 : -360;
    circle.style.transform = "rotate(" + rotate1 + "deg)";
    circle2.style.transform = "rotate(" + rotate2 + "deg)";
    circle3.style.transform = "rotate(" + rotate1 + "deg)";
    circle.style.transition = "transform 1.5s";
    circle2.style.transition = "transform 1.5s";
    circle3.style.transition = "transform 1.5s";
    console.log("Work");

};


function animation(args, elem) { // некоторые аргументы определим на будущее
	var $ = {
		radius  :     220, // радиус окружности 
		speed   :     20 // скорость/задержка ( в js это мс, например 10 мс = 100 кадров в секунду)
	}
  var current_rotation = 180;
	var f = 0;
	var s = 2 * Math.PI / 180; //Вычислим угол
	setInterval(function() { // функция движения 
		f += s; // приращение аргумента
    //elem.style.transform = "rotate(" + -360 + "deg)";
    //elem.style.transition = "transform 2s";
		  elem.style.left =  858 + $.radius * Math.sin(f)  + 'px'; // меняем координаты элемента, подобно тому как мы это делали в школе в декартовой системе координат. Правда, в данном случае используется полярная система координат, изменяя угол
		  elem.style.top =   360 + $.radius * Math.cos(f) + 'px';

      current_rotation -= 2; // rotate clockwise by 90 degrees
      document.querySelector("#Sun").style.transform = 'rotate(' + current_rotation + 'deg)';
	}, $.speed)
}


/*
 © 2017
 made for http://www.abc2home.ru/

var todayall = new Date();//(2017, 02, 02, 08, 0, 0, 0) // 2017, 01, 15, 22, 25, 0, 0
var exdate='15 Feb 2017 22:25:00';
if (location.search.length > 1) {
  var argstr = location.search.substring(1,location.search.length);
  var args = argstr.split('&');
  for (var x in  args) eval(decodeURI(args[x]));
todayall = new Date(exdate)
};

var zod = "Овен, Телец, Близнецы, Рак, Лев, Дева, Весы, Скорпион, Стрелец, Козерог, Водолей, Рыбы, Змееносец, Кит";
var zodur = "znak_oven,znak-telets,znak-bliznetsy,znak-rak,znak_lev,znak-deva,znak-vesy,znak-skorpion,znak-strelets,znak-kozerog,znak-vodoley,znak-ryby";
var Mnfrs = "супер Луна, сильная Луна, средняя Луна, слабая Луна, микро Луна";
var phazreg=0, dti=0.5, idt='', TimeMachine = todayall.getTime();
var out1, int2, out2;
*/
