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

  addReservation = (reservation) => {
    this.setState({ reservations: [...this.state.reservations, reservation] })
  }

  handleReservationPost = (state) => {
    const { name, date, time, number } = state
    const dateSplit = date.split('-');
    dateSplit.shift();
    const newDate = dateSplit.join('/');
    const options = {
      method: "POST",
      body: JSON.stringify({
        name: name,
        date: newDate,
        time: time,
        number: parseInt(number)
      }),
      headers: {
        "Content-Type": "application/json"
        }
      }
    fetch('http://localhost:3001/api/v1/reservations', options)
    .then(res => res.json())
    .then(data => this.addReservation(data))
    .catch(err => console.log(err))
  }

  cancelReservation = (id) => {
    const options = {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
        }
    }

    fetch(`http://localhost:3001/api/v1/reservations/${id}`, options)
      .then(res => res.json())
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
          cancelReservation={this.cancelReservation}
        />
      </div>
    )
  }
}

export default App;
