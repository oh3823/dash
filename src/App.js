import React, { useState, useEffect } from 'react';

import Greeting from './Components/Greeting';
import Clock from './Components/Clock';
import Music from './Components/Music';
import Quote from './Components/Quote';
import Todo from './Components/Todo';

import './Scss/App.scss';

function App() {
  const getUsername = JSON.parse(localStorage.getItem('username'));

  const [username, setUsername] = useState(getUsername || '');

  useEffect(() => {
    localStorage.setItem('username', JSON.stringify(username));
    localStorage.setItem('todoList', null);
  }, [username]);

  const onLogin = (event) => {
    event.preventDefault();
    setUsername(event.target[0].value);
  };

  const onLogout = () => {
    setUsername('');
  };
  return (
    <main>
      <img
        src="https://wallpapers.com/images/file/1920x1080-hd-nature-alpenglow-0dg5rw0rk6rry9lf.jpg"
        alt=""
      />
      <Clock />
      <Greeting onLogin={onLogin} onLogout={onLogout} username={username} />
      <Music />
      {username ? <Todo /> : null}
      <Quote />
    </main>
  );
}

export default App;

/*
할일: 배포하기, 포트폴리오에 링크 넣고 포트폴리오 만들기
*/
