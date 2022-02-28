import React, { useEffect, useState } from "react";
import api from "../services/api";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [inputData, setInputData] = useState({
    title: "",
    description: "",
    category: "",
  });
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const fetchTodos = () => {
    api
      .get("/todos")
      .then(({ data }) => {
        setTodos(data.todosFound);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target; 
    const newTodoState = { ...inputData, [name]: value };
    setInputData(newTodoState);
  };
  const onSubmit = (e) => {
    e.preventDefault(); 
    api
      .post("/todos", inputData)
      .then(({ data }) => {
        if (data.error) {
          setError(data.error);
          setSuccess(false);
        }
        if (data.newTodo) {
          const todosCopy = [...todos];
          todosCopy.push(data.newTodo);
          setSuccess("You have successfully created a todo");
          setError(false);
          setTodos(todosCopy);

          setInputData({
            title: "",
            description: "",
            category: "",
          });
        }
      })
      .catch((error) => error);
  };
  const deleteTodo = (todoId) => {
    api
      .delete(`/todos/${todoId}`)
      .then(({ data }) => {
        const todosCopy = [...todos].filter((todo) => todo._id !== todoId);
        return setTodos(todosCopy);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeTodoStatus = (todoId, isDone) => {
    const status = isDone ? "uncheck" : "check";
    api.patch(`/${status}/${todoId}`).then(({ data }) => {
      fetchTodos();
    });
  };

  const feedBack = () => {
    if (error) {
      return (
        <div style={{ textAlign: "center" }} className="alert-danger p-3">
          {error}
        </div>
      );
    }
    if (success) {
      return (
        <div style={{ textAlign: "center" }} className="alert-success p-3">
          {success}
        </div>
      );
    }
  };
  return (
    <div>
      <TodoForm
        todo={inputData}
        feedBack={feedBack}
        onChange={onChange}
        onSubmit={onSubmit}
        categories={todos.map((todo) => todo.category)}
      />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        changeTodoStatus={changeTodoStatus}
      />
    </div>
  );
};

export default Todo;
