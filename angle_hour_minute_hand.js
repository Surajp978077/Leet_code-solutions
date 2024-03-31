const str = '11:26'
let hr = str.slice(0, 2)
let min = str.slice(3, 5)
hr = parseInt(hr)
min = parseInt(min)
// str.split
// console.log(hr)
// console.log(min)
if (hr > 12) {
    hr-=12
} else if (hr == 00) {
    hr=12
}

let hr_angle=hr*30
let min_angle=min*6
let difference=hr_angle-min_angle
difference =Math.abs(difference)
// console.log(difference)
let result
if(difference>180){
    result=360-difference
}else{
    result=difference
}
console.log(result, 'deg')
// if(str.charAt(0)==1 && str.charAt(1)==)