const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const dotenv = require('dotenv');
var bodyParser  = require('body-parser');
var pug = require('pug');
const path = require('path');
dotenv.config({path:'./config.env'})

const app = express();
const port =process.env.PORT || 8000;
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});


    const contactschema = new mongoose.Schema({
        name: String,
        email: String,
        address: String,
        phone: String,
        desc: String
      });
      const contact = mongoose.model('contact', contactschema);



app.use('/static', express.static('static'));
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.set('viewengine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res)=>{
    const load = console.log("Page is loaded successfullly");
    res.status(200).render('home.pug', load);
    
});


app.get('/contact', (req, res)=>{
    const load = console.log("Page is loaded successfullly");
    res.status(200).render('contact.pug', load);
});

app.get('/about', (req, res)=>{
    const load = console.log("Page is loaded successfullly");
    res.status(200).render('about.pug', load);
});

app.post('/contact', (req, res)=>{
    
    var myData = new contact(req.body);
    myData.save().then(()=>{
            
            res.status(200).send("Thank You For Your Message.");
    }).catch(()=>{
        res.status(400).send("Could not complete your command")
    });
     
})



app.listen(port , ()=>{
    console.log(`This application started successfully on port: ${port}`);  
})