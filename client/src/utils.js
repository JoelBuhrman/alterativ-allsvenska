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

const getFakeTable = (info) => {
  let table = []
  info.map(team => {
    table.push({
      team: team.team,
      games: getNumberOfGames(team, info).games,
      points: getNumberOfGames(team, info).points,
      diff: getNumberOfGames(team, info).totalScore,
    })
  })

  table = sortByKey(table, 'points');

  return table
}

const getNumberOfGames = (team, info) => {
  let games = 0
  let points = 0
  let totalScore = 0

  team.games.map(game => {
    let otherTeam = (game.home === team.team ? game.away : game.home)
    if(info.filter(t => t.team === otherTeam).length > 0){
      games ++
      let score = 0
      if(game.home === team.team){
        score += game.result.home - game.result.away
      }
      else{
        score += game.result.away - game.result.home
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
    }
  })

  return {games, points, totalScore}
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
  getFakeTable,
}
