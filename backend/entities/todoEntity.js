const validate = require("../helpers/todoValidator");

class todo {
  constructor(todoData) {
    this.todoData = todoData;
  }
  getTitle() {
    return this.todoData.title;
  }

  getDescription() {
    return this.todoData.description;
  }

  getCategory() {
    return this.todoData.category;
  }

  async validateTodo() {
    const { error } = validate.validateTodo(this.todoData);
    if (error) return error;
    return this;
  }
}

module.exports = todo;
