// import './App.css'

import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleEdit = () => {};
  const handelDelete = () => {};

  const handleAdd = () => {
    setTodos([...todos, { todo, iscompleted: false }]);
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-slate-600 min-h[80vh]">
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
          {todos.map((index, item) => {
            return (
              <div className="todos" key={item.index}>
                <div className="text">{item.todo}</div>
                <div className="buttons">
                  <button
                    onClick={handleEdit}
                    className="bg-violet-400 hover:bg-violet-700 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handelDelete}
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
