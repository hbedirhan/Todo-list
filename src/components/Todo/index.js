import {useState,useEffect} from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function Todos() {
    const [todoList,setTodoList] = useState([]);
    
    const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todoList))
    }

    const getLocalTodos = () => {
      if (localStorage.getItem('todos') === null) {
        localStorage.setItem('todos', JSON.stringify([]))        
      }else {
        setTodoList(JSON.parse(localStorage.getItem('todos')))
      }
    }

    useEffect(() => {
      getLocalTodos()
    }, [])

    useEffect(() => {
      saveLocalTodos()
      console.log(todoList)
    }, [todoList])
  return (
    <div className="todoapp">
        <Header setTodoList={setTodoList} todoList={todoList}/>
        {todoList.map((todo) => 
        <Main key={todo.id} todo={todo} todoList={todoList} setTodoList={setTodoList}/>)}
        <Footer todoList={todoList} setTodoList={setTodoList}/>
        <footer className="info">
            <p>Click to edit a todo</p>
            <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
    </div>
  )
}

export default Todos