import React from 'react'
import Task from "./Task";

const Tasks = (props) => {
  return (
    <div className="task-cover">
        <Task taskList={props.taskList} handleStateChange = {props.handleStateChange} />
    </div>
  )
}

export default Tasks;