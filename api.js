var express = require('express')
var api = express()
let axios = require('axios')
let cheerio = require('cheerio')


api.listen(5000, function(req, res){
  console.log("API listening on port 5000");
})

api.get('/api/getTeams', (req, res) => {

  axios.get('http://svenskfotboll.se/allsvenskan/spelprogram/').then( (response) => {
  let $ = cheerio.load(response.data);
  let teams = []
  $('tr td a').each( (i, elm) => {
    if((i-1)%3 === 0){
      if((i-1)/3 < 8){
        teams.push({
          team: $(elm).text().substring(0, $(elm).text().indexOf('-')-1),
          games: [],
        })
        teams.push({
          team: $(elm).text().substring($(elm).text().indexOf('-')+2, $(elm).text().length),
          games: [],
        })
      }
    }
    for(let i = 0 ; i< teams.length; i++){
      if($(elm).text().indexOf(teams[i].team) !== -1){
        teams[i].games.push($(elm).text())
      }
    }
  })
  res.json(teams)
  })

})
