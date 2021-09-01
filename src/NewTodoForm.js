import React from "react";
import ReactDOM from "react-dom";

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
    }

    render() {
        return (
            <div className="NewTodoForm">
                <h2>New Todo</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="todo"
                        value={this.state.todo}
                        id="todo"
                        onChange={this.handleChange}
                    ></input>
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }
}

export default NewTodoForm;
