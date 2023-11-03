const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type: String,
        required:[true, 'Please provide your username'],
        unique: true,
        lowercase: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ('Invalid credentials');
            }
        }
    },
    password:{
        type: String,
        required: [true, 'Please provide your password'],
        unique: true,
        trim: true,
        validate(value){
            if(!validator.password(value)){
                throw new Error ('invalid credentials');
            }
        }
    }
});


module.exports =mongoose.model ('user', userSchema)