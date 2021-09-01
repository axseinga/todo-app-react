import React from "react";
import ReactDOM from "react-dom";
import NewTodoForm from "./NewTodoForm";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [{ name: "walk the dog" }, { name: "milk the cat" }],
        };
    }
    render() {
        return <NewTodoForm />;
    }
}

export default TodoList;
