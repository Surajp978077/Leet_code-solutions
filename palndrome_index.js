let arrindex1, arrindex2
// let index = -1
function checkpalindrome(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] != arr[arr.length - 1 - i]) {
            arrindex1 = i
            arrindex2 = (arr.length - 1 - i)
            return 0
        }
    }
    return -1
}

function returnindex(str) {
    var arr = str.split("")
    var arr2=[]
    var arr3=[]
    var op=checkpalindrome(arr)
    if(op==(-1)){
        return -1
    }
    else{
        arr2=arr.slice()
        arr2.splice(arrindex1,1)
        // console.log(arr)
        // console.log(arr2)
        arr3=arr.slice()
        arr3.splice(arrindex2,1)
        // console.log(arr3)
        let index1=arrindex1
        let index2=arrindex2
        if(checkpalindrome(arr2)==(-1)){
            return index1
        }else if(checkpalindrome(arr3)==(-1)){
            return index2
        }
        
    }
}


const str = 'baa'
console.log(returnindex(str))