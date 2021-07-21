var secMoonM = (29.53058812 * 86400 * 1000).toFixed(20);
var	latitude  = null; // ШИРОТА
var	longitude = null; // ДОЛГОТА

var options4 = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
};

//ТОЧКА ОТСЧЕТА
var dateX = new Date(2019, 11, 26, 7, 13, 12);
var timeStart1 = dateX.getTime();

//РАССЧЕТЫ
function buttonclick(now) {
        //выводим выбранную дату
        if (now)
            var mh = now;
        else {
            var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
            var mh = new Date(document.getElementById('input').value.replace(pattern, '$3-$2-$1'));
        }
        var select = mh.toLocaleString("ru", options4);
        document.getElementById('entereddate').innerHTML = "<p style=font-size:20px;>" + select + "</p>";

        //начало года по КИТАЮ
        var mhCH = new Date(mh.getFullYear(), 1);
        var SelectMoonMonthCH = Math.abs((timeStart1 - mhCH.getTime()) / secMoonM).toFixed(20);

        //считаем количество лунных месяцев между выбранной и нулевой датой
        var SelectMoonMonth1 = Math.abs((timeStart1 - mh.getTime()) / secMoonM).toFixed(20);
        var minData1 = Math.floor(SelectMoonMonth1);

        //ВЫЧИСЛЯЕМ ЛУННЫЙ ДЕНЬ, УБЫЫВАНИЕ_РОСТ
        //ЕСЛИ выбранная дата < 2020, то от нуля отнимаем, если больше - прибывляем
        if (mh.getFullYear() < 2020) {
            //начало года по китаю < 2020
            currentDay = Math.abs((1 - (Math.abs(SelectMoonMonth1 - minData1))) * 29.53058812);
            //ПО РАЗНИЦЕ ОПРЕДЕЛЯЕМ УБЫВАНИЕ_РОСТ
            if ((Math.round(SelectMoonMonth1) - SelectMoonMonth1) > 0.01) {
                document.getElementById('cal8').innerHTML = "<p>Растущая</p>";
            } else {
                document.getElementById('cal8').innerHTML = "<p>Убывающая</p>";
            }
        } else {
            //начало года по китаю > 2019
            currentDay = Math.abs((Math.abs(SelectMoonMonth1 - minData1)) * 29.53058812);
            if ((Math.round(SelectMoonMonth1) - SelectMoonMonth1) > 0.01) {
                document.getElementById('cal8').innerHTML = "<p>Убывающая</p>";
            } else {
                document.getElementById('cal8').innerHTML = "<p>Растущая</p>";
            }
        }
        //сонодический месяц делем на количество картинок и делим на два чтоб высчитывать интервалы начиная с новолунии (29.53058812/30)/2
        if (currentDay >= 14.27311759133333333333 && currentDay <= 15.25747052866666666667) {
            document.getElementById('cal8').innerHTML = "<p>Полнолуние</p>";
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/16.png'/>";
        }
        if (currentDay >= 29.03841165133333333333 || currentDay <= 0.49217646866666666667) {
            document.getElementById('cal8').innerHTML = "<p>Новолуние</p>";
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/1.png'/>";
        }
        if (currentDay > 0.49217646866666666667 && currentDay < 1.476529406) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/2.png'/>";
        }
        if (currentDay > 1.476529406 && currentDay < 2.46088234333333333333) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/3.png'/>";
        }
        if (currentDay > 2.46088234333333333333 && currentDay < 3.44523528066666666667) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/4.png'/>";
        }
        if (currentDay > 3.44523528066666666667 && currentDay < 4.429588218) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/5.png'/>";
        }
        if (currentDay > 4.429588218 && currentDay < 5.41394115533333333333) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/6.png'/>";
        }
        if (currentDay > 5.41394115533333333333 && currentDay < 6.39829409266666666667) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/7.png'/>";
        }
        if (currentDay > 6.39829409266666666667 && currentDay < 7.38264703) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/8.png'/>";
        }
        if (currentDay > 7.38264703 && currentDay < 8.36699996733333333333) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/9.png'/>";
        }
        if (currentDay > 8.36699996733333333333 && currentDay < 9.35135290466666666667) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/10.png'/>";
        }
        if (currentDay > 9.35135290466666666667 && currentDay < 10.335705842) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/11.png'/>";
        }
        if (currentDay > 10.335705842 && currentDay < 11.32005877933333333333) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/12.png'/>";
        }
        if (currentDay > 11.32005877933333333333 && currentDay < 12.30441171666666666667) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/13.png'/>";
        }
        if (currentDay > 12.30441171666666666667 && currentDay < 13.288764654) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/14.png'/>";
        }
        if (currentDay > 13.288764654 && currentDay < 14.27311759133333333333) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/15.png'/>";
        }
        if (currentDay > 15.25747052866666666667 && currentDay < 16.241823466) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/17.png'/>";
        }
        if (currentDay > 16.241823466 && currentDay < 17.22617640333333333333) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/18.png'/>";
        }
        if (currentDay > 17.22617640333333333333 && currentDay < 18.21052934066666666667) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/19.png'/>";
        }
        if (currentDay > 18.21052934066666666667 && currentDay < 19.194882278) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/20.png'/>";
        }
        if (currentDay > 19.194882278 && currentDay < 20.17923521533333333333) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/21.png'/>";
        }
        if (currentDay > 20.17923521533333333333 && currentDay < 21.16358815266666666667) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/22.png'/>";
        }
        if (currentDay > 21.16358815266666666667 && currentDay < 22.14794109) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/23.png'/>";
        }
        if (currentDay > 22.14794109 && currentDay < 23.13229402733333333333) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/24.png'/>";
        }
        if (currentDay > 23.13229402733333333333 && currentDay < 24.11664696466666666667) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/25.png'/>";
        }
        if (currentDay > 24.11664696466666666667 && currentDay < 25.100999902) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/26.png'/>";
        }
        if (currentDay > 25.100999902 && currentDay < 26.08535283933333333333) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/27.png'/>";
        }
        if (currentDay > 26.08535283933333333333 && currentDay < 27.06970577666666666667) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/28.png'/>";
        }
        if (currentDay > 27.06970577666666666667 && currentDay < 28.054058714) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/29.png'/>";
        }
        if (currentDay > 28.054058714 && currentDay < 29.03841165133333333333) {
            document.getElementById('fases').innerHTML = "<img src = '../assets/img/moonCalculatorWidget/30.png'/>";
        }
			if (longitude !== null && latitude !== null)
	{
		document.getElementById("location").innerHTML = "ШИРОТА: " + latitude + "<br>ДОЛГОТА: " + longitude;

		// ВОСХОД И ЗАКАТ ЛУНЫ		
		var moonTimes = SunCalc.getMoonTimes(mh, latitude, longitude, true);
		document.getElementById('risesetmoon').innerHTML = 'ВОСХОД ЛУНЫ: ' + timeToString(moonTimes.rise) + '<br>ЗАКАТ ЛУНЫ: ' + timeToString(moonTimes.set);
			
		// МЕСТОПОЛОЖЕНИЕ ЛУНЫ
		var moonPos = SunCalc.getMoonPosition(mh, latitude, longitude);
		document.getElementById("locationmoon").innerHTML = "АЗИМУТ: " + moonPos.azimuth + "<br>ВЫСОТА: " + moonPos.altitude + "<br>РАССТОЯНИЕ: " + moonPos.distance;
		
		// СОСТОЯНИЕ ЛУНЫ
		var moonIllum = SunCalc.getMoonIllumination(mh);
		document.getElementById("statemoon").innerHTML = "ДОЛЯ: " + moonIllum.fraction + "<br>ФАЗА: " + moonIllum.phase + "<br>УГОЛ: " + moonIllum.angle;
	}
}

