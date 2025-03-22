const TaskList = ({ Todos, onCompletedTask }) => {
    return (
        <ol> 
        {Todos.map((item) => ( //menampilkan data berdasarkan data yang sudah dibuat (tittle : string, isCompleted: false(boolean))
          <li key={item.tittle}>{
            item.isCompleted ? ( //untuk menandakan item yang diceklis
              <>✅&nbsp;</>
            ) : (
              <input type="checkbox" value={item.isCompleted} onChange={(event) => {
                onCompletedTask(event.target.checked, item)
              }} />
            )
          }{item.tittle} {item.isCompleted && <strong>&nbsp;(Tugas Sudah Selesai)</strong>}</li>
        ))}
      </ol>
    )
}

export default TaskList