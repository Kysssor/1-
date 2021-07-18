const dateCal = new Date();

const renderCalendar = () => {
    dateCal.setDate(1);

    const monthDays = document.querySelector(".daysCal");

    //последний день текущего месяца
    const lastDay = new Date(dateCal.getFullYear(), dateCal.getMonth() + 1, 0).getDate();

    //последний день предыдущего месяца
    const prevLastDay = new Date(dateCal.getFullYear(), dateCal.getMonth(), 0).getDate();

    //индекс первого дня недели текущего месяца(типо чт-4,сб-6)
    const firstDayIndex = dateCal.getDay();

    //индекс последнего дня недели текущего месяца(типо чт-4,сб-6)
    const lastDayIndex = new Date(dateCal.getFullYear(), dateCal.getMonth() + 1, 0).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
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

    // var ninp = document.getElementById('input').value;
    // console.log(ninp);
    // if (ninp.length === 0) {
    //     document.querySelector('.date h1').innerHTML = months[dateCal.getMonth()] + " " + dateCal.getFullYear();
    // } else {
    //     document.querySelector('.date h1').innerHTML = ninp;
    // }
    document.querySelector('.date h1').innerHTML = months[dateCal.getMonth()] + " " + dateCal.getFullYear();
    // document.querySelector('.date p').innerHTML = new Date().toDateString();

    let days = "";
    //числа предыдущего месяца
    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }
    //числа текущего месяца
    for (let i = 1; i <= lastDay; i++) {
        //определение текущего дня
        if (i === new Date().getDate() && dateCal.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }
    //числа следующего месяца
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
    }
    monthDays.innerHTML = days;
}
//стрелка назад(предыдущий месяц)
document.querySelector('.prev').addEventListener('click', () => {
    dateCal.setMonth(dateCal.getMonth() - 1);
    renderCalendar();
})
//стрелка вперед(следующий месяц)
document.querySelector('.next').addEventListener('click', () => {
    dateCal.setMonth(dateCal.getMonth() + 1);
    renderCalendar();
})
renderCalendar();