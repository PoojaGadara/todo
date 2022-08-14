const mongoose = require('mongoose')

const toDoSchema = new mongoose.Schema({
    todo : {
        type : String,
        require : true
    }
});


module.exports =new mongoose.model("todo",toDoSchema)