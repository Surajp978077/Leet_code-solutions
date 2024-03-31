const str = '((}))'
var arr = []
var arrindex = -1
console.log(str)
function para(str) {
    if (str.length == 1) {
        console.log('False')
        return
    }
    if (str.length == 0) {
        console.log('True')
        return
    }

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == '[' || str.charAt(i) == '{' || str.charAt(i) == '(') {
            arr.push(str.charAt(i))
            arrindex += 1
        }
        else if (str.charAt(i) == ']' || str.charAt(i) == '}' || str.charAt(i) == ')') {
            if (arrindex == -1) {
                console.log('False')
                return
            }
            else if (str.charAt(i) == ')' && arr[arrindex] == '(') {
                arr.pop()
                arrindex -= 1
            }
            else if (str.charAt(i) == '}' && arr[arrindex] == '{') {
                arr.pop()
                arrindex -= 1
            }
            else if (str.charAt(i) == ']' && arr[arrindex] == '[') {
                arr.pop()
                arrindex -= 1
            }
            else {
                console.log('False')
                return
            }
        }
    }
    console.log('True')
}
para(str)
// console.log('true2')