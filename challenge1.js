function compareBMI() {
    //Mark weight, Mark height, John weight, John height
    // lay du lieu tu promt
    let markWeight = prompt("Mark weight?")
    let markHeight = prompt("Mark height?")
    let johnWeight = prompt("John weight?")
    let johnHeight = prompt("John weight?")
    let bmiMark = markWeight / (markHeight * markHeight)
    let bmiJohn = johnWeight / (johnHeight * johnHeight)
    if (bmiMark > bmiJohn) {
        return 'MMark BMI is higher than John!'
    } else {
        return 'John BMI is higher than Mark'
    }

}
console.log(compareBMI())