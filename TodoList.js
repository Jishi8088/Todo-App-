import React from 'react';
import TodoItem from './TodoItems'
class TodoList extends React.Component {
    render() {
      return (
        <ul className="todolist">
          {this.props.task.map(item => (
            <TodoItem key={item.id} type="text"id={item.id} text={item.text}  onDeleteItem={this.props.onDeleteItem} onEditItem={this.props.onEditItem}/>
          ))}
        </ul>
      );
    }
  }
  export default TodoList;