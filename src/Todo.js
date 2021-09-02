import React from "react";

class Todo extends React.Component {
    render() {
        return (
            <li>
                <p>{this.props.todo}</p>
                <button>Edit</button>
                <button onClick={this.props.removeTodo}>X</button>
            </li>
        );
    }
}

export default Todo;
