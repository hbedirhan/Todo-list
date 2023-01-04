import {useState} from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function Todos() {
    const [todoList,setTodoList] = useState([]);


  return (
    <div className="todoapp">
        <Header addTodoList={setTodoList} todoList={todoList}/>
        <Main todoList={todoList}/>
        <Footer/>
        <footer className="info">
            <p>Click to edit a todo</p>
            <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
    </div>
  )
}

export default Todos