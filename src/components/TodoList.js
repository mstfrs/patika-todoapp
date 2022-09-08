import React from "react";
import axios from "axios";

const TodoList = ({
  todos,
  setTodos,
  editTodos,
  setEditTodos,
  input,
  setInput,
}) => {
  const handleDelete = async ({ id }) => {
    await axios
      .delete(`https://63171b50cb0d40bc414c2aad.mockapi.io/todos/${id}`)
      .then(setTodos(todos.filter((todo) => todo.id !== id)))
      .catch((err) => console.log(err));
  };

  const handleComplete = async (todo) => {
    console.log(todo.id);
    await axios.put(
      `https://63171b50cb0d40bc414c2aad.mockapi.io/todos/${todo.id}`,
      {
        isCompleted: !todo.isCompleted,
      }
    );
  };
  const handleEdit = async ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodos(findTodo);

    setInput(findTodo.content);
  };

  return (
    <div>
      {" "}
      {todos.map((todo, id) => (
        <li className="list-item" key={id}>
          <input
            type="text"
            name=""
            value={todo.content}
            className={`list ${todo.isCompleted? "complete" :null}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}{" "}
    </div>
  );
};

export default TodoList;
