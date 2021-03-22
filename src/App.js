import './App.css';
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import InputField from './components/InputField';

function App() {

  const [data, setData] = useState({});

  const handleChange = (name, value) => {
    setData( prev => ({ ...prev, [name]: value}))
  }

  console.log(data);

  return (
    <div className="App">
      <form>
        <InputField
          name="username"
          label="Username*:"
          onChange={handleChange}
        />
        <InputField
          name="password"
          label="Password*:"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default App;
