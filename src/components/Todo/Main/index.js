import {useState} from 'react'

function Main({todoList, setTodoList, todo}) {
	
	const deleted = () => {
		setTodoList(todoList.filter((el) => el.id !== todo.id))

	}

	const [check, setCheck] = useState(true)
	
  return (
	<section className="main">
		{/* <input className="toggle-all" type="checkbox" />
		<label htmlFor="toggle-all">
			Mark all as complete
		</label> */}

		<ul className="todo-list">
			<li className={`${check ? 'view' : 'completed'}`}>
				<div className="view">
					<input className="toggle" type="checkbox" onClick={() => setCheck(!check)}/>
					<label>{todo.text}</label>
					<button className="destroy" onClick={deleted}></button>
				</div>
            </li>
			
		</ul>
	</section>
  )
}

export default Main