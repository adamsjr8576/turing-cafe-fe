import React from 'react';
import './ReservationContainer.css';
import ReservationCard from '../ReservationCard/ReservationCard.js'

const ReservationContainer = ({ reservations, handleReservationDelete }) => {
  const reservationCards = reservations.map(reservation => {
    return (
      <ReservationCard
        date={reservation.date}
        id={reservation.id}
        name={reservation.name}
        number={reservation.number}
        time={reservation.time}
        key={reservation.id}
        handleReservationDelete={handleReservationDelete}
      />
    )
  })
  return(
    <main className='main-container'>
      {reservationCards}
    </main>
  );
}

export default ReservationContainer;
