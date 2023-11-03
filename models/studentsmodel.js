const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema({
    firstname:{
        type: String,
        required:[true,"Please provide your First Name"]
    },
    lastname:{
        type: String,
        required:[true,"Please provide your Last Name"]
    },
    gender:{
        type:String,
        enum:['Male','Female'],
        default:'Male'
    },        
    email:{
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ('Invalid Email Address');
                }
        }
    },
    
});

const student = mongoose.model ('students', studentSchema); // Create a model that is going to rep our collection

module.exports = student; //Here we are exporting this files so that we can us it on other files 