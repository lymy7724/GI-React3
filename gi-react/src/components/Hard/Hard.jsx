import React, { Component } from 'react'
import './Hard.css'

export default class hard extends Component {
    constructor() {
        super()
        this.state = ({
            tasks: [],
            values: ''
        })
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }    

    handleAdd = (e) => {
        const newTask ={
            title: this.state.value
        }
        this.setState({tasks: this.state.tasks.concat(newTask)})
        this.setState({value:""})
    
    }
    handleDelete = (index) => {
        const newTasks = [...this.state.tasks]
        newTasks.splice(index, 1)
        this.setState({tasks: newTasks})
    }


  render() {

    const mylist = this.state.tasks.map(todo => (
        <li className='todo_item'>{todo.title}
            <button className='other-buttons'>Edit</button>
            <button onClick={this.handleDelete} className='other-buttons'>Remove</button>
        </li>
    ));

    return (
    <>
        <div className='task-container'>
            
            <h1>To Do List</h1> 
            <input placeholder='Type in your task' value={this.state.value} onChange={this.handleChange} className='add-task'></input>
            <button onClick={this.handleAdd} id='task-button'>Add Task</button>
        </div>
        <ul>
            {mylist}
        </ul>
    </>
    )
  }
}

