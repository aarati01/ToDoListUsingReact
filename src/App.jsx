
// import './App.css'

import Navbar from "./components/Navbar"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-slate-600">
          <h1 className="text-xl font-bold">Your Todos </h1>
      </div>
    </>
  )
}

export default App
