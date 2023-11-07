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
})
userSchema.pre('save', async function(next){
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPwd = await bcrypt.hash(this.password, salt)
        this.password = hashedPwd
        next()
    }catch (error){
        next(error)
    }
});


module.exports =mongoose.model ('user', userSchema)