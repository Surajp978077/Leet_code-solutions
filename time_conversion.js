
function timeConversion(s) {
    let i = s.length
    if (s.charAt(i - 2) == 'P') {
        let time = s.slice(0, 2)
        let time1 = parseInt(time)
        time1 += 12
        if (s.charAt(0) == '1' && s.charAt(1) == '2') {
            time1 -= 12
        }
        let time3 = time1.toString()
        let result = s.replace(time, time3);
        let result1 = result.substring(0, 8);
        return result1

    }
    else if (s.charAt(i - 2) == 'A' && s.charAt(0) == '1' && s.charAt(1) == '2') {
        let result = s.replace('12', '00');
        let result1 = result.substring(0, 8);
        return result1

    }
    else {
        let result1 = s.substring(0, 8);
        return result1

    }
}


const str = '07:05:45PM';
var result = timeConversion(str);
console.log(result)