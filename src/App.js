import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  // Array of colors for stack items
  const colors = ["#fe5a31", "#fec031", "#20ab6f", "#31a2fe", "#fe3180", "#FF6712"];

  // Pushes a new item onto the stack
  const push = () => {
    if (inputValue.trim() !== '') {
      const newStack = [...stack]; // Copy the current stack
      newStack.push(inputValue); // Push the new item onto the stack
      setStack(newStack); // Update state
      setInputValue(''); // Clear input
      setMessage(`Pushed "${inputValue}" onto the stack.`); // Set message
    } else {
      setMessage('Please enter a value to push onto the stack.');
    }
  };

  // Pops the top item off the stack
  const pop = () => {
    if (stack.length > 0) {
      const newStack = [...stack]; // Copy the current stack
      const poppedItem = newStack.pop(); // Pop the top item
      setStack(newStack); // Update state
      setMessage(`Popped "${poppedItem}" from the stack.`); // Set message
    } else {
      setMessage('Cannot pop from an empty stack.'); // Set error message
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Stack Visualizer (LIFO)</h2>
        </div>
        <div className="card-content">
          <div className="input-group">
            <input
              className="input"
              placeholder="Enter a value"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && push()}
            />
            <button className="button" onClick={push}>Push</button>
            <button className="button outline" onClick={pop}>Pop</button>
          </div>
          <p className="message">{message}</p>
          <div className="stack-container">
            <h3 className="stack-title">Stack Contents:</h3>
            <div className="stack">
              {stack.map((item, index) => (
                <div
                  key={index}
                  className={`stack-item ${index === stack.length - 1 ? 'top-item' : ''}`}
                  style={{ backgroundColor: colors[index % colors.length] }}
                >
                  {item}
                </div>
              ))}
              {stack.length === 0 && <p className="empty-stack">Stack is empty</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
