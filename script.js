"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    geners: [],
    private: false,
    start: function() {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", " ");

    while (personalMovieDB.count == ' ' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){

         personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", " ");
    }
},
    rememberMyFilms: function() {

    for (let i = 0; i < 2; i++){
    const a = prompt("Один из последних просотренных фильмов?", " ").trim(),
          b = prompt("На сколько вы оцените его?", " ");

    if (a != null && b != null && a != " " && b != " " && a.length < 50 && b.length < 50){
        personalMovieDB.movies [a] = b;
        console.log('done');
    } else {
        console.log("error");
        i--;
    }      
}
},
    detectPersonalLevel: function () {
    if(personalMovieDB.count < 10){
    console.log("Просмотренно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классный зритель");
} else if (personalMovieDB.count >= 30){
    console.log("Вы киноман");
} else {
    console.log('Произошла ошибка');
}
},
    showMyDB: function (hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
    },

    toggleVisibleMyDB: function(){
        if(personalMovieDB.private){
            personalMovieDB.private = false;
        }else{
            personalMovieDB.private = true;
        }

    },
    writeYourGenres: function(){
    for (let i = 1; i <= 3; i++){
        const genre = prompt(`Ваш любимой жанр под номером ${i}`);

        if(genre == '' || genre == null){
            console.log("Вы ввели не корректные данные")
            i--;
        }else{
            personalMovieDB.geners[i - 1] = genre;
        }   
    }
    personalMovieDB.geners.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} - это ${item}`)
    });

 
}
};
























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

// const options = {
//     name: "test",
//     width: 1024,
//     heihht: 1024,
//     colors: {
//         border: "black",
//         bg: "red"
//     },
//     makeTest: function(){
//         console.log("Test");
//     }
// };
// options.makeTest();
// const {border, bg} = options.colors;
// console.log(bg);

// console.log(Object.keys(options).length);
    



// console.log(options.name);

// delete options.name;
// // console.log(options);

// let counter = 0;

// for (let key in options){
//     if (typeof(options[key]) == 'object'){
//         for (let i in options[key]){
//             console.log(`свойсттво ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//          console.log(`свойсттво ${key} имеет значение ${options[key]}`);
//          counter++;
//     }
 
// }
// console.log(counter);


// let arr = [2, 4, 5, 3, 1, 23, 33];

// arr.forEach (function(item, i, arr) {
//     console.log(`${i} : ${item} внутри масива ${arr}`);
// });

// arr.pop();
// arr.push(22);
// console.log(arr);

// for (let i = 0; i < arr.length; i++ ){
//     console.log(arr[i]);
// }

// for (let value of arr){
//     console.log(value);
// }

// let str = prompt(", ");
// let products = str.split(", ");
// console.log(products.join(" : "));

// let a = 5;
//     b = 10;

//  a = b;

//  console.log (a);

//  const obj = {
//     a: 5,
//     b: 1
//  };

//   const coppy = obj;
//   coppy.a = 10;

// //   console.log(obj);
// //   console.log(coppy);

//   function cupy (mainObj) {
//     let copyObj  =  {};
//     let key;
//     for (key in mainObj) {
//         copyObj[key] = mainObj[key];
//     }
//     return copyObj;
// };
  
// const number = {
//     a: 2, 
//     b: 4,
//     c: 6,
//     d: {
//         x: 7,
//         y: 9
//     }
// };

// const newNumber = cupy(number);

// newNumber.a = 0;
// console.log(newNumber);
// console.log(number);

// const add = {
//     g: 33,
//     l: 22
// }

// console.log(Object.assign(number, add));

// const clone = Object.assign({}, add);
// clone.l = 11;

// console.log(add);
// console.log(clone);

// const oldArr = [2, 4, 5];

// const newArr = oldArr.slice();
// newArr[0] = "fefefee";
// console.log(oldArr);
// console.log(newArr);

// const video = ['youtube', 'rutube', 'xuyubi'];
// const blog = ["new Jurnal", "Blogers"];
// const internet = [...video, ...blog, "inst"];
// console.log(internet);


// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };

// function showExperience(personalPlan) {
//   // Деструктурируем объект, чтобы получить опыт из skills
//   const { skills: { exp } } = personalPlan;

//   // Возвращаем строку с опытом
//   return exp;
// }


// const soldier = {
//     health: 500,
//     armor: 200,
//     sayHello: function(){
//         console.log("Hellow");
//     }
// };

// const jhon = Object.create(soldier);

// // const jhon = {
// //     health: 100
// // };

// // Object.setPrototypeOf(jhon, soldier);

// jhon.sayHello();