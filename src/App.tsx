import React, {useState} from 'react';
import './App.css';

function App() {

  const [state, setState] = useState({input: '', sarcastifiedInput: ''})

  function sarcastifyInput(e: React.ChangeEvent<HTMLInputElement>) {
    const letters: string[] = e.target.value.split('');
    letters.map((x, i) => {
      if(i % 2 === 0) letters[i] = letters[i].toLowerCase()
      else letters[i] = letters[i].toUpperCase()
    })
    setState({input: e.target.value, sarcastifiedInput: letters.join('')})
  }

  return (
      <div className="App">
        <div className=''>
          <span>Enter Text: </span>
          <input type='text' value={state.input} onChange={sarcastifyInput} />
        </div>
        <h1>{state.sarcastifiedInput}</h1>
      </div>
  );
}

export default App;
