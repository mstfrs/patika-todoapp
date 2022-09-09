import axios from "axios";
import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodos,
  setEditTodos,
  getData,
}) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    if (editTodos) {
      setInput(editTodos.content);
    } else {
      setInput("");
    }
  }, [setInput, editTodos]);

  // const updateTodo=(content,id,isCompleted)=>{
  //     const newTodo=todos.map((todo)=>{
  //         todo.id===id ? {content,id,isCompleted}:todo
  //     })
  //     setTodos(newTodo)

  // }

  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (!editTodos) {
      await axios
        .post("https://63171b50cb0d40bc414c2aad.mockapi.io/todos", {
          content: input,
          isCompleted: false,
        })
        .then((data) => setTodos((todos) => [...todos, data]))
        .catch((err) => console.log(err));

      setInput("");
    } else {
      todos.map((todo) => {
        if (todo.id===editTodos.id) {
          axios.put(`https://63171b50cb0d40bc414c2aad.mockapi.io/todos/${editTodos.id}`,{content: input})
              .then((data) => setTodos((todos) => [...todos, data]))
              .catch((err) => console.log(err))
          
        } else {
          return todo;
          
        }


        // todo.id = editTodos.id ? axios.put(`https://63171b50cb0d40bc414c2aad.mockapi.io/todos/${todo.id}`,{content: input})
        //       .then((data) => setTodos((todos) => [...todos, data]))
        //       .catch((err) => console.log(err))
        //   : todo;
        getData()
          setEditTodos("")
          
      });
    }
    getData()
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="task-input"
        name=""
        value={input}
        required
        onChange={onInputChange}
      />
      <button type="submit" className="button-add">{editTodos?"OK":"Add"}      </button>
    </form>
  );
};

export default Form;
