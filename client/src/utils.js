const getRealTable = (info) => {
  let table = []
  info.map(team => {
    table.push({
      team: team.team,
      games: team.games.length,
      points: getPointsAndScore(team.team, team.games).points,
      diff: getPointsAndScore(team.team, team.games).totalScore,
    })
  })

  table = sortByKey(table, 'points');

  return table
}

const getPointsAndScore = (team, games) => {
  let points = 0
  let totalScore = 0

  games.map(game => {
    let score = 0
    if(game.home === team){
      score = game.result.home - game.result.away
    }
    else{
      score = game.result.away - game.result.home
    }
    totalScore += score
    switch(true) {
      case score > 0:
        points += 3
        break;
    case score < 0:
        points += 0
        break;
    case score === 0:
        points += 1
        break;
    default:
        break
    }
  })
  return {
    points,
    totalScore,
  }
}

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    });
}

export{
  getRealTable,
}
