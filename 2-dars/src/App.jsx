import { useRef } from 'react'
import { useSelector} from "react-redux";
import { addTodo, removeTodo, changeStateTodo } from "./todoSlice"


function App() {
  const { todos } = useSelector((state) => state.todosState);

 const inputRef = useRef();

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(inputRef.current.value);

 };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Text:</span>
          <input type="text" ref={useRef} />
        </label>
        <button>Submit</button>
      </form>
    <ul>
      {todos.map((item) => (
        <li key={item.id}>
         <h4> {item.text} </h4>
          <button onClick={() => dispatch(removeTodo(item.id))}>Delete</button>
          <button onClick={() => changeStateTodo(item.id)}>
            {item.completed? "Uncomplete" : "Complete"}
          </button>
        </li>
      ))}
    </ul>

    </div>
  )
}

export default App
