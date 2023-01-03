// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


// function arr(a, b) {
//     return a * b
// }
// arr(15, 20)
// console.log(ara)


// - створити функцію яка обчислює та повертає площу кола з радіусом r


// function arr(p, r) {
//     return p * (r * 2)
// }
//
// arr(3.14, 13)
// console.log(ara)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r


// function arr(r, h, p) {
//     return 2 * p * r * (h + r)
// }
//
// arr(15, 6, 3.14)
// console.log(ara)


// - створити функцію яка приймає масив та виводить кожен його елемент


// function mas(a) {
//     for (const aElement of a) {
//         console.log(aElement)
//     }
// }
//
// mas([1, 2, 4, true, 'false'])


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент


// function parag(text) {
//     document.write(`${text}`)
// }
//
// parag(`<p>Lorem ipsum dolor sit amet.</p>`)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


// function lizko(text) {
//     document.write(`<ul>
//                         <li>${text}</li>
//                         <li>${text}</li>
//                         <li>${text}</li>
//                     </ul>`)
// }
//
// lizko('Lorem ipsum dolor sit amet.')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


// function lizko(text, arr) {
//     document.write(`<ul>`)
//     for (let i = 0; i < arr; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// lizko('Lorem ipsum dolor sit amet.', 5)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// function mas(a) {
//     document.write(`<ul>`)
//     for (let i = 0; i < a.length; i++) {
//         document.write(`<li>${a[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }

// mas([1, 2, 4, true, 'false'])


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


// function arr(a) {
//     for (const aElement of a) {
//         document.write(`<div>${aElement.id} ${aElement.name} ${aElement.age}</div>`)
//     }
// }
//
// let user = [
//     {id: 1, name: 'Orest', age: 20},
//     {id: 2, name: 'Nazar', age: 10},
//     {id: 3, name: 'Nadia', age: 19}
// ];
// arr(user)


// - створити функцію яка повертає найменьше число з масиву


// function arr(text) {
//     let min = text[0]
//     for (const minElement of text) {
//         if (minElement < min) {
//             min = minElement
//         }
//     }
//     console.log(min)
// }
//
// arr([2, 17, 13, 6, 22, 31, 45, 66, 100, -18])


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


// function arr(text) {
//     min = 0
//     for (const textElement of text) {
//         min += textElement
//     }
//     console.log(min)
// }
//
// arr([1, 2, 10])

