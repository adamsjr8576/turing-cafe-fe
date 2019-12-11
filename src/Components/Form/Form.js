import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <form className='reservation-form'>
        <input
          type='text'
          name=''
          value=''
          placeholder='Name'
          className='form-input'
        />
        <input
          type='date'
          name=''
          value=''
          placeholder='Check-in Date'
          className='form-input'
          />
        <input
          type='text'
          name=''
          value=''
          placeholder='Check-In Time'
          className='form-input'
        />
        <input
          type='number'
          name=''
          value=''
          placeholder='Number of Guests'
          className='form-input'
        />
        <button type='button' className='reserve-button'>Make Reservation</button>
      </form>
    )
  }
}

export default Form;
