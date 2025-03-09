import { useState } from "react"
import Input from "./components/Input"

function App() {
  const [todos, setTodos] = useState([])
  const [todoText, setTodoText] = useState('')

  function handleOnAddtask (){
    setTodos([...todos, {
      task : todoText,
      isCompleted : false
    }])
    setTodoText('')
  }

  function handleOnCheckTask(isChecked, item){
    const selectedIndex = todos.findIndex((todo) => todo.task === item.task)
    if(selectedIndex !== -1){
      const temporaryTodos = todos
      temporaryTodos[selectedIndex].isCompleted = isChecked

      setTodos([...temporaryTodos])
    }
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
            <li key={index}>
              {
                !item.isCompleted && (
                  <input type="checkbox" value={item.isCompleted} onChange={(evem) => {
                    handleOnCheckTask(event.target.checked, item)
                  }}/>
                )
              }
            {item.task} {item.isCompleted && 'tugas selesai'}</li>
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