const express = require('express');
const routes = require('./routes/api');
const connectToDb = require('./connection/dbConnection')
require('dotenv').config();
require('./helpers/init_mongodb');

const app = express();

//connect to db
connectToDb

//Middleware
app.use(express.json());

//routes
app.use(routes);

app.listen(process.env.PORT || 4000, function(){
    console.log("Now listening for requests on: https://localhost:4000");
});

// Handling 404 error
app.use((re, res, next) => {
    const err = new Error('Not Found');
    err.status =404
    next(err)
})

// Error handler
app.use((err, req, res, next)=>{
    res.status(err.status || 500)
    res.send({
        error:{
            status:err.status || 500,
            message: err.message
        }
    })
})
