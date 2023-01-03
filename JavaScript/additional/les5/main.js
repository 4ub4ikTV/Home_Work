// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


// let calc = (a, b, c) => {
//     if (b > a && a < c) {
//         console.log(a)
//     } else if (a > b && b < c) {
//         console.log(b)
//     } else if (a > c && c < b) {
//         console.log(c)
//     }
// }
// calc(1, 2, 3)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)


// let calc = (a, b, c) => {
//     if (b < a && a > c) {
//         console.log(a)
//     } else if (a < b && b > c) {
//         console.log(b)
//     } else if (a < c && c > b) {
//         console.log(c)
//     }
// }
// calc(1, 2, 3)


// - створити функцію яка повертає найбільше число з масиву


// let calc = (a, b, c) => {
//     if (b < a && a > c) {
//     } else if (a < b && b > c) {
//     } else if (a < c && c > b) {
//     }
// }
// calc(1, 2, 3)


// - створити функцію яка повертає найменьше число з масиву


// let calc = (a, b, c) => {
//     if (b > a && a < c) {
//     } else if (a > b && b < c) {
//     } else if (a > c && c < b) {
//     }
// }
// calc(1, 2, 3)


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


// - Дано натуральное число n. Выведите все числа от 1 до n.


// let arr = (a) => {
//     for (let i = 1; i < a + 1; i++) {
//         console.log(i)
//     }
// }
// arr(5)


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.


// let arr = (a, b) => {
//     if (a > b) {
//         for (let i = b; i < a + 1; i++) {
//             console.log(i)
//         }
//     } else if (b > a) {
//         for (let i = a; i < b + 1; i++) {
//             console.log(i)
//         }
//     }
// }
// arr(10, 20)


// -   функція Приймає масив та число "b", та міняє місцями об`єкт який знаходиться в індексі "b" на "b+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let arr = (a, i) => {
//     let arra = a[i]
//     let arri = a[i + 1]
//     for (let j = 0; j < a.length; j++) {
//         a[i] = arri;
//         a[i+1] = arra
//     }
//     console.log(a)
// }
//
// arr([9, 8, 0, 4], 0)


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let change = (arr) => {
//     let array=[];
//     let array2=[]
//     for (let i = 0; i < arr.length; i++) {
//         let x = arr[i];
//         if(x!==0) {
//             array.push(x);
//         }
//         if (x===0) {
//             array2.push(x);
//         }
//     }
//     for (let i = 0; i < array2.length; i++) {
//         array.push(array2[i]);
//     }
//     console.log(array);
// }
//
// let y = change([1, 0, 0, 2]);
// console.log(y);