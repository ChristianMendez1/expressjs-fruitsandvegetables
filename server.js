const express = require('express')

const app = express();
const port = 3000 

// Data
const fruits = require('./models/fruits.js');
const vegetables = require('./models/vegetables.js');

// Middleware here
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//Routes Here
app.get('/', function(req, res){
    res.render('home/Index', { fruits: fruits });
});   

app.get('/fruits', function(req, res){
    res.render('fruits/Index', { fruits: fruits });
});   

app.get('/vegetables', function(req, res){
    res.render('vegetables/Index', { vegetables: vegetables });
});   

app.get('/fruits/:indexOfFruitsArray', function(req, res){
    res.render('fruits/Show', { //second param must be an object
        fruit: fruits[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    });
});      

app.get('/vegetables/:indexOfVegetablesArray', function(req, res){
    res.render('vegetables/Show', { //second param must be an object
        vegetable: vegetables[req.params.indexOfVegetablesArray] //there will be a variable available inside the ejs file called vegetable, its value is vegetables[req.params.indexOfVegetablesArray]
    });
});      


//Tel express listen
app.listen(port, () => {
    console.log(`Server is listening on, ${port}`)
});