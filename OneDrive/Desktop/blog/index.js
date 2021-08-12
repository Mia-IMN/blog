const express = require ('express');

const Rit = express();

Rit.set ('view engine', 'ejs');

Rit.get('/', (req, res)=> {
    res.render('index')
});
Rit.get('/form', (req, res)=> {
    res.render('form')
});

Rit.listen(8100, ()=> {
    console.log('server is working fine :)');
});