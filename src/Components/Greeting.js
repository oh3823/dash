import React from 'react';
import Form from './Form';

function Greeting({ onLogin, onLogout, username }) {
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
        <h1 onDoubleClick={onLogout} className="greeting">
          {greeting}, {username}
        </h1>
      ) : null}
      {username === '' ? (
        <Form
          onSubmit={onLogin}
          placeholder="Please enter your username."
        ></Form>
      ) : null}
    </div>
  );
}

export default Greeting;
