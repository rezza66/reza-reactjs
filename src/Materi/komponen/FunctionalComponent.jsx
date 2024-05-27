import React, { useState } from 'react';

const FunctionalComponent = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Text Input</h1>
      <input type="text" value={text} onChange={handleChange} />
      <p>You are typing: {text}</p>
    </div>
  );
};

export default FunctionalComponent;
