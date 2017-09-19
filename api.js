var express = require('express')
var api = express()
let axios = require('axios')
let cheerio = require('cheerio')


api.listen(process.env.PORT || 5000, function(req, res){
  console.log("API listening on port 5000");
})

api.get('/api/getTeams', (req, res) => {

  axios.get('http://svenskfotboll.se/allsvenskan/spelprogram/').then( (response) => {
  let $ = cheerio.load(response.data);
  let teams = []
  let lastGame = null
  $('tr td a').each( (i, elm) => {


    if((i-1)%3 === 0){
      if((i-1)/3 < 8){

        let home = $(elm).text().substring(0, $(elm).text().indexOf('-')-1)
        home= home.substring(0, home.split(' ', 2).join(' ').length)

        let away =  $(elm).text().substring($(elm).text().indexOf('-')+2, $(elm).text().length)
        away= away.substring(0, away.split(' ', 2).join(' ').length)

        teams.push({
          team: home,
          games: [],
        })
        teams.push({
          team: away,
          games: [],
        })
      }
      lastGame = $(elm).text()
    }
    if(((i-1)%3 === 1) && ($(elm).text().indexOf('-') !== -1) && ($(elm).text().length <= 6) ){
      for(let j = 0 ; j< teams.length; j++){
        if(lastGame.indexOf(teams[j].team) !== -1){
          teams[j].games.push({
            home: lastGame.substring(0, lastGame.indexOf('-')-1),
            away: lastGame.substring(lastGame.indexOf('-')+2, lastGame.length),
            result: {
              home: $(elm).text().substring(0, $(elm).text().indexOf('-')-1),
              away: $(elm).text().substring($(elm).text().indexOf('-')+2, $(elm).text().length),
            }
          }
        )
        }
      }
    }

  })
  res.json(teams)
  })

})
