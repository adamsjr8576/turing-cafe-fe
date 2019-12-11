import React from 'react';
import './ReservationCard.css';

const ReservationCard = ({ date, id, name, number, time, handleReservationDelete }) => {
  return (
    <article className='reservation-card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time} PM</p>
      <p>Number Of Guest: {number}</p>
      <button id={id} className='delete-button' onClick={(event) => {handleReservationDelete(event.target.id)}}>Cancel</button>
    </article>
  )
}

export default ReservationCard;
