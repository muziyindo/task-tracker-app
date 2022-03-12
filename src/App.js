import React, {useState, useEffect} from "react";
import {Route, Link} from "react-router-dom";
import Header from './components/Header';
//import TaskList from "./components/TaskList";
import TodoApp from "./components/TodoApp";
import About from "./components/About";
import Privacy from "./components/Privacy";




function App() {


  const [taskList, setTask] = useState([]);



  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTask(tasksFromServer)
      //console.log(tasksFromServer);
      //console.log(TaskList);
    }

    getTasks()
  }, [])

  // const getTasks = async () => {
  //   const tasksFromServer = await fetchTasks()
  //   setTask(tasksFromServer)
  //   //console.log(tasksFromServer);
  //   //console.log(TaskList);
  // }

  
  
  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/todos')
    const data = await res.json()
    return data
  }

  //getTasks();

  // Delete Task
  const deleteTask = async (id) => {
    const res = await fetch(`http://127.0.0.1:8000/api/todos/delete/${id}`, {
      method: 'DELETE',
    })
    const data = await res.json()
    return data

    //We should control the response status to decide if we will change the state or not.
    // res.status === 200
    //   ? setTasks(tasks.filter((task) => task.id !== id))
    //   : alert('Error Deleting This Task')
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://127.0.0.1:8000/api/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    return data

  }
  
  //THis function filterout a deleted item and update the state of of tasklist, it is called by the child component that initiates 
  //the event to delete a task
  async function handleStateChange(id){

    const filteredTaskList =    taskList.filter(item_ =>{
      return item_.id !== id ;
    });
    setTask(filteredTaskList);


    
    const tasksFromServer = await deleteTask(id)
    //console.log(tasksFromServer);
      //setTask(tasksFromServer)

  }




  //This function update the taskList when the addTask Button is clicked, the function is called by the child components that
  //that initiated the onClick event to add new task
  async function handleClick(newTask){

    setTask(prevState => {  
      return [...prevState, newTask]
    });

  
    const tasksFromServer = await addTask(newTask)
    //setTask(tasksFromServer);
    
    //console.log(newTask);
  }
  
  return (
    <>
    <div className="top-bar"></div>
      <Header />
    <div className="container">
      <Route exact path="/">
        <TodoApp taskList = { taskList } handleClick = { handleClick } handleStateChange = { handleStateChange } />
      </Route>

      <Route path="/about"  >
        <About />
      </Route>

      <Route path="/privacy"  >
        <Privacy />
      </Route>


      <div className="footer-section">copyright &copy; 2022 &nbsp;&nbsp;&nbsp;<Link to="/"><span>Home</span></Link> | <Link to="/about"><span>About</span></Link> | <Link to="/privacy"><span>Privacy</span></Link></div>
    
    </div>
    
    </>
  );
}

export default App;
