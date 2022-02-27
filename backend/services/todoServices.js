const todoEntity = require("../entities/todoEntity");
const todoDao = require("../data-access/todoDao");

class todoService {
  static async createTodo(todoData) {
    try {
      // make a new todo object with inputed data
      const entity = new todoEntity(todoData);
      const errors = await entity.validateTodo();
      if (errors && errors.details) throw new Error(errors.details[0].message);
      // check if the todo already exists
      const titleExist = await todoDao.findByTitle(entity.getTitle());
      if (titleExist) throw new Error("Todo already exist");

      // if todo does not exist, create the todo
      const newTodo = await todoDao.create({
        title: entity.getTitle(),
        description: entity.getDescription(),
        category: entity.getCategory(),
      });
      // if todo failed to create, throw error
      if (!newTodo) throw new Error("Todo not Created");
      return { newTodo };
    } catch (error) {
      return { error: error.message };
    }
  }

  static async getTodos() {
    try {
      const todosFound = await todoDao.findAll();
      return { message: "success", todosFound };
    } catch (error) {
      return { error: error.message };
    }
  }

  static async setTodoStatus(todoId, todoData) {
    try { 
      const todoFound = await todoDao.findById(todoId);
      if (!todoFound) throw new Error("Sorry, todo not found!");

      const todoStatus = await todoDao.update(todoId, todoData);
      return { message: "Todo status changed", todoStatus };
    } catch (error) {
      return { error: error.message };
    }
  }

  static async deleteTodo(todoId) {
    try {
      const todoFound = await todoDao.findById(todoId);
      if (!todoFound) throw new Error("Sorry, todo not found!");
      await todoDao.remove(todoId);
      return { message: "You deleted the todo successfully" };
    } catch (error) {
      return { error: error.message };
    }
  }
}

module.exports = todoService;