var now = new Date();
window.onload = buttonclick(now);

(function () { 'use strict';

    // shortcuts for easier to read formulas

    var PI = Math.PI,
        sin = Math.sin,
        cos = Math.cos,
        tan = Math.tan,
        asin = Math.asin,
        atan = Math.atan2,
        acos = Math.acos,
        rad = PI / 180;

    // sun calculations are based on http://aa.quae.nl/en/reken/zonpositie.html formulas

    // date/time constants and conversions

    var dayMs = 1000 * 60 * 60 * 24,
        J1970 = 2440588,
        J2000 = 2451545;

    function toJulian(date) { return date.valueOf() / dayMs - 0.5 + J1970; }
    function fromJulian(j) { return new Date((j + 0.5 - J1970) * dayMs); }
    function toDays(date) { return toJulian(date) - J2000; }


    // general calculations for position

    var e = rad * 23.4397; // obliquity of the Earth

    function rightAscension(l, b) { return atan(sin(l) * cos(e) - tan(b) * sin(e), cos(l)); }
    function declination(l, b) { return asin(sin(b) * cos(e) + cos(b) * sin(e) * sin(l)); }

    function azimuth(H, phi, dec) { return atan(sin(H), cos(H) * sin(phi) - tan(dec) * cos(phi)); }
    function altitude(H, phi, dec) { return asin(sin(phi) * sin(dec) + cos(phi) * cos(dec) * cos(H)); }

    function siderealTime(d, lw) { return rad * (280.16 + 360.9856235 * d) - lw; }

    function astroRefraction(h) {
        if (h < 0) // the following formula works for positive altitudes only.
            h = 0; // if h = -0.08901179 a div/0 would occur.

        // formula 16.4 of "Astronomical Algorithms" 2nd edition by Jean Meeus (Willmann-Bell, Richmond) 1998.
        // 1.02 / tan(h + 10.26 / (h + 5.10)) h in degrees, result in arc minutes -> converted to rad:
        return 0.0002967 / Math.tan(h + 0.00312536 / (h + 0.08901179));
    }

    // general sun calculations

    function solarMeanAnomaly(d) { return rad * (357.5291 + 0.98560028 * d); }

    function eclipticLongitude(M) {

        var C = rad * (1.9148 * sin(M) + 0.02 * sin(2 * M) + 0.0003 * sin(3 * M)), // equation of center
            P = rad * 102.9372; // perihelion of the Earth

        return M + C + P + PI;
    }

    function sunCoords(d) {

        var M = solarMeanAnomaly(d),
            L = eclipticLongitude(M);

        return {
            dec: declination(L, 0),
            ra: rightAscension(L, 0)
        };
    }


    var SunCalc = {};



    // moon calculations, based on http://aa.quae.nl/en/reken/hemelpositie.html formulas

    function moonCoords(d) { // geocentric ecliptic coordinates of the moon

        var L = rad * (218.316 + 13.176396 * d), // ecliptic longitude
            M = rad * (134.963 + 13.064993 * d), // mean anomaly
            F = rad * (93.272 + 13.229350 * d),  // mean distance

            l = L + rad * 6.289 * sin(M), // longitude
            b = rad * 5.128 * sin(F),     // latitude
            dt = (385001 - 20905 * cos(M)).toFixed(3);  // distance to the moon in km

        return {
            ra: rightAscension(l, b),
            dec: declination(l, b),
            dist: dt
        };
    }

    SunCalc.getMoonPosition = function (date, lat, lng) {

        var lw = rad * -lng,
            phi = rad * lat,
            d = toDays(date),

            c = moonCoords(d),
            H = siderealTime(d, lw) - c.ra,
            h = altitude(H, phi, c.dec),
            // formula 14.1 of "Astronomical Algorithms" 2nd edition by Jean Meeus (Willmann-Bell, Richmond) 1998.
            pa = atan(sin(H), tan(phi) * cos(c.dec) - sin(c.dec) * cos(H));

        h = h + astroRefraction(h); // altitude correction for refraction

        return {
            azimuth: (azimuth(H, phi, c.dec)).toFixed(3),
            altitude: h.toFixed(3),
            distance: c.dist,
            parallacticAngle: pa
        };
    };


    // calculations for illumination parameters of the moon,
    // based on http://idlastro.gsfc.nasa.gov/ftp/pro/astro/mphase.pro formulas and
    // Chapter 48 of "Astronomical Algorithms" 2nd edition by Jean Meeus (Willmann-Bell, Richmond) 1998.

    SunCalc.getMoonIllumination = function (date) {

        var d = toDays(date || new Date()),
            s = sunCoords(d),
            m = moonCoords(d),

            sdist = 149598000, // distance from Earth to Sun in km

            phi = acos(sin(s.dec) * sin(m.dec) + cos(s.dec) * cos(m.dec) * cos(s.ra - m.ra)),
            inc = atan(sdist * sin(phi), m.dist - sdist * cos(phi)),
            angle = (atan(cos(s.dec) * sin(s.ra - m.ra), sin(s.dec) * cos(m.dec) -
                cos(s.dec) * sin(m.dec) * cos(s.ra - m.ra))).toFixed(3);

        return {
            fraction: ((1 + cos(inc)) / 2).toFixed(3),
            phase: (0.5 + 0.5 * inc * (angle < 0 ? -1 : 1) / Math.PI).toFixed(3),
            angle: angle
        };
    };


    function hoursLater(date, h) {
        return new Date(date.valueOf() + h * dayMs / 24);
    }

    // calculations for moon rise/set times are based on http://www.stargazing.net/kepler/moonrise.html article

    SunCalc.getMoonTimes = function (date, lat, lng, inUTC) {
        var t = new Date(date);
        if (inUTC) t.setUTCHours(0, 0, 0, 0);
        else t.setHours(0, 0, 0, 0);

        var hc = 0.133 * rad,
            h0 = SunCalc.getMoonPosition(t, lat, lng).altitude - hc,
            h1, h2, rise, set, a, b, xe, ye, d, roots, x1, x2, dx;

        // go in 2-hour chunks, each time seeing if a 3-point quadratic curve crosses zero (which means rise or set)
        for (var i = 1; i <= 24; i += 2) {
            h1 = SunCalc.getMoonPosition(hoursLater(t, i), lat, lng).altitude - hc;
            h2 = SunCalc.getMoonPosition(hoursLater(t, i + 1), lat, lng).altitude - hc;

            a = (h0 + h2) / 2 - h1;
            b = (h2 - h0) / 2;
            xe = -b / (2 * a);
            ye = (a * xe + b) * xe + h1;
            d = b * b - 4 * a * h1;
            roots = 0;

            if (d >= 0) {
                dx = Math.sqrt(d) / (Math.abs(a) * 2);
                x1 = xe - dx;
                x2 = xe + dx;
                if (Math.abs(x1) <= 1) roots++;
                if (Math.abs(x2) <= 1) roots++;
                if (x1 < -1) x1 = x2;
            }

            if (roots === 1) {
                if (h0 < 0) rise = i + x1;
                else set = i + x1;

            } else if (roots === 2) {
                rise = i + (ye < 0 ? x2 : x1);
                set = i + (ye < 0 ? x1 : x2);
            }

            if (rise && set) break;

            h0 = h2;
        }

        var result = {};

        if (rise) result.rise = hoursLater(t, rise);
        if (set) result.set = hoursLater(t, set);

        if (!rise && !set) result[ye > 0 ? 'alwaysUp' : 'alwaysDown'] = true;

        return result;
    };


    // export as Node module / AMD module / browser variable
    if (typeof exports === 'object' && typeof module !== 'undefined') module.exports = SunCalc;
    else if (typeof define === 'function' && define.amd) define(SunCalc);
    else window.SunCalc = SunCalc;

}());

