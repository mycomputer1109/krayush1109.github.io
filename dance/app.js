

const express = require('express');
const path = require('path');
const { render } = require('pug');
const fs = require('fs');
const app = express();
const port = 80;

// ...... Mongoose Content or MongoDb content
const bodyparser = require("body-parser");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Dance', { useNewParserUrl: true });

var contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
});

var Contact = mongoose.model('Contact', contactSchema);
// ..........................................
// ..........................................

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // for serving static files
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// ENDPOINTS
app.get('/', (req, res) => {

    res.status(200).render('index.pug');
});

app.get('/contact', (req, res) => {
    res.render('contact.pug');
});

// app.post('/contact.pug', (req, res) => {
//     console.log('Form Submitted Successfully');
//     console.log(req.body);
//     res.render('contact.pug');

//     // For getting .txt file as output
//     name = req.body.name;
//     phone = req.body.phone;
//     email = req.body.email;
//     address = req.body.address;

//     let outputToWrite = `The Name of the Client is ${name}\n\n
//         | Phone Number : ${phone} \n\n
//         | Email ID : ${email} \n\n
//         | Address : ${address}`;
//     fs.writeFileSync('output.txt', outputToWrite);


// });


app.post('/contact.pug', (req, res) => {
    console.log('Data saved to the MongoDb successfully !!');
    var myData = new Contact(req.body);
    myData.save().then(() => {
        res.send('This item has been Saved to the MongoDb Database')
    }).catch(() => {
        res.status(400).send('Item was not saved to the DataBase')
    });
});






app.listen(port, () => {
    console.log(`\n\nThe application started successfully at port ${port}`);
});



