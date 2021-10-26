// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели');
// const lastMovie = prompt('Один из последних просмотренных фильмов');
// const review = prompt('На сколько оцените его?');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {
//     [lastMovie]: review
//   },
//   actors: {},
//   geners: [],
//   privat: false
// };
// console.log(personalMovieDB)

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');

const personalMovieDB = {
  count: 0,
  movies: [],
  actors: {},
  geners: [],
  privat: false
};
console.log(personalMovieDB)

if (numberOfFilms > 0){
  personalMovieDB.count = numberOfFilms
  for(let i = 1; i <= numberOfFilms; i++) {
    let lastMovie = prompt('Один из последних просмотренных фильмов');
    
    while (!lastMovie || lastMovie.length === 0) {
      lastMovie = prompt('Один из последних просмотренных фильмов');
    }

    let review = +prompt('На сколько оцените его? От 1 до 5');

    while (!(review >= 1 && review <=5)) {
      review = +prompt('На сколько оцените его? От 1 до 5');
    }
    personalMovieDB.movies.push({[lastMovie]: review})
  }
} else alert('Вы ввели некорректное значение');

if (personalMovieDB.count < 10) {
  alert('Просмотрено довольно мало фильмов')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  alert('Вы классический зритель')
} else if (personalMovieDB.count > 30) {
  alert('Вы киноман')
} else alert('Произошла ошибка')

console.log(personalMovieDB);


