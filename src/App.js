import React from 'react'
import './App.css'
import Header from './addInput'
import Container from './Container'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [
            ],
            complete: [
            ],
            idtodo: 0
        };
    }
    addItem = (text) => {
        let todo = this.state.todo.slice();
        todo.push({ id: this.state.idtodo, text: text });
        this.setState(
            {
                todo: todo,
                idtodo: this.state.idtodo + 1,
            }
        );
    }
    removeItem = (id, txt) => {
        if (txt == 'todo') {
            var f = this.state.todo.filter((task, index) => task.id !== id);
            this.setState({
                todo: f
            });
        }
        else {
            var f = this.state.complete.filter((task, index) => task.id !== id)
            this.setState({
                complete: f
            });
        }
    }
    editItem = (id, txt) => {
        var newtodo = this.state.todo, newcomplete = this.state.complete;
        var output = prompt("Enter the edit value");
        if (output != null && output.length > 0) 
        {
            if (txt == 'todo')
            {
                newtodo[id].text = output;
            }
            else
            {
                newcomplete[id].text = output;
            }
            this.setState({ todo: newtodo, complete: newcomplete });
        }
    }
    switchList = (id, txt) => {
        var task, newtodo = this.state.todo, newcomplete = this.state.complete;
        if (txt == 'todo') {
            task = this.state.todo[id];
            newtodo = this.state.todo.filter((task, index) => task.id !== id);
            newcomplete.push(task);
        }
        else {
            task = this.state.complete[id];
            newcomplete = this.state.complete.filter((task, index) => task.id !== id);
            newtodo.push(task);
        }
        this.setState(
            {
                todo: newtodo,
                complete: newcomplete
            }
        );
    }
    render() {
        return (
            <React.Fragment>
                <Header text="" addItem={this.addItem} />
                <Container todo={this.state.todo} complete={this.state.complete}
                    removeItem={this.removeItem}
                    editItem={this.editItem}
                    switchList={this.switchList}
                />
            </React.Fragment>
        );
    }
}

export default App;