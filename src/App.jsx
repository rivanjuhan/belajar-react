import { useState } from "react"
import Input from "./components/Input"

function App() {
  const [todos, setTodos] = useState([])
  const [todoText, setTodoText] = useState('')

  function handleOnAddtask (){
    setTodos([...todos, todoText])
    setTodoText('')
  }
  return (
    <div className="container">
      <div>
        <label htmlFor="">Input Tugas</label>&nbsp;
        <input type="text" onChange={(event) => {
          setTodoText(event.target.value)
        }} value={todoText} />

        <button onClick={handleOnAddtask}>Tambah Tugas</button>
    </div>
    {
      todos.length ? (
        <ul>
          {
          todos.map ((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
        </ul>
      ) : (
        <div>
          belum ada tugas. Tambahkan tugas pertamamu!
        </div>
      )
    }
    </div>
    
  )
}
export default App