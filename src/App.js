import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header></Header>
       <Content></Content>
       
      </header>
    </div>
  );
}

export default App;
