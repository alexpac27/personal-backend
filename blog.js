
// EXAMPLE #1
let array = [5, 6, 7, 8]

let isEven = array.filter(x => x % 2 === 0 )   

console.log(array)          // [5, 6, 7, 8]
console.log(isEven)        // [6, 8] 


// Example #2

const meals = [
    {name: "Cherry Pie", price: 12.00, portions: 4, available: true},
    {name: "Cobb Salad", price: 16.50, portions: 2, available: true},
    {name: "Steak 'n Eggs", price: 25.00, portions: 3, available: false},
    {name: "Turkey Sandwich", price: 14.50, portions: 1, available: true}
]

let availableMeals = meals.filter(x => x.available === true)
let underTwenty = meals.filter(x => x.price <= 20)
let leftOvers = meals.filter(x => x.portions > 1)

console.log(availableMeals)     // contains everything but the Steak 'n Eggs
console.log(underTwenty)        // contains everything but the Steak 'n Eggs
console.log(leftOvers)          // contains everything but the Turkey Sandwich


// EXAMPLE #1 --  Without initial value
let beef = [25,46,98,205,32]

let sum = beef.reduce((total, i) => total += i)      // <-- Same as setting initial value to 0 (zero)

console.log(sum)        // 406


// EXAMPLE #2 --  With initial value
let initialNum = 11
let egg = [2,3,4]

let total = egg.reduce((total, i) => total += i, initialNum)

console.log(total)        // 20



