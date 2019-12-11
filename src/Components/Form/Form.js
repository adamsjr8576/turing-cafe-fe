import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0
    }
  }

  updateInputState = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  clearState = () => {
    this.setState({ name:'', date:'', time:'', number:0 })
  }

  handleReservationPost = () => {
    const { name, date, time, number } = this.state;
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
    .then(data => this.props.addReservation(data))
    .catch(err => console.log(err))
  }



  render() {
    const { name, date, time, number } = this.state;
    return (
      <form className='reservation-form'>
        <input
          type='text'
          name='name'
          value={name}
          placeholder='Name'
          className='form-input input1'
          onChange={(event) => this.updateInputState(event)}
        />
        <input
          type='date'
          name='date'
          value={date}
          placeholder='Check-in Date'
          className='form-input input2'
          onChange={(event) => this.updateInputState(event)}
          />
        <input
          type='text'
          name='time'
          value={time}
          placeholder='Check-In Time'
          className='form-input input3'
          onChange={(event) => this.updateInputState(event)}
        />
        <input
          type='number'
          name='number'
          value={number}
          placeholder='Number of Guests'
          className='form-input input4'
          onChange={(event) => this.updateInputState(event)}
        />
        <button type='button' className='reserve-button' onClick={() => {this.handleReservationPost(); this.clearState()}}>Make Reservation</button>
      </form>
    )
  }
}

export default Form;
