import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import AddStudent from './Pages/AddStudent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}

      <AddStudent />
    </div>
  )
}

export default App
