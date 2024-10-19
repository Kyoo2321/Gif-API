import { useState } from 'react'
import './App.css'
import AddCategory from './components/AddCategory'

function App() {
  const [category, setCategory] = useState("");

  return (
    <div className="App">
      <h2>Gifs Expert App</h2>
      <AddCategory setCategory={setCategory} />
      
    </div>
  )
}

export default App