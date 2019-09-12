import React from 'react';
import './App.css';
import { quiz } from './quiz.js';
import Quiz from 'react-quiz-component';

function App() {
  return (
    <div className="App">
      <img src={ require('.img/arcade1.jpeg')} alt=""/>
     <Quiz quiz={quiz}/>
    </div>
  );
}

export default App;
