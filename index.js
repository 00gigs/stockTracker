const express  = require('express');
const { engine } = require('express-handlebars')
const request = require('request');
const app = express();
const url = require('url');

const apiKey = 'f0fb454bccmsh5dd8f95149ffa65p1f9ad6jsn0a2a30d55dda'
const apihost = 'apistocks.p.rapidapi.com'


//url paths for the API
'https://apistocks.p.rapidapi.com/monthly'
const url_Weekly = 'https://apistocks.p.rapidapi.com/weekly'
'https://apistocks.p.rapidapi.com/daily'
'https://apistocks.p.rapidapi.com/intraday'


app.get('/stocks/:symbol/:dateStart/:dateEnd', function(req, res){
    const symbol = req.params.symbol 
    const dateStart = req.params.dateStart 
    const dateEnd = req.params.dateEnd

    const options = {
        method:'GET',
        url:url_Weekly,
        qs:{
            symbol: symbol,
            dateStart: dateStart,
            dateEnd: dateEnd
        },
        headers: {
            'x-rapidapi-host': apihost,
            'x-rapidapi-key': apiKey
        }
    }
    request(options, function (error, response, body) {
            if (error) throw new Error(error);
            res.send(body);
        });
})










app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', function (req, res) {
    res.render('home',);
});


app.get('/about', function (req, res) {
    res.render('about',);
});

app.listen(3000, function(){
    console.log('Server is running on http://localhost:3000/');
});


