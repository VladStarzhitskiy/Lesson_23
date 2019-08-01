'use strict'

// #1
function min(date) {
    let finishDate = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1);
    let rest = finishDate - date;
    return Math.round((rest / 60000) * 100 / 100);
}
let day = new Date();
console.log(min(day));

// #2
function timePassed(date){
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}
let passedDay = new Date();
console.log(timePassed(passedDay));

// #3
function day2 (date){
    let calendarDay = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return calendarDay[date.getDay()];
}
let day3 = new Date(2013, 0, 25);
console.log(day2(day3));

// #4
let date = prompt('Введите дату Вашего рождения в формате \(1990-10-01\)', '');
function birthDays(birthDaysPaty){
    let born = new Date(Date.parse(birthDaysPaty));
    let date2 = new Date();
    born.setFullYear(+date2.getFullYear());
    if(born <= date2){
        born.setFullYear(+born.getFullYear() + 1 );
    }
    let a = 60*60*24*1000;
    let b = Math.round((+born - date2) / a);
    return alert(b + 'Дней до вашего Рождения');
}
console.log(birthDays(date));











