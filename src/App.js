import React from 'react';
import './App.css';
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
      <div className="chat-wrapper">
        <h1>Autobot</h1>
        <Chat />
      </div>
    </div>
  );
}

export default App;
