function grading(grades) {
    var op = []
    var marks, marks1
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38) {
            op.push(grades[i])
        } else {
            marks = (grades[i] / 5)
            marks1 = parseInt(marks)
            marks1++
            marks = marks1 * 5
            // console.log(marks)
            // console.log(grades[i])
            if ((marks - grades[i]) < 3) {
                op.push(marks)
            } else {

                op.push(grades[i])
            }
        }
    }
    return op
}

var grades = [73, 66, 39]
const op = grading(grades)
console.log(op)