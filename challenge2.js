function compareBMI(markWeight, markHeight, johnWeight, johnHeight) {
    //Mark weight, Mark height, John weight, John height

    // let markWeight = prompt("Mark weight?")
    // let markHeight = prompt("Mark height?")
    // let johnWeight = prompt("John weight?")
    // let johnHeight = prompt("John weight?")
    let bmiMark = markWeight / (markHeight * markHeight)
    let bmiJohn = johnWeight / (johnHeight * johnHeight)
    if (bmiMark > bmiJohn) {
        console.log(`Mark's BMI ${Math.floor(bmiMark) } is higher than John's ${Math.floor(bmiJohn)}!`)
    } else {
        console.log(`Mark's BMI ${bmiMark} is lower than John's ${bmiJohn}!`)
    }

}
console.log(compareBMI(75, 1.69, 92, 1.95))