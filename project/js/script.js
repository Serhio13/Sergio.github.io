/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';



const movieDB = {
    movies: [
        "Я легенда",
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const changeGener = document.querySelector('.promo__genre').innerHTML = "драма";


console.log(changeGener);

const remove = document.querySelector('.promo__adv').remove();

console.log(remove);

const newimage = document.querySelector('.promo__bg');
newimage.style = 'background:url(img/bg.jpg)';

const list = document.querySelector('.promo__interactive-list');
list.addEventListener('click', (event) =>{ //делегирование событий
    const target = event.target;
    if (
        target.classList.contains('promo__interactive-item') ||
        target.closest('.promo__interactive-item')) {
        console.log(event.target.innerText);
    }
})
list.textContent = '';
const newList = movieDB.movies.sort((film1, film2) => film1.localeCompare(film2));

newList.forEach((film, index) => {
    list.innerHTML += `
        <li class="promo__interactive-item">№ ${index + 1}: ${film}
            <div class="delete"></div>
        </li>
    `
})

// const items = document.querySelectorAll('.promo__interactive-item');

// items.forEach((item) => {
//     item.addEventListener('click', (event) => {
//         console.log(event);
//     })
// })



