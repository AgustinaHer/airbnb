import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import {Card} from './components/card/card.component';

function App() {
  return (
    <div>
      <div>
      <HomePage/>
      <Card/>
      </div>
    </div>
  );
}

export default App;
