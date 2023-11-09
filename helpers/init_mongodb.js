const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, {dbName: process.env.DB_NAME})
.then(() =>{
    console.log('mongodb connected')
})
.catch((err) => console.log(err.message));
const userSchema = new mongoose.Schema({
    username:{type: String, required: true},
    email:{type:String,required:true},
    password:{type:String,required:true}
});
