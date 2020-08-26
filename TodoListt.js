import React, { Component } from 'react';
import Todo from './Todo';

 
class TodoListt extends Component {
  render() {
    const { handleInput, task, deleteTask,editTask}=this.props;
    return (
      <div className="row" id='abc'>
      {task.map(oneTask => (
        <div key={oneTask.key} className="card">
          <div className="container">
            <p id="p">
              {oneTask.text}
              </p>
                <button
                 
                  onClick={() => deleteTask(oneTask.key)}
                >
                  Delete</button>
                <button
                 
                  onClick={() => editTask(oneTask.text, oneTask.key)}
                >
                  Edit
                </button>
              
            
          </div>
        </div>
        
      ))}
        </div>
        
     
        
       
      ) ;
     }
  }

 
export default TodoListt;
/*export default ({ handleInput, task, deleteTask,editTask}) => {
 

    return (
      
        <div className="row" id='abc'>
        {task.map(oneTask => (
          <div key={oneTask.key} className="card">
            <div className="container">
              <p id="p">
                {oneTask.text}
                </p>
                  <button
                   
                    onClick={() => deleteTask(oneTask.key)}
                  >
                    Delete</button>
                  <button
                   
                    onClick={() => editTask(oneTask.text, oneTask.key)}
                  >
                    Edit
                  </button>
                
              
            </div>
          </div>
          
        ))}
          </div>
       
      ) ;
    }*/