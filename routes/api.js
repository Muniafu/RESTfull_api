const express = require ('express');
const routes = express.Router();

const Student = require('../models/studentsmodel')
const studentcontroller = require('../controller/studentcontroller')

// Get a list of students from the database
routes.get('/students', studentcontroller.Getstudent);

// add a students to the database
routes.post('/student', studentcontroller.Addstudent);

// update a student in the database
// routes.put('/students',);

routes.patch('/:id', async(req, res, next) =>{
    try {
        const id = req.params.id;
        const update = req.body;
        const options = {new: true};
        const result = await Student.findByIdANdUpdate(id, update, options)

        res.send(result);
        } catch (err) {
            console.log(err.message);
    }
});

//delete a student from the database
routes.delete('/students', studentcontroller.Deletestudent);

module.exports = routes;