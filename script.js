"use strict";
let numberOfFilms; 

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");

    while (numberOfFilms == ' ' || numberOfFilms == null || isNaN(numberOfFilms)){

         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    private: false
};




function rememberMyFilms () {

    for (let i = 0; i < 2; i++){
    const a = prompt("Один из последних просотренных фильмов?", " "),
          b = prompt("На сколько вы оцените его?", " ");

    if (a != null && b != null && a != " " && b != " " && a.length < 50 && b.length < 50){
        personalMovieDB.movies [a] = b;
        console.log('done');
    } else {
        console.log("error");
        i--;
    }      
}
}

rememberMyFilms();


function detectPersonalLevel () {
    if(personalMovieDB.count < 10){
    console.log("Просмотренно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классный зритель");
} else if (personalMovieDB.count >= 30){
    console.log("Вы киноман");
} else {
    console.log('Произошла ошибка');
}
}
detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
    }


showMyDB(personalMovieDB.private);


function writeYourGenres (){
    for (let i = 1; i <= 3; i++){
        const genre = prompt(`Ваш любимой жанр под номером ${i}`);
        personalMovieDB.geners[i - 1] = genre;
    }
}

writeYourGenres();










// if (4 == 9){
//     console.log("ok")
// } else{
//     console.log("eror")
// }



// if (num < 49) {
//     console.log("Error");
// } else if (num > 100){
//     console.log("Много");
// } else {
//     console.log ("ok");
// }

// (num === 50) ? console.log("ok") : console.log ("error");

// const num = 50;

// switch (num) {
//     case 49:
//         console.log ("Неверно");
//         break;
//     case 100:
//         console.log("Неверно");
//         break;
//     case 51:
//         console.log ("Верно");
//         break;
//     case 1:
//         console.log("Неверно");
//         break;
//     default: 
//     console.log("Не в этот раз");
//     break;
// }

// const hamburger = true;
// const fries = false;

// if (hamburger || fries) {
//     console.log ("Я сыт");
// }
// console.log (5 == 5 && 3 > 1 || 5);

// let num = 50;

// while (num < 55){
//     console.log(num);
//     num++;
// }

// do {
//     console.log (num);
//     num++;
// }
// while (num <= 55);

// for (let i = 1; i < 8; i++){
//     console.log (num);
//     num++;
// }


// let result = ""
// const lenght = 7;

// for ( i = 1; i < lenght; i++){
//     for (j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += "\n";

// }

// console.log (result);


// let num = 20;
// function showFirstMessage (text) {
//     console.log(text);
//     num = 10;
// }

// showFirstMessage("Hellow Wolrd");
// console.log(num);

// function calc (a, b){
//     return(a + b);
// }

// console.log(calc (4, 3));

// function ret (){
//     let num = 50;

//     return num;
// }

// let anotherNum = ret();
// console.log (anotherNum);

// let uCrr = 28;
// let discount = 0.9;

// function convert (amount, crr) {
//     return crr * amount;
// }

// function promotion (result){
//     console.log(result * discount);
// }

// promotion(convert(500, uCrr));


// const str = "text"

// console.log(str [2]);
// console.log(str.toUpperCase());

// const frut = "Some Frut";

// console.log(frut.indexOf("Frut"));

// const logg = "Hellow Wolrd";

// console.log(logg.slice(7, 12));

// console.log(logg.substr(7, 5));

// const num = 23.4;

// console.log(Math.round(num));

// const test = "12.3px"

// console.log(parseInt(test));
// console.log(parseFloat(test));