/* функция добавления ведущих нулей в дате и времени
(если число меньше десяти, перед числом добавляем ноль) */
function zero(value) {
    if (value < 10)
        value = '0' + value;
    return value;
}

// ДАТА
function todaydate() {
    var datetime = new Date();
    var day = zero(datetime.getDate());
    var month = zero(datetime.getMonth() + 1);
    var year = datetime.getFullYear();
    return day + "." + month + "." + year;
}
setInterval(function () {
    document.getElementById('date').innerHTML = todaydate();
}, 1);

// ВРЕМЯ
function time() {
    var datetime = new Date();
    var hours = zero(datetime.getHours());
    var minutes = zero(datetime.getMinutes());
    var seconds = zero(datetime.getSeconds());
    return hours + ":" + minutes + ":" + seconds;
}
function timeToString(datetime) {
    var hours = zero(datetime.getHours());
    var minutes = zero(datetime.getMinutes());
    var seconds = zero(datetime.getSeconds());
    return hours + ":" + minutes + ":" + seconds;
} setInterval(function () {
    document.getElementById('time').innerHTML = time();
}, 1);

// МЕСТОПОЛОЖЕНИЕ, ПО КОТОРОМУ ТАКЖЕ ВЫВОДИТСЯ ВОСХОД/ЗАКАТ, МЕСТОПОЛОЖЕНИЕ, СОСТОЯНИЕ ЛУНЫ
	window.onload = Location;
	function Location () {
		if (navigator.geolocation)
			navigator.geolocation.getCurrentPosition(position);
	}
	function  position(position) {
		latitude  = (position.coords.latitude).toFixed(3);
		longitude = (position.coords.longitude).toFixed(3);
		buttonclick(now);
	}
