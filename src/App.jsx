// import './App.css'

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleEdit = (index) => {
    const updatedTodos = [...todos];
    const todoToEdit = updatedTodos[index];
    const updatedText = prompt("Edit your todo:", todoToEdit.todo);
    if (updatedText) {
      updatedTodos[index].todo = updatedText;
      setTodos(updatedTodos);
    }
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, iscompleted: false }]);
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].iscompleted = !newTodos[index].iscompleted;
    setTodos(newTodos);
  };
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-slate-600 min-h-[80vh]">
        <div className="addTodo">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="w-1/2"
          ></input>
          <button
            onClick={handleAdd}
            className="bg-violet-400 hover:bg-violet-700 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
          >
            Add
          </button>
        </div>
        <h1 className="text-xl font-bold">Your Todos </h1>
        <div className="todos">
          {todos.length === 0 && <div> No Todos to display</div>}
          {todos.map((item, index) => {
            return (
              <div
                className="todo flex w-1/2  my-2 justify-between
               "
                key={index}
              >
                <input
                  name={item.id}
                  onChange={handleCheckbox}
                  type="checkbox"
                  value={item.iscompleted}
                  id=""
                ></input>
                <div className={item.iscompleted ? "line-through" : ""}>
                  {item.todo}
                </div>
                <div className="buttons">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-violet-400 hover:bg-violet-700 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => handleDelete(e, item.id)}
                    className="bg-violet-400 hover:bg-violet-700 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
