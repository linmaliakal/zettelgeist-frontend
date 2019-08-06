import React, { Component } from 'react';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="doc-container">
          <h3 className="doc-container-header">Google Docs</h3>
        </div>
        <div className="zettel-container">
          <h3 className="zettel-container-header">Zettels</h3>
        </div>
      </div>
    );
  }
}

export default App;
