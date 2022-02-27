const todoModel = require("../models/todoModel");

const todoDao = {
  async findAll() {
    const result = await todoModel.find();
    return result;
  },

  async findByCategory(category) {
    const result = await todoModel.findOne({ category });
    return result;
  },

  async findByTitle(title) {
    const result = await todoModel.findOne({ title });
    return result;
  },

  async findById(todoId) {
    const result = await todoModel.findById(todoId);
    return result;
  },

  async create(todoData) {
    const newTodo = await todoModel.create(todoData);
    if (newTodo) return newTodo;
    return false;
  },
  async update(todoId, todoData) {
    const edit = await todoModel.updateOne({ _id: todoId }, todoData);
    if (edit) return this.findById(todoId);
    return false;
  },

  async remove(todoId) {
    await todoModel.deleteOne({ _id: todoId });
    return "You deleted the todo successfully";
  },
};

module.exports = todoDao;
