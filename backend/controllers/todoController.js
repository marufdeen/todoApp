const todoServices = require("../services/todoServices");

class todoController {
  /**
   * @author Maruf
   * @method  POST - create
   * @desc Feature: signs up the todo
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  static async createTodo(req, res) {
    try {
      const todo = await todoServices.createTodo(req.body); // call todo service to create todo
      return res.status(201).json(todo);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  /**
   * @author Maruf
   * @method  GET - getTodos
   * @desc Feature: Get All Todos
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  static async getTodos(req, res) {
    try {
      const todos = await todoServices.getTodos(); // call todo service to get all todos
      return res.status(200).json(todos);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  /**
   * @author Maruf
   * @method  PATCH - checkTodo
   * @desc Feature:  update todo done: completed
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  static async checkTodo(req, res) {
    try {
      const { todoId } = req.params;
      const checkedTodo = await todoServices.setTodoStatus(todoId, {
        done: "completed",
      });
      return res.status(200).json(checkedTodo);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  /**
   * @author Maruf
   * @method  PATCH - unCheckTodo
   * @desc Feature:  update todo done: completed
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object} Json data
   */
  static async unCheckTodo(req, res) {
    try {
      const { todoId } = req.params;
      const unCheckedTodo = await todoServices.setTodoStatus(todoId, {
        done: "pending",
      });
      return res.status(200).json(unCheckedTodo);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  /**
   * @author Maruf
   * @method  DELETE - deleteTodo
   * @desc Feature: Delete A specific todo
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns empty data
   */
  static async deleteTodo(req, res) {
    try {
      const { todoId } = req.params;
      const deleted = await todoServices.deleteTodo(todoId); // call todo service to create todo
      return res.status(200).json(deleted);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

module.exports = todoController;

/* 


*/
