import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import axios from "axios";
import TodoList from "./components/TodoList";
import Login from "./components/Login";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodos, setEditTodos] = useState(null);
  const [username, setUsername] = useState("");

  const getData = async () => {
    await axios
      .get("https://63171b50cb0d40bc414c2aad.mockapi.io/todos")
      .then((res) => setTodos(res.data));
  };

  useEffect(() => {
    getData();
  }, [setTodos]);

  useEffect(() => {
    setUsername(localStorage.getItem("user"))
    
  }, [setUsername,username])
  

  return (
    <div className="container">
      <div className="app-wrapper">
{!username ?<Login username={username} setUsername={setUsername} />:<>
<Header username={username} setUsername={setUsername}/>
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodos={editTodos}
          setEditTodos={setEditTodos}
          getData={getData}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          setInput={setInput}
          input={input}
          editTodos={editTodos}
          setEditTodos={setEditTodos}
          getData={getData}
        /></>}

        

        
      </div>
    </div>
  );
}

export default App;
