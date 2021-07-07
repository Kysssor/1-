/* функция добавления ведущих нулей в дате и времени
(если число меньше десяти, перед числом добавляем ноль) */
    function zero(value)
    {
        if (value < 10)
        value='0'+value;
        return value;
    }
	
// ДАТА
    function date()
    {
        var datetime = new Date();
        var day = zero(datetime.getDate());
        var month = zero(datetime.getMonth()+1);
        var year = datetime.getFullYear();
        return day+"."+month+"."+year;
    }	
    setInterval(function () {
        document.getElementById('date').innerHTML = date();
    }, 1);
	
// ВРЕМЯ
    function time()
    {
        var datetime = new Date();
		var hours = zero(datetime.getHours());
        var minutes = zero(datetime.getMinutes());
        var seconds = zero(datetime.getSeconds());
        return hours+":"+minutes+":"+seconds;
    }	
    setInterval(function () {
        document.getElementById('time').innerHTML = time();
    }, 1);
	
// МЕСТОПОЛОЖЕНИЕ
	window.onload = Location;
	function Location () { 
		if (navigator.geolocation) { 
			navigator.geolocation.getCurrentPosition(displayLocation); 
	}
		else {
			alert("Геолокация не поддерживается");
		}
	}
	function  displayLocation(position) {
		var	latitude = position.coords.latitude;
		var	longitude = position.coords.longitude;
		document.getElementById("location1").innerHTML = "ШИРОТА: " + latitude;
		document.getElementById("location2").innerHTML = "ДОЛГОТА: " +  longitude;
	}