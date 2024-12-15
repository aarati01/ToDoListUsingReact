import { useState } from "react";

const App2 = () => {
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
      <div className="outerContainer bg-slate-500 m-auto min-h[100vh]">
        <div className="addtodo">
          <h2 className="text-lg fomt-bold">Add a Todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            type="text"
            className="w-1/2"
          ></input>
          <button
            onClick={handleAdd}
            className="bg-violet-200 hover:bg-violet-900 p-2 py-1 text-white text-sm rounded-md"
          >
            Add me
          </button>
        </div>
        <h1 className="text-xl font-bold">Your Todos</h1>
        <div className="todos"></div>
        {todos.map((item) => {
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
    </>
  );
};
export default App2;
