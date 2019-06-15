import React, { Component } from 'react';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import DeleteForm from './components/DeleteForm';
import axios from 'axios'; // can't to forget to import!!
import { NavLink, Route, BrowserRouter as Router } from 'react-router-dom'; // import what you need for the assignment!

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs") // To retrieve an array all the smurfs in the Smurf DB simply write a get to the endpoint '/smurfs'
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err))
  }

  addSmurf = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf) // To add a smurf to the Smurf DB you'll need all three fields.
      .then(res => this.setState({ smurf, smurfs: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <nav className="nav">
          <div>
            <NavLink to="/">Home</NavLink>
          </div>
          <div>
            <NavLink to="/form">Add Smurf</NavLink>
          </div>
          <div>
            <NavLink to="/delete-form">Delete Smurf</NavLink>
          </div>

        </nav>

        <Route path="/form" render={(props) =>
          <SmurfForm {...props} addSmurf={this.addSmurf} />}
        />

        <Route exact path="/" render={(props) =>
          <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route path="/delete-form" render={(props) =>
          <DeleteForm {...props} deleteSmurf={this.deleteSmurf} />}
        />
      </div>
    );
  }
}

export default App;
