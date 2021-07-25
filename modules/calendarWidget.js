const DATECAL = new Date();

const inputValue = document.getElementById('input');
inputValue.addEventListener('keypress', getMonthYear);
function getMonthYear(evt) {
    if (document.getElementById("entereddate").textContent != "Invalid Date" || evt.keyCode == 13) {
        let inputValue = document.getElementById('input').value;
        if (inputValue.length == 10) {
            var mySplits = inputValue.split(".");
        }
    }
    renderCalendar(mySplits)
}

function renderCalendar(mySplits) {
    if (mySplits != null) {
        DATECAL.setMonth(mySplits[1] - 1);
        DATECAL.setFullYear(mySplits[2]);
    }
    DATECAL.setDate(1);
    const MONTHDAYS = document.querySelector(".daysCal");

    //последний день текущего месяца
    const LASTDAY = new Date(DATECAL.getFullYear(), DATECAL.getMonth() + 1, 0).getDate();

    //последний день предыдущего месяца
    const PREVLASTDAY = new Date(DATECAL.getFullYear(), DATECAL.getMonth(), 0).getDate();

    //индекс первого дня недели текущего месяца(типо чт-4,сб-6)
    const FIRSTDAYINDEX = DATECAL.getDay();

    //индекс последнего дня недели текущего месяца(типо чт-4,сб-6)
    const LASTDAYINDEX = new Date(DATECAL.getFullYear(), DATECAL.getMonth() + 1, 0).getDay();

    const NEXTDAYS = 7 - LASTDAYINDEX - 1;

    const MONTHS = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ];

    document.querySelector('.date h1').innerHTML = MONTHS[DATECAL.getMonth()] + " " + DATECAL.getFullYear();

    let days = "";
    //числа предыдущего месяца
    for (let x = FIRSTDAYINDEX; x > 0; x--) {
        days += `<div class="prev-date">${PREVLASTDAY - x  +1}</div>`;
    }
    //числа текущего месяца
    for (let i = 1; i <= LASTDAY; i++) {
        //определение текущего дня
        if (i === new Date().getDate() && DATECAL.getMonth() === new Date().getMonth() && DATECAL.getFullYear() === new Date().getFullYear()) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }
    //числа следующего месяца
    for (let j = 1; j <= NEXTDAYS; j++) {
        days += `<div class="next-date">${j}</div>`;
    }
    MONTHDAYS.innerHTML = days;
}
//стрелка назад(предыдущий месяц)
document.querySelector('.prev').addEventListener('click', () => {
    DATECAL.setMonth(DATECAL.getMonth() - 1);
    renderCalendar();
})
//стрелка вперед(следующий месяц)
document.querySelector('.next').addEventListener('click', () => {
    DATECAL.setMonth(DATECAL.getMonth() + 1);
    renderCalendar();
})
renderCalendar();