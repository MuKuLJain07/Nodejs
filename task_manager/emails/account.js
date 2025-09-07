const sgMail = require('@sendgrid/mail');
// const SG = require('./../config/keys');

const SEND_GRID_API_KEY = 'key'

sgMail.setApiKey(SEND_GRID_API_KEY);

sgMail.send({
    to: 'mukulj2018@gmail.com',
    from: 'mukulj2023@gmail.com',
    subject: 'This is my first creation',
    text: 'I hope this one actually gets to you.'
})
