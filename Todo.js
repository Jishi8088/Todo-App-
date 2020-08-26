import React from "react";
import ReactDOM from "react";
import Header from './Header';

import "./hello.css";
import TodoList from './TodoList';
import uuid from "uuid";
import Form1 from "./Form1";
import TodoListt from "./TodoListt";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      currentTask: {
        text: "",
        key: ""
      }
    };
    this.addTask = this.addTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  addTask(event) {
    event.preventDefault();
    const newItem = this.state.currentTask;
    if (newItem.text !== "") {
      const items = [...this.state.task, newItem];
      this.setState({
        task: items,
        currentTask: {
          text: "",
          key: ""
        }
      });
    }
  }
  editTask(text, key) {
    //console.log("items:"+this.state.task);
    const items = this.state.task;

    this.setState({
      task: items.filter(item => item.key !== key),
      currentTask: {
        text
      }
    });
  }
  deleteTask(key) {
    const currentTaskArray = [...this.state.task];
    const taskAfterDeleted = currentTaskArray.filter(
      deletedTask => deletedTask.key !== key
    );
    this.setState({
      task: taskAfterDeleted
    });
  }
  handleInput(event) {
   
    this.setState({
      currentTask: {
        text: event.target.value,
        key: Date.now(),
       
      }
    });
  }
  render() {
    
    return (<center>
      <div className="Todo">

        <Header/>
        <Form1
          handleInput={this.handleInput}
          currentTask={this.state.currentTask}
          addTask={this.addTask}
        />
       
        <TodoListt
        handleInput={this.handleInput}
        task={this.state.task}
        deleteTask={this.deleteTask}
        editTask={this.editTask}
        />    
          
          
        
        
      </div>
      </center>

    );
  }
}

export default Todo;
