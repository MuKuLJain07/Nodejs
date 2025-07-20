const express = require('express');

const app = express();
app.set('view engine', 'hbs');

app.get('', (request, response) => {
    response.render('index');
})
app.get('/about', (request, response) => {
    response.render('about');
})
app.get('/weather', (request, response) => {
    response.render('weather', {
        country: 'India',
        temp: '32'
    });
})

app.listen(3000, () => {
    console.log('Server is up on port 3000');
})