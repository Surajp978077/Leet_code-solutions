const str = 'ackerank'
let caps = 0
let nums = 0
let char = 0
let num = 10
let digit = 0



if (!str.match(/[A - Z]/)) {
    caps = 1
}
if (!str.match(/[a - z]/g)) {
    nums = 1
}
if (!str.match(/[0 - 9]/)) {
    console.log('yes')
    digit = 1
}
if (!(str.match((/['!' | '@' | '#' | '$' | '%' | '^' | '&' | '*' | '(' | ')' | '-' | '+']/)))) {
    char = 1
}

let result = 4 - (caps + nums + char + digit)
// console.log(result)
// if ((10 + result) >= 6) {
//     console.log(result)
// }
// else {
//     console.log(result + 1)
// }

console.log(caps)
console.log(nums)
console.log(char)
// console.log(num)
console.log(digit)
// console.log(result)
// console.log(6 - result)
