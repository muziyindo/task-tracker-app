import React from 'react';
import Tasks from "./Tasks";
import InputTask from "./InputTask";



const TodoApp = (props) => {

    let taskList = props.taskList ;
    let handleClick = props.handleClick ;
    let handleStateChange = props.handleStateChange ;

  return (
    <div>
        <InputTask taskList = {taskList} handleClick= { handleClick } />
      <Tasks taskList={ taskList } handleStateChange = { handleStateChange } />
    </div>
  )
}

export default TodoApp;