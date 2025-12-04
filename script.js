const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    private: false
};

const a = prompt("Один из последних просотренных фильмов?", " "),
      b = prompt("На сколько вы оцените его?", " "),
      c = prompt("Один из последних просотренных фильмов?", " "),
      d = prompt("На сколько вы оцените его?", " ");

personalMovieDB.movies [a] = b;
personalMovieDB.movies [c] = d;

console.log(personalMovieDB);