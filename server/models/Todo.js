
const { Schema, model } = require('mongoose')

const TodoList = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

const Todo = model('Todo', TodoList);

module.exports = Todo;