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
        this.updateTodo = this.updateTodo.bind(this);
    }

    addTodo(newTodo) {
        this.setState((state) => ({
            todos: [...state.todos, newTodo],
        }));
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter((todo) => todo.id !== id),
        });
    }

    updateTodo(id, updatedTodo) {
        const updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, todo: updatedTodo };
            }
            return todo;
        });
        this.setState({ todos: updatedTodos });
    }

    renderTodos() {
        return (
            <ul className="TodoList-list">
                {this.state.todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        todo={todo.todo}
                        removeTodo={() => this.removeTodo(todo.id)}
                        updateTodo={this.updateTodo}
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
