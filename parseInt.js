const str = '8797979'
var num, pos, digit
var total=0

function check(a) {
    switch (a) {
        case '0':
            return 0
            break;

        case '1':

            return 1
            break;

        case '2':

            return 2
            break;

        case '3':

            return 3
            break;

        case '4':

            return 4
            break;

        case '5':

            return 5
            break;

        case '6':

            return 6
            break;

        case '7':

            return 7
            break;

        case '8':

            return 8
            break;

        case '9':

            return 9
            break;

        default:
            console.log('no match')
            break;
    }
}
function parseInt(str) {
    var place=str.length
    for (let i = 0; i < str.length; i++) {
        num = check(str.charAt(i))
        pos= Math.pow(10,((str.length-1)-i))
        digit=str.charAt(i)*pos
        total+=digit
        
    }
}

parseInt(str)
console.log('The input number is = '+str)
console.log('The number is = '+total)