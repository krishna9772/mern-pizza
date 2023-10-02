const mongoose = require('mongoose');

var mongoUrl = 'mongodb+srv://admin:admin123@cluster0.zjcif4l.mongodb.net/mern-pizza'

mongoose.connect(mongoUrl, {useUnifiedTopology:true, useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', () => {
    console.log('Database connected');
})

db.on('error',()=>{
    console.log('Connection failed');
})

module.exports =mongoose;