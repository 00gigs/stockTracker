const express  = require('express');
const { engine } = require('express-handlebars')
const request = require('request');
const app = express();
const url = require('url');
const bodyParser = require('body-parser');

const apiKey = 'f0fb454bccmsh5dd8f95149ffa65p1f9ad6jsn0a2a30d55dda'
const apihost = 'apistocks.p.rapidapi.com'


//url paths for the API
'https://apistocks.p.rapidapi.com/monthly'
'https://apistocks.p.rapidapi.com/daily'
'https://apistocks.p.rapidapi.com/intraday'



app.get('/stocks/:symbol/:dateStart/:dateEnd', function(req, res){
    const url_Weekly = 'https://apistocks.p.rapidapi.com/weekly'
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

    //using the try/catch block to return ressponse in JSON format and return errorsshap
    request(options, function (error, response, body) {
           try {
            const data = JSON.parse(body);
            res.send(data);
           } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).send('Internal Server Error');
           }
        });
})








app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', function (req, res) {
        res.render('home');
    });
    


app.get('/about', function (req, res) {
    res.render('about',);
});

app.listen(3000, function(){
    console.log('Server is running on http://localhost:3000/');
});


