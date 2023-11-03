const student = require('../models/studentsmodel');
const createError = require('http-errors')
module.exports = {
    Addstudent: async (req, res, next) => {
        try{
            const student = new Student(req.body)
            const result = await student.save();
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
    Getstudent: async(req, res, next) => {
        const id = req.paras.id;
        try{ 
            const student = await Student.findById(id);
            if(!student){
                throw createError(404, "Student not found");
            }
            res.send(student)
        }catch(error) {
            console.log(error.message);
            if (error.name === 'CastError') {
                next(createError(400, "Invalid ID"));
                return;
            }
            next(error);
        }   
    },
    Deletestudent: async (req, res, next) => {
        const id = req.params.id
        try {
            const student = await Student.findByIdAndRemove(id)
            if (!student) {
                throw(createError(404, 'student does not exist'))
        }
        res.send(student);
    } catch (error) {
        console.log(error.message)
        if (error instanceof mongoose.CastError) {
            next(createError(400, 'Invalid  student id'));
            return;
            }
        }
    }
}