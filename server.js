const express = require('express')

const app = express();
const port = 3000 

// Data
const fruits = require('./models/fruits.js');
const vegetables = require('./models/vegetables.js');

// Middleware here
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.use(express.urlencoded({extended:false}));


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

app.get('/fruits/new', (req, res) => {
    res.render('fruits/New');
});

app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New');
});

app.post('/fruits', (req, res)=>{
    if(req.body.readyToEat === 'on'){ 
        req.body.readyToEat = true;
    } else { 
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    res.redirect('/fruits');
});

app.post('/vegetables', (req, res)=>{
    if(req.body.readyToEat === 'on'){ 
        req.body.readyToEat = true;
    } else { 
        req.body.readyToEat = false;
    }
    vegetables.push(req.body);
    res.redirect('/vegetables'); 
});

app.get('/fruits/:indexOfFruitsArray', function(req, res){
    res.render('fruits/Show', { 
        fruit: fruits[req.params.indexOfFruitsArray] 
    });
});      

app.get('/vegetables/:indexOfVegetablesArray', function(req, res){
    res.render('vegetables/Show', { 
        vegetable: vegetables[req.params.indexOfVegetablesArray]
    });
});      

app.listen(port, () => {
    console.log(`Server is listening on, ${port}`)
});