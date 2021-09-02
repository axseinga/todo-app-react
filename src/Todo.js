import React from "react";
import "./Todo.css";

class Todo extends React.Component {
    render() {
        return (
            <li className="Todo">
                <p>{this.props.todo}</p>
                <div className="Todo-btns-container">
                    <button className="Todo-btn">Edit</button>
                    <button
                        className="Todo-btn"
                        onClick={this.props.removeTodo}
                    >
                        X
                    </button>
                </div>
            </li>
        );
    }
}

export default Todo;
