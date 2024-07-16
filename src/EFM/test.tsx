import React from 'react';

// Define the props interface
interface GreetingProps {
  name: string;
}

// Create a functional component using the props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

// Export the component
export default Greeting;

/*
import React, { useState } from 'react';

// Define the Todo type
interface Todo {
  id: number;
  text: string;
}

// Define the props for the TodoItem component
interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
}

// TodoItem component
const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => {
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

// Main TodoApp component
const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    const newTask: Todo = {
      id: Date.now(),
      text: newTodo,
    };
    setTodos([...todos, newTask]);
    setNewTodo('');
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
