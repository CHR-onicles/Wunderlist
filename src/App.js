// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Todos from './components/Todods'
import { About } from './components/About';
import AddTodo from './components/AddTodo';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

// import { Route } from 'react-router';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useEffect, useState } from 'react';



function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const[todos, setTodos] = useState(initTodo);
  const onDelete = (todo)=>{
    setTodos(todos.filter((e)=>{
      return e !==todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, desc)=>{
    let sno;
    if(todos.length===0){
      sno = 0;
    }
    else{
      sno = todos[todos.length - 1].sno + 1
    }
    const myTodo = {
      sno : sno,
      title : title,
      desc : desc
    }
    setTodos([...todos, myTodo])
  }

  const [editId, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleEditChange = (sno, title, desc) => {
    setEdit(sno);
    setInputValue(title,desc);
  };

  const editTodo = (sno,title,desc)=>{
    let editTodos = todos.map((todo)=>{
      if(todo.sno===sno){
        todo.title = title;
        todo.desc = desc;
      }
      return todo;
    });
    setTodos(editTodos);
    setEdit(false);
  }

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
    <Router>
      <Header title="Wunderlist"  searchBar={false}/>

      <Switch>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/" render={()=>{
          return(
            <>
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} handleEditChange={handleEditChange}
              editTodo={editTodo}  inputValue={inputValue}
              setInputValue={setInputValue} editId={editId} onDelete={onDelete} />
            </>
          )
        }}>

        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
