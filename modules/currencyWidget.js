getCurrencies();
getToday();
getTime();

const rates = {}
const elementUSD = document.querySelector('[data-value="USD"]')// ищем див
const elementEUR = document.querySelector('[data-value="EUR"]')
const elementGBP = document.querySelector('[data-value="GBP"]')
const elementBYN = document.querySelector('[data-value="BYN"]')
const elementUAH = document.querySelector('[data-value="UAH"]')
const elementCAD = document.querySelector('[data-value="CAD"]')
const elementAZN = document.querySelector('[data-value="AZN"]')

const elementUSDp = document.querySelector('[data-value="USDp"]')
const elementEURp = document.querySelector('[data-value="EURp"]')
const elementGBPp = document.querySelector('[data-value="GBPp"]')
const elementBYNp = document.querySelector('[data-value="BYNp"]')
const elementUAHp = document.querySelector('[data-value="UAHp"]')
const elementCADp = document.querySelector('[data-value="CADp"]')
const elementAZNp = document.querySelector('[data-value="AZNp"]')


function getToday() {
    const date = new Date();
    return `${date.getDate()}.0${date.getMonth() + 1}.${date.getFullYear()}`;

}
document.getElementById('datee').innerHTML = getToday();


function getTime() {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}`;

}
document.getElementById('timee').innerHTML = getTime();



//вынимаем данные с json файла о курсе валют
async function getCurrencies() {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const result = await data;
    console.log(result); // выводим данные о всех курсах
    console.log(result.Valute.USD); // выводим данные о USD

    rates.USD = result.Valute.USD; //получаем данные о валюте
    rates.EUR = result.Valute.EUR;
    rates.GBP = result.Valute.GBP;
    rates.BYN = result.Valute.BYN;
    rates.UAH = result.Valute.UAH;
    rates.CAD = result.Valute.CAD;
    rates.AZN = result.Valute.AZN;

    rates.USDp = result.Valute.USD;
    rates.EURp = result.Valute.EUR;
    rates.GBPp = result.Valute.GBP;
    rates.BYNp = result.Valute.BYN;
    rates.UAHp = result.Valute.UAH;
    rates.CADp = result.Valute.CAD;
    rates.AZNp = result.Valute.AZN;

    elementUSD.textContent = rates.USD.Value.toFixed(2); // передаем значение в текстовый блок дива
    elementEUR.textContent = rates.EUR.Value.toFixed(2);
    elementGBP.textContent = rates.GBP.Value.toFixed(2);
    elementBYN.textContent = rates.BYN.Value.toFixed(2);
    elementUAH.textContent = rates.UAH.Value.toFixed(2);
    elementCAD.textContent = rates.CAD.Value.toFixed(2);
    elementAZN.textContent = rates.AZN.Value.toFixed(2);


    elementUSDp.textContent = (rates.USD.Value - rates.USD.Previous).toFixed(2); // выводим разницу между значениями курса в соседние дни
    elementEURp.textContent = (rates.EUR.Value - rates.EUR.Previous).toFixed(2);
    elementGBPp.textContent = (rates.GBP.Value - rates.GBP.Previous).toFixed(2);
    elementBYNp.textContent = (rates.BYN.Value - rates.BYN.Previous).toFixed(2);
    elementUAHp.textContent = (rates.UAH.Value - rates.UAH.Previous).toFixed(2);
    elementCADp.textContent = (rates.CAD.Value - rates.CAD.Previous).toFixed(2);
    elementAZNp.textContent = (rates.AZN.Value - rates.AZN.Previous).toFixed(2);


    if (elementAZNp.textContent > 0) {
        document.getElementById("variance.AZN").style.color = "green";
    } else {
        document.getElementById("variance.AZN").style.color = "red";
    };

    if (elementCADp.textContent > 0) {
        document.getElementById("variance.CAD").style.color = "green";
    } else {
        document.getElementById("variance.CAD").style.color = "red";
    };

    if (elementUAHp.textContent > 0) {
        document.getElementById("variance.UAH").style.color = "green";
    } else {
        document.getElementById("variance.UAH").style.color = "red";
    };

    if (elementBYNp.textContent > 0) {
        document.getElementById("variance.BYN").style.color = "green";
    } else {
        document.getElementById("variance.BYN").style.color = "red";
    };

    if (elementGBPp.textContent > 0) {
        document.getElementById("variance.GBP").style.color = "green";
    } else {
        document.getElementById("variance.GBP").style.color = "red";
    };

    if (elementEURp.textContent > 0) {
        document.getElementById("variance.EUR").style.color = "green";
    } else {
        document.getElementById("variance.EUR").style.color = "red";
    };

    if (elementUSDp.textContent > 0) {
        document.getElementById("variance.USD").style.color = "green";
    } else {
        document.getElementById("variance.USD").style.color = "red";
    };
}