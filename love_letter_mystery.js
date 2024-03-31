// let index = -1
function loveLetterMystery(s) {
    var count=0
    let arrindex1, arrindex2
    var arr = s.split('')

    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] != arr[arr.length - 1 - i]) {
            arrindex1 = i
            arrindex2 = (arr.length - 1 - i)
            // if(arr[i]>arr[arr.length-1-i]){
            var difference = arr[i].charCodeAt() - arr[arr.length - 1 - i].charCodeAt()
            var ans = Math.abs(difference)
            count +=ans
            if(arr[i]>arr[arr.length-1-i]){
                arr[arr.length-1-i]=arr[i]
            }else{
                arr[i]=arr[arr.length-1-i]

            }
            // }
        }
    }
    return count
}

const s='abcd'
console.log(loveLetterMystery(s))