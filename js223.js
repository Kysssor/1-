const $ = (s, o = document) => o.querySelector(s);
const $$ = (s, o = document) => o.querySelectorAll(s);


const zodiacs = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius'];
const zodiacsS = ['Capricorn show', 'Aquarius show', 'Pisces show', 'Aries show', 'Taurus show', 'Gemini show', 'Cancer show', 'Leo show', 'Virgo show', 'Libra show', 'Scorpio show', 'Sagittarius show'];
const zodiacsRU = ['Козерог', 'Водолей', 'Рыбы', 'Овен', 'Телец', 'Близнецы', 'Рак', 'Лев', 'Дева', 'Весы', 'Скорпион', 'Стрелец'];
const zodiacsSymb = ['<p>&#9809;</p>', '<p>&#9810;</p>', '<p>&#9811;</p>', '<p>&#9800;</p>', '<p>&#9801;</p>', '<p>&#9802;</p>', '<p>&#9803;</p>', '<p>&#9804;</p>', '<p>&#9805;</p>', '<p>&#9806;</p>', '<p>&#9807;</p>', '<p>&#9808;</p>'];

function getZodiac(day, month) {
    let zodiac = [''].concat(zodiacs).concat([zodiacs[0]]),
        last = ['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
    return (parseInt(day) > last[parseInt(month)]) ? zodiac[parseInt(month) * 1 + 1] : zodiac[parseInt(month)];
}

function createZodiac(cls, index) {
    let div = document.createElement('div');    
    div.classList.add(cls);	


    return div;	
    
}

function prevInput(el) {
    let input = el.previousElementSibling ? el.previousElementSibling.previousElementSibling : null;
    return (input && input.tagName == 'INPUT') ? input : el;
}

function nextInput(el) {
    let input = el.nextElementSibling ? el.nextElementSibling.nextElementSibling : null;
    return (input && input.tagName == 'INPUT') ? input : el;
}

function pad(n) {
    return (n < 10) ? ('0' + n) : n;
}

function triggerInput(el) {
    let event = document.createEvent('Event');
    event.initEvent('input', true, true);
    el.dispatchEvent(event);
}

$$('.birthday').forEach(field => {

    let month = $('.month', field),
        day = $('.day', field),
        year = $('.year', field),
        icon = $('.icon', field),
        normal = $('.normal', icon),
        zodiac = $('.zodiac', icon);
           
    zodiacs.forEach((name, index) => zodiac.appendChild(createZodiac(name, index)));
     
		 
    month.addEventListener('keypress', e => {
        if(e.key > 1 && !month.value.length && e.keyCode != 37 && e.keyCode != 39 && document.activeElement == month) {
            month.value = '0' + e.key;
            triggerInput(month);
            setTimeout(() => nextInput(month).focus(), 50);
        }
    });

    day.addEventListener('keypress', e => {
        if(e.key > 3 && !day.value.length && e.keyCode != 37 && e.keyCode != 39 && document.activeElement == day) {
            day.value = '0' + e.key;
            triggerInput(day);
            setTimeout(() => nextInput(day).focus(), 50);
        }
    });

    [month, day, year].forEach(input => {

        input.addEventListener('keypress', e => {
            if(e.keyCode < 47 || e.keyCode > 57) {
                e.preventDefault();
            }
        });

        input.addEventListener('keydown', e => {
            if((e.keyCode == 8 && !input.value) || (e.keyCode == 37 && input.selectionStart == 0)) {
                prevInput(input).focus();
            }
            if(((e.keyCode != 9 && e.keyCode != 37 && e.keyCode != 8 && (input.selectionStart == input.getAttribute('maxlength'))) || (e.keyCode == 39 && input.selectionStart == input.value.length))) {
                nextInput(input).focus();
            }
        });

        input.addEventListener('input', e => {

            let date = (month.value.length >= 1 && day.value.length >= 1 && year.value.length == 4) ? new Date(year.value + '-' + month.value + '-' + day.value) : true;

            if($('.show', zodiac)) {
                $('.show', zodiac).classList.remove('show');
				
            }
//Массив из 1 обновляемого элемента
      let AR = [];
	  if(day.value !=='' && month.value !==''){
	 for(var i = 0; i < $('.' + getZodiac(day.value, month.value), zodiac).classList.length; i++) {
	   AR.push($('.' + getZodiac(day.value, month.value), zodiac).classList[i]);
	  };}		
            if(day.value.length >= 1 && day.value > 0 && day.value < 32 && month.value.length >= 1 && month.value > 0 && month.value < 13) {
                $('.' + getZodiac(day.value, month.value), zodiac).classList.add('show');
                								
			//Выводим название знака английский
				$('.show', zodiac).innerText =AR[0] ;
            } 

            field.classList.toggle('error', (day.value.length == 2 && (day.value < 1 || day.value > 31)) || (month.value.length == 2 && (month.value < 1 || month.value > 12)));

            						
			var g = $('.birthday [class *= "show"]');
			if (g !=null){
			var c = g.className;
			
			console.log(c);               			   			 			   
			   D('zodiacc').innerHTML = "<p>" + zodiacsRU[zodiacsS.indexOf(c)] + "</p><img src='./img/" + c + ".jpg'/>";
			   //Вставляем значок из массива zodiacsSymb как HTML
               $('.show', zodiac).insertAdjacentHTML('beforeend',zodiacsSymb[zodiacsS.indexOf(c)]);			   
			   }else{
				   console.log('0');
				  
			   }			   			  			   			   
        });

    });

});



