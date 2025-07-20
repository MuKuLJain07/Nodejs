// const weather_api = "http://api.weatherstack.com/current?access_key=072a26df115ded3426196de3e81e8bc0&query=28.7041,77.1025"

// request({ url: weather_api }, (error, response) => {
//     if(error) {
//         console.log("Unable to connect to weather services!");
//         return;
//     } else if (response.error) {
//         console.log("Invalid request made");
//         return;
//     } else{
//         const data = JSON.parse(response.body);
//         console.log(data.current.weather_descriptions + ". It is currently " + data.current.temperature + " degrees and feels like temp is " + data.current.feelslike + " degrees.");
//     }
// })


const request = require('request');

const forecast = function(latitude, longitude, callback) {
    const map_api = "http://api.weatherstack.com/current?access_key=072a26df115ded3426196de3e81e8bc0&query=" + encodeURIComponent(latitude) + "," + encodeURIComponent(longitude)

    request({ url: map_api, json: true }, (error, response) => {
        if(error){
            callback("Unable to connect to forecast services!", undefined);
        } else if (response.error) {
            callback("Invalid request made", undefined);
        } else {
            callback(undefined, {
                "weather_descriptions": response.body.current.weather_descriptions,
                "actual_temp: latitude": response.body.current.temperature,
                "feels_like": response.body.current.feelslike
            });
        }
    })
}

module.exports = forecast