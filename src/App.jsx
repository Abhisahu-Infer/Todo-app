import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
  let todoString = localStorage.getItem("todos");
  if (todoString) {
    let todos = JSON.parse(todoString);
    setTodos(todos);
  }
}, []);


  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }
  

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo);
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos);
    saveToLS()
  }


  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos);
    saveToLS()
  }



  const handleAdd = () => {
    const newTodos = [...todos, {
      id: uuidv4(),
      todo,
      isCompleted: false
    }];
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
    setTodo("");
  }



  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item => {
      return item.id == id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS()
  }

  return (
    <>
    <Navbar />
      <div className='flex justify-center'>  
        <div className="md:container bg-violet-200 mx-auto my-5 md:rounded-3xl rounded-xl md:px-10 px-2 min-h-[80vh] md:w-[70vw] ">
          <h1 className='font-bold md:text-xl text-sm flex justify-center py-5'>Itask - Manage your todos at one place</h1>
          <div className="addtodo flex items-center md:gap-3 gap-2">
            <h1 className='md:text-lg text-sm font-bold'>Add a Todo</h1>
            <input onChange={handleChange} value={todo} className="bg-white rounded-2xl w-[50vw] h-10 px-2" type="text" />
            <button onClick={handleAdd} disabled={todo.length<=3} className='bg-red-500 rounded-full text-white font-bold md:px-7 px-4 md:py-3 py-1 hover:bg-red-600 disabled:bg-red-800 cursor-pointer'>Add</button>
          </div>
          <div className="lowerbox my-8"></div>
          <input type="checkbox" onChange={toggleFinished} checked={showFinished} /> Show Finished
          {todos.length === 0 && <div className='flex my-15 font-bold justify-center items-center'>No Todos set yet</div>}
          {todos.map(item => {
            return (showFinished || !item.isCompleted) && <div key={item.id} className="todos text-lg my-7 flex justify-between">

              <div className="check flex justify-center items-center gap-2">
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>

              <div className="buttons flex md:gap-3 gap-1">
                <button onClick={(e) => handleEdit(e, item.id)} className='bg-blue-950 rounded-xl text-white font-bold md:px-4 px-2 md:py-1 hover:bg-blue-800'><FaEdit /></ button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-blue-950 rounded-xl text-white font-bold md:px-4 px-2 md:py-1 hover:bg-blue-800'><MdDelete /></button>
              </div>

            </div>
          })}
        </div>

      </div>

    </>
  )
}

export default App


