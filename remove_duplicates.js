const arr = [0, 1, 1, 2, 2, 2, 3, 4, 5, 5, 5, 5, 6]

function remvdubl(arr) {
    let i = 0
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] != arr[j]) {
            i++
            arr[i ] = arr[j]
        }
    }
    console.log(i+1)
    console.log(arr)
}
remvdubl(arr)