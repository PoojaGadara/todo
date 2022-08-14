const todomodel =  require('../models/toDoModels')

class toDo {

    static todo = async(req,res) => {
        const {todo} = req.body;
        const newtodo = new todomodel({todo})
        newtodo.save()
        .then(() => {
            res.redirect('/')
        }).catch((err) => {
            console.log(err)
        }
        )
    }

    static delete = async(req,res) => {
        const {id} = req.params;
        todomodel.deleteOne({id})
        .then(() => {
            res.redirect('/')
        }).catch((err) => {
            console.log(err)
        }
        )
    }
}
module.exports = toDo