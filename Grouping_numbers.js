let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let n
form_Groups(arr)

function form_Groups(arr) {
    if (arr.length == 0) {
        console.log("Array is empty")
    }
    if (arr.length % 2 == 0) {
        n = 2
    }
    else {
        for (let i = 1; i <= arr.length; i += 2) {
            if (arr.length % i == 0) {
                n = i
            }
        }
    }
    let l = 0, k
    for (let j = 1; j <= arr.length / n; j++) {
        for (k = 0; k < n; k++) {
            process.stdout.write(arr[l + k].toString())
        }
        l += k
        process.stdout.write(" ")
    }
}