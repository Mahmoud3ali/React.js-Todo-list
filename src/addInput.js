import React from 'react'
import './addInput.css'
class addInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }
    HandleChange = (e) => {
        this.setState({value: e.target.value});
    }
    addItem = (todo) => {
        if (todo.length > 0)
        {
            this.props.addItem(todo);
            this.setState({value: ''});
        }
    }
    render() {
        return (
            <div className='header'>
                <input type="text" value = {this.state.value} className="addInput" onChange={this.HandleChange} placeholder="Enter an Activity.." ></input>
                <button className='addButton' onClick={() => this.addItem(this.state.value)} >
                    <svg className = "SVG" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 16 16">
                        <g>
                            <path className="fill" d="M16,8c0,0.5-0.5,1-1,1H9v6c0,0.5-0.5,1-1,1s-1-0.5-1-1V9H1C0.5,9,0,8.5,0,8s0.5-1,1-1h6V1c0-0.5,0.5-1,1-1 s1,0.5,1,1v6h6C15.5,7,16,7.5,16,8z"/>
                        </g>
                    </svg>
                </button>
            </div>
        );
    }
}

export default addInput;