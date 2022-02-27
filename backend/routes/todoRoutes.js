const { Router } = require("express");
const todoController = require("../controllers/todoController");
const router = Router();
router.post("/todos", todoController.createTodo);
router.get("/todos", todoController.getTodos);
router.patch('/check/:todoId', todoController.checkTodo);
router.patch('/uncheck/:todoId', todoController.unCheckTodo)
router.delete("/todos/:todoId", todoController.deleteTodo);

module.exports = router;
