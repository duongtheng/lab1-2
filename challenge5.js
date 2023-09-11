const calcAverage = (score) => {
    let sum = 0
    for (let i = 0; i < score.length; i++) {
        sum += score[i]
    }
    return sum / score.length
}
const checkWinner = (Dolhins, Koalas) => {
    let avgDolhins = calcAverage(Dolhins)
    let avgKoalas = calcAverage(Koalas)
    if (avgDolhins < avgKoalas) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`)
    } else if (avgDolhins > avgKoalas) {

        console.log(`Dolhins win (${avgKoalas} vs. ${avgDolhins})`)
    } else {
        console.log("Draw");
    }

}
checkWinner([44, 23, 71], [65, 54, 49])
checkWinner([85, 54, 41], [23, 34, 27])