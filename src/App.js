import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/footer.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >ig
          Learn React
        </a>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
