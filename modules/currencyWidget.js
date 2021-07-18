getCurrencies();

const rates = {}
const elementUSD = document.querySelector('[data-value="USD"]') // ищем див
// const elementDate = document.querySelector('[data-value="date"]')

// const getToday = () => {
//     const date = new Date();
//     return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
//     elementDate.textContent = Date;
// }

//вынимаем данные с json файла о курсе валют
async function getCurrencies() {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const result = await data;
    console.log(result); // выводим данные о всех курсах
    console.log(result.Valute.USD); // выводим данные о USD

    rates.USD = result.Valute.USD; //получаем данные о валюте

    elementUSD.textContent = rates.USD.Value.toFixed(2); // передаем значение в текстовый блок дива
    const money = document.querySelector(".info p");
    money.innerHTML = "Курс доллара на сегодня";
}