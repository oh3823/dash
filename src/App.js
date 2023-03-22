import React from 'react';
import './App.css';
import Greeting from './Greeting';
import Clock from './Clock';
import Music from './Music';
import Quote from './Quote';
import Todo from './Todo';

function App() {
  return (
    <>
      <Clock />
      <Greeting />
      <Music />
      <Todo />
      <Quote />
    </>
  );
}

export default App;

/*
할일: ToDoList만들고 css 적용하기
*/
