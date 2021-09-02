import React from "react";
import "./Todo.css";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isEditing: false, todo: this.props.todo };
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing });
    }

    handleUpdate(e) {
        e.preventDefault();
        this.props.updateTodo(this.props.id, this.state.todo);
        this.setState({ isEditing: false });
    }

    handleChange(e) {
        this.setState({ todo: e.target.value });
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input
                            type="text"
                            value={this.state.todo}
                            name="todo"
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            );
        } else {
            result = (
                <div className="Todo">
                    <li>{this.props.todo}</li>
                    <div className="Todo-btns-container">
                        <button className="Todo-btn" onClick={this.toggleForm}>
                            Edit
                        </button>
                        <button
                            className="Todo-btn"
                            onClick={this.props.removeTodo}
                        >
                            X
                        </button>
                    </div>
                </div>
            );
        }
        return result;
    }
}

export default Todo;
