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

function call_api(finishedApi){
    request('https://api.polygon.io/v2/aggs/ticker/MSFT/range/1/day/2023-11-14/2023-11-14?apiKey=Xgg56njTfzk_JUcF1DYU78P2ngak_h8K',{json:true},(err,res,body)=>{
        if(err){return console.log(err)}
        if(res.statusCode === 200){
           // console.log(body) 
           finishedApi(body)
        }
    })
}
app.get('/', function (req, res) {
    call_api(function(doneApi){
        res.render('home',{stock:doneApi})
        })
})







//refactor to be able to convert timestamp to 12 hr format (the time stamp is represented as t in the results)
// maybe (body.results.t =) ?
    
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


    


app.get('/about', function (req, res) {
    res.render('about',);
});

app.listen(3000, function(){
    console.log('Server is running on http://localhost:3000/');
});


