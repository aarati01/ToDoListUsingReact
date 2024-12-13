
// import './App.css'

import Navbar from "./components/Navbar"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-slate-600 min-h[80vh] text-white">
        <div className="addTodo">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input type="text/"></input>
          <button className="bg-violet-400 hover:bg-violet-700 p-3 py-1 text-white rounded-md mx-6">Add</button>
          
        </div>
          <h1 className="text-xl font-bold">Your Todos </h1>
          <div className="todos">
            <div className="todo flex"></div>
          </div>
      </div>
    </>
  )
}

export default App
