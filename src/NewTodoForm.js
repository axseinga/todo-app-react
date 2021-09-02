import React from "react";
import "./NewTodoForm.css";
import { v4 as uuid } from "uuid";

class NewTodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ todo: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const newTodo = { ...this.state, id: uuid() };
        this.props.addTodo(newTodo);
        this.setState({ todo: "" });
    }

    render() {
        return (
            <div className="NewTodoForm">
                <form className="NewTodoForm-form" onSubmit={this.handleSubmit}>
                    <label className="NewTodoForm-heading">New todo</label>
                    <div className="NewTodoForm-container">
                        <input
                            className="NewTodoForm-input"
                            placeholder="New Todo"
                            type="text"
                            name="todo"
                            value={this.state.todo}
                            id="todo"
                            onChange={this.handleChange}
                        ></input>
                        <button className="NewTodoForm-btn">Add Todo</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewTodoForm;
