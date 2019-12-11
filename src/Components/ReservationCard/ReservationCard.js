import React from 'react';
import './ReservationCard.css';

const ReservationCard = ({ date, id, name, number, time }) => {
  return (
    <article className='reservation-card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time} PM</p>
      <p>Number Of Guest: {number}</p>
      <button className='delete-button'>Cancel</button>
    </article>
  )
}

export default ReservationCard;
