import React from 'react';
import './App.css';
import Quiz from './components/Quiz';


const App = () => {
  return (
    <div className="App">
      <h1 className="text-center mt-5">
      <h1>Välkommen till Nördquizet</h1>
      <Quiz />
      </h1>
    </div>
  );
};


export default App;
