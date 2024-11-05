import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
  const todos = useSelector((state: any) => state.todosReducer.todos);

  return (
    <div id="wd-todo-list-redux" className="container mt-4">
      <h2>Todo List</h2>
      <ul className="list-group mb-3">
        <TodoForm />
        {todos.map((todo: any) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}
