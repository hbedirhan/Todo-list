import {useState} from 'react'

function Header({todoList,addTodoList}) {
    const [todo,setTodo] = useState("")

    function handleChange(event) {
        setTodo(event.target.value);
      }

    function handleKeyDown(event) {
        event.preventDefault();
        if (event.key === 'Enter') {
          addTodoList([...todoList, todo])

          setTodo("")
        }
      }
  return (
    <header className="header">
		<h1>todos</h1>
		<form onChange={handleChange}>
			<input className="new-todo" onKeyDown={handleKeyDown} value={todo} placeholder="What needs to be done?" autoFocus />
		</form>
	</header>
  )
}

export default Header