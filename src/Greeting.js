import React, { useState, useEffect } from 'react';
import Form from './Form';

function Greeting() {
  const getUsername = JSON.parse(localStorage.getItem('username'));

  const [username, setUsername] = useState(getUsername || '');
  const [value, setValue] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    setUsername(value);
    setValue('');
  };

  useEffect(() => {
    localStorage.setItem('username', JSON.stringify(username));
  }, [username]);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onDoubleClick = () => {
    setUsername('');
  };

  const hour = new Date().getHours();
  let greeting;
  if (8 <= hour && hour <= 11) {
    greeting = 'Good Morning';
  } else if (12 <= hour && hour <= 17) {
    greeting = 'Good Afternoon';
  } else if (18 <= hour && hour <= 20) {
    greeting = 'Good Evening';
  } else {
    greeting = 'Good Night';
  }

  return (
    <div>
      {username !== '' ? (
        <h1 onDoubleClick={onDoubleClick}>
          {greeting}, {username}
        </h1>
      ) : null}
      {username === '' ? (
        <Form
          onSubmit={onSubmit}
          placeholder="Please enter your username."
          onChange={onChange}
          value={value}
        ></Form>
      ) : null}
    </div>
  );
}

export default Greeting;
