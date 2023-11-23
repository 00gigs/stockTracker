const express = require('express')
const app = express()
const path = require('path')
const { engine } = require('express-handlebars');

//static folder path 
app.use(express.static(path.join(__dirname, 'public')))


//handlebars & middleware 
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//routing functions
app.get('/',(req,res,next)=>{
    return res.render('home')
})


//server
const PORT = process.env.PORT || 3003;
app.listen(PORT, ()=>console.log('server listening on PORT http://localhost:3003'))

module.exports = app;