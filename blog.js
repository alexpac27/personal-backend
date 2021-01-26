

// EXAMPLE #1 --  Without initial value
let beef = [25,46,98,205,32]

let sum = beef.reduce((total, i) => total += i)      // <-- Same as setting initial value to 0 (zero)

console.log(sum)        // 406


// EXAMPLE #2 --  With initial value
let initialNum = 11
let egg = [2,3,4]

let total = egg.reduce((total, i) => total += i, initialNum)

console.log(total)        // 20



