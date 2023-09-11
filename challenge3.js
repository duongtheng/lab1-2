const Dolphins = [96, 108, 89]
const Koalas = [88, 91, 110]
const avgScore = (score) => {
    let totalScore = 0
    for (let i = 0; i < score.length; i++) {
        totalScore += score[i]
            // console.log(s core[i])
    }
    let avgScore = totalScore / score.length
        // console.log(avgScore)
    return avgScore
}
const findTeamWin = (team1, team2) => {
    let DolphinsScore = avgScore(team1)
    let KoalasScore = avgScore(team2)
    if (DolphinsScore === KoalasScore) {
        console.log(`Draw`)
    }
    if (DolphinsScore > KoalasScore) {
        console.log(`Dolphins win`)
    } else {
        console.log(`Koalas win`)
    }
}
findTeamWin(Dolphins, Koalas)
findTeamWin([97, 112, 101], [109, 95, 123])
findTeamWin([97, 112, 101], [109, 95, 106])