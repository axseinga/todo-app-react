import React from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(todo) {
        this.setState((state) => ({
            todos: [...state.todos, todo],
        }));
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter((todo) => todo.id !== id),
        });
    }

    renderTodos() {
        return (
            <ul className="TodoList-list">
                {this.state.todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        todo={todo.todo}
                        removeTodo={() => this.removeTodo(todo.id)}
                    />
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="TodoList">
                <div className="TodoList-heading">
                    <h1 className="TodoList-title">Todo List!</h1>
                    <p className="TodoList-desc">
                        A simple React Todo List App.
                    </p>
                </div>
                {this.renderTodos()}
                <NewTodoForm addTodo={this.addTodo} />
            </div>
        );
    }
}

export default TodoList;
