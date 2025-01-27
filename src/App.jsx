import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MasaDepan from "./assets/MasaDepan.jpg"
import GymDate from "./assets/GymDate.jpg"
import MyButton from './Button'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('John')

  const [input,setInput] = useState('')
  const [todos, setTodos] = useState([])
  
  const handleClick = () => {
    setCount(count + 1)
  }

  const handleAddTodos = () => {
    const currentInput = input
  console.log(handleAddTodos)

  setTodos([...todos, currentInput])
  setInput('')
  }

  const handleNameChange = () => {
    const newName = 'Jane'
    setName(newName)
  }
    return(
      <><input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <MyButton text="addTodo" onClick={handleAddTodos}/>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      </>
    )
}

export default App
