import React, { Component } from 'react';
import "./App.css";

const todoData = ["Learn Javascript", "Learn ES6", "Learn React", "Learn React Native", "Learn Redux", "Learn Nodejs", "Learn by doing","Learn to teach", "Teach to learn"];

class TodoItem extends Component {
  render (){

    let itemClass = "";
    if(this.props.complete) itemClass = "complete";

    return (<li className={itemClass}>{this.props.label}</li>);
  }
}

class TodoList extends Component {
  render() {
    return (
      <ul>{
        todoData.map((item, index)=>{
          return <TodoItem key={index} label={item} complete />
        })
      }</ul>
    );
  }
}

class App extends Component {
  render() {
    return (
      <TodoList />
    );
  }
}

export default App;
