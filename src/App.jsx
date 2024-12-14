
// import './App.css'

import Navbar from "./components/Navbar"

function App() {
  // const [count, setCount] = useState(0)
  const handleEdit=()=>{

  }
  const handelDelete=()=>{

  }

  const handleAdd=()=>{
    
  }
  return (
    <>
    <Navbar></Navbar>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-slate-600 min-h[80vh] text-white">
        <div className="addTodo">
          <h2 onClick={handleAdd} className="text-lg font-bold">Add a Todo</h2>
          <input type="text "className="w-1/2"/>
          <button className="bg-violet-400 hover:bg-violet-700 p-3 py-1 text-white rounded-md mx-6">Add</button>
          
        </div>
          <h1 className="text-xl font-bold">Your Todos </h1>
          <div className="buttons">
            <button onClick={handleEdit}className="bg-violet-400 hover:bg-violet-700 p-2 py-1 text-sm font-bold text-white rounded-md mx-1">Edit</button>
            <button  onClick={handelDelete}className="bg-violet-400 hover:bg-violet-700 p-2 py-1 text-sm font-bold text-white rounded-md mx-1">Delete</button>
          </div>
          <div className="todos">
            <div className="todo flex"></div>
          </div>
      </div>
    </>
  )
}

export default App
