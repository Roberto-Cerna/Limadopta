if(process.env.NODE_ENV !== "production"){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const adoptRoutes = require('./routes/adoptRoutes')
const homeRoutes = require('./routes/homeRoutes')
const path = require('path')
const mongoose = require('mongoose');
const cors = require('cors')
const port = 8080

const databasePassword = process.env.DB_PASSWORD
const uri = `mongodb+srv://m001-student:${databasePassword}@sandbox.myiwl.mongodb.net/Limadopta?retryWrites=true&w=majority`;
mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connection to database successfully')
});

app.listen(port,(req,res)=>{    
    console.log(`Server start on port ${port}`)
})

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors())

app.use('/adopt',adoptRoutes)
app.use('/', homeRoutes)
