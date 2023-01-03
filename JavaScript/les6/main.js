// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'


// let a = 'hello world'
// let b = 'lorem ipsum'
// let c = 'javascript is cool'
// console.log(a.length)
// console.log(b.length)
// console.log(c.length)


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'


// let a = 'hello world'
// let b = 'lorem ipsum'
// let c = 'javascript is cool'
// console.log(a.toUpperCase())
// console.log(b.toUpperCase())
// console.log(c.toUpperCase())


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'


// let a = 'HELLO WORLD'
// let b = 'LOREM IPSUM'
// let c= 'JAVASCRIPT IS COOL'
// console.log(a.toLowerCase())
// console.log(b.toLowerCase())
// console.log(c.toLowerCase())


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.


// let a = ' dirty string    '
// let result = a
//     .replace(' ', '')
//     .replaceAll('    ', '')
// console.log(result)

// Або так_

// console.log(a.trim())


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


// let str = 'Ревуть воли як ясла повні'
// let result = str.split(' ')
// console.log(result)


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.\


// let number = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
//
// let map = number.map((num) => num.toString())
// console.log(map)


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


// let nums = [11,21,3]
// console.log(nums.sort(function (a, b) {
//     if (a > b) {
//         return -1;
//     } else if (b > a) {
//         return 1;
//     }
// }))


// - є масив


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];


// -- відсортувати його за спаданням за monthDuration


// console.log(coursesAndDurationArray.sort(function (a,b) {
//     if (a.monthDuration > b.monthDuration) {
//         return -1;
//     } else if (b.monthDuration < a.monthDuration) {
//         return 1;
//     }
// }))


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців


// console.log(coursesAndDurationArray.filter((user) => user.monthDuration > 5))


// описати колоду карт

// let deskOfCards = [
//     {cardSuit: 'Spade', value: 6, color: 'Black'},
//     {cardSuit: 'Clubs', value: 6, color: 'Black'},
//     {cardSuit: 'Hearts', value: 6, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 6, color: 'Red'},
//     {cardSuit: 'Spade', value: 7, color: 'Black'},
//     {cardSuit: 'Clubs', value: 7, color: 'Black'},
//     {cardSuit: 'Hearts', value: 7, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 7, color: 'Red'},
//     {cardSuit: 'Spade', value: 8, color: 'Black'},
//     {cardSuit: 'Clubs', value: 8, color: 'Black'},
//     {cardSuit: 'Hearts', value: 8, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 8, color: 'Red'},
//     {cardSuit: 'Spade', value: 9, color: 'Black'},
//     {cardSuit: 'Clubs', value: 9, color: 'Black'},
//     {cardSuit: 'Hearts', value: 9, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 9, color: 'Red'},
//     {cardSuit: 'Spade', value: 10, color: 'Black'},
//     {cardSuit: 'Clubs', value: 10, color: 'Black'},
//     {cardSuit: 'Hearts', value: 10, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 10, color: 'Red'},
//     {cardSuit: 'Spade', value: 'Jack', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Jack', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Jack', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Jack', color: 'Red'},
//     {cardSuit: 'Spade', value: 'Queen', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Queen', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Queen', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Queen', color: 'Red'},
//     {cardSuit: 'Spade', value: 'King', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'King', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'King', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'King', color: 'Red'},
//     {cardSuit: 'Spade', value: 'Ace', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Ace', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Ace', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Ace', color: 'Red'}
// ];

// - знайти піковий туз

// console.log(deskOfCards.filter((tyz) => tyz.cardSuit === 'Spade' && tyz.value === 'Ace'))

// - всі шістки

// console.log(deskOfCards.filter((card)=>card.value === 6))

// - всі червоні карти

// console.log(deskOfCards.filter((color)=>color.color === 'Red'))

// - всі буби

// console.log(deskOfCards.filter((suit)=>suit.cardSuit === 'Diamonds'))

// - всі трефи від 9 та більше

// console.log(deskOfCards.filter((xrest)=> xrest.cardSuit === 'Clubs' && xrest.value > 8))


// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let spade = []
// spade.push(deskOfCards.filter((spad)=>spad.cardSuit === 'Spade'))
// console.log(spade)


// let reduce = deskOfCards.reduce((acuum, cards) => {
//     if (cards.cardSuit === 'Spade') {
//         acuum.spades.push(cards)
//     } else if (cards.cardSuit === 'Diamonds') {
//         acuum.diamonds.push(cards)
//     } else if (cards.cardSuit === 'Hearts') {
//         acuum.hearts.push(cards)
//     } else if (cards.cardSuit === 'Clubs') {
//         acuum.clubs.push(cards)
//     }
//     return acuum
// }, {spades: [], diamonds:[], hearts:[], clubs:[]})
//
// console.log(reduce)