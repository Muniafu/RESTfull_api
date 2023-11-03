const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const connectToDb = async() => {
    const connection = await mongoose.connect(process.connect.env.connection_string,{dbname: process.env.DB_NAME})
    .then((connection) =>{
        console.log("connected to the database")
    })
    .catch((err) =>{
        console.error(`Failed to connect to the database ${err}`)
    });
}

module.exports = connectToDb