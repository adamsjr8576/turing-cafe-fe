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

  sortReservations = (value) => {
    const { reservations } = this.state;
    if (value === 'newest') {
      let sortedReservationsNew = reservations.sort((a , b) => {

        return parseInt(b.date) - parseInt(a.date);
      });
      this.setState({ reservations: sortedReservationsNew })
    } else if (value === 'oldest') {
      let sortedReservationsOld = reservations.sort((a , b) => {
        return parseInt(a.date) - parseInt(b.date);
      });
      this.setState({ reservations: sortedReservationsOld })
    }
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
          sortReservations={this.sortReservations}
        />
      </div>
    )
  }
}

export default App;
