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



  render() {
    const { name, date, time, number } = this.state;
    return (
      <form className='reservation-form'>
        <input
          type='text'
          name='name'
          value={name}
          placeholder='Name'
          className='form-input'
          onChange={(event) => this.updateInputState(event)}
        />
        <input
          type='date'
          name='date'
          value={date}
          placeholder='Check-in Date'
          className='form-input'
          onChange={(event) => this.updateInputState(event)}
          />
        <input
          type='text'
          name='time'
          value={time}
          placeholder='Check-In Time'
          className='form-input'
          onChange={(event) => this.updateInputState(event)}
        />
        <input
          type='number'
          name='number'
          value={number}
          placeholder='Number of Guests'
          className='form-input'
          onChange={(event) => this.updateInputState(event)}
        />
        <button type='button' className='reserve-button'>Make Reservation</button>
      </form>
    )
  }
}

export default Form;
