const request = require('request');

const geocode = function(address, callback) {
    const map_api = "https://us1.locationiq.com/v1/search?key=pk.71633a3b163d2edd1fc0a200929bfb15&q=" + encodeURIComponent(address) +"&format=json&limit=1"

    request({ url: map_api, json: true }, (error, response) => {
        if(error){
            callback("Unable to connect to location services!", undefined);
        } else if (response.error) {
            callback("Invalid request made", undefined);
        } else {
            const longitude = response.body[0].lon
            const latitude = response.body[0].lat
            callback(undefined, {
                latitude,
                longitude,
                location: response.body[0].display_name
            });
        }
    })
}

module.exports = geocode