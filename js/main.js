//  "use strict";
let money = +prompt("Ваш бюджет на месяц?");

let time = prompt("Введите дату в формате YYYY-MM-DD");

let month = prompt("Введите обязательную статью расходов в этом месяце");

let how = prompt("Во сколько обойдется?");

let optionalExpenses = {};

let income = [];

let appData = {
    "money": money,
    "date": time

};

let expenses= {
    month : how 
};

let result = money/30;

alert("Ваш бюджет на день: "+result);








