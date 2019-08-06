import React, { Component } from 'react';
import '../styles/navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
  };

  render() {

    return(
        <div className="navigation-container">
          <ul>
            <li className="nav-item"><a href="/">Sort</a></li>
            <li className="nav-item"><a href="/">Docs</a></li>
            <li className="nav-item"><a href="/">Zettels</a></li>
            <li className="nav-item"><a href="/">Dashboard</a></li>
            <li className="icon"><a href="/">Zettelgeist</a></li>
          </ul>
        </div>
    );
  }

}

export default Navigation;
