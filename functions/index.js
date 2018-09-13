const functions = require('firebase-functions');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
var firebase = require("firebase");

firebase.initializeApp({
  serviceAccount: "./Users-9ecfc7d3c8c7.json",
  databaseURL: "https://users-41f8e.firebaseio.com"
});

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'kadduzomato@gmail.com',
        pass: 'zomatozomato'
    }
});

console.log('created');

var users = firebase.database().ref('users');
var userInformation = firebase.database().ref('userInformation');

const app = express();

app.use(bodyParser.json());

app.post('/users', (request, response) => {
  userInformation.push({
    name: request.body.username,
    email: request.body.email
  });

  transporter.sendMail({
    from: 'kadduzomato@gmail.com',
    to: request.body.email,
    subject: 'Welcome Mail',
    text: 'Dear ' + request.body.username  +', Welcome to our app'
  });

});
app.get('/userInformation', (request, response) => {
  userInformation.once('value')
  .then( function (snapshot) {
    response.statusCode = 200;
  	response.setHeader('Content-Type', 'application/json');
  	response.json(snapshot.val());
  })
  .catch((error) => {
    return console.log(error);
  });
});

exports.app = functions.https.onRequest(app);
