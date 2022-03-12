import React, {useState} from 'react'

const InputTask = (props) => {

    const buttonStyling = {
        marginLeft:'11px',
        border:0,
        backgroundColor:'#f50057',
        height:'40px',
         borderRadius:'20px',
        marginTop:'10px',
    }

    let taskName_ ;
    let id ;
    let newTask ;
    const taskList = props.taskList ;
    const handleClick = props.handleClick ;

    const [taskDetails, setTaskDetails] = useState("");

    const handleChange = (e) => {
        
        taskName_ = e.target.value ;  

        setTaskDetails(taskName_);

    }

    function handleSubmit(e){
        e.preventDefault();

        let index = taskList.length ;

        if(index === 0){
            id = 1 ;
        }
        else{
            id = taskList[index - 1].id ;
            id = id + 1 ;
        }

        newTask = {
            task : taskDetails,
            id : id
        }
        
        handleClick(newTask);

        setTaskDetails("");
    }

    

  return (
    
        
        <form onSubmit={ handleSubmit } >
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12" style={ {padding:0 } }>
                <input className="form-control " style={ { width:'95%', borderRadius:'20px',height:'40px', margin:'auto'} } type="text" placeholder='Enter Task' onChange={ handleChange } value={taskDetails} required></input>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12" style={ {padding:0 } }>
                <button type="submit" style={ buttonStyling } className="btn btn-primary input-button"  >{props.text} <i class="fa fa-plus-circle" aria-hidden="true"></i></button>
            </div>
        </div>
      </form>
      
  )
}

InputTask.defaultProps = {
    color:'red',
    text:'Add Task'
}


export default InputTask ;