'use strict';

const books = document.querySelectorAll('.book'),
    bg = document.querySelector('body'),
    bgColor = getComputedStyle(bg),
    headings = document.getElementsByTagName('a'),
    adv = document.querySelector('.adv'),
    list = document.querySelector('ul'),
    chapters = list.querySelectorAll('li'),
    listElem = document.createElement('li'),
    lastList = books[2].querySelector('ul'),
    list5 = books[5].querySelector('ul'),
    chapters5 = list5.querySelectorAll('li');
console.log(chapters5);
books[0].before(books[1]);
books[2].before(books[4]);
books[2].before(books[3]);
books[2].before(books[5]);

document.body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";
headings[2].textContent = 'Книга 3. this и Прототипы Объектов';
adv.remove();
chapters[5].after(chapters[2]);
chapters[3].after(chapters[6]);
chapters[6].after(chapters[8]);
chapters[5].after(chapters[7]);
chapters[7].after(chapters[9]);
chapters5[1].after(chapters5[9]);
chapters5[9].after(chapters5[3]);
chapters5[3].after(chapters5[4]);
chapters5[8].before(chapters5[5]);
listElem.textContent = 'Глава 8: За пределами ES6';
lastList.insertAdjacentElement('beforeend', listElem);
const lastItems = lastList.querySelectorAll('li');
lastItems[9].before(lastItems[10]);
