const str = 'ababqwwasdfgh'
var i = 0
var k
var c = -1
var arr = []

function longestNonrepeatingSubstring() {
    for ( k = 0; k < str.length; k++) {
        if (find() == true) {
            c = -1
            while(arr.length > 0) {
                arr.pop();
            }
            c++
            arr[c] = str.charAt(k)
            
        } else {
            c++
            arr[c] = str.charAt(k)
            if (arr.length >= i) {
                i = arr.length
            }
        }
    }
}

function find() {
    for (let a = 0; a < arr.length; a++) {
        if (str.charAt(k) == arr[a]) {
            return true
        }
    }
}

longestNonrepeatingSubstring()
console.log(i)