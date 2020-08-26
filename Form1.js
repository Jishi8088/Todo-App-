import React, { Component } from 'react';
import Todo from './Todo';

 
class Form1 extends Component {
  render() {
    const { handleInput, currentTask, addTask }=this.props;
    return (
      <div>
      <form id="todo-list"  onSubmit={addTask}>
         <input
           type="text"
           text=""
           className="textInput"
           placeholder="Enter Item"
           value={currentTask.text}
           onChange={handleInput}
           
         />
         <button type="submit">Add</button>
       </form>
    
   </div>  
        
     
        
       
      ) ;
     }
  }

 
export default Form1;
/*export default ({ handleInput, currentTask, addTask }) => {
 

    return (
      
      <div>
       <form id="todo-list"  onSubmit={addTask}>
          <input
            type="text"
            text=""
            className="textInput"
            placeholder="Enter Item"
            value={currentTask.text}
            onChange={handleInput}
            
          />
          <button type="submit">Add</button>
        </form>
     
    </div>  
       
      ) ;
    }
    */
    
