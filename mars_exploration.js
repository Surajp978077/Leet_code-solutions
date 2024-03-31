
function sos(str) {
    let index = 0
    var count = 0
    const arr = ['S', 'O', 'S']
    for (let i = 0; i < str.length; i++) {
        if (index > 2) {
            index = 0
        }
        if (str.charAt(i) != arr[index]) {
            count++
        }
        index++
    }
    return count
}

const str = 'SOSSPSSQSSOR'
const ans = sos(str)
console.log(ans)