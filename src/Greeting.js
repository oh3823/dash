import React, { useState } from 'react';
import Form from './Form';

function Greeting() {
  const [greeting, setGreeting] = useState('');
  const [value, setValue] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    setGreeting(event.target[0].value);
    setValue('');
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onDoubleClick = () => {
    setGreeting('');
  };
  return (
    <>
      {greeting !== '' ? (
        <h1 onDoubleClick={onDoubleClick}>{greeting}</h1>
      ) : null}
      {greeting === '' ? (
        <Form
          onSubmit={onSubmit}
          placeholder="이름을 입력하세요."
          onChange={onChange}
          value={value}
        ></Form>
      ) : null}
    </>
  );
}

export default Greeting;
