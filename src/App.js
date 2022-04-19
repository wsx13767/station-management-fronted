import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
  }


  
  render(){
    return(
      <div>
        <h1>Bookkeeper!</h1>
        <Link to="/stationCreate">stationCreate</Link>
      </div>
    );
  }
}

export default App;
