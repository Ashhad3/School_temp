const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8000;

mongoose.connect('mongodb://localhost:27017/contactFSS', {useNewUrlParser: true, useUnifiedTopology: true});


    const contactschema = new mongoose.Schema({
        name: String,
        email: String,
        address: String,
        phone: String,
        desc: String
      });
      const contact = mongoose.model('contact', contactschema);



app.use('/static', express.static('static'));
app.use(express.urlencoded());

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

app.post('/contact', (req, res)=>{
    
    var myData = new contact(req.body);
    myData.save().then(()=>{
            res.status(200).send("Item has been saved successfully");
    }).catch(()=>{
        res.status(400).send("Could not complete your command")
    });
     
})



app.listen(port , ()=>{
    console.log(`This application started successfully on port: ${port}`);  
})