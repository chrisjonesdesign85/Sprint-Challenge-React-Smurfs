import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios'; // can't to forget to import!!
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'; // import what you need for the assignment!

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() { // using axios!!
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        console.log("get response:", response);
        this.setState({ smurfs: response.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleSetData = data => {
    console.log(data, "data");
    this.setState({ smurfs: data })
  }

  render() {
    return (
      <div className="App">
        <SmurfForm handleSetData={this.handleSetData} />
        <Router>
          <Route path="/" render={props => (
            <Smurfs  {...props} smurfs={this.state.smurfs}
              handleSetData={this.handleSetData}
            />
          )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
