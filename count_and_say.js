var arr=[1]
let diff
let target=4
let a=0
let iterations=1
var arr2=[]
while ( target>iterations) {
    // console.log(arr)
    a=0
for (let i = a; i < arr.length; i++) {
    // console.log('yes')
        if(arr[a]!=arr[i] || i==arr.length-1){
            // console.log('yes1'
            if(i==arr.length-1 && a!=i-1){
                diff=i-a
                diff++
            }else if(i==arr.length-1 && a==i-1){
                diff=i-a
            }
            else{
                diff=(i-1)-a
                diff++
            }
            arr2.push(diff)
            arr2.push(arr[a])
            // if(i!=arr.length-1){
                a=i
            // }
        }
    }
    iterations++
    // console.log(arr)
    // console.log(arr)
    arr.length=0 
    arr.push(...arr2)
    arr2.length=0
    console.log(arr)

}