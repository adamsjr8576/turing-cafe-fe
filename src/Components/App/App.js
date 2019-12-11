import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form.js';
import ReservationContainer from '../ReservationContainer/ReservationContainer.js'

class App extends Component {
  constructor() {
    super()
    this.state= {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(res => res.json())
    .then(reservations => this.setState({ reservations }))
  }

  render() {
    const { reservations } = this.state;
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form />
        <ReservationContainer
          reservations={reservations}
        />
      </div>
    )
  }
}

export default App;
