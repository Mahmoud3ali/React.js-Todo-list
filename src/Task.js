import React from 'react';

class Task extends React.Component 
{
    removeItem(id)
    {
        this.props.removeItem(id,this.props.txt);
    }
    editItem(id)
    {
        this.props.editItem(id,this.props.txt);
    }
    switchList(id,txt)
    {
        this.props.switchList(id,this.props.txt);
    }
    render()
    {
        return(
            <li className = {this.props.txt}>
                {this.props.todo.text}
                <div className= "buttons">
                    <button className="edit" onClick={(e) => this.editItem(this.props.id)}>
                        <svg className = "SVG" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 528.899 528.899" >
                        <g>
                            <path className="fill" d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981 c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611 C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069 L27.473,390.597L0.3,512.69z" fill="#91DC5A"/>
                        </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                    </button>

                    <button className="remove" onClick={(e) => this.removeItem(this.props.id)}> 
                    <svg className= "SVG" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 22 22">
                        <rect className="noFill" width="22" height="22"/>
                        <g>
                            <g>
                                <path className="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/>
                            </g>
                            <g>
                                <g>
                                    <path className="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/>
                                </g>
                                <g>
                                    <path className="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/>
                                </g>
                                <g>
                                    <path className="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/>
                                </g>
                            </g>
                        </g>
                    </svg>  
                    </button>

                    <button className="complete" onClick={(e) => this.switchList(this.props.id,this.props.txt)} > 
                        <svg className = "SVG" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 22 22" >
                        <rect y="0" className="noFill" width="22" height="22"/>
                        <g>
                            <path className="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/>
                        </g>
                        </svg> 
                    </button>
                </div>
            </li>
        )
    }
}
export default Task;