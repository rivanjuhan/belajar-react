import { useState } from "react"
import TaskList from "./components/TaskList"

function App(){
  const [Todos, setTodos] = useState([])
  const [TextInput, setTextInput] = useState("")

function AddNewTodos(){  // buat fungsi untuk menambahkan value dari textinput kedalam array todos
  const todoItem ={ //buat susunan data agar mudah memanipulasi data pada step selanjutnya 
    tittle : TextInput,
    isCompleted : false
  }
  setTodos((previousTodos) => [...previousTodos, todoItem]) //untuk insert data kedalam Todos
}

  function onCompletedTask (isChecked, todoItem){
    const selectedIndex = Todos.findIndex((item) => item.tittle === todoItem.tittle)

    if(selectedIndex !== -1){
      
      setTodos(previousTodos =>{ 
        const updateTodos = [...previousTodos];
        updateTodos[selectedIndex].isCompleted = isChecked
        return updateTodos;
      })
    }

  }


  return( // tambahkan value pada input dan onchange agar input bisa ditambah dan onclick pada button agar bisa diklik
    <div>
      <div>
        <input type="text" value={TextInput} onChange={(event) => setTextInput(event.target.value)}/> 
        <button onClick={AddNewTodos}>Tambah</button>
      </div>

      <TaskList Todos={Todos}
      onCompletedTask={onCompletedTask}/>
      
    </div>
  )
}

export default App