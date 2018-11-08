import React from 'react'
import './Container.css'
import Task from './Task'
class Container extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            todo:[], complete:[]
        };
    }
    removeItem = (id,txt) =>
    {
        this.props.removeItem(id,txt);
    }
    editItem = (id, txt) =>
    {
        this.props.editItem(id,txt);
    }
    switchList = (id, txt) =>
    {
        this.props.switchList(id,txt);
    }
    render() {
        this.state.todo = this.props.todo;
        this.state.complete = this.props.complete;
        return (
            <div className = 'container'>
                <ul className = "list todo">
                {
                    this.state.todo.map( (todo) => {
                        return <Task txt = "todo" todo={todo} key = {todo.id} id ={todo.id}
                        removeItem={this.removeItem}
                        editItem ={this.editItem}
                        switchList= {this.switchList}
                        />
                    })
                }
                </ul>
                <ul className = "list completed">
                {
                    this.state.complete.map( (todo) => {
                        return <Task txt = "complete" todo={todo} key = {todo.id} id ={todo.id}
                        removeItem={this.removeItem}
                        editItem ={this.editItem}
                        switchList = {this.switchList}
                        />
                    })
                }
                </ul>
            </div>
        )
    }
}

export default Container;