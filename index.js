const express  = require('express');
const { engine } = require('express-handlebars')
const path = require('path');
const app = express();



app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', function (req, res) {
    res.render('home',);
});


app.get('/about.html', function (req, res) {
    res.render('about',);
});



app.use(express.static(path.join(__dirname ,'./public')));

app.listen(3000, function(){
    console.log('Server is running on http://localhost:3000/');
});