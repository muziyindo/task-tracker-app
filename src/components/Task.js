import React from 'react';



const buttonStyle = { 
    padding:'3px',
    borderRadius:'0', 
     background:'none', 
    // color:'#000', 
    border:0,
    
    float:'right',
    clear: 'right'
    
}

const Task = (props) => {

    const taskList = props.taskList ;
    const handleStateChange = props.handleStateChange ;

    

    function showTask(item)
    {
        return (
            <div class="task-section">
            <span key={item.id} className="task-style"> {item.task} <button style={buttonStyle} onClick={()=>{handleStateChange(item.id)} }> <i class="fas fa-trash"></i></button></span>
            </div>
        );
    }

    // function deleteTask(id){

    
    //   props.handleStateChange(filteredTaskList);
    //   console.log(filteredTaskList);

    

    // }

    

  return (
    <div className="task">
        {taskList.length === 0 ? 'No Task to show' : taskList.map(showTask) }
    </div>
  );



}

export default Task