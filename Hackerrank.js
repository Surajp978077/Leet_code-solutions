const str = 'hackerworld'
function check() {
    const arr = ['h', 'a', 'c', 'k', 'e', 'r', 'r', 'a', 'n', 'k']
    let index = 0
    var count = 0
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == arr[index]) {
            count++
            index++
        }
    }
    if (count == 10) {
        return 'yes'
        // console.log('yes')

    } else {
        return "no"
        // console.log('no')
    }
}


console.log(check())
