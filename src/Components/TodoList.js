import React from 'react';

const Todo = ({ todo, onRemove }) => {
  return (
    <div className="todo">
      <button
        onClick={() => {
          onRemove(todo.id);
        }}
      >
        ✅
      </button>
      <span>{todo.value}</span>
    </div>
  );
};

const TodoList = ({ todoList, onRemove }) => {
  return (
    <div className="scroll">
      {todoList.map((todo) => (
        <Todo todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </div>
  );
};
export default TodoList;
