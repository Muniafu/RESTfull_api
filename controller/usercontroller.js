const { default: mongoose} = require('mongoose');
const user = require('../models/usermodel');
const createError = require('http-errors')

module.exports = {
    Adduser: async (req, res, next) => {
        try{
            const user = new user(req.body)
            const result = await user.save();
        res.send(result);
        }catch(error){
            console.log(error.message);
            if (error.name == 'ValidationError'){
                next(createError(422, error.message))
                return;
            }
            next(error)
        }
    },
    Getuser: async(req, res, next) => {
        const id = req.paras.id;
        try{ 
            const user = await user.findById(id);
            if(!user){
                throw createError(404, "User not found");
            }
            res.send(user)
        }catch(error) {
            console.log(error.message);
            if (error.name === 'CastError') {
                next(createError(400, "Invalid ID"));
                return;
            }
            next(error);
        }   
    },
    Deleteuser: async (req, res, next) => {
        const id = req.params.id
        try {
            const user = await user.findByIdAndRemove(id)
            if (!user) {
                throw(createError(404, 'User does not exist'))
        }
        res.send(user);
    } catch (error) {
        console.log(error.message)
        if (error instanceof mongoose.CastError) {
            next(createError(400, 'Invalid  user id'));
            return;
            }
        }
    }
}