// // --створити масив з:
// // - з 5 числових значень
// // - з 5 стрічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль
// let kupa = [2, 3.14, 35, -54, 3, 'test', 'false', 'true', 'orest', 'azov', false, true, -432, 'stal', 666]
// console.log(kupa)


// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let masiv = []
// masiv[0] = 465
// masiv[3] = 'test'
// masiv[6] = false
// console.log(masiv)


// // - є масив [2,17,13,6,22,31,45,66,100,-18] :
// let indx = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// // 1. перебрати його циклом while
// let i = 0
// while (i < indx.length) {
//     console.log(indx[i])
//     i++
// }
// console.log(`<br\>`)


// //     2. перебрати його циклом for
// for (let i = 0; i < indx.length; i++) {
//     console.log(indx[i])
// }
// console.log(`<br\>`)


// //     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let a = 1
// while (a < indx.length) {
//     console.log(indx[a])
//     a += 2
// }
// console.log(`<br\>`)
// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 1; i < indx.length; i += 2) {
//     console.log(indx[i])
// }
// console.log(`<br\>`)


// // 5. перебрати циклом while та вивести  числа тільки парні  значення
// let b = 0
// while (b < indx.length) {
//     console.log(indx[b])
//     b += 2
// }
// console.log(`<br\>`)


// // 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < indx.length; i += 2) {
//     console.log(indx[i])
// }
// console.log(`<br\>`)


// // 7. замінити кожне число кратне 3 на слово "okten"
// mas = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// for (i = 0; i < mas.length; i++) {
//     if (mas[i] % 3 === 0) {
//         mas[i] = "okten"
//     }
// }
// console.log(mas)
// console.log(`<br\>`)


// // 8. вивести масив в зворотньому порядку.
// let reversed = indx.reverse()
// console.log(reversed)


// // 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// let indx = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// let reversed = indx.reverse()
// let i = 0
// while (i < reversed.length) {
//     console.log(reversed[i])
//     i++
// }
// console.log(`<br\>`)


// for (let i = 0; i < reversed.length; i++) {
//     console.log(reversed[i])
// }
// console.log(`<br\>`)


// let a = 1
// while (a < reversed.length) {
//     console.log(reversed[a])
//     a += 2
// }
// console.log(`<br\>`)


// for (let i = 1; i < reversed.length; i += 2) {
//     console.log(reversed[i])
// }
// console.log(`<br\>`)


// let b = 0
// while (b < reversed.length) {
//     console.log(reversed[b])
//     b += 2
// }
// console.log(`<br\>`)


// for (let i = 0; i < reversed.length; i += 2) {
//     console.log(reversed[i])
// }
// console.log(`<br\>`)


// let mas = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// let masrevers = mas.reverse()
// for (i = 0; i < masrevers.length; i++) {
//     if (masrevers[i] % 3 === 0) {
//         masrevers[i] = "okten"
//     }
// }
// console.log(masrevers)
// console.log(`<br\>`)


// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let y = [2, 17, 13, 6.4, 22, 31, 45, 66, 100, -18]
// for (let i = 0; i < y.length; i++) {
//     console.log(y[i])
// }
// console.log(`<br\>`)


// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let z = ['test', 'azov', 'stal', 'orko', 'nadia', 'mykola', 'poshta', 'nova', '4yslo', 'tato']
// for (i = 0; i < z.length; i++) {
//     console.log(z[i])
// }
// console.log(`<br\>`)


// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let q = [2, 3.14, 35, -54, 3, 'test', 'false', 'true', false, true]
// for (i = 0; i < q.length; i++) {
//     console.log(q[i])
// }
// // console.log(`<br\>`)


// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let kupa = [2, 3.14, -54, 3, 'test', 'false', 'azov', false, true, 666]
// for (const kupaElement of kupa) {
//     if (typeof kupaElement === 'boolean') {
//         console.log(kupaElement)
//     }
//
// }
// console.log(`<br\>`)


// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// for (const kupaElement of kupa) {
//     if (typeof kupaElement === 'number') {
//         console.log(kupaElement)
//     }
// }
// console.log(`<br\>`)


// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// for (const kupaElement of kupa) {
//     if (typeof kupaElement === 'string') {
//         console.log(kupaElement)
//     }
// }
// console.log(`<br\>`)


// // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (i = 0; i < 10; i++) {
//     console.log(i)
//     document.write(i)
// }
// document.write(`<br\>`)
// console.log(`<br\>`)


// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (i = 0; i < 100; i++) {
//     console.log(i)
//     document.write(i)
//     document.write(`<br\>`)
// }
// console.log(`<br\>`)
// document.write(`<hr>`)


// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (i = 0; i < 100; i += 2) {
//     console.log(i)
//     document.write(i)
//     document.write(`<br\>`)
// }
// console.log(`<br\>`)
// document.write(`<hr>`)


// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (i = 0; i < 100; i++) {
//     if (i % 2 == 0) {
//         document.write(i)
//     }
//     document.write(`<br\>`)
// }
// console.log(`<br\>`)
// document.write(`<hr>`)


// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (i = 0; i < 100; i++) {
//     if (i % 3 == 0) {
//         document.write(i)
//     }
//     document.write(`<br\>`)
// }
// console.log(`<br\>`)


// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// let books = [
//     {name: "Острів Дума", pages: 832, author: ["С. Кінг", "Дж.Р.Р. Мартін"], genre: ["Фентезі", "Нехудожня література"]},
//     {name: "Як не стати овочем ", pages: 256, author: ["Мороз Оксана"], genre: ["Нехудожня література"]},
//     {name: "Вогонь і кров", pages: 999, author: ["Дж.Р.Р. Мартін"], genre: ["Фентезі"]},
//     {name: "Аутсайдер", pages: 592, author: ["С. Кінг"], genre: ["Детективии", "Нехудожня література", "Детективии"]}
// ];


// -знайти наібльшу книжку.
// let con = books[0]
// for (const book of books) {
//     if (book.pages > con.pages) {
//         con = book
//     }
// }
// console.log(con)


// - знайти книжку/ки з найбільшою кількістю жанрів
// let con = books[0]
// for (const book of books) {
//     if (book.genre.length > con.genre.length) {
//         con = book
//     }
// }
// console.log(con)


// - знайти книжку/ки з найдовшою назвою
// let con = books[0]
// for (const book of books) {
//     if (book.name.length > con.name.length) {
//         con = book
//     }
// }
// console.log(con)


// - знайти книжку/ки які писали 2 автори
// let con = books[0]
// for (const book of books) {
//     if (book.author.length > con.author.length) {
//         con = book
//     }
// }
// console.log(con)


// - знайти книжку/ки які писав 1 автор
// let con = books[0]
// for (const book of books) {
//     if (book.author.length < con.author.length) {
//         con = book
//     }
// }
// console.log(con)