const express  = require('express');
const { engine } = require('express-handlebars')
const request = require('request');
const app = express();
const bodyParser = require('body-parser');
const { error } = require('console');

/*The urlencoded method is specified with extended: true to use the qs library to parse the URL-encoded data. Without this middleware, 
you would not be able to access the form data 
in req.body in the 
route handler.*/
app.use(bodyParser.urlencoded({ extended: true }));

const api = 'Xgg56njTfzk_JUcF1DYU78P2ngak_h8K'
const baseURL = 'https://api.polygon.io/v2'



//  get method applied to API after post method to /stock/search from form data




app.post('/stock/search', (req, res) => {
    const {stocksTicker ,multiplier, timeSpan, searchStock_start, searchStock_end} = req.body;

//const GET method route    
    const SRCH = {
        method: 'GET',
        url:`${baseURL}/aggs/ticker/${stocksTicker}/range/${multiplier}/${timeSpan}/${searchStock_start}/${searchStock_end}`,
        qs:{
           apiKey:api
        },
        headers: {
            Authorization: `Bearer ${api}`
        }
    }
//refactor to be able to convert timestamp to 12 hr format (the time stamp is represented as t in the results)
// maybe (body.results.t =) ?
    request.get(SRCH, (error, response, body) => {
        if(response.statusCode === 200){
            const parseData_ = JSON.parse(body)
            const stockData = parseData_.results
            console.log(stockData)
            res.render('home',{data:stockData})
        }else{
            res.render('home',{data:'Error fetching stock data'})
        }
    })
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


