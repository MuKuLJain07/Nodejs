const express = require('express');
const path = require('path');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        });
    }

    geocode(req.query.address, (error, data) => {
        if(error){
            return console.log("Geocode Error: ", error);
        }
        
        const latitude = data.latitude;
        const longitude = data.longitude;
        const location = data.location;
        forecast(latitude, longitude, (error, data) => {
            if(error){
                return console.log("Forecast Error: ", error);
            }
            res.send({
                Location: location,
                Forecast: data,
            });
            // console.log("Location: ", location)
            // console.log("Data: ", data);
        })
    })
    // res.send({
    //     Location: location,
    //     Forecast: weather,
    // })
});

// Catch-all route using RegEx
app.all(/.*/, (request, response) => {
    response.render('pageNotFound')
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
