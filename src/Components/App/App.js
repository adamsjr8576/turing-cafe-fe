import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form.js';
import ReservationContainer from '../ReservationContainer/ReservationContainer.js';
import { getReservations, postReservation, deleteReservation } from '../../apiCalls.js'

class App extends Component {
  constructor() {
    super()
    this.state= {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations()
    .then(reservations => this.setState({ reservations }))
  }

  addReservation = (reservation) => {
    this.setState({ reservations: [...this.state.reservations, reservation] })
  }

  handleReservationPost = (state) => {
    postReservation(state)
    .then(data => this.addReservation(data))
    .catch(err => console.log(err))
  }

  handleReservationDelete = (id) => {
    deleteReservation(id)
      .then(reservations => this.setState({ reservations }))
      .catch(err => console.log(err))
  }

  render() {
    const { reservations } = this.state;
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form
          handleReservationPost={this.handleReservationPost}
        />
        <ReservationContainer
          reservations={reservations}
          handleReservationDelete={this.handleReservationDelete}
        />
      </div>
    )
  }
}

export default App;
