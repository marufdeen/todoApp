import React, { useState } from "react";
import trash from "../assets/Icon/trash.svg"; 
import SelectField from "./SelectField";
function TodoList({ todos, deleteTodo, changeTodoStatus }) {

  const [search, setSearch] = useState("");

  const onChange = ({ target }) => {
    setSearch(target.value);
  };

  const filterTodo = (todo) => {
    if (!todo) return;
    const { title, description, category, done } = todo;
    return (
      title.includes(search) ||
      description.includes(search) ||
      category.includes(search) ||
      done.includes(search)
    );
  };

  const todosList = todos.map(
    (todo) =>
      filterTodo(todo) && (
        <tr key={todo._id}>
          <td className="align-middle">
            {
              <input
                onChange={() =>
                  changeTodoStatus(todo._id, todo.done === "completed")
                }
                type="checkbox"
                checked={todo.done === "completed"}
              />
            }
          </td>
          <td className="align-middle">{todo.title}</td>
          <td className="align-middle">{todo.description}</td>
          <td className="align-middle">{todo.category}</td>
          <td className="align-middle">{todo.done}</td>
          <td className="align-middle" onClick={() => deleteTodo(todo._id)}>
            <img src={trash} alt="delete" className="img-fluid icon" />
          </td>
        </tr>
      )
  );
  return (
    <div className="container mt-5 mx-5">
      <div className="col-md-8">
        <div className="d-flex justify-between"> 
          <SelectField
            label="Filter: "
            name="search"
            onChange={onChange}
            datasets={todos.map(todo => todo.category)}
            value={search}
          />
        </div>
        <table className="table table-borderless">
          <thead className="table-light">
            <tr>
              <th scope="col"></th>
              <th scope="col">Todos</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{todosList ? todosList : "No Todo"}</tbody>
        </table>
      </div>
    </div>
  )
}

export default TodoList;
