'use strict'

// Дата и время

let date = new Date();
console.log(date);
//01.01.1970 GMT - Все даты отсчитываются от ЭТОГО ВРЕМЕНИ

let jan0m_1970 = new Date( 3600 * 24 * 1000 ); // этой формой мы добавляем 24 час к нашей дате
console.log(jan0m_1970);

let some_date = new Date(2009, 10, 1, 0,0,0,0);
// new Date(year, month, date, hours, minutes, seconds, ms)
console.log(some_date);

console.log( some_date.getFullYear() );// Выведет только дату 2009
console.log( some_date.getMonth() );//10
console.log( some_date.getDate() );//1
console.log( some_date.getHours() );//0
//getMinutes() \ getSeconds() \ getMilliseconds()
console.log( some_date.getDay() ); //0
// 0 = Воскресеньк \ 6 = Субота
// getUTCFullYear() \ getUTCMonth - есть все аналоги функций для UTC (GTM + 0)
let time = some_date.getTime();
console.log(time);//Дата с 01.01.1970 по указанную переменную (число будет выводится в милисекундах)

console.log( new Date().getTimezoneOffset() ); // Вернет разницу между текущей зоной и GTM+0 (в минуах)

some_date.setFullYear(2000); //год является обязательным параметром  (year [month, date])
/*
srtMonth() - (month, [date])
setDate() - (date)
setTime(milliseconds) - устанавливает дату в мс начиная с 01.01.1970
*/
console.log(some_date);


// Автоисправление даты

let date2 = new Date(2013, 0, 32);
console.log(date2);

date2.setDate(date2.getDate() + 2);
console.log(date2);
date2.setDate(0);
console.log(date2);

//Преобразование к числу
console.log( +new Date() );

console.log( date2 - some_date );

// Форматирование дат - tolocaleString(локаль, опции) Локаль - это язык и формат на котором будет выведена дата
let date3 = new Date(2019, 5, 1, 12, 0, 10);

let options = {
    'era' : 'long',
    'year' : 'numeric',
    'month' : 'long',
    'day' : 'numeric'
};
console.log( date3.toLocaleString('ru', options) );

// Парсинг даты

let date4 = Date.parse('2012-01-26T13:10:15.521Z');
console.log(date4);

date4 = Date.parse('2012-01-26T13:10:15.521-03:00');
console.log(date4);


let date5 = Date.now(); // аналог +new Date() Сазу приобразует дату в милисикенды

// Глобальный объект

var number = 10;
console.log( window.number );
console.log( number );

// Доступ к векшним переменным 
let userName = 'ИВан'
 
function sayHi(){
    console.log(userName);
}
sayHi();


// Всегда отображается текущее значение
let phrase = 'Привет';
function sayHi2(name){
    console.log(name + ' ' +phrase );
}
sayHi2('Вася');
phrase = 'Пока';
sayHi2('Вася');


// Вложенные функции

function sayHiBye(firstName, lastName){
    console.log( 'Привет' + getFullName() );
    console.log( 'Пока' + getFullName() );

    function getFullName(){
        return firstName + ' ' + lastName;
    }
}
sayHiBye('Вася', 'Иванов');

// Возврат функции

function makeCounter(){
    let currentCount = 1;

    return function(){
        return currentCount++;
    }
}

let counter = makeCounter();
console.log( counter() ); //function(){ return 1++;}
console.log( counter() ); //function(){ return 2++;}
console.log( counter() ); //function(){ return 3++;}

// Счетчик-объеккт
function makeCounter2(){
    let currentCount = 1;

    return {
        'getNext' : function(){ return currentCount++; },
        'set' : function(value){ currentCount = value; },
        'reset' : function(){ currentCount = 1; }
    };
}
let counter3 = makeCounter2();
console.log( counter3.getNext() );//1
console.log( counter3.getNext() ); //2

counter3.set(20);
console.log( counter3.getNext() );//20

counter3.reset();

function makeCounter3(){
    let currentCount = 1;
    function count(){
        return currentCount++;
    }
    count.set = function(value){ currentCount = value; }
    count.reset = function(){ currentCount = 1; }

    return count;
}

let counter4 = makeCounter3();
counter4.set(10);
console.log( counter4() ); //10
console.log( counter4() ); //11
counter4.reset();

$('.box').on('mouseenter', function(){
   $(this).css('background', 'red');
}).on('mouseleave', function(){
    $(this).css('background', 'black');
});

/*
$('.box').on('mouseleave', function(){
    $(this).css('background', 'black')
 });
 
*/

$(document).ready(function(){
    $('.slider').slick({
        dots : true, //folse
    });
  });











