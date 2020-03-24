import React from 'react';
import './App.css';
import FormPropsTextFields from './components/FormPropsTextFields';
import MultilineTextFields from './components/MultilineTextFields';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>App home</p>
     <FormPropsTextFields></FormPropsTextFields>
     <MultilineTextFields></MultilineTextFields>
      </header>
    </div>
  );
}

export default App;
