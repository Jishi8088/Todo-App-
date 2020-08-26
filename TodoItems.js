import React from 'react';
import TodoList from './TodoList';
import Todo from './Todo';

class TodoItem extends React.Component {
    constructor(props) {
      super(props);
     
      
      this.deleteItem = this.deleteItem.bind(this);
      this.editItem=this.editItem.bind(this);
    
    }
   
   
    deleteItem(event) {
      this.props.onDeleteItem(this.props.id);
    }
    editItem(event) {
      this.props.onEditItem(this.props.id);
    }
 

    render() {
     
  
      return (
     
         
          <div>
               
            {this.props.text}
         <button type="button" id="dlt"  onClick={this.deleteItem}>DELETE</button>
        <button type="button" id="dlt"  onClick={this.editItem}>EDIT</button></div>
        
        
      );
    }
  }
  export default TodoItem;