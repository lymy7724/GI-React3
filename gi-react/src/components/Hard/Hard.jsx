import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Hard.css'

export default class hard extends Component {
    constructor() {
        super()
        this.state = ({
            tasks: [],
            value: '',
            description: '',
            editing: false,
            todoname: "",
            taskold:'',
        })
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    } 
    handleChanger = (e) => {
        this.setState({description: e.target.value})
    }   
    handleChangers = (e) => {
        this.setState({todoname: e.target.value})
    }      
    handleChangerss = (e) => {
        this.setState({taskold: e.target.value})
    }          

    handleAdd = (e) => {
        const newTask ={
            title: this.state.value,
            description: this.state.description
        }
        this.setState({tasks: this.state.tasks.concat(newTask)})
        this.setState({value:""})
        this.setState({description:""})
    
    }
    handleDelete = (index) => {
        const newTasks = [...this.state.tasks]
        newTasks.splice(index, 1)
        this.setState({tasks: newTasks})
    }

    handleEdit = (id, newValue) => {
        this.state.tasks.map((todo) =>{
            if(todo.title === id) {
                todo.title = newValue
                console.log("changed")
            }
        })
    }

    onSubmitEdit = (e) => {
        e.preventDefault();
    
        this.handleEdit(this.state.taskold, this.state.todoname);
        this.setState({ editing: false });
      };

  render() {

    const mylist = this.state.tasks.map(todo => (
        <li className='todo_item'>{todo.title}
            <button onClick={this.handleDelete} className='other-buttons'>Remove</button>
            <Link to="/detailed" state={{ title: todo.title, description: todo.description }}>
                Details
            </Link>
        </li>
    ));

    return (
    <>
        <div className='task-container'>

            <h1>To Do List</h1> 
            <input placeholder='Type in your task' value={this.state.value} onChange={this.handleChange} className='add-task'></input>

            <input placeholder='Type in the description' value={this.state.description} onChange={this.handleChanger} className='add-task'></input>

            <button onClick={this.handleAdd} id='task-button'>Add Task</button>

            <form onSubmit={this.onSubmitEdit}>
                <input placeholder='Task name to edit' value={this.state.taskold} onChange={this.handleChangerss} className='add-task'></input>

                <input placeholder='Enter new task name' value={this.state.todoname} onChange={this.handleChangers} className='add-task'></input>

                <button className='other-buttons' type='submit'>Edit</button>  
            </form>
        </div>
        <ul>
            {mylist}
        </ul>
    </>
    )
  }
}

