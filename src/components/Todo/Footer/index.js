import React from 'react'

function Footer({todoList, setTodoList}) {

	const clear = () => {
		setTodoList([])
	}

  return (
    <footer className="footer">
		<span className="todo-count">
			<strong>{todoList.length} </strong>
			items left
		</span>

		<ul className="filters">
			<li>
				<a href="#/" className="selected">All</a>
			</li>
			<li>
				<a href="#/">Active</a>
			</li>
			<li>
				<a href="#/">Completed</a>
			</li>
		</ul>

		<button onClick={clear} className="clear-completed">
			Clear completed
		</button>
	</footer>
  )
}

export default Footer