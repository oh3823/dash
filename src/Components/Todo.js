import React, { useState, useRef, useEffect } from 'react';
import Form from './Form';
import TodoList from './TodoList';

const Todo = () => {
  const getTodoList = JSON.parse(localStorage.getItem('todoList'));

  const [todoList, setTodoList] = useState(getTodoList || []);
  const [todo, setTodo] = useState({ value: '' });

  let id = useRef(Date.now());

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  const onChange = (event) => {
    setTodo({ value: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setTodoList([{ ...todo, id: id.current }, ...todoList]);

    id.current = Date.now();
    setTodo({ value: '' });
  };

  const onRemove = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <Form
        placeholder="What is your main focus for today?"
        onSubmit={onSubmit}
        onChange={onChange}
        value={todo.value}
      />
      <TodoList todoList={todoList} onRemove={onRemove} />
    </div>
  );
};

export default Todo;
