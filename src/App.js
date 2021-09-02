import React from "react";
import TodoList from "./TodoList";
import "./App.css";

function App() {
    return (
        <div className="App">
            <div>
                <h1>Todo List!</h1>
                <p>A simple React Todo List App.</p>
            </div>
            <TodoList />
        </div>
    );
}

export default App;
