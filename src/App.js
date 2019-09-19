import React from 'react';
import './App.css';
import { quiz } from './quiz.js';
import Quiz from 'react-quiz-component'

function App() {
  return (
    <div className="App">
     <Quiz quiz={quiz} showInstantFeedback={true}/>
    </div>
  );
}

export default App;
