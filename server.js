const express = require('express');

const Pizza = require('./models/pizzaModel');

const db = require('./db');

const app = express();

app.use(express.json());

app.get("/",(req,res) => {
    res.send("Server Working !");
});

app.get("/getpizzas",(req,res) => {

    Pizza.find({} , (err, docs)=> {
        
        if(err){
            console.log(err)
        }else{
            res.send(docs)
        }
    })
})

const port = process.env.PORT || 8000;

app.listen(port, () => 'Server running on port 8000');