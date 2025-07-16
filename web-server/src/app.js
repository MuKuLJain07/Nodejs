const express = require('express');

const app = express();

app.get('', (request, response) => {
    response.sendFile('/Users/mukuljain/Documents/Mukul/Nodejs/web-server/components/index.html');
})
app.get('/about', (request, response) => {
    response.sendFile('/Users/mukuljain/Documents/Mukul/Nodejs/web-server/components/about.html');
})

app.listen(3000, () => {
    console.log('Server is up on port 3000');
})