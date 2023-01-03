// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let masiv = [1, 2.34, 'lorem', '6.324', 'orest', true, false, 3215, 'true', 'masiv'];
console.log(masiv)
console.log(masiv[0])
console.log(masiv[1])
console.log(masiv[2])
console.log(masiv[3])
console.log(masiv[4])
console.log(masiv[5])
console.log(masiv[6])
console.log(masiv[7])
console.log(masiv[8])
console.log(masiv[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let opus = {
    title: 'Чорна рада',
    pageCount: 666,
    genre: 'Класика'
};

console.log(opus)

let opus2 = {
    title: 'Дюна',
    pageCount: 234,
    genre: 'Науково-фантастичний роман'
};

console.log(opus2)

let opus3 = {
    title: 'Гаррі Поттер і філософський камінь',
    pageCount: 745,
    genre: 'Роман'
};

console.log(opus3)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let opus4 = {
    title: 'Чорна рада',
    pageCount: 666,
    genre: 'Класика',
    authors: ['Пантелеймон Куліш', 65]
};

console.log(opus4)

let opus5 = {
    title: 'Дюна',
    pageCount: 234,
    genre: 'Науково-фантастичний роман',
    authors: ['Френк Герберт', 56]
};

console.log(opus5)

let opus6 = {
    title: 'Гаррі Поттер і філософський камінь',
    pageCount: 745,
    genre: 'Роман',
    authors: ['Джоан Роулинг', 45]
};

console.log(opus6)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {
        name: 'Orest',
        username: '4ub4ik',
        password: 'qwerty0'
    },

    {
        name: 'Orest',
        username: '4ub4ik',
        password: 'qwerty1'
    },

    {
        name: 'Orest',
        username: '4ub4ik',
        password: 'qwerty2'
    },

    {
        name: 'Orest',
        username: '4ub4ik',
        password: 'qwerty3'
    },

    {
        name: 'Orest',
        username: '4ub4ik',
        password: 'qwerty4'
    },

    {
        name: 'Orest',
        username: '4ub4ik',
        password: 'qwerty5'
    },

    {
        name: 'Orest',
        username: '4ub4ik',
        password: 'qwerty6'
    },

    {
        name: 'Orest',
        username: '4ub4ik',
        password: 'qwerty7'
    },

    {
        name: 'Orest',
        username: '4ub4ik',
        password: 'qwerty8'
    },

    {
        name: 'Orest',
        username: '4ub4ik',
        password: 'qwerty9'
    }
];

console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)