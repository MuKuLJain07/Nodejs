// const request = require('request');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast');
const chalk = require('chalk')


geocode(process.argv[2], (error, data) => {
    if(!process.argv[2]){
        return console.log(chalk.red("Please provide a location"));
    }
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
        console.log("Location: ", location)
        console.log("Data: ", data);
    })
})
